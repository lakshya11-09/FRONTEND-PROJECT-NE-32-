
const TOTAL_QUESTIONS = 15;

const questionBank = [
  {
    "id": 1,
    "question": "Which HTML tag is used to define the largest heading?",
    "options": ["<h1>", "<heading>", "<h6>", "<head>"],
    "answer": 0,
    "tags": ["html"]
  },
  {
    "id": 2,
    "question": "What does CSS stand for?",
    "options": ["Creative Style Sheets", "Cascading Style Sheets", "Computer Style Sheets", "Colorful Style Sheets"],
    "answer": 1,
    "tags": ["css"]
  },
  {
    "id": 3,
    "question": "Which property is used to change the background color in CSS?",
    "options": ["color", "bgcolor", "background-color", "background"],
    "answer": 2,
    "tags": ["css"]
  },
  {
    "id": 4,
    "question": "Which HTML element is used for inserting a line break?",
    "options": ["<break>", "<br>", "<lb>", "<line>"],
    "answer": 1,
    "tags": ["html"]
  },
  {
    "id": 5,
    "question": "In JavaScript, which keyword is used to declare a variable?",
    "options": ["var", "let", "const", "All of the above"],
    "answer": 3,
    "tags": ["javascript"]
  },
  {
    "id": 6,
    "question": "Which attribute is used in HTML to provide a unique name to an element?",
    "options": ["class", "id", "style", "name"],
    "answer": 1,
    "tags": ["html"]
  },
  {
    "id": 7,
    "question": "Which of the following is NOT a valid CSS unit?",
    "options": ["px", "em", "pt", "dp"],
    "answer": 3,
    "tags": ["css"]
  },
  {
    "id": 8,
    "question": "What does DOM stand for?",
    "options": ["Document Object Model", "Display Object Management", "Digital Ordinance Model", "Desktop Oriented Mode"],
    "answer": 0,
    "tags": ["javascript"]
  },
  {
    "id": 9,
    "question": "Which Bootstrap class is used to make an element responsive?",
    "options": ["img-fixed", "img-responsive", "image-fluid", "img-fluid"],
    "answer": 3,
    "tags": ["bootstrap"]
  },
  {
    "id": 10,
    "question": "Which HTML attribute is used to specify inline CSS styles?",
    "options": ["font", "style", "css", "design"],
    "answer": 1,
    "tags": ["html"]
  },
  {
    "id": 11,
    "question": "Which CSS property controls the text size?",
    "options": ["font-style", "text-size", "font-size", "text-style"],
    "answer": 2,
    "tags": ["css"]
  },
  {
    "id": 12,
    "question": "Which JavaScript method is used to write HTML output?",
    "options": ["document.write()", "console.log()", "window.write()", "document.output()"],
    "answer": 0,
    "tags": ["javascript"]
  },
  {
    "id": 13,
    "question": "Which tag is used to link an external CSS file?",
    "options": ["<style>", "<link>", "<script>", "<css>"],
    "answer": 1,
    "tags": ["html"]
  },
  {
    "id": 14,
    "question": "What is the default display value of a <div> element?",
    "options": ["inline", "block", "flex", "grid"],
    "answer": 1,
    "tags": ["css"]
  },
  {
    "id": 15,
    "question": "Which symbol is used for comments in JavaScript?",
    "options": ["//", "/*", "#", "<!-- -->"],
    "answer": 0,
    "tags": ["javascript"]
  },
  {
    "id": 16,
    "question": "Which Bootstrap class adds padding inside a container?",
    "options": ["p-3", "m-3", "padding-3", "pd-3"],
    "answer": 0,
    "tags": ["bootstrap"]
  },
  {
    "id": 17,
    "question": "In React, what does JSX stand for?",
    "options": ["JavaScript XML", "Java Syntax Extension", "JavaScript Extension", "JSON XML"],
    "answer": 0,
    "tags": ["react"]
  },
  {
    "id": 18,
    "question": "Which HTML tag is used to display a numbered list?",
    "options": ["<ul>", "<ol>", "<li>", "<dl>"],
    "answer": 1,
    "tags": ["html"]
  },
  {
    "id": 19,
    "question": "Which CSS property makes text bold?",
    "options": ["text-weight", "font-weight", "font-style", "bold"],
    "answer": 1,
    "tags": ["css"]
  },
  {
    "id": 20,
    "question": "Which JavaScript method is used to convert a string to an integer?",
    "options": ["parseInt()", "parseFloat()", "Number()", "String()"],
    "answer": 0,
    "tags": ["javascript"]
  },
  {
    "id": 21,
    "question": "Which Bootstrap class is used to create a button?",
    "options": ["btn", "button", "bt", "bttn"],
    "answer": 0,
    "tags": ["bootstrap"]
  },
  {
    "id": 22,
    "question": "Which tag is used to create a hyperlink in HTML?",
    "options": ["<link>", "<a>", "<href>", "<url>"],
    "answer": 1,
    "tags": ["html"]
  },
  {
    "id": 23,
    "question": "Which CSS property changes the text color?",
    "options": ["font-color", "color", "text-color", "foreground"],
    "answer": 1,
    "tags": ["css"]
  },
  {
    "id": 24,
    "question": "In JavaScript, what is the output of typeof null?",
    "options": ["object", "null", "undefined", "string"],
    "answer": 0,
    "tags": ["javascript"]
  },
  {
    "id": 25,
    "question": "Which Bootstrap class centers text?",
    "options": ["text-center", "text-align-center", "center-text", "align-center"],
    "answer": 0,
    "tags": ["bootstrap"]
  },
  {
    "id": 26,
    "question": "What is the root element of an HTML document?",
    "options": ["<html>", "<head>", "<body>", "<root>"],
    "answer": 0,
    "tags": ["html"]
  },
  {
    "id": 27,
    "question": "Which CSS property is used to change font type?",
    "options": ["font-family", "font-type", "font-style", "text-font"],
    "answer": 0,
    "tags": ["css"]
  },
  {
    "id": 28,
    "question": "Which JavaScript function displays a popup message?",
    "options": ["alert()", "message()", "popup()", "confirm()"],
    "answer": 0,
    "tags": ["javascript"]
  },
  {
    "id": 29,
    "question": "In Bootstrap, which class is used to create a grid row?",
    "options": ["row", "grid-row", "container", "line"],
    "answer": 0,
    "tags": ["bootstrap"]
  },
  {
    "id": 30,
    "question": "Which React hook is used to handle state?",
    "options": ["useEffect", "useState", "useRef", "useContext"],
    "answer": 1,
    "tags": ["react"]
  },
  {
    "id": 31,
    "question": "Which HTML tag is used to display an image?",
    "options": ["<image>", "<img>", "<src>", "<pic>"],
    "answer": 1,
    "tags": ["html"]
  },
  {
    "id": 32,
    "question": "Which CSS property controls line spacing?",
    "options": ["line-height", "text-height", "line-spacing", "spacing"],
    "answer": 0,
    "tags": ["css"]
  },
  {
    "id": 33,
    "question": "In JavaScript, what does '===' operator check?",
    "options": ["Equality of value only", "Equality of value and type", "Inequality", "Assignment"],
    "answer": 1,
    "tags": ["javascript"]
  },
  {
    "id": 34,
    "question": "Which Bootstrap class makes an element hidden on small screens?",
    "options": ["d-sm-none", "d-none-sm", "hidden-sm", "invisible-sm"],
    "answer": 0,
    "tags": ["bootstrap"]
  },
  {
    "id": 35,
    "question": "What is the correct syntax to include an external JavaScript file?",
    "options": ["<script src='file.js'>", "<script href='file.js'>", "<js src='file.js'>", "<link src='file.js'>"],
    "answer": 0,
    "tags": ["html"]
  },
  {
    "id": 36,
    "question": "Which CSS property is used to make corners rounded?",
    "options": ["border", "corner-radius", "border-radius", "radius"],
    "answer": 2,
    "tags": ["css"]
  },
  {
    "id": 37,
    "question": "Which JavaScript method removes the last element of an array?",
    "options": ["shift()", "pop()", "remove()", "splice()"],
    "answer": 1,
    "tags": ["javascript"]
  },
  {
    "id": 38,
    "question": "In Bootstrap, which class is used to make a container full width?",
    "options": ["container-fluid", "container-full", "container-wide", "container-100"],
    "answer": 0,
    "tags": ["bootstrap"]
  },
  {
    "id": 39,
    "question": "Which HTML tag is used to define a table row?",
    "options": ["<tr>", "<td>", "<table-row>", "<row>"],
    "answer": 0,
    "tags": ["html"]
  },
  {
    "id": 40,
    "question": "Which CSS property sets the space outside an element?",
    "options": ["padding", "margin", "border", "spacing"],
    "answer": 1,
    "tags": ["css"]
  },
  {
    "id": 41,
    "question": "Which JavaScript keyword is used to define a constant?",
    "options": ["var", "let", "const", "static"],
    "answer": 2,
    "tags": ["javascript"]
  },
  {
    "id": 42,
    "question": "Which Bootstrap class adds shadow to an element?",
    "options": ["shadow", "box-shadow", "shadow-sm", "shadow-lg"],
    "answer": 0,
    "tags": ["bootstrap"]
  },
  {
    "id": 43,
    "question": "In React, which method is used to render UI?",
    "options": ["display()", "render()", "show()", "mount()"],
    "answer": 1,
    "tags": ["react"]
  },
  {
    "id": 44,
    "question": "Which HTML element represents a navigation link section?",
    "options": ["<nav>", "<header>", "<section>", "<menu>"],
    "answer": 0,
    "tags": ["html"]
  },
  {
    "id": 45,
    "question": "Which CSS property defines the order of flex items?",
    "options": ["flex-order", "order", "item-order", "sequence"],
    "answer": 1,
    "tags": ["css"]
  },
  {
    "id": 46,
    "question": "Which JavaScript method joins array elements into a string?",
    "options": ["join()", "concat()", "merge()", "toString()"],
    "answer": 0,
    "tags": ["javascript"]
  },
  {
    "id": 47,
    "question": "In Bootstrap, which class is used for a primary button?",
    "options": ["btn btn-main", "btn btn-primary", "button-primary", "btn-primary"],
    "answer": 1,
    "tags": ["bootstrap"]
  },
  {
    "id": 48,
    "question": "In React, which hook is used to perform side effects?",
    "options": ["useState", "useEffect", "useRef", "useMemo"],
    "answer": 1,
    "tags": ["react"]
  },
  {
    "id": 49,
    "question": "Which HTML tag is used to show a tooltip when hovering over an element?",
    "options": ["title", "tooltip", "hover", "hint"],
    "answer": 0,
    "tags": ["html"]
  },
  {
    "id": 50,
    "question": "Which CSS property specifies how an image or video is resized to fit its container?",
    "options": ["object-fit", "resize", "fit-content", "background-size"],
    "answer": 0,
    "tags": ["css"]
  }
];


