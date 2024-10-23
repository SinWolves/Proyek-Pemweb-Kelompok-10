const songs1 = document.getElementById("songs1");
const songs2 = document.getElementById("songs2");
const songs3 = document.getElementById("songs3");
const songs4 = document.getElementById("songs4");
const songs5 = document.getElementById("songs5");
const songs6 = document.getElementById("songs6");
const songs7 = document.getElementById("songs7");
const songs8 = document.getElementById("songs8");
const songs9 = document.getElementById("songs9");
const songs10 = document.getElementById("songs10");
const songs11 = document.getElementById("songs11");
const songs12 = document.getElementById("songs12");
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
const songsPopup1 = document.getElementById("songsPopup1");
const songsPopup2 = document.getElementById("songsPopup2");
const songsPopup3 = document.getElementById("songsPopup3");
const songsPopup4 = document.getElementById("songsPopup4");
const songsPopup5 = document.getElementById("songsPopup5");
const songsPopup6 = document.getElementById("songsPopup6");
const songsPopup7 = document.getElementById("songsPopup7");
const songsPopup8 = document.getElementById("songsPopup8");
const songsPopup9 = document.getElementById("songsPopup9");
const songsPopup10 = document.getElementById("songsPopup10");
const songsPopup11 = document.getElementById("songsPopup11");
const songsPopup12 = document.getElementById("songsPopup12");
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
let ratings = [];
let currentRating = 0;

songs1.addEventListener("click", () => {

    songsPopup1.style.display = 'block';  

    document.querySelector('.close1').addEventListener('click', () => {
        document.getElementById('songsPopup1').style.display = 'none';
    });

    // Function to handle star hover and click
    stars.forEach(star => {
        star.addEventListener('mouseover', () => {
            resetStars();
            star.classList.add('selected');
            star.previousElementSibling?.classList.add('selected'); // Highlight previous stars
        });

        star.addEventListener('mouseout', resetStars);

        star.addEventListener('click', () => {
            currentRating = parseInt(star.getAttribute('data-value'));
            saveRating(currentRating);
        });
    });

    // Function to reset stars
    function resetStars() {
        stars.forEach(star => {
            star.classList.remove('selected');
        });
        if (currentRating > 0) {
            for (let i = 0; i < currentRating; i++) {
                stars[i].classList.add('selected');
            }
        }
    }

    // Function to save rating to the array
    function saveRating(rating) {
        ratings.push(rating);
        console.log('Current Ratings:', ratings); // Display the current ratings
    }

    // Add event listener to the submit button
    document.getElementById('submit').addEventListener('click', () => {
        if (currentRating > 0) {
            alert(`Rating of ${currentRating} saved!`);
        } else {
            alert('Please select a rating before submitting.');
        }
    });
});

songs2.addEventListener("click", () => {

    songsPopup2.style.display = 'block';  

    document.querySelector('.close2').addEventListener('click', () => {
        document.getElementById('songsPopup2').style.display = 'none';
    });

    // Function to handle star hover and click
    stars.forEach(star => {
        star.addEventListener('mouseover', () => {
            resetStars();
            star.classList.add('selected');
            star.previousElementSibling?.classList.add('selected'); // Highlight previous stars
        });

        star.addEventListener('mouseout', resetStars);

        star.addEventListener('click', () => {
            currentRating = parseInt(star.getAttribute('data-value'));
            saveRating(currentRating);
        });
    });

    // Function to reset stars
    function resetStars() {
        stars.forEach(star => {
            star.classList.remove('selected');
        });
        if (currentRating > 0) {
            for (let i = 0; i < currentRating; i++) {
                stars[i].classList.add('selected');
            }
        }
    }

    // Function to save rating to the array
    function saveRating(rating) {
        ratings.push(rating);
        console.log('Current Ratings:', ratings); // Display the current ratings
    }

    // Add event listener to the submit button
    document.getElementById('submit').addEventListener('click', () => {
        if (currentRating > 0) {
            alert(`Rating of ${currentRating} saved!`);
        } else {
            alert('Please select a rating before submitting.');
        }
    });

});

