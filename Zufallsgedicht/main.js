"use strict";
let subjects = ["Harry ", "Hermine ", "Ron ", "Hagrid ", "Snape ", "Dumbledore "];
let verbs = ["braut ", "liebt ", "studiert ", "hasst ", "zaubert ", "zerstört "];
let objects = ["Zaubertränke", "den Grimm", "Lupin", "Hogwards", "die Karte des Rumtreibers", "Dementoren"];
let poem = [];
while (subjects.length != 0) {
    poem.push(getVerse());
}
console.log(poem);
function getVerse() {
    let storage = "";
    let index = 0;
    let multiplier = subjects.length;
    index = Math.floor(Math.random() * multiplier);
    for (let i = 0; i < 3; i++) {
        if (i == 0) {
            storage += subjects.splice(index, 1);
        }
        else if (i == 1) {
            storage += verbs.splice(index, 1);
        }
        else if (i == 2) {
            storage += objects.splice(index, 1);
        }
    }
    storage += " <br/>";
    return storage;
}
//# sourceMappingURL=main.js.map