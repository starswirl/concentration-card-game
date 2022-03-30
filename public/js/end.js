// 終了時の処理
const end = () => {
  // ボードの更新
  const board = document.getElementById("board");
  board.innerHTML = null;
  // おめでとう処理
  clearMusic.play();
  const newDiv01 = document.createElement("div");
  newDiv01.classList.add("clearDiv");
  const newImg01 = document.createElement("img");
  newImg01.src = "../png/clear/pose_dance_ukareru_man.png";
  newImg01.classList.add("jump");
  const newImg02 = document.createElement("img");
  newImg02.src = "../png/clear/pose_dance_ukareru_woman.png";
  newImg02.classList.add("jump");
  newDiv01.appendChild(newImg01);
  newDiv01.appendChild(newImg02);

  const newDiv02 = document.createElement("div");
  newDiv02.classList.add("clearDiv");
  const newImg03 = document.createElement("img");
  newImg03.src = "../png/clear/text_gameclear_j.png";
  newImg03.classList.add("clearText");
  newDiv02.appendChild(newImg03);

  board.appendChild(newDiv01);
  board.appendChild(newDiv02);

  // スタートボタンの有効化
  const startButton = document.getElementById("start");
  startButton.disabled = false;

  // カードのリセット
  trump = new Trump(ALL_CARD);
  endCardList = [];
};