songs3.addEventListener("click", () => {

    songsPopup3.style.display = 'block';  

    document.querySelector('.close3').addEventListener('click', () => {
        document.getElementById('songsPopup3').style.display = 'none';
    });

    // Function to handle star hover and click
    stars.forEach(star => {
        star.addEventListener('mouseover', () => {
            resetStars();
            star.classList.add('selected');
            star.previousElementSibling?.classList.add('selected'); // Highlight previous stars
        });

        star.addEventListener('mouseout', resetStars);

        star.addEventListener('click', () => {
            currentRating = parseInt(star.getAttribute('data-value'));
            saveRating(currentRating);
        });
    });

    // Function to reset stars
    function resetStars() {
        stars.forEach(star => {
            star.classList.remove('selected');
        });
        if (currentRating > 0) {
            for (let i = 0; i < currentRating; i++) {
                stars[i].classList.add('selected');
            }
        }
    }

    // Function to save rating to the array
    function saveRating(rating) {
        ratings.push(rating);
        console.log('Current Ratings:', ratings); // Display the current ratings
    }

    // Add event listener to the submit button
    document.getElementById('submit').addEventListener('click', () => {
        if (currentRating > 0) {
            alert(`Rating of ${currentRating} saved!`);
        } else {
            alert('Please select a rating before submitting.');
        }
    });

});

songs4.addEventListener("click", () => {

    songsPopup4.style.display = 'block';  

    document.querySelector('.close4').addEventListener('click', () => {
        document.getElementById('songsPopup4').style.display = 'none';
    });

    // Function to handle star hover and click
    stars.forEach(star => {
        star.addEventListener('mouseover', () => {
            resetStars();
            star.classList.add('selected');
            star.previousElementSibling?.classList.add('selected'); // Highlight previous stars
        });

        star.addEventListener('mouseout', resetStars);

        star.addEventListener('click', () => {
            currentRating = parseInt(star.getAttribute('data-value'));
            saveRating(currentRating);
        });
    });

    // Function to reset stars
    function resetStars() {
        stars.forEach(star => {
            star.classList.remove('selected');
        });
        if (currentRating > 0) {
            for (let i = 0; i < currentRating; i++) {
                stars[i].classList.add('selected');
            }
        }
    }

    // Function to save rating to the array
    function saveRating(rating) {
        ratings.push(rating);
        console.log('Current Ratings:', ratings); // Display the current ratings
    }

    // Add event listener to the submit button
    document.getElementById('submit').addEventListener('click', () => {
        if (currentRating > 0) {
            alert(`Rating of ${currentRating} saved!`);
        } else {
            alert('Please select a rating before submitting.');
        }
    });

});

songs5.addEventListener("click", () => {

    songsPopup5.style.display = 'block';  

    document.querySelector('.close5').addEventListener('click', () => {
        document.getElementById('songsPopup5').style.display = 'none';
    });

});

songs6.addEventListener("click", () => {

    songsPopup6.style.display = 'block';  

    document.querySelector('.close6').addEventListener('click', () => {
        document.getElementById('songsPopup6').style.display = 'none';
    });

});

songs7.addEventListener("click", () => {

    songsPopup7.style.display = 'block';  

    document.querySelector('.close7').addEventListener('click', () => {
        document.getElementById('songsPopup7').style.display = 'none';
    });

});

songs8.addEventListener("click", () => {

    songsPopup8.style.display = 'block';  

    document.querySelector('.close8').addEventListener('click', () => {
        document.getElementById('songsPopup8').style.display = 'none';
    });

});

songs9.addEventListener("click", () => {

    songsPopup9.style.display = 'block';  

    document.querySelector('.close9').addEventListener('click', () => {
        document.getElementById('songsPopup9').style.display = 'none';
    });

});

songs10.addEventListener("click", () => {

    songsPopup10.style.display = 'block';  

    document.querySelector('.close10').addEventListener('click', () => {
        document.getElementById('songsPopup10').style.display = 'none';
    });

});

songs11.addEventListener("click", () => {

    songsPopup11.style.display = 'block';  

    document.querySelector('.close11').addEventListener('click', () => {
        document.getElementById('songsPopup11').style.display = 'none';
    });

});

songs12.addEventListener("click", () => {

    songsPopup12.style.display = 'block';  

    document.querySelector('.close12').addEventListener('click', () => {
        document.getElementById('songsPopup12').style.display = 'none';
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