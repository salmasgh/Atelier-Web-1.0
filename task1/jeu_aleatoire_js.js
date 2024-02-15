const buttons={
    easy_btn: document.querySelector("#easy_btn"),
    medium_btn: document.querySelector("#medium_btn"),
    hard_btn: document.querySelector("#hard_btn")
};


function getGuess(max_num){
    let guess=window.prompt(`Enter your guess from 1 to ${max_num}: `);
    while(guess.trim() === ''){
        window.alert("Please enter a number !");
        guess=window.prompt(`Enter your guess from 1 to ${max_num}: `);
    }
    guess=Number(guess);
    while (isNaN(guess)) {
        window.alert("Please enter a number !");
        guess=Number(window.prompt(`Enter your guess from 1 to ${max_num}: `));
        if(guess===0){
            return null;
        }
    }
    return guess;

}

function guessing_game(attempts,max_num){
    const answer=Math.floor(Math.random()*max_num)+1;
    while(attempts){
        let guess=getGuess(max_num);
        if (!guess){
            return;
        }
        attempts--;
        if(guess===answer){
            window.alert("YOU WIN !");
            break;
        }
        else if (guess<answer){
            window.alert(`${attempts} left ! Guess higher.`);
        }
        else {
            window.alert(`${attempts} left ! Guess lower.`);
        }
    }
    if(!attempts){
        window.alert(`YOU LOSE ! The number is ${answer}`)
    }
}

buttons.easy_btn.addEventListener("click",function(){guessing_game(5,10);});
buttons.medium_btn.addEventListener("click",function(){guessing_game(5,20)});
buttons.hard_btn.addEventListener("click",function(){guessing_game(3,50)});
