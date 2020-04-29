function reverseSentence(sentence: string): string {
    let sentence_arr: string[] = sentence.split("");
    sentence_arr.reverse()
    let reversed_sentence: string = sentence_arr.join("");
    return reversed_sentence;
}

function reverseWords(sentence: string): string {
    let sentence_arr: string[] = sentence.split(" ");
    sentence_arr.reverse();
    let reversed_words: string = sentence_arr.join(" ");
    return reversed_words;
}

function reverseChars(sentence:string ): string {
    let sentence_arr: string[] = sentence.split(" ");
    let reversed_chars: string = "";
    for (let key of sentence_arr) {
        let reversed_word: string = key.split("").reverse().join("");
        reversed_chars += reversed_word + " ";
    }
    reversed_chars = reversed_chars.trim();
    return reversed_chars;
}

let input: string = prompt("Bitte gebe einen Satz ein. Zum Beispiel <Die Maus frisst Käse>");
console.log(reverseSentence(input));
console.log(reverseWords(input));
console.log(reverseChars(input));
