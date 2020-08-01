namespace QuizExtended {
    abstract class Question {
        public question: string;
        public constructor(_question: string) { this.question = _question; }
    }

    class YesNoQuestion extends Question {
        public yesNo: string;
        public constructor(_question: string, _yesNo: string) {
            super(_question);
            this.yesNo = _yesNo;
        }
    }

    class TextQuestion extends Question {
        public rightAnswer: string;
        public constructor(_question: string, _rightAnswer: string) {
            super(_question);
            this.rightAnswer = _rightAnswer;
        }
    }

    class SingleQuestion extends Question {
        public answers: string[];
        public rightAnswer: number;
        public constructor(_question: string, _answers: string[], _rightAnswer: number) {
            super(_question);
            this.answers = _answers;
            this.rightAnswer = _rightAnswer;
        }
    }

    class GuessQuestion extends Question {
        public rightAnswer: number;
        public toleranceMin: number;
        public toleranceMax: number;
        public constructor(_question: string, _rightAnswer: number, _toleranceMin: number, _toleranceMax: number) {
            super(_question);
            this.rightAnswer = _rightAnswer;
            this.toleranceMin = _toleranceMin;
            this.toleranceMax = _toleranceMax;
        }
    }

    class MultipleChoiceQuestion extends Question {
        public answers: string[];
        public rightAnswers: number[];
        public constructor(_question: string, _answers: string[], _rightAnswers: number[]) {
            
            super(_question);
            this.answers = _answers;
            this.rightAnswers = _rightAnswers;
        }
    }

    let questionArray: Question[] = [
        new YesNoQuestion("War der Begründer der Urknalltheorie ein katholischer Priester?", "Ja"),
        new TextQuestion("Welche Farbe hat das Blut von Perlbooten (Antwort in CAPS)", "BLAU"),
        new SingleQuestion("Aus wie vielen Kräutern ist Jägermeister gebraut", ["42", "56", "52", "69"], 2),
        new GuessQuestion("Wie viele Einkerbungen hat ein Golfball?", 336, 300, 370),
        new MultipleChoiceQuestion("Welche der folgenden Begriffe sind Charaktere von Tolkien?", ["Elendil", "Elronon", "Bilbo", "Celebrían", "Azafen"], [1, 3, 4])
    ];

    let points: number = 0;

    function menu() {
        let userInput: number = 0;
        userInput = +prompt("Willkommen beim Quiz! \n Ihre bisherige Punktzahl beträgt: " + points + "\n Wählen Sie: \n 1 um eine bereits existierende Frage zu beantworten. \n 2 um eine neue Quizfrage zu erstellen. \n 3 um das Programm zu beenden.");
    }
}