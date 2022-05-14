var wordBox = document.querySelector("word-box")
var words = [word, wordtwo]
var wordUsed;
var letters = [];
var blank = [];

function randomWord () {
    wordUsed = words[Math.floor(Math.random()* words.length).split("")];
    letters=wordUsed.split("");
    console.log(wordUsed);
}

function showWord(){
    var P =document.createElement("p");
    P.textContent = wordUsed;
    wordBox.appendChild(p)
}
randomWord();
showWord();
console.log(letters);

for (var i; i < wordUsed.length; i++){

    blank.push("_").join("");
}
console.log(blank);

wordBox.addEventListener("key",function(event){
    console.log(event.key);
});

startButton.addEventListener