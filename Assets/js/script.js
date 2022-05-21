const quizData = [
    {
        question: "Which language runs in a web browser?",
        a: "Java",
        b: "C",
        c: "Python",
        d: "javascript",
        correct: "d",
    },
    {
        question: "What does CSS stand for?",
        a: "Central Style Sheets",
        b: "Cascading Style Sheets",
        c: "Cascading Simple Sheets",
        d: "Cars SUVs Sailboats",
        correct: "b",
    },
    {
        question: "What does HTML stand for?",
        a: "Hypertext Markup Language",
        b: "Hypertext Markdown Language",
        c: "Hyperloop Machine Language",
        d: "Helicopters Terminals Motorboats Lamborginis",
        correct: "a",
    },
    {
        question: "What year was JavaScript launched?",
        a: "1996",
        b: "1995",
        c: "1994",
        d: "none of the above",
        correct: "b",
    },


];

const quiz= document.getElementById('quiz')
const answerEls = document.querySelectorAll('.answer')
const questionEl = document.getElementById('question')
const a_text = document.getElementById('a_text')
const b_text = document.getElementById('b_text')
const c_text = document.getElementById('c_text')
const d_text = document.getElementById('d_text')
const submitBtn = document.getElementById('submit')


let currentQuiz = 0
let score = 0

loadQuiz()

function loadQuiz() {

    deselectAnswers()

    const currentQuizData = quizData[currentQuiz]

    questionEl.innerText = currentQuizData.question
    a_text.innerText = currentQuizData.a
    b_text.innerText = currentQuizData.b
    c_text.innerText = currentQuizData.c
    d_text.innerText = currentQuizData.d
}

function deselectAnswers() {
    answerEls.forEach(answerEl => answerEl.checked = false)
}

function getSelected() {
    let answer
    answerEls.forEach(answerEl => {
        if(answerEl.checked) {
            answer = answerEl.id
        }
    })
    return answer
}


submitBtn.addEventListener('click', () => {
    const answer = getSelected()
    if(answer) {
       if(answer === quizData[currentQuiz].correct) {
           score++
       }

       currentQuiz++

       if(currentQuiz < quizData.length) {
           loadQuiz()
       } else {
           quiz.innerHTML = `
           <h2>You answered ${score}/${quizData.length} questions correctly</h2>

           <button onclick="location.reload()">Reload</button>
           `
       }
    }
})


// var wordBox = document.querySelector("word-box")
// var words = [word, wordtwo]
// var wordUsed;
// var letters = [];
// var blank = [];

// function randomWord () {
//     wordUsed = words[Math.floor(Math.random()* words.length).split("")];
//     letters=wordUsed.split("");
//     console.log(wordUsed);
// }

// function showWord(){
//     var P =document.createElement("p");
//     P.textContent = wordUsed;
//     wordBox.appendChild(p)
// }
// randomWord();
// showWord();
// console.log(letters);

// for (var i; i < wordUsed.length; i++){

//     blank.push("_").join("");
// }
// console.log(blank);

// wordBox.addEventListener("key",function(event){
//     console.log(event.key);
// });

// startButton.addEventListener

// function buildQuiz(){}
// function showResults(){}


// const quizContainer = document.getElementById('quiz');
// const resultsContainer = document.getElementById('results');
// const submitButton = document.getElementById('submit');


// // display quiz right away
// buildQuiz();
//  // variable to store the HTML output
// function buildQuiz(){
// const myQuestions = [
//     {
//       question: "Who invented JavaScript?",
//       answers: {
//         a: "Douglas Crockford",
//         b: "Sheryl Sandberg",
//         c: "Brendan Eich"
//       },
//       correctAnswer: "c"
//     },
//     {
//       question: "Which one of these is a JavaScript package manager?",
//       answers: {
//         a: "Node.js",
//         b: "TypeScript",
//         c: "npm"
//       },
//       correctAnswer: "c"
//     },
//     {
//       question: "Which tool can you use to ensure code quality?",
//       answers: {
//         a: "Angular",
//         b: "jQuery",
//         c: "RequireJS",
//         d: "ESLint"
//       },
//       correctAnswer: "d"
//     }
//   ];
//     const output = [];
  
//     // for each question...
//     myQuestions.forEach(
//       (currentQuestion, questionNumber) => {
  
//         // variable to store the list of possible answers
//         const answers = [];
  
//         // and for each available answer...
//         for(letter in currentQuestion.answers){
  
