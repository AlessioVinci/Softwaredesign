"use strict";
function reverseSentence(sentence) {
    let sentence_arr = sentence.split("");
    sentence_arr.reverse();
    let reversed_sentence = sentence_arr.join("");
    return reversed_sentence;
}
function reverseWords(sentence) {
    let sentence_arr = sentence.split(" ");
    sentence_arr.reverse();
    let reversed_words = sentence_arr.join(" ");
    return reversed_words;
}
function reverseChars(sentence) {
    let sentence_arr = sentence.split(" ");
    let reversed_chars = "";
    for (let key of sentence_arr) {
        let reversed_word = key.split("").reverse().join("");
        reversed_chars += reversed_word + " ";
    }
    reversed_chars = reversed_chars.trim();
    return reversed_chars;
}
let input = prompt("Bitte gebe einen Satz ein. Zum Beispiel <Die Maus frisst Käse>");
console.log(reverseSentence(input));
console.log(reverseWords(input));
console.log(reverseChars(input));
//# sourceMappingURL=main.js.map