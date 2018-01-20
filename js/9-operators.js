'use strict';


/*Operatory matematyczne*/
var resztaZDzielenia = 6 % 4; /*% oblicza resztę z dzielenia; można zrobić tym test z parzystości*/
console.log(resztaZDzielenia);

console.log(resztaZDzielenia++); /*Najpierw zwraca, a potem nadpisuje*/
console.log(resztaZDzielenia++);

var liczba = 10;

console.log(++liczba); /*liczba = liczba +1;   jest to tożsame; najpierw nadpisuje, potem dodaje jednostkę*/
console.log(++liczba);

/* Operatory przypisania = */

var number = 100;
console.log(number);

number += 20; //alternatywa dla zapisu: number = number + 20;
console.log(number);

number *= 2;
console.log(number); /*Wynik końcowy jest efektem wszystkich wcześniejszych operacji*/

/* Operatory porównania */
console.log(2 == 2);
console.log(3 != 3);

console.log('2' === 1); /*dodatkowy znak = sprawdza też rodzaj danych*/
console.log(3 !== 2);

console.log(3 > 3);
console.log(3 >= 3);


/* Operatory logiczne */
console.log((2 == 2) && (3 < 2)); /*Wszystkie warunki muszą być prawdziwe żeby było true*/
console.log((2 == 2) && (3 > 2));

console.log((2 == 2) || (3 < 2)); /*Jesdno musi być prawdziwe*/
console.log((2 == 2) || (3 > 2));
console.log((2 != 2) || (3 < 2));

console.log(!(2 == 2)); /*Zaprzeczenie prawdy; będzie zwracać fałsz*/


/* Operator warunkowy */
var parzystaCzyNieparzysta = (131 % 2 == 0) ? 'parzysta' : 'nieparzysta';
console.log(parzystaCzyNieparzysta);

var parzystaCzyNieparzysta = (number % 2 == 0) ? 'parzysta' : 'nieparzysta';
console.log(parzystaCzyNieparzysta);
