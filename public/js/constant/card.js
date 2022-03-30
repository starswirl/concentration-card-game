// カードのマーク(柄)
const SUIT = {
  SPADE: "spade",
  HEART: "heart",
  DIAMOND: "diamond",
  CLUB: "club",
  JOKER: "joker",
};

// const CARD_NUMBER = [...Array.from(13)].map((_e, index) => {
//   const value = index + 1;
//   const id = value < 10 ? `0${value}` : `${value}`;
//   return {
//     id: id,
//     value: value,
//   };
// });

const CARD_NUMBER = [
  {
    id: "01",
    value: 1,
  },
  // {
  //   id: "02",
  //   value: 2,
  // },
  // {
  //   id: "03",
  //   value: 3,
  // },
  // {
  //   id: "04",
  //   value: 4,
  // },
  // {
  //   id: "05",
  //   value: 5,
  // },
  // {
  //   id: "06",
  //   value: 6,
  // },
  // {
  //   id: "07",
  //   value: 7,
  // },
  // {
  //   id: "08",
  //   value: 8,
  // },
  // {
  //   id: "09",
  //   value: 9,
  // },
  // {
  //   id: "10",
  //   value: 10,
  // },
  // {
  //   id: "11",
  //   value: 11,
  // },
  // {
  //   id: "12",
  //   value: 12,
  // },
  // {
  //   id: "13",
  //   value: 13,
  // },
];

const createCard = (suit) =>
  CARD_NUMBER.map((card) => {
    return new Card(card.id, card.value, suit);
  });

const JOKER = new Card("-1", -1, SUIT.JOKER);

const ALL_CARD = [
  ...createCard(SUIT.SPADE),
  ...createCard(SUIT.HEART),
  ...createCard(SUIT.DIAMOND),
  ...createCard(SUIT.CLUB),
  JOKER,
];