//           // ...add an HTML radio button
//           answers.push(
//             `<label>
//               <input type="radio" name="question${questionNumber}" value="${letter}">
//               ${letter} :
//               ${currentQuestion.answers[letter]}
//             </label>`
//           );
//         }
  
//         // add this question and its answers to the output
//         output.push(
//           `<div class="question"> ${currentQuestion.question} </div>
//           <div class="answers"> ${answers.join('')} </div>`
//         );
//       }
//     );
  
//     // finally combine our output list into one string of HTML and put it on the page
//     quizContainer.innerHTML = output.join('');
//   }
//   myQuestions.forEach( (currentQuestion, questionNumber) => {
//     // the code we want to run for each question goes here
//     const answers = [];

//     // and for each available answer...
//     for(letter in currentQuestion.answers){
    
//       // ...add an html radio button
//       answers.push(
//         `<label>
//           <input type="radio" name="question${questionNumber}" value="${letter}">
//           ${letter} :
//           ${currentQuestion.answers[letter]}
//         </label>`
//       );
//     }
    
//     // add this question and its answers to the output
//     output.push(
//       `<div class="question"> ${currentQuestion.question} </div>
//       <div class="answers"> ${answers.join('')} </div>`
//     );
//   });
//   quizContainer.innerHTML = output.join('');

//   submitButton.addEventListener('click', showResults);














// // function generateQuiz(questions, quizContainer, resultsContainer, submitButton){

// // 	function showQuestions(questions, quizContainer){
// // 		// code will go here
// // 	}

// // 	function showResults(questions, quizContainer, resultsContainer){
// // 		// code will go here
// // 	}

// 	// show the questions
// 	showQuestions(questions, quizContainer);

// 	// when user clicks submit, show results
// 	submitButton.onclick = function(){
// 		showResults(questions, quizContainer, resultsContainer);
// 	}
// }
// var myQuestions = [
// 	{
// 		question: "What is 10/2?",
// 		answers: {
// 			a: '3',
// 			b: '5',
// 			c: '115'
// 		},
// 		correctAnswer: 'b'
// 	},
// 	{
// 		question: "What is 30/3?",
// 		answers: {
// 			a: '3',
// 			b: '5',
// 			c: '10'
// 		},
// 		correctAnswer: 'c'
// 	}
// ];
// function showQuestions(questions, quizContainer){
// 	// we'll need a place to store the output and the answer choices
// 	var output = [];
// 	var answers;

// 	// for each question...
// 	for(var i=0; i<questions.length; i++){
// 		// first reset the list of answers
// 		answers = [];
// 		// for each available answer to this question...
// 		for(letter in questions[i].answers){
// 			// ...add an html radio button
// 			answers.push(
// 				'<label>'
// 					+ '<input type="radio" name="question'+i+'" value="'+letter+'">'
// 					+ letter + ': '
// 					+ questions[i].answers[letter]
// 				+ '</label>'
// 			);
// 		}

// 		// add this question and its answers to the output
// 		output.push(
// 			'<div class="question">' + questions[i].question + '</div>'
// 			+ '<div class="answers">' + answers.join('') + '</div>'
// 		);
// 	}

// 	// finally combine our output list into one string of html and put it on the page
// 	quizContainer.innerHTML = output.join('');
// }
// showQuestions(questions, quizContainer);


// function showResults(questions, quizContainer, resultsContainer){
	
// 	// gather answer containers from our quiz
// 	var answerContainers = quizContainer.querySelectorAll('.answers');
	
// 	// keep track of user's answers
// 	var userAnswer = '';
// 	var numCorrect = 0;
	
// 	// for each question...
// 	for(var i=0; i<questions.length; i++){

// 		// find selected answer
// 		userAnswer = (answerContainers[i].querySelector('input[name=question'+i+']:checked')||{}).value;
		
// 		// if answer is correct
// 		if(userAnswer===questions[i].correctAnswer){
// 			// add to the number of correct answers
// 			numCorrect++;
			
// 			// color the answers green
// 			answerContainers[i].style.color = 'lightgreen';
// 		}
// 		// if answer is wrong or blank
// 		else{
// 			// color the answers red
// 			answerContainers[i].style.color = 'red';
// 		}
// 	}

// 	// show number of correct answers out of total
// 	resultsContainer.innerHTML = numCorrect + ' out of ' + questions.length;
// }


// submitButton.onclick = function(){
// 	showResults(questions, quizContainer, resultsContainer);
// }
// generateQuiz(myQuestions, quizContainer, resultsContainer, submitButton);
