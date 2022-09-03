"use strict"; 

const numberOfFilms = +prompt('How many movies have you watched?', ''); 

const personalMovieDB = {
    count: numberOfFilms,
    movies: {}, 
    actors: {}, 
    genres: [], 
    privat: false,
}; 

const a = prompt('Write the last film you watched:', ''), 
      b = prompt('How do you rate it?', ''), 
      c = prompt('Write the last film you watched:', ''), 
      d = prompt('How do you rate it?', ''); 

personalMovieDB.movies[a] = b; 
personalMovieDB.movies[c] = d; 

console.log(personalMovieDB); 