let selectedQuestions = [];

let userAnswers = [];

let currentQuestionIndex = 0;

const startScreen = document.getElementById("start-screen");
const quizScreen = document.getElementById("quiz-screen");
const resultScreen = document.getElementById("result-screen");

const questionNumberDiv = document.getElementById("question-number");
const questionTextDiv = document.getElementById("question-text");
const optionsDiv = document.getElementById("options");

const resultTotalSpan = document.getElementById("result-total");
const resultAttemptedSpan = document.getElementById("result-attempted");
const resultCorrectSpan = document.getElementById("result-correct");
const resultWrongSpan = document.getElementById("result-wrong");
const resultPercentageSpan = document.getElementById("result-percentage");

function startQuiz() {

    userAnswers = new Array(TOTAL_QUESTIONS).fill(null);
    currentQuestionIndex = 0;

    selectedQuestions = getRandomQuestions(questionBank, TOTAL_QUESTIONS);

    startScreen.classList.add("hidden");
    resultScreen.classList.add("hidden");
    quizScreen.classList.remove("hidden");

    showQuestion();
}


function getRandomQuestions(allQuestions, n) {
    const shuffled = allQuestions.slice();


    for (let i = shuffled.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        const temp = shuffled[i];
        shuffled[i] = shuffled[j];
        shuffled[j] = temp;
    }

 
    return shuffled.slice(0, n);
}

