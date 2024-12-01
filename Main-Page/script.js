const songsItems = document.querySelectorAll('.music-item');
const songStarRating = document.getElementById('song-star-rating');
const songSubmitButton = document.getElementById('song-submit');
const albumStarRating = document.getElementById('album-star-rating');
const albumSubmitButton = document.getElementById('album-submit');
const albums = document.querySelectorAll('.album');
const popup = document.getElementById('albumsPopup');
const popupOverlay = document.getElementById('popup-overlay');
const popupLabel = document.getElementById('popup-label');
const popupRecord = document.getElementById('popup-record');
const closeButton = document.querySelector('.close2');
const starRating = document.getElementById('star-rating');
const submitButton = document.getElementById('submit');
const stars = document.querySelectorAll('.star');
const artists = document.querySelectorAll('.artist');
const artistStarRating = document.getElementById('artist-star-rating');
const artistSubmitButton = document.getElementById('artist-submit');
const artistsPopup = document.getElementById('artistsPopup');
const popupPhoto = document.getElementById('popup-photo');
const popupName = document.getElementById('popup-name');
const closedButton = document.querySelector('.close3');
const songsRatings = [];
const albumsRatings = [];
const artistsRatings = [];

document.getElementById('menu-icon').addEventListener('click', function() {
    const sidebar = document.getElementById('sidebar');
    const overlay = document.getElementById('overlay');
    sidebar.classList.toggle('show'); // Toggle the 'show' class
    overlay.classList.toggle('show-overlay'); // Toggle overlay
});

document.getElementById('close-icon').addEventListener('click', function() {
    const sidebar = document.getElementById('sidebar');
    const overlay = document.getElementById('overlay');
    sidebar.classList.remove('show'); // Remove the 'show' class
    overlay.classList.remove('show-overlay'); // Hide overlay
});

// Close sidebar when clicking outside
document.addEventListener('click', function(event) {
    const sidebar = document.getElementById('sidebar');
    const overlay = document.getElementById('overlay');
    const menuIcon = document.getElementById('menu-icon');
    if (sidebar.classList.contains('show') && !sidebar.contains(event.target) && !menuIcon.contains(event.target)) {
        sidebar.classList.remove('show');
        overlay.classList.remove('show-overlay'); // Hide overlay
    }
});


songsItems.forEach(item => {
    item.addEventListener("click", () => {
        const title = item.querySelector('.title').textContent;
        const artist = item.querySelector('.artist').textContent;
        const cover = item.querySelector('img').src;

        // Populate the popup with current song data
        document.getElementById('popup-title').textContent = title;
        document.getElementById('popup-artist').textContent = artist;
        document.getElementById('popup-cover').src = cover;

        // Show the popup
        document.getElementById('songsPopup').style.display = 'block';

        let currentRating = 0;
        const stars = document.querySelectorAll('#song-star-rating .star'); // Updated ID

        const closePopup = document.querySelector('.close');
        closePopup.onclick = () => {
            document.getElementById('songsPopup').style.display = 'none';
        };

        stars.forEach(star => {
            star.addEventListener('mouseover', () => {
                resetStars();
                star.classList.add('selected');
                star.previousElementSibling?.classList.add('selected');
            });

            star.addEventListener('mouseout', resetStars);

            star.addEventListener('click', () => {
                currentRating = parseInt(star.getAttribute('data-value'));
                saveRating(currentRating);
            });
        });

        function resetStars() {
            stars.forEach(star => star.classList.remove('selected'));
            for (let i = 0; i < currentRating; i++) {
                stars[i].classList.add('selected');
            }
        }

        function saveRating(rating) {
            const songIndex = Array.from(songsItems).indexOf(item);
            songsRatings[songIndex] = rating; // Store rating at the index of the song
            console.log('Current Ratings:', songsRatings);
        }

        document.getElementById('song-submit').onclick = () => { // Updated ID
            if (currentRating > 0) {
                alert(`You gave ${currentRating} stars for '${title}'!`);
            } else {
                alert('Please select a rating before submitting.');
            }
        };
    });
});

