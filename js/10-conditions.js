'use strict';


var number = 10;

/*Warunek if jeżeli*/
if (number > 5) {
    console.log('Liczba jest większa od 5'); /*jeśli to nieprawda to w konsoli nic się nie pojawi*/
}


/*Warunek if - else */
if (number < 3) {
    console.log('Liczba jest mniejsza od 3');
} else {
    console.log('Liczba jest większa od 3'); /*W każdym innym przypadku*/
}

/* Warunek else - if */

if (number < 10) {
    console.log('Liczba jest mniejsza od 10');
} else if (number >= 10 && number <= 20) {
    console.log('Liczba jest z przedziału 10-20');
} else if (number == 10) {
    console.log('Liczba jest równa 10'); /*tego warunku nie sprawdzi bo poprzedni jest prawdziwy*/
} else {
    console.log('Liczba jest większa od 20');
}

/* Switch - używa się go gdy mamy podane konkretne wartości, a nie przedziały wartości */

var color = 'blue';

switch (color) {
    case 'red':
        confirm.log('Kolor jest czerwony');
        break;

    case 'green':
        console.log('Kolor jest zielony');
        break;

    default:
        console.log('Kolor jest inny niż zielony lub czerwony');
}
