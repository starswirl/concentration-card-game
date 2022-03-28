// スタートボタン
const startButton = document.getElementById("start");
startButton.addEventListener("click", function () {
  startMusic.play();
  //   if (!startMusic.paused) {
  //     play.innerHTML = "再生";
  //     startMusic.pause();
  //   } else {
  //     startMusic.innerHTML = "停止";
  //     startMusic.play();
  //   }
});
