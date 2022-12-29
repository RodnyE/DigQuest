/**
 * Game View
 */
let gameView;


function initGameView () {
    
    gameView = new ViewComponent("#game-view");
    gameView.element.innerText = "Game";
    
    initGameView = null;
    console.log("game-view ready!");
}