function generateCard() {
  const suits = ["heart", "diamond", "spade", "club"];
  const suitSymbols = { heart: "♥", diamond: "♦", spade: "♠", club: "♣" };

  const numbers = [
    "A",
    "2",
    "3",
    "4",
    "5",
    "6",
    "7",
    "8",
    "9",
    "10",
    "J",
    "Q",
    "K"
  ];

  const randomSuitIndex = Math.floor(Math.random() * suits.length);
  const randomNumberIndex = Math.floor(Math.random() * numbers.length);

  const suit = suits[randomSuitIndex];
  const number = numbers[randomNumberIndex];

  const card = document.getElementById("card");

  card.className = `card-container ${suit}`;
  card.innerHTML = `
    <div class="top-suit">${suitSymbols[suit]}</div>
    <div class="number">${number}</div>
    <div class="bottom-suit">${suitSymbols[suit]}</div>
  `;
}

window.onload = generateCard;
