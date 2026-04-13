let boxes = document.querySelectorAll(".box");
let currentPlayer = "X";
let board = ["", "", "", "", "", "", "", "", ""];

let patterns = [
 [0,1,2],
 [3,4,5],
 [6,7,8],
 [0,3,6],
 [1,4,7],
 [2,5,8],
 [0,4,8],
 [2,4,6]
];

let gameOver = false; 
let msg = document.querySelector("#msg");
let resetBtn = document.querySelector("#resetBtn");
let start = document.querySelector("#start");

 resetBtn.style.display = "none";
start.style.display = "none";
start.style.animation = "none";

boxes.forEach(function(box) {
    box.addEventListener("click", function() {
       
        if (gameOver){ return;}
        let index = this.getAttribute("data-index");
        console.log(index);

        console.log(board)
        if(board[index] !== ""){
         return; }
        board[index] = currentPlayer;

        box.textContent = currentPlayer;
        if( currentPlayer === "X"){
            currentPlayer = "O"
        } else{
           currentPlayer = "X"
        }
       
       
        checkWinner();

        //  board full
       if (!gameOver && !board.includes("")){
        msg.textContent = "It's a Draw 🤝";
        gameOver = true;
        resetBtn.style.display = "block";
        start.style.display = "flex";
        start.style.animation = "fadeInUp 0.5s ease";
        }
        
    });
});



function checkWinner(){
   for (let pattern of patterns) {

      let a = pattern[0];
      let b = pattern[1];
      let c = pattern[2];

      if (
        board[a] === board[b] &&
        board[b] === board[c] &&
        board[a] !== ""
      ) {

         gameOver = true;
         msg.textContent = board[a] + " Wins 🎉";
         resetBtn.style.display = "block";
         start.style.display = "flex";
         start.style.animation = "fadeInUp 0.5s ease";
         return; 
      }
   }
}
resetBtn.addEventListener("click" , function(){
    board = ["", "", "", "", "", "", "", "", ""];
    currentPlayer = "X";
    gameOver = false;
    msg.textContent = "";

    boxes.forEach(function(box){
        box.textContent = "" ;

    });
    resetBtn.style.display = "none";
    start.style.display = "none";
    start.style.animation = "none";
    
})

