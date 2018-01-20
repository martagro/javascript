'use strict';

for (var i = 0; i < 10; i++) {
    //console.log(i);
} /* i=0 mówi zacznij liczyć od 0 i<10 licz do 10; pętli for używamy gdy wiemy ile razy coś się wykona*/


var randomNumber = Math.round(Math.random() * 10);
/*
while (randomNumber > 2) {
    console.log(randomNumber);
    randomNumber = Math.round(Math.random() * 10);
} /*używamy gdy nie wiemy ile razy pętla się wykona*/


/*do {
    console.log(randomNumber);
    randomNumber = Math.round(Math.random() * 10);
} while (randomNumber > 2);*/





var jakasTablica = [null, 2, 17, 'Cześć', '', -12.3, false, true, 30];

/* Napisz fuknkcję, która przyjmie tablicę jako parametr i zwróci liczbę elementów typu number, które są w tablicy (jeśli m zwracać musi być return) */

function countNumbers(arr) {
    var count = 0;
    /*arr zadziała dla każdej tablicy a nie tylko tej pod określoną zmienną */
    for (var i = 0; i < arr.length; i++) {
        if (typeof arr[i] == 'number') {
            ++count;
        }
    }

    return count;
}

console.log(countNumbers(jakasTablica));

var nowaTablica = [1, 9, null, 'kot'];

console.log(countNumbers(nowaTablica));


/* break i continue */

for (var i = 1; i < 10; i++) {
    console.log(i);
    if (i % 5 == 0) {
        break;
    }
}


for (var i = 1; i <= 10; i++) {
    if (i % 5 == 0) {
        continue; /*nie przerywa działania pętli jak break, ale pomija część*/
    }
    console.log(i);
}
