const wastePile = document.querySelector(".waste-pile")
const firstPlayer = document.querySelector(".first-player")
const secondPlayer = document.querySelector(".second-player")
const us = document.querySelector(".us")
const thirdPlayer = document.querySelector(".third-player")
const players = [firstPlayer, secondPlayer, us, thirdPlayer]
var cardDeck
const initialCardCount = 13

window.onload = function() {
    buildCardDeck()
    shuffleCardDeck()
    start()
}

function buildCardDeck() {
    let cardRanks = ["2", "3", "4", "5", "6", "7", "8", "9", "10", "J", "Q", "K", "A"]
    let cardSuits = ["D", "C", "H", "S"]
    cardDeck = []

    for (let cardSuit = 0; cardSuit < cardSuits.length; cardSuit++) {
        for (let cardRank = 0; cardRank < cardRanks.length; cardRank++) {
            cardDeck.push(cardRanks[cardRank] + "-" + cardSuits[cardSuit])
        }
    }
}

function shuffleCardDeck() {
    for (let card = 0; card < cardDeck.length; card++) {
        let followingCard = Math.floor(Math.random() * cardDeck.length)
        let currentCard = cardDeck[card]
        cardDeck[card] = cardDeck[followingCard]
        cardDeck[followingCard] = currentCard
    }
}

function start() {
    players.forEach(player => {
        for (let card = 0; card < initialCardCount; card++) {
            let cardDrawn = document.createElement("img")
            cardDrawn.src = "./images/" + cardDeck.pop() + ".png"
            cardDrawn.style.width = "70px"
            player.appendChild(cardDrawn)
        }
    })
}