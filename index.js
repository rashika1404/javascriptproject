let userScore=0;  //1
let compScore=0;

const choices = document.querySelectorAll(".choice");  //2
const msg=document.querySelector("#msg");
const userScorePara=document.querySelector("#user-score"); //at last
const compScorePara=document.querySelector("#comp-score"); //at last to updte score

const getCompChoice = () => {                         //5
    const options =["paper","scissor","rock"];
    const randmIdx = Math.floor(Math.random()*3);
    return options[randmIdx];
}

const drawGame = () => {                    //7
    console.log("game was draw");
    msg.innerText="game was draw , play again!";
    msg.style.backgroundColor="black";
    
}

const showWinner=(userWin,userChoice,compChoice) => {             //9
    if(userWin===true){
        userScore++;    //at last
        userScorePara.innerText=userScore;   //at last
        msg.innerText=`you win!, your ${userChoice} beats ${compChoice}`;
        msg.style.backgroundColor="green";
    }else{
        compScore++;   //at last to update score
        compScorePara.innerText=compScore;  //atlast
        msg.innerText=`you lose! ,${compChoice} beats your ${userChoice}`;
        msg.style.backgroundColor="red";
    }
}

const playGame = (userChoice) => {           //4
    console.log("userchoice is",userChoice);

const compChoice = getCompChoice();           //6
console.log("compchoice is ",compChoice);

if (userChoice===compChoice){                //8
    drawGame();
}else{
    let userWin = true;
    if(userChoice==="rock"){
        //scissor,paper
        userWin=compChoice==="paper" ? false:true;
    }else if (userChoice==="paper"){
        //rock,scissor
        userWin=compChoice==="scissor" ? false:true;
    }else{
        //paper,rock
        userWin=compChoice==="rock" ? false:true;
    }
    showWinner(userWin,userChoice,compChoice);

}
};

choices.forEach((choice) => {                   //3
    choice.addEventListener("click",() => {
        const userChoice=choice.getAttribute("id");
        playGame(userChoice);

    });

});

