var startGame = document.querySelector("#top-site-text button");
var hands = document.querySelectorAll("#player-hands img");

gameStarted = false;
canSelect = false;
winHand = null;

startGame.addEventListener('click', function(){
  if (gameStarted == false){
    hands[0].src = "img/0.png"
    hands[1].src = "img/0.png"
    gameStarted = true
    document.querySelector("#player-hands i").style.display = "block"
    setTimeout(function (){
      document.querySelector("#player-hands i").style.display = "none"
      canSelect = true;
      hands[0].style.cursor = "pointer";
      hands[1].style.cursor = "pointer";
      document.querySelector("#top-site-text span").innerHTML = "حالا روی دست مورد نظر کلیک کنید"
      winHand = Math.floor(Math.random()*2);
    }, 2000);    
  }
});

for (let i = 0; i < hands.length; i++) {
  hands[i].addEventListener("click", function (){
    if (canSelect == true){
      if (i == winHand){
        startGame.innerHTML = "شروع دوباره";
        document.querySelector("#top-site-text span").innerHTML = "شما برنده شدید";
        hands[parseInt(winHand)].src = "img/1.png";
        canSelect = false;
        gameStarted = false;
      }else {
        document.querySelector("#top-site-text span").innerHTML = "شما باختید ";
        hands[parseInt(winHand)].src = "img/1.png";
        startGame.innerHTML = "شروع دوباره";
        canSelect = false;
        gameStarted = false;
      }
    }
  })
}
