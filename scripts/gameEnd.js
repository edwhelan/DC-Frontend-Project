function gameEnd(end){
    if(end === "win" && level != 5){
        //write new message, call modal, delete game
        let timer = document.querySelector('.timer');
        let levelStatus = document.querySelector('.level');
        // timer.textContent = "Level " + level + " Time Remaining: " + "00:00";
        levelStatus.textContent = "Level " + level;
        timer.textContent = "Time Remaining: " + "00:00";
        modalH2Element.textContent = "You're a winner!"; 
        modalPElement.textContent = "Play the next level?";
        modalElement.classList.toggle('modal-hidden');
        document.querySelector('[data-board]').innerHTML = "";
        level++;
    }else if(end === "win" && level === 5){
        level = 1;
        let timer = document.querySelector('.timer');
        let levelStatus = document.querySelector('.level');
        timer.textContent = "";
        levelStatus.textContent = "";
        modalH2Element.textContent = "You've beaten the game!!!"; 
        modalPElement.textContent = "";
        modalElement.classList.toggle('modal-hidden');
        document.querySelector('[data-board]').innerHTML = "";
        // game ending modal splash or transition different from the others?

    }else if(end === "loss"){
        modalH2Element.textContent = "You're a loser!"; 
        modalPElement.textContent = "(but you can try again)"
        modalElement.classList.toggle('modal-hidden');
        document.querySelector('[data-board]').innerHTML = "";

    }

}