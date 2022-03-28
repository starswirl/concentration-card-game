createCardURL = function (card) {
  return card.suit === "joker"
    ? "url(../png/card/card_joker.png)"
    : "url(../png/card/" +
        card.suit +
        "/card_" +
        card.suit +
        "_" +
        card.id +
        ".png)";
};
