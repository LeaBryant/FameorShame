var questions = [
    {
        question: "What is JavaScript?",
        choices: ["Facebook Event", 
            "Yo Momma", 
            "Off Shore Server", 
            "Client-Side and Server-Side Scripting Language"
        ],
        answers: "Client-Side and Server-Side Scripting Language"
    },
    {
        question: "What are JavaScript Data Types does not belong?",
        choices: ["Strings", 
                "Booleans", 
                "Alerts", 
                "Undefined"],
        answers: "Alerts"
    },
    {
        question: "What is a prompt box?",
        choices: ["A great box of quotes", 
                "Something you can stand on",
                "A box that allows a user to enter input in a text box", 
                "A bike"],
        answers: "A box that allows a user to enter input in a text box",
    },
    {
        question: "Is this symbol used for /* Single line comments or Multiline comments */ in Javascript?",
        choices: [
              "Single line comments",
              "Multiline comments",
            ],
        answers: "Multiline comments",
    },
]

var startEl = document.getElementById("start");
var endEl = document.getElementById("end");
var correctEl = document.getElementById("correct");
var scoreEl = document.getElementById("score");
var initialsEl = document.getElementById("initials")
var submitBtn = document.getElementById("submit");
var headerEl = document.querySelector(".header");
var highscoreEl = document.querySelector(".highscoreBtn");
var timerEl = document.querySelector(".timer");
var questionsEl = document.querySelector(".questions");
var descriptionEl = document.querySelector(".description");
var answersEl = document.querySelector(".answers");
var startBtn = document.querySelector(".start-btn");
var quizEl = document.querySelector(".quiz");
var containerEl = document.querySelector(".container");
var highscoresEl = document.getElementById("highscores");
var olEl = document.querySelector(".ol");
var backBtn = document.querySelector(".back-btn");
var clearBtn = document.querySelector(".clear-btn");

var time = 30;
var queCounter = 0;

var startQuiz = function(){
    
    timerEl.textContent = time;
    countdown = setInterval(timer, 1000);
    startEl.classList.add('hide');

    queFunc();  
}

var queFunc = function() {
    var currentQuestion = questions[queCounter];
    questionsEl.textContent = currentQuestion.question;

    answersEl.innerHTML = "";
  
  currentQuestion.choices.forEach(function(choice, i) {
    
    var answers = document.createElement("button");
    answers.setAttribute("class", "btn answer-btn");
    answers.setAttribute("value", choice);

    answers.textContent = choice;

    answers.addEventListener("click", click);
    
    answersEl.appendChild(answers);

});
}

var click = function() {
    if (this.value === questions[queCounter].answers) {

        correctEl.textContent = "OKAY I SEE YOU KNOWING A LITTLE SOMETHING!";
    }
    else{
        time-= 5;

        if (time < 0) {
            time = 0;
        }

        timerEl.textContent = time;

        correctEl.textContent = "HAHAHA TRY AGAIN LOSER!";
        
    }
    correctEl.classList.remove('hide');

    queCounter++

    if(queCounter === questions.length) {
        endQuiz();
    }
    else{
        queFunc();
    }
}

var endQuiz = function() {
    clearInterval(countdown);
    endEl.classList.remove('hide');
    quizEl.classList.add('hide');

    scoreEl.textContent = time;
}

var timer = function() {
    time--;    
    timerEl.textContent = time;
    if (time <= 0){
        endQuiz();
    }
}

var highscore = function() {
    var initials = initialsEl.value
    if(initials !== ""){
    
    var newScore = {
      score: time,
      initials: initials
    }

    var highscores =JSON.parse(window.localStorage.getItem("highscores")) || [];

    highscores.push(newScore);
    console.log(highscores);

    window.localStorage.setItem("highscores", JSON.stringify(highscores));
    correctEl.classList.add('hide');
    goTohighScores()
    }
}

var goTohighScores = function() {
    headerEl.classList.add('hide');
    containerEl.classList.add('hide');
    highscoresEl.classList.remove('hide');

    var highscores =JSON.parse(window.localStorage.getItem("highscores")) || [];

    highscores.sort(function(a, b) {
        return b.score - a.score;
      });
    
    highscores.forEach(function(score) {

    var liEl = document.createElement("li");
    liEl.textContent = score.initials + " - " + score.score;
    console.log(liEl)
    olEl.appendChild(liEl);
    });


}

var clear = function() {
    localStorage.removeItem("highscores");
    location.reload();
}

var back = function() {
    location.reload();
}

backBtn.addEventListener("click", back);
clearBtn.addEventListener("click", clear);
highscoreEl.addEventListener("click", goTohighScores);
submitBtn.addEventListener("click", highscore);
startBtn.addEventListener("click", startQuiz);
