'use strict';

var potega = Math.pow(10, 2);
console.log(potega);

/*Liczba losowa*/

var randomNumber = Math.round(Math.random() * 10); /*jeśli nie ponożmy o otrzymana liczba będzie po przecinku 0,12345; mnożone przez 10 da liczbę od 0-9, mnożone przez 100 da liczbę dwucyfrową itd, Math.round zaokrągla, ucina wartość po przecinku i zostwia liczbę całkowitą*/
console.log(randomNumber);
