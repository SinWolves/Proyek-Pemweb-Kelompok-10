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
const artists1 = document.getElementById("artists1");
const artists2 = document.getElementById("artists2");
const artists3 = document.getElementById("artists3");
const artists4 = document.getElementById("artists4");
const artists5 = document.getElementById("artists5");
const artists6 = document.getElementById("artists6");
const artistsPopup1 = document.getElementById("artistsPopup1");
const artistsPopup2 = document.getElementById("artistsPopup2");
const artistsPopup3 = document.getElementById("artistsPopup3");
const artistsPopup4 = document.getElementById("artistsPopup4");
const artistsPopup5 = document.getElementById("artistsPopup5");
const artistsPopup6 = document.getElementById("artistsPopup6");
const songsRatings = [];
let artistsRatings = [];

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
                alert(`Rating of ${currentRating} saved for ${title}!`);
            } else {
                alert('Please select a rating before submitting.');
            }
        };
    });
});


// Initialize an array to hold album ratings
let albumsRatings = new Array(albums.length).fill(null);

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


artists1.addEventListener("click", () => {

    artistsPopup1.style.display = 'block';  

    document.querySelector('.close19').addEventListener('click', () => {
        document.getElementById('artistsPopup1').style.display = 'none';
    });

});

artists2.addEventListener("click", () => {

    artistsPopup2.style.display = 'block';  

    document.querySelector('.close20').addEventListener('click', () => {
        document.getElementById('artistsPopup2').style.display = 'none';
    });

});

artists3.addEventListener("click", () => {

    artistsPopup3.style.display = 'block';  

    document.querySelector('.close21').addEventListener('click', () => {
        document.getElementById('artistsPopup3').style.display = 'none';
    });

});

artists4.addEventListener("click", () => {

    artistsPopup4.style.display = 'block';  

    document.querySelector('.close22').addEventListener('click', () => {
        document.getElementById('artistsPopup4').style.display = 'none';
    });
});

artists5.addEventListener("click", () => {

    artistsPopup5.style.display = 'block';  

    document.querySelector('.close23').addEventListener('click', () => {
        document.getElementById('artistsPopup5').style.display = 'none';
    });
});

artists6.addEventListener("click", () => {

    artistsPopup6.style.display = 'block';  

    document.querySelector('.close24').addEventListener('click', () => {
        document.getElementById('artistsPopup6').style.display = 'none';
    });

});