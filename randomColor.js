// Variables
const hex = [
  "0",
  "1",
  "2",
  "3",
  "4",
  "5",
  "6",
  "7",
  "8",
  "9",
  "A",
  "B",
  "C",
  "D",
  "E",
  "F",
];
let colorHistory = [];

// DOM Elements
const colorDisplay = document.getElementById("color-display");
const colorHistoryDisplay = document.getElementById("color-history");

// Functions
const getColor = () => {
  let color = "#";
  // loops and adds a random element from the hex array.
  for (let index = 0; index < 6; index++) {
    color += hex[Math.floor(Math.random() * 16)];
  }

  // set the color of the text to be the same as the color generated
  color = `<span class="color-card"  style="color:${color};">
  ${color}
  </span>`;

  // push the color to the colorHistory array and display color and colorHistory to the DOM
  colorHistory.push(color);
  colorDisplay.innerHTML = color;
  colorHistoryDisplay.innerHTML = `Previous Colors: ${colorHistory}`;
};
