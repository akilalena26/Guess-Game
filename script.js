let again = document.querySelector(".again")
let input = document.querySelector(".guess")
let number = document.querySelector(".number")
let score = document.querySelector(".score")
let highscore = document.querySelector(".highscore");
let checkbutton = document.querySelector(".check");
let bodyele = document.querySelector("body")
let message = document.querySelector(".message")

let scorevalue= 20;
let highscorevalue = 0;

let secretnumber = Math.random() * 20 + 1;
secretnumber = Math.floor(secretnumber);
console.log(secretnumber);

again.addEventListener("click",
    function(event){
        number.textContent = "?";
        bodyele.style.backgroundColor = "black";
        message.textContent = "Start guessing...";
        scorevalue = 20;
        score.textContent = 20;
        input.value = 0
    }
)

checkbutton.addEventListener("click",
    function(event)
    {
    let numInt = input.value  * 1;
    if( numInt === secretnumber)
        {
        bodyele.style.backgroundColor = 'green'  // background
        message.textContent = "Correct Number!!!";  // message
        if ( scorevalue > highscorevalue){    // compare
            highscorevalue = scorevalue;
            highscore.textContent = highscorevalue;
        }
    }else {
        if (scorevalue > 1) {
            message.textContent = numInt > secretnumber ? 'Too high!' : 'Too low!';
            scorevalue -= 1;
            score.textContent = scorevalue;
        }
        else {
            message.textContent = 'You lost the game!';
            score.textContent = 0;
            input.disabled = true;
            checkbutton.disabled = true;
            bodyele.style.backgroundColor = 'red'; // Change background color to red on loss
        }
    }
});