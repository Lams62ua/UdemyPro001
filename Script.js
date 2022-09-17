'use strict'; 



// ====================  Practice 012 - 1 ============================  

let numberOfFilms; 

function start() {
    numberOfFilms = +prompt('How many movies have you watched?', '');  

    while (numberOfFilms == '' || numberOfFilms == null || isNaN(numberOfFilms)) {
        numberOfFilms = +prompt('How many movies have you watched?', '');
    }
}
start(); 

const personalMovieDB = {
    count: numberOfFilms,
    movies: {}, 
    actors: {}, 
    genres: [], 
    privat: false,
}; 

//---------------------------------------------------------------- 

// const a = prompt('Write the last film you watched:', ''), 
//       b = prompt('How do you rate it?', ''), 
//       c = prompt('Write the last film you watched:', ''), 
//       d = prompt('How do you rate it?', ''); 

// personalMovieDB.movies[a] = b; 
// personalMovieDB.movies[c] = d; 

// console.log(personalMovieDB); 



// ====================  Practice 015 - 2 ============================  

// ========= Cicle Verson 1 (for) - origin ====

// // let a; 
// // let b; 

    // for (let i = 0; i < 2; i++) {
    //     const a = prompt('Write the last film you watched:', ''), 
    //         b = prompt('How do you rate it (from 1 to 100)?', '');

    //     if (a != null && b != null && a != '' && b != '' && a.length < 50 && b > 0 && b <= 100 ) {
    //         personalMovieDB.movies[a] = b; 
    //         console.log('Ok'); 
    //     } else {
    //         console.log('Try again'); 
    //         i--; 
    //     }
    // }

// ========= Cicle Verson 2 (while) ====
// let i = 0;
// while (i < 2) {

//     const a = prompt('Write the last film you watched:', ''), 
//           b = prompt('How do you rate it (from 1 to 100)?', '');
        
//         if (a != null && b != null && a != '' && b != '' && a.length < 50 && b > 0 && b <= 100 ) {
//             personalMovieDB.movies[a] = b; 
//             console.log('Ok'); 
//         } else {
//             console.log('Try again'); 
//             i--; 
//         };
//     i++;
// }; 

// ========= Cicle Verson 3 (do while) ====

// let i = 0;

// do {
//     const a = prompt('Write the last film you watched:', ''), 
//           b = prompt('How do you rate it (from 1 to 100)?', '');
        
//         if (a != null && b != null && a != '' && b != '' && a.length < 50 && b > 0 && b <= 100 ) {
//             personalMovieDB.movies[a] = b; 
//             console.log('Ok'); 
//         } else {
//             console.log('Try again'); 
//             i--; 
//         };
//     i++;
// } while (i < 2); 

// ------------------------------------------------------------- 

    // if (personalMovieDB.count < 10) {
    //     console.log('You have wathed a few movies(('); 
    // } else if (personalMovieDB.count >= 10 && personalMovieDB.count < 30) {
    //     console.log('You are classic kinoman!');
    // } else if (personalMovieDB.count >= 30) {
    //     console.log('You are mega kinoman!))');
    // } else {
    //     console.log('Error');
    // };
    
    // console.log(personalMovieDB); 


// ====================  Practice 018 - 3 ============================  


function rememberMyFilms() {

    for (let i = 0; i < 2; i++) {
        const a = prompt('Write the last film you watched:', ''), 
              b = prompt('How do you rate it (from 1 to 100)?', '');

        if (a != null && b != null && a != '' && b != '' && a.length < 50 && b > 0 && b <= 100 ) {
            personalMovieDB.movies[a] = b; 
            console.log('Ok'); 
        } else {
            console.log('Try again'); 
            i--; 
        }
    }
} 
rememberMyFilms(); 


function countMyFilms() {
    if (personalMovieDB.count < 10) {
        console.log('You have wathed a few movies(('); 
    } else if (personalMovieDB.count >= 10 && personalMovieDB.count < 30) {
        console.log('You are classic kinoman!');
    } else if (personalMovieDB.count >= 30) {
        console.log('You are mega kinoman!))');
    } else {
        console.log('Error');
    }
}
countMyFilms(); 

//---------------------------------------------------------------- 

// function showMyDB() {
//     if (personalMovieDB.privat == false) {
//         console.log(personalMovieDB); 
//     }
// }
// showMyDB(); 

// -----------------------------------------

function showMyDB(privat) {
    if (!privat) {
        console.log(personalMovieDB);
    }
}
showMyDB(personalMovieDB.privat);

//---------------------------------------------------------------- 

//-----   Version 1 ------

// function writeYourGenres() {
//     for (let i = 1; i <= 3; i++) {
//         const genre = prompt(`Write your favorite genres number - ${i}`, '');
//         personalMovieDB.genres[i - 1] = genre; 
//     }
// }
// writeYourGenres(); 

//-----   Version 2 better ------

function writeYourGenres() {
    for (let i = 1; i <= 3; i++) {
        personalMovieDB.genres[i - 1] = prompt(`Write your favorite genres number - ${i}`); 
    }
}
writeYourGenres(); 


// WIN 09.17 commit "practice - 3 (018)" 
