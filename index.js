const containerElement = document.querySelector(".auto-text");

const careers = ["Chemistry Graduate", "Software Developer"];

let careerIndex = 0;
let characterIndex = 0;

updateText();

function updateText() {
  characterIndex++;

  containerElement.innerHTML = `<h2>${careers[careerIndex].slice(
    0,
    characterIndex
  )}</h2>`;

  if (characterIndex === careers[careerIndex].length) {
    careerIndex++;
    characterIndex = 0;
  }

  if (careerIndex === careers.length) {
    careerIndex = 0;
  }
  setTimeout(updateText, 400);
}