// Open the popup when an album is clicked
albums.forEach((album, index) => {
    album.addEventListener('click', (event) => {
        const img = album.querySelector('img').src;
        const label = album.querySelector('.label').textContent;
        const record = album.querySelector('.record').textContent;

        popupOverlay.src = img;
        popupLabel.textContent = label;
        popupRecord.textContent = record;

        popup.style.display = 'block';
        resetStarRating();
        albumStarRating.setAttribute('data-album-index', index);
    });
});

// Close the popup
closeButton.addEventListener('click', () => {
    popup.style.display = 'none';
});

// Handle star rating click
albumStarRating.addEventListener('click', (e) => {
    if (e.target.classList.contains('star')) {
        const ratingValue = e.target.getAttribute('data-value');
        const stars = albumStarRating.querySelectorAll('.star');

        stars.forEach(star => {
            star.classList.remove('selected');
            if (star.getAttribute('data-value') <= ratingValue) {
                star.classList.add('selected');
            }
        });

        albumStarRating.setAttribute('data-rating', ratingValue);
    }
});

// Submit the album rating
albumSubmitButton.addEventListener('click', () => {
    const albumIndex = albumStarRating.getAttribute('data-album-index');
    const rating = albumStarRating.getAttribute('data-rating');
    const albumName = popupLabel.textContent; // Get album name

    if (rating) {
        albumsRatings[albumIndex] = rating;
        console.log('Album Ratings:', albumsRatings);
        alert(`You gave ${rating} stars for '${albumName}'!`); // Alert with user's rating
    }

    popup.style.display = 'none';
});

// Function to reset star ratings
function resetStarRating() {
    const stars = albumStarRating.querySelectorAll('.star');
    stars.forEach(star => {
        star.classList.remove('selected');
    });
    albumStarRating.removeAttribute('data-rating');
}

// Prevent event propagation when clicking on the star rating or submit button
albumStarRating.addEventListener('click', (e) => {
    e.stopPropagation();
});

albumSubmitButton.addEventListener('click', (e) => {
    e.stopPropagation();
});


artists.forEach((artist, index) => {
    artist.addEventListener('click', (event) => {
        const img = artist.querySelector('img').src;
        const name = artist.querySelector('.name').textContent;

        popupPhoto.src = img;
        popupName.textContent = name;

        artistsPopup.style.display = 'block';
        resetStarRating3();
        artistStarRating.setAttribute('data-artist-index', index);
    });
});

// Close the popup
closedButton.addEventListener('click', () => {
    artistsPopup.style.display = 'none';
});

// Handle star rating click
artistStarRating.addEventListener('click', (e) => {
    if (e.target.classList.contains('star')) {
        const ratingValue = e.target.getAttribute('data-value');
        const stars = artistStarRating.querySelectorAll('.star');

        stars.forEach(star => {
            star.classList.remove('selected');
            if (star.getAttribute('data-value') <= ratingValue) {
                star.classList.add('selected');
            }
        });

        artistStarRating.setAttribute('data-rating', ratingValue);
    }
});

// Submit the artist rating
artistSubmitButton.addEventListener('click', () => {
    const artistIndex = artistStarRating.getAttribute('data-artist-index');
    const rating = artistStarRating.getAttribute('data-rating');
    const artistName = popupName.textContent; // Get artist name

    if (rating) {
        artistsRatings[artistIndex] = rating;
        console.log('Artist Ratings:', artistsRatings);
        alert(`You gave ${rating} stars for '${artistName}'!`); // Alert with user's rating
    }

    artistsPopup.style.display = 'none';
});

// Function to reset star ratings
function resetStarRating3() {
    const stars = artistStarRating.querySelectorAll('.star');
    stars.forEach(star => {
        star.classList.remove('selected');
    });
    artistStarRating.removeAttribute('data-rating');
}

// Prevent event propagation when clicking on the star rating or submit button
artistStarRating.addEventListener('click', (e) => {
    e.stopPropagation();
});

artistSubmitButton.addEventListener('click', (e) => {
    e.stopPropagation();
});
