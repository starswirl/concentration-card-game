/**
 * スタートボタンクリック時に実行する
 */

// スタートボタン
const startButton = document.getElementById("start");

const startOnClick = (e) => {
  const board = document.getElementById("board");
  // ボタンをdisabled
  e.target.disabled = true;
  // スタート時の音を鳴らす
  startMusic.play();
  // スタートボタンをDisabledにする

  // シャッフルする
  trump.easyShuffle();
  // カードを裏にする
  setCardDiv(trump, board);
};

// スタートボタンの実行を監視する
startButton.addEventListener("click", startOnClick);
