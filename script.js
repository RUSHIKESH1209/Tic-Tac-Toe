let boxes = document.querySelectorAll(".box")
let reset = document.querySelector(".reset")
let winner = document.querySelector(".winner")
let newgame = document.querySelector(".newgame")
let scorex=document.querySelector(".scorex")
let score0=document.querySelector(".score0")
let score0p=1;
let scorexp=1;

let turn0 = true;
let click = 1;

let wins = [
    [0, 1, 2], [3, 4, 5], [6, 7, 8], [0, 3, 6], [1, 4, 7], [2, 5, 8], [0, 4, 8], [2, 4, 6]
]



// DISABLE FUNCTION
let disableboxes = () => {
    for (let index = 0; index < 9; index++) {
        boxes[index].disabled = true;
    }
}

// ENABLE FUNCTION 
let enableboxes = () => {
    for (let index = 0; index < 9; index++) {
        boxes[index].disabled = false;
        boxes[index].innerText = "";
    }
}

// RESET FUNCTION
let resetall = () => {
    enableboxes();
    winner.classList.add("hide");
    newgame.classList.add("hide");
    click = 1;
    score0p=1;
    scorexp=1;
    score0.innerText = "Score O";
    scorex.innerText = "Score X";


}

let newgameall = () => {
    enableboxes();
    winner.classList.add("hide");
    newgame.classList.add("hide");
    click = 1;
}


//SHOWWINNER FUNCTION
const showwinner = (pos1) => {
    winner.innerText = ` Congratulations Winner is ${pos1}`;
    winner.classList.remove("hide");
    newgame.classList.remove("hide");
    if(pos1=="O"){ score0.innerText = `score O: ${score0p++}`;}
    if(pos1=="X"){ scorex.innerText = `score X: ${scorexp++}`;}
    disableboxes();

}

//DRAW
const draw = (pos1) => {
    winner.innerText = ` GAME DRAW`;
    winner.classList.remove("hide");
    newgame.classList.remove("hide");
    disableboxes();
}



//CHECKING WINNER FUNCTION
const checkwinner = () => {
    for (const pattern of wins) {
        let pos1 = boxes[pattern[0]].innerText;
        let pos2 = boxes[pattern[1]].innerText;
        let pos3 = boxes[pattern[2]].innerText;

        if (pos1 != "" && pos2 != "" && pos3 != "") {
            if (pos1 == pos2 && pos2 == pos3) {
                showwinner(pos1);
                click=0;
            }
        }

        if (click == 9) {
            draw(click);
        }

    }
    click++;
}


//CLICKING FUNCTION
boxes.forEach(box => {
    box.addEventListener("click", () => {
        console.log("clicked")

        if (turn0) {
            box.innerText = "O"
            
            turn0 = false;
        }
        else {
            box.innerText = "X"
            turn0 = true;
        }
        box.disabled = true;
        checkwinner();
    })
});




reset.addEventListener("click", resetall)
newgame.addEventListener("click", newgameall)
