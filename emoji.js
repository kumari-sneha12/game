let userscore=0;
let computerscore=0;


const choice=document.querySelectorAll(".choice");
let msg=document.querySelector("#msg");
const userscorepara=document.querySelector("#userscore");
const compscorepara=document.querySelector("#computerscore");

const gencompchoice=()=>{
    const options=["rock","paper","scissors"];
    const randIdx=Math.floor(Math.random()*3);
    return options[randIdx];
};

const drawgame=()=>{
    
    msg.innerText="Game was draw!.Play again.";
}
const showwinner=(userwin,userchoice,computerchoice)=>{
    if(userwin){
        userscore++;
        userscorepara.innerText=userscore;
        msg.innerText=`you win! your ${userchoice} beats ${computerchoice}`;
        msg.style.backgroundColor="green";

    }else{
        computerscore++;
        compscorepara.innerText=computerscore;
        msg.innerText=`you lost! ${computerchoice} beats your ${userchoice}`;
        msg.style.backgroundColor="red";
    }
}


const playgame=(userchoice)=>{
    console.log("user choice=",userchoice);
    const computerchoice=gencompchoice();
    console.log("computer choice=", computerchoice);

    if(userchoice===computerchoice){
       drawgame();

    }else{
        let userwin=true;
        if(userchoice==="rock"){
            userwin=computerchoice==="paper"?false:true;
        }else if(userchoice==="paper"){
            userwin=computerchoice==="scissors"?false:true; 
        }else{
            userwin=computerchoice==="rock"?false:true;
        }
        showwinner(userwin,userchoice,computerchoice);
    }
    
};

choice.forEach((choice) => {
    choice.addEventListener("click",()=>{
      const userchoice=choice.getAttribute("id");
      playgame(userchoice);
    });
    
});