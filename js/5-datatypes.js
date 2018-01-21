'use strict';

/* Typ liczbowy number */

var liczba = 10;
console.log(liczba);

var liczbaZmiennoprzecinkowa = 3.14;
console.log(liczbaZmiennoprzecinkowa);


/* Typ łańcuchowy string*/

var name = 'Marta';
console.log(name);


var wzrost = 180 + 'cm';
console.log(wzrost); /*typeof nazwaFunkcji wpisane w konsoli pokazją jaki mamy typ zmiennej*/

var exampleString = 'This is Luke\'s light sword'; /*\' umożliwia użycie apostrofu itp*/
console.log(exampleString);


/* Typ logiczny boolean */

var prawda = true;
console.log(prawda);

var sprawdzam = (3 == 1);
console.log(sprawdzam);

/*Typy specjalne */

var niezdefiniowana;
console.log(niezdefiniowana);

var nic = null; /*tworzymy zmienną, ale nie wiemy jeszcze co w niej ma być więc używamy null; czyści zmienną, istnieje, ale jest pusty*/
console.log(nic);

console.log(12 * null);


/*Połączenie typów */

console.log('4' + 3);
console.log('4' - 3);
console.log('4' * 3);
console.log('4' / 0);
