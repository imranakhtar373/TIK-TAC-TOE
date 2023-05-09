let playerText = document.getElementById('playerText');
let restartBtn = document.getElementById('restartBtn');
let boxes      = Array.from(document.getElementsByClassName('box'));

let winnerIndicator = getComputedStyle(document.body).getPropertyValue('--winning-blocks');

const O_TEXT = "O";
const X_TEXT = "Y";
let currentPlayer = X_TEXT;
let spaces = Array(9).fill(null);

const startGame = () =>{
    boxes.forEach(box => addEventListener('click' , boxClicked))
}

function boxClicked(e){
    const id = e.target.id;

    if(!spaces[id]){
        spaces[id] = currentPlayer;
        e.target.innerText = currentPlayer;
        if(playerHasWon() !==false){
            playerText.innerHTML = `${currentPlayer} has won!`
            let winning_blocks = playerHasWon()

            winning_blocks.map( box => boxes[box].style.backgroundColor=winnerIndicator)
            return
        }
    }
}