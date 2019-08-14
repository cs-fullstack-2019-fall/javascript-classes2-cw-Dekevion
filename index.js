class Movie {
    constructor(movieName, rating, yearReleased) { // properties

        this.movieName = movieName;
        this.rating = rating;
        this.yearReleased = yearReleased;

    }


    changeMovieName(){
        console.log(this.movieName);
    }

    changeRating (){
        console.log(this.rating);
    }


    changeYearReleased(){
        console.log(this.yearReleased);
    }


}

let changedMovie = new Movie("Pulp Fiction", "5 stars", "94");
let otherChangeMovie = new Movie("abc123", "1 star", "2000");
console.log(changedMovie);
console.log(otherChangeMovie);