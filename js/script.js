'use strict';

document.addEventListener('DOMContentLoaded', () => {

    // ...ALL SCRIPT


/* Задания на урок 033:

1) Реализовать функционал, что после заполнения формы и нажатия кнопки "Подтвердить" - 
новый фильм добавляется в список. Страница не должна перезагружаться.
Новый фильм должен добавляться в movieDB.movies.
Для получения доступа к значению input - обращаемся к нему как input.value;
P.S. Здесь есть несколько вариантов решения задачи, принимается любой, но рабочий.

2) Если название фильма больше, чем 21 символ - обрезать его и добавить три точки

3) При клике на мусорную корзину - элемент будет удаляться из списка (сложно)

4) Если в форме стоит галочка "Сделать любимым" - в консоль вывести сообщение: 
"Добавляем любимый фильм"

5) Фильмы должны быть отсортированы по алфавиту */   

// ============================ Data Base ===================================
const movieDB = {
    movies: [
        "ЛоганН",
        "Лига справедливостиИ",
        "Ла-ла лэндД",
        "ОдержимостьЬ",
        "Скотт Пилигрим противВ..."
    ]
};

// ============================ VARs ===================================
const adv = document.querySelectorAll('.promo__adv img'), 
      bg = document.querySelector('.promo__bg'), 
      genre = bg.querySelector('.promo__genre'), 
      movieList = document.querySelector('.promo__interactive-list'), 
      addForm = document.querySelector('form.add'), 
      addInput = addForm.querySelector('.adding__input'), 
      checkBox = addForm.querySelector('[type="checkbox"]'); 

// ============================ 033_1 ===================================
    addForm.addEventListener('submit', (event) => {
        event.preventDefault(); 

        let newFilm = addInput.value; 
        const favor = checkBox.checked; 

        if (newFilm) {

        // ============================ 033_2 ===================================
            if (newFilm.length > 21) {
                newFilm = `${newFilm.slice(0, 21)}...`; 
                // newFilm = newFilm.slice(0, 21); 
            }

            movieDB.movies.push(newFilm); 

        // ============================ 033_4 ===================================
            if (favor) {
                console.log('Added favorit film!'); 
            }

        // ============================ 033_ ===================================
            sortArr(movieDB.movies);

        // ============================ 033_1 ===================================
            createMovieList(movieDB.movies, movieList); 
        } 

        event.target.reset(); 

    });

// ============================ 030_1 ===================================
    function advDel(arr) {
        arr.forEach(item => {
            item.remove();
        }); 
    }

// ============================ 030_2 ===================================   
// ============================ 030_3 ===================================

    function newChanges() {
        genre.textContent = 'Драма'; 

        bg.style.background = 'url("../img/bg.jpg")';
    }

// ============================ 033_2 ===================================
    function sortArr(arr) {
        arr.sort();
    }

// =================================== 030_4 ============================
    function createMovieList(movies, parentDir) {
        parentDir.innerHTML = "";  
        // ============================ 033_ ============================   
        sortArr(movies); 

        movies.forEach((item, num) => {
            parentDir.innerHTML += `
                <li class="promo__interactive-item">${num+1}. ${item}
                    <div class="delete"></div>
                </li>`;
        });

    // ================================= 033_3 ============================
    //=================== Udemy version 033_3 ===================================
        document.querySelectorAll('.delete').forEach((trsh, i) => {
            trsh.addEventListener('click', () => {
                trsh.parentElement.remove();
                movieDB.movies.splice(i, 1); 

                createMovieList(movies, parentDir); 
            });
        }); 
    
    // // My Version 033_3 ========== 
    //     const trashIcon = movieList.querySelectorAll('.delete'); 
    //         trashIcon.forEach((trsh, i) => {
    //             trsh.addEventListener('click', () => {
    //                 trsh.parentElement.remove();
    //                 movieDB.movies.splice(i, 1); 
    //             });
    //         }); 
    }
// // ============================  ===================================

// FUNCTION RETURN
advDel(adv); 
newChanges(); 
createMovieList(movieDB.movies, movieList); 
// ===== ===== ===== ===== ===== ===== ===== 

// // ============================ END ===================================


//   !!!!!    ЯКЩО НЕ ВИКОРИСТАТИ += ТО КОЖЕН НАСТУПНИЙ ЦИКЛ БУДЕ ЗАМІНЯТИ ПОПЕРЕДНІЙ !!!!!
// REPEAT!  REPEAT!  REPEAT!  REPEAT!  REPEAT!  REPEAT! 


//               ONCE MORE: 
// ============================ 033_1.2 ===================================
///////////////////////////////////////////////////////////////////////////

// ============================ 033_2.2 ===================================
///////////////////////////////////////////////////////////////////////////

// ============================ 033_3.2 ===================================
///////////////////////////////////////////////////////////////////////////

// ============================ 033_4.2 ===================================
///////////////////////////////////////////////////////////////////////////

// ====================================================================

// ============================ END ===================================

}); 

// WIN_07.10.2022_Udemy_project_033_Done
