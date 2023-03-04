// 1. Create two variables, firstCard and secondCard.
// Set their values to a random number between 2-11
let verdict = document.getElementById("verdict")
let firstCard  = 0
let secondCard = 0
let cardsHeld = document.getElementById("cards-held")
let total = firstCard + secondCard
let newBtn = document.getElementById("new-card")

// 2. Create a variable, sum, and set it to the sum of the two cards
let sum = document.getElementById("sum")

function start() {
    newBtn.disabled = false
    firstCard = Math.floor(Math.random() * 9) + 2
    secondCard = Math.floor(Math.random() * 9) + 2
    total = firstCard + secondCard
    cardsHeld.textContent = "Cards: " + firstCard + " " + secondCard
    sum.textContent = "Sum: " + total
    if(total === 21) {
        verdict.textContent = "Congratulations. You've got Blackjack \u{1F929}"
    } else if (total < 21) {
        verdict.textContent = "Almost there \u{1F643}"
    } else {
        verdict.textContent = "It's a Bust!!! \u{1FAE0}"
        newBtn.disabled = true
    }
}

function newCard() {
    let newCards = Math.floor(Math.random() * 9) + 2
    total += newCards
    cardsHeld.textContent += " " + newCards
    sum.textContent = "Sum: " + total
    if(total === 21) {
        verdict.textContent = "Congratulations. You've got Blackjack \u{1F929}"
    } else if (total < 21) {
        verdict.textContent = "Almost there \u{1F643}"
    } else {
        verdict.textContent = "It's a Bust!!! \u{1FAE0}"
        newBtn.disabled = true
    }
}

