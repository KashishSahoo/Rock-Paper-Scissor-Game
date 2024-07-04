let userScore = 0;
let compScore = 0;
let level=0;

const choices = document.querySelectorAll(".choice");
const msg = document.querySelector("#msg");
const round = document.querySelector("#round");
const userPoints=document.querySelector("#user-score");
const compPoints=document.querySelector("#comp-score");

choices.forEach((choice)=>{
    choice.addEventListener("click", () => {
        const userChoice = choice.getAttribute("id");
        playGame(userChoice);
      });

});

const playGame=(userChoice)=>{
    console.log("user choice:",userChoice);
    const  compChoice=genCompChoice();
    console.log("comp choice:",compChoice);
    if(userChoice==compChoice){
     drawGame();
    }
    else{
        let userWin=true;
        if(userChoice=="rock"){
            //comp:scissors or paper
            userWin=compChoice=="paper"? false:true;
        }
        else if(userChoice=="paper"){
            //comp:scissors or rock
            userWin=compChoice=="scissors"? false:true;
        }
        else{
            //comp:paper or rock
            userWin=compChoice=="rock"? false:true;
        }
        showWinner(userWin,userChoice,compChoice);
    }


}

const genCompChoice=()=>{
    let options=["rock","paper","scissors"];
    let randIdx=Math.floor(Math.random()*3);
    let compChoose=document.querySelector(`#${options[randIdx]}`);
    compFlash(compChoose);
    return options[randIdx];
}

const drawGame=()=>{
    console.log("Draw Game");
    msg.innerText="Game Draw";
    msg.style.backgroundColor="orange";
    level++;
    round.innerHTML=`<b>Round:${level}</b>`;
}

const showWinner=(userWin,userChoice,compChoice)=>{
    if(userWin){
        userScore++;
        userPoints.innerText=userScore;
        console.log("You Win");
        msg.innerText=`You win: your ${userChoice} beats ${compChoice}`;
        msg.style.backgroundColor="green";
    }
    else{
        compScore++;
        compPoints.innerText=compScore;
        console.log("You Loose");
        msg.innerText=`You loose:${compChoice} beats ${userChoice}`;
        msg.style.backgroundColor="red";
    }
    level++;
    round.innerHTML=`<b>Round:${level}</b>`;
    if(userScore==5 || compScore==5){
        console.log("stop");
      }
}

function compFlash(compChoose){
    compChoose.classList.add("comp-move");
   setTimeout(()=>{
    compChoose.classList.remove("comp-move");
   },2000);
}



