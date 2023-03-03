const body = document.querySelector("body");
const container = document.querySelector(".container");
const colorText = document.querySelector(".color-text");

const values = [
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
  "a",
  "b",
  "c",
  "d",
  "e",
  "f",
];

function getGradient() {
  let color = "#";
  for (let i = 1; i <= 6; i++) {
    let randomNum = Math.trunc(Math.random() * values.length);
    color += values[randomNum];
  }
  return color;
}

function setGradient() {
  const color1 = getGradient();
  const color2 = getGradient();
  const randomDeg = Math.trunc(Math.random() * 360);
  const bgColor = `linear-gradient(
        ${randomDeg}deg,
        ${color1},
        ${color2}
      );
    `;
  colorText.textContent = bgColor;
  body.setAttribute("style", `  background-image:${bgColor}`)
}

container.addEventListener("click", setGradient);

setInterval(setGradient, 3000)