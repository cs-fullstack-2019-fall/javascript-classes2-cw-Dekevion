class Movie {
    constructor(movieName, rating, yearReleased) { // properties

        this.movieName = movieName;
        this.rating = rating;
        this.yearReleased = yearReleased;

    }

// you have to pass this method a param to update the name
    changeMovieName(){
        console.log(this.movieName);
    }
    
// you have to pass this method a param to update the name
    changeRating (){
        console.log(this.rating);
    }

// you have to pass this method a param to update the name
    changeYearReleased(){
        console.log(this.yearReleased);
    }


}

let changedMovie = new Movie("Pulp Fiction", "5 stars", "94");
let otherChangeMovie = new Movie("abc123", "1 star", "2000");
console.log(changedMovie);
console.log(otherChangeMovie);