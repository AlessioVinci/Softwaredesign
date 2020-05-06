let subjects: string[] = ["Harry ", "Hermine ", "Ron ", "Hagrid ", "Snape ", "Dumbledore "];
let verbs: string[] = ["braut ", "liebt ", "studiert ", "hasst ", "zaubert ", "zerstört "];
let objects: string[] = ["Zaubertränke", "den Grimm", "Lupin", "Hogwards", "die Karte des Rumtreibers", "Dementoren"];
let poem: string[] = [];

while (subjects.length != 0) {
    poem.push(getVerse());
}

console.log(poem);

function getVerse(): string {
    let storage: string = "";
    let index: number = 0;
    let multiplier: number = subjects.length;
    index = Math.floor(Math.random() * multiplier);

    for (let i: number = 0; i < 3; i++) {
        if (i == 0) {
            storage += subjects.splice(index, 1);
        } else if (i == 1) {
            storage += verbs.splice(index, 1);
        } else if (i == 2) {
            storage += objects.splice(index, 1);
        }
    }

    storage += " <br/>";
    return storage;
}