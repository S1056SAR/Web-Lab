// The Movie Database
function createMovieDatabase() {
    // Create a movie object
    const favoriteMovie = {
        title: "Puff the Magic Dragon",
        duration: 30,
        stars: ["Puff", "Jackie", "Living Sneezes"]
    };
    
    // Function to print movie information
    function printMovie(movie) {
        const starsString = movie.stars.join(", ");
        const movieInfo = `${movie.title} lasts for ${movie.duration} minutes. Stars: ${starsString}.`;
        
        console.log(movieInfo);
        return movieInfo;
    }
    
    // Print the movie information
    const movieDetails = printMovie(favoriteMovie);
    alert(movieDetails);
    
    return favoriteMovie;
}

// Function to create a movie from user input
function createUserMovie() {
    const title = prompt("Enter movie title:");
    const duration = parseInt(prompt("Enter movie duration (in minutes):"));
    
    if (!title || isNaN(duration)) {
        alert("Please enter valid movie information!");
        return;
    }
    
    // Get stars
    const stars = [];
    let moreStars = true;
    
    while (moreStars) {
        const star = prompt(`Enter a star for "${title}" (or click Cancel to finish):`);
        
        if (!star) {
            moreStars = false;
        } else {
            stars.push(star);
        }
    }
    
    const movie = {
        title: title,
        duration: duration,
        stars: stars
    };
    
    // Print the movie information
    function printMovie(movie) {
        const starsString = movie.stars.join(", ");
        const movieInfo = `${movie.title} lasts for ${movie.duration} minutes. Stars: ${starsString}.`;
        
        console.log(movieInfo);
        return movieInfo;
    }
    
    const movieDetails = printMovie(movie);
    alert(movieDetails);
}

// Display example movie
console.log("Default Movie:");
createMovieDatabase();

// Create user movie
console.log("\nUser Movie:");
createUserMovie();