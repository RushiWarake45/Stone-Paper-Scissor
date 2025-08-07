let userscore=0;
let compscore=0;
const choices=document.querySelectorAll(".choice");
const msg=document.querySelector("#playtext");
const usersc=document.querySelector("#user-score");
const compsc=document.querySelector("#comp-score");

const createCompChoice=()=>{
    const option=["stone","paper","scissor"];
    const rnd=Math.floor(Math.random()*3);
    return option[rnd];
}
const drawgame=()=>{

    msg.innerText="Game was draw! Play again..";
}
const showwin=(userwin)=>{
    if(userwin){
        userscore++;
        usersc.innerText=userscore;
        msg.innerText="You won!"
    }
    else{
        compscore++;
        compsc.innerText=compscore;
       msg.innerText="You lose the game!";
    }
}

const playgame = (userChoice)=>{
    console.log("User Chice: ",userChoice);
    const compc=createCompChoice();
    console.log("Computer choice: ",compc);
    if(userChoice===compc){
        drawgame();
    }
  else{
    let userwin=true;
    if(userChoice==="stone")
    {
       userwin= compc==="paper"? false:true;
    }else if(userChoice==="paper")
    {
        userwin=compc==="scissor"? false:true;
    }
    else if(userChoice==="scissor"){
        userwin=compc==="stone"? false:true;
    }
    showwin(userwin);
  }

}
choices.forEach((choice)=>{
    
    choice.addEventListener("click",()=>{
        const userChoice=choice.getAttribute("id"); 
        console.log("Clicked coice is: ",userChoice);
        playgame(userChoice);

    });
});