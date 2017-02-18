var wordList = [
"washington", 
"oregon",
"california",
"idaho",
"nevada",
"arizona",
"utah",
]

var chosenWord =" ";
var letterInChosenWord=[];
var numBlanks = 0;
var blanksAndSuccesses=[];
var wrongGuesses=[];

var winCounter=0;
var lossCounter=0;
var numGuesses = 9;


function startGame(){
  // body...
numGuesses = 9;
blanksAndSuccesses = [];
wrongGuesses = [];

chosenWord = wordList[Math.floor(Math.random() * wordList.length)];
letterInChosenWord = chosenWord.split("");
numBlanks = letterInChosenWord.length;
console.log(chosenWord);
console.log(numBlanks);

for (var i = 0; i < numBlanks; i++){
  blanksAndSuccesses.push("_")
}

console.log(blanksAndSuccesses);

document.getElementById('word-blank').innerHTML = blanksAndSuccesses.join(" ");
document.getElementById('guesses-left').innerHTML = numGuesses;

}


function checkLetters(letter){
  //body
  
  var letterInWord = false;
  
  for (var i = 0; i < numBlanks; i++){
    if(chosenWord[i] === letter){
        letterInWord = true;

      }
    }

if(letterInWord){
  for (i = 0; i < numBlanks; i++){
       if(chosenWord[i] === letter){
      blanksAndSuccesses[i]=letter;
    }
    console.log("inside our checkletter function",blanksAndSuccesses);
    }
  
  }else{
      numGuesses --;
      wrongGuesses.push(letter)
    }
    console.log("our wrong guesses in checkletter function", wrongGuesses);

}




function roundComplete() {
  // body...
document.getElementById('word-blank').innerHTML = blanksAndSuccesses.join(" ");
document.getElementById('guesses-left').innerHTML= numGuesses;
document.getElementById('wrong-guesses').innerHTML=wrongGuesses.join(" ");

if(letterInChosenWord.join(" ") === blanksAndSuccesses.join(" ")){
  winCounter++;
  alert("You win!!");
  document.getElementById('win-counter').innerHTML= winCounter;
  startGame();
}else if(numGuesses === 0){
  document.getElementById('loss-counter').innerHTML = lossCounter ++;
  alert("Out Of Guesses");
  startGame();
}
}



startGame();

document.onkeyup = function(event){
  // body...

var letterGuessed = String.fromCharCode(event.keyCode).toLowerCase();
console.log("this is letter we typed", letterGuessed)
checkLetters(letterGuessed)
roundComplete();


}



