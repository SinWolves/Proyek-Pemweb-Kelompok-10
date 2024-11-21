// CLIENT_ID: 09e3ab0c6680428ca2ae1b98e6e9d36b
// CLIENT_SECRET : 5d3387ebe8c540e0b5b0f9e323b2aee7

// Spotify API credentials and related functions

const CLIENT_ID = '09e3ab0c6680428ca2ae1b98e6e9d36b'; // Replace with your Client ID
const CLIENT_SECRET = '5d3387ebe8c540e0b5b0f9e323b2aee7'; // Replace with your Client Secret
const REDIRECT_URI = 'http://localhost:5500/Main-Page/index.html/callback'; // Your redirect URI
const SCOPES = 'playlist-read-private playlist-read-collaborative'; // Scopes for permissions
const SPOTIFY_AUTH_URL = 'https://accounts.spotify.com/authorize';
const SPOTIFY_TOKEN_URL = 'https://accounts.spotify.com/api/token';

// Redirect to Spotify Login
function redirectToSpotifyLogin() {
  const url = `${SPOTIFY_AUTH_URL}?client_id=${CLIENT_ID}&response_type=code&redirect_uri=${encodeURIComponent(
    REDIRECT_URI
  )}&scope=${encodeURIComponent(SCOPES)}`;
  window.location.href = url;
}

// Extract query parameters
function getQueryParam(param) {
  const params = new URLSearchParams(window.location.search);
  return params.get(param);
}

// Fetch Access Token
async function fetchAccessToken(authCode) {
  try {
    const response = await fetch(SPOTIFY_TOKEN_URL, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/x-www-form-urlencoded',
        Authorization: `Basic ${btoa(CLIENT_ID + ':' + CLIENT_SECRET)}`,
      },
      body: `grant_type=authorization_code&code=${authCode}&redirect_uri=${encodeURIComponent(
        REDIRECT_URI
      )}`,
    });

    if (!response.ok) {
      throw new Error('Failed to fetch access token');
    }

    const data = await response.json();
    return data.access_token;
  } catch (error) {
    console.error('Error fetching access token:', error);
  }
}

// Display Playlist
async function displayPlaylist(accessToken) {
  const SPOTIFY_PLAYLIST_URL = 'https://api.spotify.com/v1/playlists/37i9dQZEVXbNG2KDcFcKOF'; // Correct playlist ID

  try {
    const response = await fetch(SPOTIFY_PLAYLIST_URL, {
      method: 'GET',
      headers: {
        Authorization: `Bearer ${accessToken}`,
      },
    });

    if (!response.ok) {
      throw new Error('Failed to fetch playlist');
    }

    const playlist = await response.json();

    const container = document.getElementById('playlist-container');
    container.innerHTML = '';

    playlist.tracks.items.forEach((item) => {
      const track = item.track;
      const trackElement = document.createElement('div');
      trackElement.className = 'track';

      trackElement.innerHTML = `
        <img src="${track.album.images[0].url}" alt="Album Art" />
        <div class="track-details">
          <p><strong>${track.name}</strong></p>
          <p>by ${track.artists.map((artist) => artist.name).join(', ')}</p>
        </div>
      `;

      container.appendChild(trackElement);
    });
  } catch (error) {
    console.error('Error fetching playlist:', error);
  }
}

// Handle Callback
async function handleCallback() {
  const code = getQueryParam('code');
  if (code) {
    const accessToken = await fetchAccessToken(code);
    if (accessToken) {
      displayPlaylist(accessToken);
    }
  } else {
    console.error('No authorization code found in the URL.');
  }
}

// Export the required functions (optional for modern JavaScript modules)
export { redirectToSpotifyLogin, handleCallback };
