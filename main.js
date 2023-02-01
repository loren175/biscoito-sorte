const screen1 = document.querySelector(".screen1")
const screen2 = document.querySelector(".screen2")
const btnTry = document.querySelector("#btnTry")
const btnAgain = document.querySelector("#btnAgain")

const phrases = [
  "Se alguém está tão cansado que não possa te dar um sorriso, deixa-lhe o teu.",
  "A vida trará coisas boas se tiver paciência.",
  "Demonstre amor e alegria em todas as oportunidades e verá que a paz nasce dentro de si.",
  "Não compense na ira o que lhe falta na razão.",
  "Defeitos e virtudes são apenas dois lados da mesma moeda.",
  "A maior de todas as torres começa no solo.",
]
const randomPhrase = phrases[Math.floor(Math.random() * phrases.length)]

function handleTryClick(event) {
  event.preventDefault()
  
  toggleScreen()
  
  screen2.querySelector(
    ".message"
  ).innerText = randomPhrase
}

function handleAgainClick() {
  toggleScreen()

  randomPhrase = phrases[Math.floor(Math.random() * phrases.length)]
}

function toggleScreen() {
  screen1.classList.toggle("hide")
  screen2.classList.toggle("hide")
}

function screenHide(e) {
  if (e.key == "Enter" && screen1.classList.contains("hide")) {
    handleAgainClick()
  }
}

btnTry.addEventListener("click", handleTryClick)
btnAgain.addEventListener("click", handleAgainClick)
document.addEventListener("keydown", screenHide)
