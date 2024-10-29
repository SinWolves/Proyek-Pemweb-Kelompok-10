const songsItems = document.querySelectorAll('.music-item');
const albums1 = document.getElementById("albums1");
const albums2 = document.getElementById("albums2");
const albums3 = document.getElementById("albums3");
const albums4 = document.getElementById("albums4");
const albums5 = document.getElementById("albums5");
const albums6 = document.getElementById("albums6");
const artists1 = document.getElementById("artists1");
const artists2 = document.getElementById("artists2");
const artists3 = document.getElementById("artists3");
const artists4 = document.getElementById("artists4");
const artists5 = document.getElementById("artists5");
const artists6 = document.getElementById("artists6");
const albumsPopup1 = document.getElementById("albumsPopup1");
const albumsPopup2 = document.getElementById("albumsPopup2");
const albumsPopup3 = document.getElementById("albumsPopup3");
const albumsPopup4 = document.getElementById("albumsPopup4");
const albumsPopup5 = document.getElementById("albumsPopup5");
const albumsPopup6 = document.getElementById("albumsPopup6");
const artistsPopup1 = document.getElementById("artistsPopup1");
const artistsPopup2 = document.getElementById("artistsPopup2");
const artistsPopup3 = document.getElementById("artistsPopup3");
const artistsPopup4 = document.getElementById("artistsPopup4");
const artistsPopup5 = document.getElementById("artistsPopup5");
const artistsPopup6 = document.getElementById("artistsPopup6");
const stars = document.querySelectorAll('.star');
const songsRatings = []; // Array to store ratings
let albumsRatings = [];
let artistsRatings = [];
let currentRating = 0;

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
        const stars = document.querySelectorAll('#star-rating .star');

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

        document.getElementById('submit').onclick = () => {
            if (currentRating > 0) {
                alert(`Rating of ${currentRating} saved for ${title}!`);
            } else {
                alert('Please select a rating before submitting.');
            }
        };
    });
});


albums1.addEventListener("click", () => {

    albumsPopup1.style.display = 'block';  

    document.querySelector('.close13').addEventListener('click', () => {
        document.getElementById('albumsPopup1').style.display = 'none';
    });

});

albums2.addEventListener("click", () => {

    albumsPopup2.style.display = 'block';  

    document.querySelector('.close14').addEventListener('click', () => {
        document.getElementById('albumsPopup2').style.display = 'none';
    });

});

albums3.addEventListener("click", () => {

    albumsPopup3.style.display = 'block';  

    document.querySelector('.close15').addEventListener('click', () => {
        document.getElementById('albumsPopup3').style.display = 'none';
    });

});

albums4.addEventListener("click", () => {

    albumsPopup4.style.display = 'block';  

    document.querySelector('.close16').addEventListener('click', () => {
        document.getElementById('albumsPopup4').style.display = 'none';
    });

});

albums5.addEventListener("click", () => {

    albumsPopup5.style.display = 'block';  

    document.querySelector('.close17').addEventListener('click', () => {
        document.getElementById('albumsPopup5').style.display = 'none';
    });

});

albums6.addEventListener("click", () => {

    albumsPopup6.style.display = 'block';  

    document.querySelector('.close18').addEventListener('click', () => {
        document.getElementById('albumsPopup6').style.display = 'none';
    });

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