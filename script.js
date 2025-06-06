const featuredMovies = [

    {

        title: "Supernatural",

        seasons: "1-15 seasons (2005-2020)",

        cast: "Jensen Ackles (Dean Winchester), Jared Padalecki (Sam Winchester)",

        genre: "Horror, Action, Sci-Fi",

        description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",

        image: "https://via.placeholder.com/800x450?text=Supernatural",

        color: "#e74c3c"

    },

    {

        title: "Doctor Strange (2016)",

        seasons: "",

        cast: "Benedict Cumberbatch (Doctor Strange)",

        genre: "Action, Adventure, Fantasy",

        description: "A former neurosurgeon embarks on a journey of healing...",

        image: "https://via.placeholder.com/800x450?text=Doctor+Strange",

        color: "#2ecc71"

    },

    {

        title: "Another Movie",

        seasons: "",

        cast: "Actor A, Actor B",

        genre: "Genre",

        description: "Description",

        image: "https://via.placeholder.com/800x450?text=Another+Movie",

        color: "#3498db"

    }

];



const featuredInfo = document.querySelector('.featured-info');

const featuredImage = document.querySelector('.featured-image');

const dots = document.querySelectorAll('.dot');

const nextButton = document.querySelector('.next-button');

let currentIndex = 0;



function updateFeaturedMovie(index) {

    const movie = featuredMovies[index];

    featuredInfo.querySelector('h2').textContent = movie.title;

    featuredInfo.querySelector('.seasons').textContent = movie.seasons;

    featuredInfo.querySelector('.cast').innerHTML = `<strong>Cast:</strong> ${movie.cast}`;

    featuredInfo.querySelector('.genre').innerHTML = `<strong>Genre:</strong> ${movie.genre}`;

    featuredInfo.querySelector('.description').innerHTML = `${movie.description}`;

    featuredImage.style.backgroundImage = `url('${movie.image}')`;

    featuredImage.style.backgroundColor = movie.color;



    dots.forEach((dot, i) => {

        dot.classList.toggle('active', i === index);

    });

}



nextButton.addEventListener('click', () => {

    currentIndex = (currentIndex + 1) % featuredMovies.length;

    updateFeaturedMovie(currentIndex);

});



dots.forEach((dot, index) => {

    dot.addEventListener('click', () => {

        currentIndex = index;

        updateFeaturedMovie(index);

    });

});



updateFeaturedMovie(0);



const userButton = document.querySelector('.user-button');

const dropdownMenu = document.getElementById('accountDropdown');



// Funkcja do tworzenia zawartości dropdown menu

function createDropdownMenu() {

    dropdownMenu.innerHTML = `

        <a href="#">Moje konto</a>

        <hr></hr>

        <a href="#" class="logout">Wyloguj</a>

    `;

    

    // Dodajemy styl do logout linku

    const logoutLink = dropdownMenu.querySelector('.logout');

    logoutLink.style.color = '#e74c3c';

}



// Funkcja do pokazywania/ukrywania dropdown menu

function toggleDropdown() {

    dropdownMenu.classList.toggle('show');

}



// Inicjalizacja dropdown menu przy ładowaniu strony

document.addEventListener('DOMContentLoaded', () => {

    createDropdownMenu();

    

    // Nasłuchiwanie kliknięcia na przycisk użytkownika

    userButton.addEventListener('click', (e) => {

        e.stopPropagation(); // Zapobiega natychmiastowemu zamknięciu

        toggleDropdown();

    });

    

    // Zamknięcie dropdown po kliknięciu gdziekolwiek indziej

    document.addEventListener('click', () => {

        dropdownMenu.classList.remove('show');

    });

    

    // Zapobieganie zamknięciu po kliknięciu w dropdown

    dropdownMenu.addEventListener('click', (e) => {

        e.stopPropagation();

    });

});