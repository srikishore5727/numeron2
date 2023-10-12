let number1 = document.getElementById("number1");
let number2 = document.getElementById("number2");
let number3 = document.getElementById("number3");

let buttons = document.getElementById("buttons")
let timer = document.getElementById("timer");


let randomNumber1;
let randomNumber2;
let arr;
let operators;
function displayNumbers(){
    randomNumber1  = randomNumbers(1,100);
    randomNumber2 = randomNumbers(1,100);
    let randomNumber3 = generateRandom3();
    number1.textContent = randomNumber1;
    number2.textContent = randomNumber2;
    number3.textContent = randomNumber3;
}

displayNumbers();

// Iteration 2: Generating two random numbers (0 to 100) and displaying the same in the game.html

function randomNumbers(min,max){
    return Math.floor(Math.random()*max)+min;
}

// Iteration 3: Creating variables required to make the game functional
function generateRandom3(){
    arr = ["+","-","*","/","%"];
    operators = randomNumbers(0,arr.length);
    let output;
    if(arr[operators]=="+"){
        output = randomNumber1 +randomNumber2;
    }else if(arr[operators]=="-"){
        output = randomNumber1 - randomNumber2;
    }else if(arr[operators]=="*"){
        output = randomNumber1 * randomNumber2;
    }else if(arr[operators]=="/"){
        output = Math.floor(randomNumber1 / randomNumber2);
    }else if(arr[operators]=="%"){
        output = randomNumber1 % randomNumber2;
    }

    return output;
}
buttons.addEventListener("click",checkOperator);

let score = 0;

function checkOperator(e){
    if(e.target.id=="plus" && arr[operators] == "+"){
        score++;
        displayNumbers();
    }else if(e.target.id=="minus" && arr[operators] == "-"){
        score++;
        displayNumbers();
    }else if(e.target.id=="mul" && arr[operators] == "*"){
        score++;
        displayNumbers();
    }else if(e.target.id=="divide" && arr[operators] == "/"){
        score++;
        displayNumbers();
    }else if(e.target.id=="modulus" && arr[operators] == "%"){
        score++;
        displayNumbers();
    }else{
        gameOver();
    }
}

setInterval(showtime,1000);
let time = 20;

function showtime(){
    if(time==0){
        gameOver();
    }else{
        time--;
        timer.innerText = time;
    }
}


function gameOver(){
    localStorage.setItem("total",score);
    location.href = "gameover.html";
}
// Iteration 4: Creating a variable for number 3 and a variable for storing the html element with the Id "number3"




// Iteration 5: Creating a randomise function to make the game functional

// Iteration 6: Making the Operators (button) functional

// Iteration 7: Making Timer functional
