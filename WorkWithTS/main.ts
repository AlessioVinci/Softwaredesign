//Variablendeklarationen
let i: number = 42;
let pi: number = 3.1415;
let salute: string = "Hello, World";


//Arrays
let ia: number[] = [1, 0 , 2, 9, 3, 8, 4, 7 , 5, 6];

console.log(ia[2] * ia[8] + ia[4]);
console.log(ia.length);
ia.splice(0, 2);
console.log(ia.length);



let phyArray: number[] = [3.1415, 2.71828, 2.97 * 10 ^ (-19)];

for (let phyVal of phyArray) {
    console.log(phyVal);
}


//Strings
let meinString: string = "Dies ist ein String";
// Laut Recherce hat TypeScript keinen char-Type

let a: string = "Dies ist ";
let b: string = "ein String";
let c: string = a + b;

let x: string = "eins";
let y: string = "zwei";
let z: string = "eins";
let aEQb: boolean = (a == b);
let aEQc: boolean = (a == c);

console.log(meinString);
console.log(c);
console.log(aEQb);
console.log(aEQc);


//Eigene Datentypen
/* class Person {
    public name: string;
    public personalnummer: number;
    constructor(name: string, pnummer: number) {
        this.name = name;
        this.personalnummer = pnummer;
    }
}

let jemand: Person;
jemand.name = "Horst";
jemand.personalnummer = 42;

let jemand2: Person = new Person("Annika", 43); */


//Verzweigungen
let inputUser: string = prompt("Bitte gebe zwei Zahlen getrennt von einem : ein. Zum Beispiel", "13:5");
let inputArray: string[] = inputUser.split(":");
let input1: number = +inputArray[0];
let input2: number = +inputArray[1];

if (input1 > input2) {
    console.log("a ist größer als b");
} else {
    console.log("b ist größer als a");
}

if (input1 > 3 && input2 == 6) {
    console.log("Du hast gewonnen");
} else {
    console.log("Leider verloren");
}


let direction: string = prompt("Gib eine Himmelsrichtung ein. Beispiel:", "Norden");

switch (direction) {
    case "Norden":
        console.log("Du hast Norden gewählt");
        break; //Wenn ein break fehlt, wendet er die darauffolgenden Fälle auch an, bis ein break gefunden wird.
    case "Osten":
        console.log("Du hast Osten gewählt");
        break;
    case "Süden":
        console.log("Du hast Süden gewählt");
        break;
    case "Westen":
        console.log("Du hast Westen gewählt");
        break;
    default:
        console.log("Himmelsrichtung " + direction + "nicht erkannt!");
        break;
}

//Switch-Case mit if/else Anweisungen
/* if (direction == "Norden") {
    console.log("Du hast Norden gewählt");
} else if (direction == "Osten") {
    console.log("Du hast Osten gewählt");
} else if (direction == "Süden") {
    console.log("Du hast Süden gewählt");
} else if (direction == "Westen") {
    console.log("Du hast Westen gewählt");
} else {
    console.log("Himmelsrichtung " + direction + "nicht erkannt!");
} */


//Schleifen
let whileInit: number = 1; //Initaliesierung

while (whileInit <= 10) { //Bedingung
    console.log(whileInit);
    whileInit += 1; //Inkrement
}

let someStrings: string[] = ["Hier", "sehen", "wir", "einen", "Array", "von", "Strings"];
/* let someStrings: string[]; */

for (let i: number = 0; i < someStrings.length; i++) { //für einfaches Ausgeben von allen Einträgen in someStrings[] ist die Benutzung von someStrings.length von Vorteil
    console.log(someStrings[i]);
}

//Obere For-Schleife als While-Schleife
/* let someCounter: number = 0; 
while (someCounter < someStrings.length) {
    console.log(someStrings[someCounter]);
    someCounter += 1;
} */

let k: number = 0;
do {
    console.log(someStrings[k]);
    k += 1;
} while (k < someStrings.length);

/* while (true) {
    console.log(someStrings[k]);
    if (k >= someStrings.length) {
        break;
    }
    k += 1;
} */

/* do while und while break sind nicht gleich wie die for schleife.
bei der for schleife wird die bedingung vorher überprüft. bei den anderen nicht.
Wäre das Array leer, würden die zwei while schleifen den ersten schleifenrumpf durchführen
und anschließend realisieren, dass das array leer ist. */


/* Foreach ist bei Zugriffen in richtiger Reihenfolge auf den kompletten Datensatz
wesentlich einfacher und weniger schreibaufwändig.
Dafür ist es jedoch weniger flexibel.
For each ist meiner Meinung auch klarer, da es leichter zu verstehen ist.
Es kommt näher ans richtige Englisch (Mache dies für jeden Eintrag aus dem Satz "Beispiel") */