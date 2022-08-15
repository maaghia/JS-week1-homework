// Prepare quiz (questions, answers and correct answer)
const quizData = [
    {
        question: "What is the correct way to declare a variable in JS",
        a: "let x = 10;",
        b: "new variable = 'text'",
        c: "const turns;",
        d: "var 8pool = 8",
        correct: "a",
    },
    {
        question: "What does HTML stand for?",
        a: "Cascading Style Sheet",
        b: "Jason Object Notation",
        c: "HyperText Markup Language",
        d: "Helicopters Terminals Motorbikes Laces",
        correct: "c",
    },
    {
        question: "What year was JS launched?",
        a: "1990",
        b: "1995",
        c: "1996",
        d: "1997",
        correct: "b",
    }
]

const question = {
    question: "Where is the correct place to insert a JavaScript?",
    a: "The <body> section",
    b: "The <head> section",
    c: "All of the above",
    d: "None of the above",
    correct: "c",
}
quizData.push(question); 

const newquestion = {
    question: "Inside which HTML element do we put the JavaScript?",
        a: "<script>",
        b: "<javascript>",
        c: "<scripting>",
        d: "<js>",
        correct: "a",
}
quizData.push(newquestion);


console.log(quizData.length)

// Show first question from the quiz when first loading the page
const questionEl = document.getElementById("question");
const answerElements = document.querySelectorAll(".answer");
const a_text = document.getElementById("a_text");
const b_text = document.getElementById("b_text");
const c_text = document.getElementById("c_text");
const d_text = document.getElementById("d_text");
const submitBtn = document.getElementById("submit")
const quiz = document.getElementById("quiz");
const date = document.getElementById("date");

let currentQuiz = 0
let score = 0

//for the countdown
var countdownNumberEl = document.getElementById('countdown-number');
var countdown = 30;
countdownNumberEl.textContent = countdown; 


setInterval(function() {
    countdown = --countdown <= 0 ? 30 : countdown;
    countdownNumberEl.textContent = countdown;
  }, 1000);

loadQuiz()

function loadQuiz() {

    deselectAnswers()
    countdown = 30;
    
    //when time is out
    if (countdown==0){
        //keep counet at zero
        countdown = 0;
        //disable inputs
        document.getElementById("a").disabled = true;
        document.getElementById("b").disabled = true;
        document.getElementById("c").disabled = true;
        document.getElementById("d").disabled = true;
        //change some colors to red
    }
    const currentQuizData = quizData[currentQuiz];
    console.log(currentQuizData);


    questionEl.innerText = currentQuizData.question;
    a_text.innerText = currentQuizData.a;
    b_text.innerText = currentQuizData.b;
    c_text.innerText = currentQuizData.c;
    d_text.innerText = currentQuizData.d;
}

function getSelected() {
    let answer;

    for (let i = 0; i < answerElements.length; i++) {
        if (answerElements[i].checked) {
            answer = answerElements[i].id;
        }
    }

    console.log('answer ' + answer);
    return answer

}

function deselectAnswers() {
    for (let i = 0; i < answerElements.length; i++) {
        answerElements[i].checked = false
    }
}

submitBtn.addEventListener("click", () => {
    const answer = getSelected() // a

    if (answer) { // if there is an answer
        if (answer === quizData[currentQuiz].correct) {
            console.log("correct answer")
            score++;
        }

        currentQuiz++

        if (currentQuiz < quizData.length) {
            loadQuiz();
        } else {
            quiz.innerHTML = `
                <h2>Quiz Finished. You have ${score} out of ${quizData.length} correct answers.</h2>
                <button onclick="location.reload()">Reload Quiz </button>
                `
        }

    } else {
        console.log("no answer selected!")
    }
})

let getDate = new Date(Date.now()).toLocaleString().split(',')[0];
date.innerHTML = getDate

// Add a countr and disable inputs after time elapsed

// Change some colors to red when time left = 0
    // Hints: Make some reset functions to reset the quiz (ex: reset colors from red to default - reset timer - reset score ...)

    // Add new questions:
    // hint: create new input => grab the value => push it to the array of questions => load quiz again
// pass more quizzes = one array / quiz 
