'use strict'; 

/* Задание на урок:

1) Первую часть задания повторить по уроку

2) Создать функцию showMyDB, которая будет проверять свойство privat. Если стоит в позиции
false - выводит в консоль главный объект программы

3) Создать функцию writeYourGenres в которой пользователь будет 3 раза отвечать на вопрос 
"Ваш любимый жанр под номером ${номер по порядку}". Каждый ответ записывается в массив данных
genres

P.S. Функции вызывать не обязательно*/
const personalMovieDB = {
	count:0,
	movies: {},
	actor: {},
	genres: [],
	privat: false
};


function start (){
	for (let i = 0; i<1; i++){
		personalMovieDB.count  = +prompt('Сколько фильмов вы посмотрели?','');
	
		if (personalMovieDB.count == null || isNaN(personalMovieDB.count) || personalMovieDB.count == ''){
			alert('Необходимо вставить число!');
			i--;
		}
	}
}

function detectPersomalLevel () {
	if (personalMovieDB.count < 10) {
		alert('Просмотрено довольно мало фильмов');
	} else if (personalMovieDB.count > 10 && personalMovieDB.count < 30){
		alert('Вы классический зритель');
	} else  if (personalMovieDB.count >= 30){
		alert('Вы киноман');
	} else {
		alert('Произошла ошибка');
	}
}

function rememberMyFilms(){
	for (let i = 0; i < personalMovieDB.count; i++){

		let a;
		for (let i = 0; i<1; i++){		
			a = prompt('Один из последних просмотренных фильмов?','Введите название фильма');	
			if (a === 0 || a === null || a.length > 20){
				alert('Необходимо ввести название фильма не длиннее 20 символов!');
				i--;
			}
		}
	
		for (let i = 0; i<1; i++) {
			personalMovieDB.movies[a] = +prompt ('На сколько оцените его?','');
			if (personalMovieDB.movies[a]===0 || isNaN(personalMovieDB.movies[a])){
				alert('Необходимо вставить число!');
				i--;
			}
		}
	}

}

function showMyDB(hidden){
	if (!hidden){
		console.log(personalMovieDB);
	}
}

function writeYourGenres(){
	for (let i = 0; i<3; i++){		
		let genre = prompt(`Ваш любимый жанр под номером ${i+1}`,'Введите название фильма');	
		if (genre === 0 || genre === null || genre.length > 20){
			alert('Необходимо ввести жанр фильма не длиннее 20 символов!');
			i--;
		} else {
			personalMovieDB.genres[i] = genre;
		}
	}
}

// start();
// writeYourGenres();
showMyDB(personalMovieDB.privat);
// detectPersomalLevel();
// rememberMyFilms();
// console.log (personalMovieDB);