let boxes = document.querySelectorAll(".box");
let resetbtn = document.querySelector("#reset");
let newgamebtn = document.querySelector("#new-btn");
let msgcontainer = document.querySelector(".msg-container");
let msg = document.querySelector("#msg");

let winpattern = [
    [0,1,2],
    [3,4,5],
    [6,7,8],
    [0,3,6],
    [1,4,7],
    [2,5,8],
    [0,4,8],
    [2,4,6]
];



const resetgame = () =>{
    turnx = 1;
    anableboxes();
    msgcontainer.classList.add("hide");
}



let turnx = 1;

boxes.forEach((box)=>{
    box.addEventListener("click", () => {
        console.log("clicked");
        if(turnx === 1)
        {
           box.innerText = "X";
           turnx=2;
        }
        else
        {
            box.innerText = "O";
            turnx=1;
        }
        box.disabled = 1;

        checkwinner();
    });
});

const disableboxes = () =>{
    for(box of boxes){
        box.disabled = 1;
    }
}

const anableboxes = () =>{
    for(box of boxes){
        box.disabled = 2;
        box.innerText = "";
    }
}


const showwinner = (winner) =>{
    msg.innerText = `Congratulation, Winner is ${winner}`;
    msgcontainer.classList.remove("hide");
    disableboxes();
}



checkwinner = () =>{
    for(let pattern of winpattern){
                 let position1  = boxes[pattern[0]].innerText;
                 let position2 = boxes[pattern[1]].innerText;
                 let position3 = boxes[pattern[2]].innerText;

                 if(position1 != "" && position2 != "" && position3 != ""){
                    if(position1===position2 && position2===position3){
                        console.log("Winner Winner chicken dinner for = ", position1);
                        showwinner(position1);
                        
                        
                    }
                 }
    }
}

newgamebtn.addEventListener("click", resetgame);
resetbtn.addEventListener("click", resetgame);