let userScore=0;
let compScore=0;
let msgPara=document.getElementById("msg");
const userWins=document.getElementById("user-score");
const compWins=document.getElementById("comp-score");

const choices=document.querySelectorAll(".choice");

const generateComp=()=>{
    const choices=["rock","paper","scissor"];
    let idx=Math.floor(Math.random()*3);
    let compChoice=choices[idx];
   return compChoice;
}

const playGame=(userChoice,compChoice)=>{
    if(userChoice===compChoice){
        msgPara.textContent="Game is draw! Play Again";
        msgPara.style.backgroundColor="grey";
    }
    else if((userChoice==="rock" && compChoice==="scissor") || (userChoice==="scissor" && compChoice==="paper") || (userChoice==="paper" && compChoice==="rock")){
        msgPara.textContent=`You win! Your ${userChoice} beats ${compChoice}`;
        msgPara.style.backgroundColor="green";
        userWins.innerText=++userScore;
    }
    else{
        msgPara.textContent=`You lost! ${compChoice} beats yours ${userChoice}`;
        msgPara.style.backgroundColor="red";
        compWins.innerText=++compScore;
    }
}

choices.forEach((choice)=>{
    choice.addEventListener("click",()=>{
        const userChoice=choice.getAttribute("id");
        const compChoice=generateComp();
        playGame(userChoice,compChoice);
    })
})
