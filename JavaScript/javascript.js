let score = JSON.parse(localStorage.getItem("score"))||{wins:0,loses:0,ties:0};
let autoplayToggle = false;
let AutoplayId;

document.querySelector(".score-display").innerHTML = `Wins : ${score.wins}, Loses : ${score.loses}, Ties : ${score.ties}`;

function displayScore(){
    document.querySelector(".score-display").innerHTML = `Wins : ${score.wins}, Loses : ${score.loses}, Ties : ${score.ties}`;
}

function displayTurn(result, computer, you){
    document.querySelector(".result-display").innerHTML = `${result}`;
    document.querySelector(".turn-display").innerHTML = `You selected <img class="result-emoji" src="Images/${you}-emoji.png">, computer selected <img class="result-emoji" src="Images/${computer.toLowerCase()}-emoji.png">`;
}

function getNumber(){
    let number = (Math.random() * 120);
    return number<40?"Rock":(number<80?"Paper":"Scissor");
}

function rock(){
    let computer = getNumber();
    let result = '';
    if(computer == 'Rock'){
        result = 'You Tied !';
        score.ties++;
    }
    else if(computer == 'Scissor'){
        result = 'You Win !';
        score.wins++;
    }
    else{
        result = 'You Lose !';
        score.loses++;
    }
    displayScore();
    displayTurn(result, computer,'rock');
    localStorage.setItem('score', JSON.stringify(score));            
}

function paper(){
    computer = getNumber();
    result = '';
    if(computer == 'Paper'){
        result = 'You Tied !';
        score.ties++;
    }
    else if(computer == 'Rock'){
        result = 'You Win !';
        score.wins++;
    }
    else{
        result = 'You Lose !';
        score.loses++;
    }
    displayScore();
    displayTurn(result, computer,'paper');
    localStorage.setItem('score', JSON.stringify(score));
}

function scissor(){
    computer = getNumber();
    result = '';
    if(computer == 'Scissor'){
        result = 'You Tied !';
        score.ties++;
    }
    else if(computer == 'Paper'){
        result = 'You Win !';
        score.wins++;
    }
    else{
        result = 'You Lose !';
        score.loses++;
    }
    displayScore();
    displayTurn(result, computer,'scissor');
    localStorage.setItem('score', JSON.stringify(score));
}

function reset(){
    score={wins:0, loses:0, ties:0};
    displayScore();
    localStorage.setItem('score', JSON.stringify(score));
    }

function autoplay(){
    if(!autoplayToggle){
        document.querySelector('.autoplay-button').innerHTML = `Stop Autoplay`;
        AutoplayId = setInterval(function(){
            let you = getNumber();
            if(you=='Rock')rock();
            else if(you=='Paper')paper();
            else scissor();
        }, 1000);
        autoplayToggle = true;
    }
    else{
        document.querySelector('.autoplay-button').innerHTML = `Autoplay`;
        clearInterval(AutoplayId);
        autoplayToggle = false;
    }
}