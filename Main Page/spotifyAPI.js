// CLIENT_ID: 09e3ab0c6680428ca2ae1b98e6e9d36b
// CLIENT_SECRET : 5d3387ebe8c540e0b5b0f9e323b2aee7

const CLIENT_ID = '09e3ab0c6680428ca2ae1b98e6e9d36b'; // Replace with your actual Spotify Client ID
const CLIENT_SECRET = '5d3387ebe8c540e0b5b0f9e323b2aee7'; // Replace with your actual Spotify Client Secret
const REDIRECT_URI = 'http://localhost:5500/Main%20Page/index.html/callback'; // This URI must match the one in your Spotify Developer Dashboard
const SCOPE = 'playlist-read-private playlist-read-collaborative'; // You can adjust this scope depending on the data you need

// Step 1: Construct the Authorization URL
function getAuthUrl() {
  const authUrl = `https://accounts.spotify.com/authorize?client_id=${CLIENT_ID}&response_type=code&redirect_uri=${encodeURIComponent(REDIRECT_URI)}&scope=${encodeURIComponent(SCOPE)}`;
  return authUrl;
}

// Step 2: Redirect the user to Spotify's login page for authentication
function redirectToSpotifyLogin() {
  const authUrl = getAuthUrl();
  window.location.href = authUrl; // This will redirect the user to Spotify's login page
}

// Step 3: Handle the Redirect from Spotify (extract authorization code from the URL)
function getAuthorizationCodeFromUrl() {
  const urlParams = new URLSearchParams(window.location.search);
  return urlParams.get('code'); // This will return the authorization code from the URL
}

// Step 4: Exchange the Authorization Code for an Access Token
function fetchAccessToken(code) {
  const tokenRequestData = new URLSearchParams();
  tokenRequestData.append('grant_type', 'authorization_code');
  tokenRequestData.append('code', code);
  tokenRequestData.append('redirect_uri', REDIRECT_URI);

  const authHeader = 'Basic ' + btoa(CLIENT_ID + ':' + CLIENT_SECRET); // Create Basic Authentication header

  return fetch('https://accounts.spotify.com/api/token', {
    method: 'POST',
    headers: {
      'Authorization': authHeader,
      'Content-Type': 'application/x-www-form-urlencoded',
    },
    body: tokenRequestData,
  })
  .then(response => response.json())
  .then(data => {
    if (data.access_token) {
      return data.access_token; // Return the access token
    } else {
      throw new Error('Failed to obtain access token');
    }
  })
  .catch(error => {
    console.error('Error fetching token:', error);
  });
}

// Step 5: Fetch the Top 50 - Global Playlist Data
function fetchTop50GlobalPlaylist(accessToken) {
  const TOP_50_GLOBAL_PLAYLIST_ID = '37i9dQZEVXbMDoHDwVN2tF'; // Top 50 - Global playlist ID

  return fetch(`https://api.spotify.com/v1/playlists/${TOP_50_GLOBAL_PLAYLIST_ID}/tracks`, {
    method: 'GET',
    headers: {
      'Authorization': `Bearer ${accessToken}`,
    },
  })
  .then(response => response.json())
  .then(data => {
    if (data.items) {
      // Successfully retrieved the playlist data
      return data.items; // Return the tracks in the playlist
    } else {
      throw new Error('Failed to fetch playlist tracks');
    }
  })
  .catch(error => {
    console.error('Error fetching playlist:', error);
  });
}

// Full OAuth Flow Function (to be called after user logs in)
function authenticateAndFetchTop50Playlist() {
  const authorizationCode = getAuthorizationCodeFromUrl();
  
  if (authorizationCode) {
    // If we have the authorization code, exchange it for an access token
    fetchAccessToken(authorizationCode)
      .then(accessToken => {
        if (accessToken) {
          // Use the access token to fetch the Top 50 - Global playlist
          fetchTop50GlobalPlaylist(accessToken)
            .then(tracks => {
              console.log('Top 50 - Global Playlist Tracks:', tracks);
              // Handle the tracks (e.g., display them on the page)
              // Optionally, redirect the user to the main page after fetching data
              window.location.href = '/Main%20Page/index.html'; // Redirect to your main page
            });
        }
      });
  } else {
    console.log('Authorization code not found. Redirecting to Spotify...');
    redirectToSpotifyLogin(); // If no authorization code, redirect to login
  }
}

// Redirect the user to the Spotify Sign-Up page
function redirectToSpotifySignUp() {
  window.location.href = 'https://www.spotify.com/signup/'; // Redirects to the Spotify sign-up page
}

// Check if the page was redirected with an authorization code
if (window.location.search.includes('code=')) {
  // If there's an authorization code in the URL, complete the flow
  authenticateAndFetchTop50Playlist();
} else {
  // If no authorization code, initiate the login or show sign-up button
  redirectToSpotifyLogin();
}

// Export the functions so you can import and use them in your project
export { redirectToSpotifyLogin, authenticateAndFetchTop50Playlist, redirectToSpotifySignUp };
