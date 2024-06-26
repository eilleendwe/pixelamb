//var global buat warna tinta
let color = "black";
let click = false;

//domcontentloaded = tunggu sampe html filenya ke load dlu
document.addEventListener('DOMContentLoaded', function(){
    createBoard(16);

    document.querySelector('.board').addEventListener("click", function(e){
        if (e.target.tagName != "BUTTON"){
            click =! click;
            let draw = document.getElementById("draw");
            if (click){
                draw.textContent = "You can draw";
                draw.style.color = "black";
            } else {
                draw.textContent= "You cannot draw";
                draw.style.color = "red";
            }

        }
    })
    
    //button untuk menjalankan input ukuran board yg diberikan
    let popupBtn = document.getElementById('popup');
    popupBtn.addEventListener("click", function() {
        let size = getSize();
        createBoard(size);
    })

})


function createBoard(size){
    let board = document.querySelector('.board');

    board.style.gridTemplateColumns = `repeat(${size}, 1fr)`;
    board.style.gridTemplateRows = `repeat(${size}, 1fr)`;

    let numDivs = size * size;

    for (let i = 0; i < numDivs; i ++){
        let div = document.createElement('div');
        div.addEventListener("mouseover", colorDiv)
        //kalau mau put div di dalam board
        board.insertAdjacentElement("beforeend", div);
    }
}

//mengambil input untuk ukuran board
let inputSize = document.getElementById('inputSize');

function getSize(){
    let input = inputSize.value;
    let message = document.getElementById('message');
    if (input == ""){
        message.textContent = "Please give a number";
    } else if (input < 0 || input > 100){
        message.textContent = "Please give a number from 1-100";
    } else {
        message.innerHTML = `${input} X ${input}`;
        return input;
    }
}

let black = document.getElementById('black-btn');
let random = document.getElementById('random-btn');
let reset = document.getElementById('reset-btn');

black.addEventListener("click", function(){
    setColor('black');
});
random.addEventListener("click", function() {
    setColor('random');
});
reset.addEventListener("click", function(){
    resetBoard();
})



function colorDiv(){
    if (click){
        if(color == "random"){
            this.style.backgroundColor = `hsl(${Math.random()*360}, 100%, 50%)`;
        } else{
            this.style.backgroundColor = 'black';
        }
    }

}

function setColor(colorChoice){
    color = colorChoice;
}

function resetBoard(){
    let divs = document.querySelectorAll(".board div");
    divs.forEach((div) => div.style.backgroundColor = 'white');
}