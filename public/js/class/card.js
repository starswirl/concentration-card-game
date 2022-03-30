class Card {
  constructor(id, value, suit) {
    this.id = id;
    this.value = value;
    this.suit = suit;
  }
  getValue() {
    return {
      id: this.id,
      value: this.value,
      suit: this.suit,
    };
  }
  getImage() {
    return this.suit === "joker"
      ? "url(../png/card/card_joker.png)"
      : "url(../png/card/" +
          this.suit +
          "/card_" +
          this.suit +
          "_" +
          this.id +
          ".png)";
  }
}
