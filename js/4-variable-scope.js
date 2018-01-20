'use strict';

function example() {
    var exampleVariable = 10;

    return exampleVariable;
}

function newExample() {
    var exampleVariable = 20;

    return exampleVariable;
}

var variableOutsideFunction = example(); /*aby wywołać zmienną, która znajduje się w funkcji musimy to w ten sposób zapisać, inaczej console.log (exampleVariable) musiał by być zapisany wewnątrz funkcji; zmienna zamknięta w funkcji jest dostępna tylko z poziomu tej funkcji!*/
var variableOutsideFunction2 = newExample();

console.log(variableOutsideFunction);
console.log(variableOutsideFunction);
