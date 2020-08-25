const initialState = [
  { id: 1, name: "Владилен", avgCheck: 330, count: 4, totalPrice: 1200 },
  { id: 2, name: "Вячеслав", avgCheck: 220, count: 10, totalPrice: 2500 },
  { id: 3, name: "Игорь", avgCheck: 230, count: 6, totalPrice: 4000 },
  { id: 4, name: "Владилен", avgCheck: 760, count: 3, totalPrice: 2440 },
  { id: 5, name: "Никита", avgCheck: 120, count: 8, totalPrice: 1000 },
  { id: 6, name: "Максим", avgCheck: 1000, count: 15, totalPrice: 6000 },
  { id: 7, name: "Владилен", avgCheck: 135, count: 8, totalPrice: 1530 },
  { id: 8, name: "Никита", avgCheck: 560, count: 12, totalPrice: 2300 },
  { id: 9, name: "Ангелина", avgCheck: 80, count: 8, totalPrice: 400 },
  { id: 10, name: "Валера", avgCheck: 500, count: 4, totalPrice: 770 },
  { id: 11, name: "Ирина", avgCheck: 340, count: 7, totalPrice: 560 },
  { id: 12, name: "Андрей", avgCheck: 180, count: 3, totalPrice: 750 },
  { id: 13, name: "Никита", avgCheck: 160, count: 5, totalPrice: 670 },
  { id: 14, name: "Марина", avgCheck: 420, count: 4, totalPrice: 1570 },
  { id: 15, name: "Семён", avgCheck: 120, count: 6, totalPrice: 880 },
];

export default function buyers(state = initialState, action) {
  switch (action.type) {
    default:
      return state;
  }
}
