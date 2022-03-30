class Trump {
  constructor(cardList) {
    this.value = cardList;
  }
  getValue() {
    return this.value;
  }
  setValue(value) {
    this.value = value;
  }
  // 簡易シャッフル関数
  easyShuffle() {
    let tempArray = this.value.slice();
    this.value = tempArray.sort(() => Math.random() - 0.5);
  }
  getCardById(id) {
    return this.value[id];
  }
}
