/* Задания на урок:

1) Удалить все рекламные блоки со страницы (правая часть сайта)

2) Изменить жанр фильма, поменять "комедия" на "драма"

3) Изменить задний фон постера с фильмом на изображение "bg.jpg". Оно лежит в папке img.
Реализовать только при помощи JS

4) Список фильмов на странице сформировать на основании данных из этого JS файла.
Отсортировать их по алфавиту 

5) Добавить нумерацию выведенных фильмов */

'use strict';

document.addEventListener('DOMContentLoaded', () => {

    // ALL SCRIPT...



// // ============================ DATA BASE ===================================
const movieDB = {
    movies: [
        "ЛоганН",
        "Лига справедливостиИ",
        "Ла-ла лэндД",
        "ОдержимостьЬ",
        "Скотт Пилигрим противВ..."
    ]
};

// ======================== Practice Udemy 030 ==========================

// ============================ VARs ===================================
const adv = document.querySelectorAll('.promo__adv img'), 
      bg = document.querySelector('.promo__bg'), 
      genre = bg.querySelector('.promo__genre'); 

// // ============================== 1 ===================================
    adv.forEach(item => {
        item.remove();
    }); 

// // ============================== 2 ===================================
    genre.textContent = 'Драма'; 

// // ============================== 3 ===================================
    bg.style.background = 'url("../img/bg.jpg")';

// // ============================== 4 ===================================
    const ulList = document.querySelector('.promo__interactive-list'); 
    ulList.innerHTML = ""; 

    movieDB.movies.sort(); 

    movieDB.movies.forEach((item, num) => {
        ulList.innerHTML += `
            <li class="promo__interactive-item">${num+1}. ${item}
                <div class="delete"></div>
            </li>`;
    });
//   !!!!!    ЯКЩО НЕ ВИКОРИСТАТИ += ТО КОЖЕН НАСТУПНИЙ ЦИКЛ БУДЕ ЗАМІНЯТИ ПОПЕРЕДНІЙ !!!!!
// REPEAT!  REPEAT!  REPEAT!  REPEAT!  REPEAT!  REPEAT! 


//               ONCE MORE: 
// ============================ 1.2 ===================================
///////////////////////////////////////////////////////////////////////////

//======= 1 variant (arrow function) ================  
///////////////////////////////////////////////////////////////////////////

//======= 2 variant (classic function) ==============  
///////////////////////////////////////////////////////////////////////////

// ============================ 2.2 ===================================
///////////////////////////////////////////////////////////////////////////

}); 


// WIN_05.10.2022_Udemy_project_030_Done