function showQuestion() {
    const currentQuestion = selectedQuestions[currentQuestionIndex];


    questionNumberDiv.textContent =
        "Question " + (currentQuestionIndex + 1) + " of " + TOTAL_QUESTIONS;


    questionTextDiv.textContent = currentQuestion.question;

    optionsDiv.innerHTML = "";


    for (let i = 0; i < currentQuestion.options.length; i++) {
        const optionText = currentQuestion.options[i];
        const optionId = "option" + i;

        const div = document.createElement("div");
        div.className = "option-item";

        const input = document.createElement("input");
        input.type = "radio";
        input.name = "option";
        input.id = optionId;
        input.value = i;

        if (userAnswers[currentQuestionIndex] === i) {
            input.checked = true;
        }

        input.onclick = function () {
            selectOption(i);
        };

        const label = document.createElement("label");
        label.htmlFor = optionId;
        label.textContent = optionText;

        div.appendChild(input);
        div.appendChild(label);

        optionsDiv.appendChild(div);
    }
}


function selectOption(optionIndex) {
    userAnswers[currentQuestionIndex] = optionIndex;
}

function nextQuestion() {
    if (currentQuestionIndex < TOTAL_QUESTIONS - 1) {
        currentQuestionIndex++;
        showQuestion();
    }
}


function prevQuestion() {
    if (currentQuestionIndex > 0) {
        currentQuestionIndex--;
        showQuestion();
    }
}


function submitQuiz() {
    let correct = 0;
    let attempted = 0;
    let wrong = 0;

    for (let i = 0; i < TOTAL_QUESTIONS; i++) {
        const userAnswer = userAnswers[i];
        const correctAnswer = selectedQuestions[i].answer;

        if (userAnswer !== null) {
            attempted++;
            if (userAnswer === correctAnswer) {
                correct++;
            } else {
                wrong++;
            }
        }
    }

    const percentage = Math.round((correct / TOTAL_QUESTIONS) * 100);


    resultTotalSpan.textContent = TOTAL_QUESTIONS;
    resultAttemptedSpan.textContent = attempted;
    resultCorrectSpan.textContent = correct;
    resultWrongSpan.textContent = wrong;
    resultPercentageSpan.textContent = percentage;


    quizScreen.classList.add("hidden");
    resultScreen.classList.remove("hidden");
}


function restartQuiz() {
    startScreen.classList.remove("hidden");
    quizScreen.classList.add("hidden");
    resultScreen.classList.add("hidden");

}

