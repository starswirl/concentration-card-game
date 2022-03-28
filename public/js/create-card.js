window.onload = function () {
  const board = document.getElementById("board");

  ALL_CARD.forEach((card) => {
    const newDiv = document.createElement("div");
    newDiv.setAttribute("class", "card");

    newDiv.style.backgroundImage = createCardURL(card);

    board.appendChild(newDiv);
  });
};
