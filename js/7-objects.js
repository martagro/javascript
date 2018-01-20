'use strict';

/*var lukasz = {
    customerName: 'Marta Gronkiewicz',
    phoneNumber: 501059662,
    orderConfirmation: function () {
        console.log(this.customerName + ' właśnie złożyła zamówienie');
    }
}


var dominika = {
    customerName: 'Dominika Nowak',
    phoneNumber: 123456000,
    orderConfirmation: function () {
        console.log('Dominika Nowak właśnie złożyła zamówienie');
    }
}

console.log(dominika.phoneNumber); /*tak można wyciągnąć konkretne dane z obiektu*/
/*console.log(dominika['customerName']);


lukasz.orderConfirmation();*/


class Customer {
    constructor(customerName, phoneNumber) {
        this.name = customerName;
        this.phone = phoneNumber;
    }

    orderConfirmation() {
        console.log(this.name + ' właśnie złożyła zamówienie');
    }
}

var currentCustomer = new Customer('Marta Gronkiewicz', 501059662);

console.log(currentCustomer);
console.log(currentCustomer.name);

currentCustomer = new Customer('Dominika Nowak', 123456789);
console.log(currentCustomer);
console.log(currentCustomer.phone);

/*instancja to obiekt stworzony na bazie klasy */


/* Kalkulator BMI */
class Osoba {
    constructor(height, weight) {
        this.height = height;
        this.weight = weight;
    }

    liczBmi() {
        return this.weight / (this.height * this.height); /*Math.pow(this.height, 2); można potęgowanie zapisać za pomocą obiektu math*/
    }


    bmiMessage() {
        if (this.liczBmi() > 26) {
            console.log('Nadwaga');
        } else if (this.liczBmi() < 26 && this.liczBmi() > 18) {
            console.log('Norma');
        } else {
            console.log('Niedowaga');
        }
    }
}

/* istnieje też taki STARY sposób definiowania klasy: 

function Osoba (height, weight) {
    this.height = height; 
    this.weight = weight;
    this.liczBmi = function() {
        return this.weight/Math.pow(this.height, 2); 
    }
}
*/

var lukasz = new Osoba(1.66, 55);
console.log(lukasz.liczBmi());

lukasz.bmiMessage();
