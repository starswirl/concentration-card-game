// カード初期配置関数
const setDefaultCardDiv = (cardList, targetParent) => {
  cardList.forEach((card) => {
    const newCardDiv = document.createElement("div");
    newCardDiv.setAttribute("class", "card");
    newCardDiv.style.backgroundImage = card.getImage();
    targetParent.appendChild(newCardDiv);
  });
};

// クリック時の処理
const turn = (e) => {
  var div = e.target;
  const targetIndex = div.id;
  const targetCard = trump.getCardById(targetIndex);
  if (targetCard.getValue().suit === "joker") {
    jokerMusic.play();
  } else {
    commonCardMusic.play();
  }
  // 1枚目のカードがセットされていない場合セットし終了
  if (firstCard === null) {
    // カードをセット
    firstCard = targetCard;
    // クリックしたカードに表面をセットする
    e.target.style.backgroundImage = targetCard.getImage();
    return;
  }
  // 2枚目のカードをセット、確認する
  if (secondCard === null) {
    // カードをセット
    secondCard = targetCard;
    // クリックしたカードに表面をセットする
    e.target.style.backgroundImage = targetCard.getImage();
    new Promise((_resolve, _reject) => {
      setTimeout(() => {
        // カードが一緒なら
        if (firstCard.getValue().value === secondCard.getValue().value) {
          // 対象のカードを取り出す
          const newTrampValue = trump.value.filter((card) => {
            return card !== firstCard && card !== secondCard;
          });
          trump.setValue(newTrampValue);
          // 終わったカードリストに入れる
          endCardList = [...endCardList, firstCard, secondCard];
        }
        // ボードの更新
        const board = document.getElementById("board");
        board.innerHTML = null;
        // 現在のトランプ状態で再描画
        trump.value.forEach((_card, index) => {
          const newCardDiv = document.createElement("div");
          newCardDiv.setAttribute("class", "card");
          // id
          newCardDiv.setAttribute("id", index);
          // onClick
          newCardDiv.onclick = turn;
          newCardDiv.style.backgroundImage = "url(../png/card/card_back.png)";
          board.appendChild(newCardDiv);
        });

        // カードをセットしなおす
        firstCard = null;
        secondCard = null;

        // トランプの残り枚数が1枚以下なら終了処理
        if (trump.value.length <= 1) {
          end();
        }
        return;
      }, 1000);
    });
  }
};

// スタート時カード配置関数
const setCardDiv = (cardList, targetParent) => {
  // 一度中身の要素をすべて削除する
  targetParent.innerHTML = null;
  cardList.value.forEach((card, index) => {
    const newCardDiv = document.createElement("div");
    newCardDiv.setAttribute("class", "card");
    // id
    newCardDiv.setAttribute("id", index);
    // onClick
    newCardDiv.onclick = turn;
    // カードの裏面をセット
    newCardDiv.style.backgroundImage = "url(../png/card/card_back.png)";

    targetParent.appendChild(newCardDiv);
  });
};
