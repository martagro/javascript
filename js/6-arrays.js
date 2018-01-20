'use script';

/* Deklaracja zmiennej przechowującej tablice */

var emptyArray = [];
console.log(emptyArray);

var exampleArray = [1, 'Cześć', true, null];
console.log(exampleArray);

/* Przypisywanie elementów tablicy */

var arrayElement = exampleArray[1];
console.log(arrayElement);

exampleArray[3] = 60;
console.log(exampleArray); /*Podmienia nulla lub wybraną wartość na inną*/

exampleArray[4] = 100;
console.log(exampleArray);
/*dodaje kolejny element do tablicy*; elementy tablicy zawsze są liczone od 0!!!/



/* Metody tablicowe */

exampleArray.push('Hello'); /*dodaje kolejną wartość w tablicy - szufladę w komodzie- zawsze na ostatnie miejsce*/
console.log(exampleArray);

exampleArray.pop();
console.log(exampleArray); /* ściąga ostatni element i wyrzuca go, tablica nadal ma 5 elementów*/

var lastArrayElement = exampleArray.pop();
console.log(lastArrayElement);
console.log(exampleArray); /*wyrzuca ostatni element i tablica ma 4 elementy */


exampleArray.unshift('Siema');
console.log(exampleArray); /*Wrzuca element na początek tablicy*/

exampleArray.shift();
console.log(exampleArray); /*Usuwa pierwszy element z tablicy */



/* Wstaw dwa elementy na 2 i 3 indeksie tablicy exampleArray */

exampleArray.splice(2, 0, 'Marta'); /*pierwsza liczba pokazuje na którym miejscu dodamy element, druga czy będzie dodany bez skasowania innego który był wcześniej na tym miejscu; jeśli chcemy podmienić zamiast 0 dajemy np 1 i element z tym indeksem będzie podmieniony; pierwsza wartość pokazuje od jakiej watości liczyć */
exampleArray.splice(3, 0, 'Gronkiewicz');
console.log(exampleArray);


/* Długość tablicy */
console.log(exampleArray.length);

/* Tablice wielowymiarowe - dwuwymiarowa */
var tablicaDwuwymiarowa = [
    ['Cześć', 'kolego', ['Marta', 'Gronkiewicz']]
];
console.log(tablicaDwuwymiarowa[0][1]); /*pokazuje który wiersz i która kolumna ma być zalogowana*/

/*Odwracanie i sortowanie*/
exampleArray.reverse();
console.log(exampleArray);

exampleArray.sort();
console.log(exampleArray);
