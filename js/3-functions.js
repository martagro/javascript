'use strict';

function example() {
    console.log('To jest przykładowa funkcja');
}

example(); /*wywołanie funkcji, bez tego nie zadziała*/

var anonim = function () {
    console.log('to jest funkcja anonimowa');
}
/*tak też można zadeklarować funkcję, jest ona anonimowa*/
anonim();


/* Funkcja z parametrami */
function dodajDwieLiczby(num1, num2) {

    //console.log(num1 + num2);
    return num1 + num2; /*wszystko co jest po return nie jest brane pod uwagę więc jeśli będzie tam jakiś console.log to się nie wyświetli*/
}

dodajDwieLiczby(15, 30);
dodajDwieLiczby(3, 6);


/*Napisz funkcję, która pobiera trzy parametry - imię, nazwisko, wzrost - i wyświeta w konsoli 'Moje imię to xyz, moje nazwisko to xyz i mam x cm wzrostu' */

function userInfo(imie, nazwisko, wzrost) {
    console.log('Moje imię to ' + imie + ', moje nazwisko to ' + nazwisko + ' i mam ' + wzrost + ' cm wzrostu.');
}

userInfo('Marta', 'Gronkiewicz', 166);



var wynikDodawania = dodajDwieLiczby(10, 2);

console.log(wynikDodawania);
