window.onload = function () {
  const board = document.getElementById("board");

  ALL_CARD.forEach((card) => {
    const newDiv = document.createElement("div");
    newDiv.setAttribute("class", "card");
    newDiv.style.backgroundImage =
      "url(../png/card/" +
      card.suit +
      "/card_" +
      card.suit +
      "_" +
      card.id +
      ".png)";
    board.appendChild(newDiv);
  });
};
