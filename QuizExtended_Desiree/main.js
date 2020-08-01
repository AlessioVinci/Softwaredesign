"use strict";
var QuizExtended;
(function (QuizExtended) {
    class Question {
        constructor(_question) { this.question = _question; }
    }
    class YesNoQuestion extends Question {
        constructor(_question, _yesNo) {
            super(_question);
            this.yesNo = _yesNo;
        }
    }
    class TextQuestion extends Question {
        constructor(_question, _rightAnswer) {
            super(_question);
            this.rightAnswer = _rightAnswer;
        }
    }
    class SingleQuestion extends Question {
        constructor(_question, _answers, _rightAnswer) {
            super(_question);
            this.answers = _answers;
            this.rightAnswer = _rightAnswer;
        }
    }
    class GuessQuestion extends Question {
        constructor(_question, _rightAnswer, _toleranceMin, _toleranceMax) {
            super(_question);
            this.rightAnswer = _rightAnswer;
            this.toleranceMin = _toleranceMin;
            this.toleranceMax = _toleranceMax;
        }
    }
    class MultipleChoiceQuestion extends Question {
        constructor(_question, _answers, _rightAnswers) {
            super(_question);
            this.answers = _answers;
            this.rightAnswers = _rightAnswers;
        }
    }
    let questionArray = [
        new YesNoQuestion("War der Begründer der Urknalltheorie ein katholischer Priester?", "Ja"),
        new TextQuestion("Welche Farbe hat das Blut von Perlbooten (Antwort in CAPS)", "BLAU"),
        new SingleQuestion("Aus wie vielen Kräutern ist Jägermeister gebraut", ["42", "56", "52", "69"], 2),
        new GuessQuestion("Wie viele Einkerbungen hat ein Golfball?", 336, 300, 370),
        new MultipleChoiceQuestion("Welche der folgenden Begriffe sind Charaktere von Tolkien?", ["Elendil", "Elronon", "Bilbo", "Celebrían", "Azafen"], [1, 3, 4])
    ];
    let points = 0;
    function menu() {
        let userInput = 0;
        userInput = +prompt("Willkommen beim Quiz! \n Ihre bisherige Punktzahl beträgt: " + points + "\n Wählen Sie: \n 1 um eine bereits existierende Frage zu beantworten. \n 2 um eine neue Quizfrage zu erstellen. \n 3 um das Programm zu beenden.");
    }
})(QuizExtended || (QuizExtended = {}));
//# sourceMappingURL=main.js.map