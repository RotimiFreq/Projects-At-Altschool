postedname = sessionStorage.getItem("PlayerName")
posteddeposit = sessionStorage.getItem("Deposit")


let theName = document.getElementById("welc")
theName.textContent = "Welcome" + " " + postedname + "!"

let thedeposit = document.getElementById("balance")
thedeposit.textContent = "Balance" + ":" + " " + "$" + posteddeposit

//the stake

function stake() {
    let getStake = document.getElementById("stakein")
    stakeValue = getStake.value

    let displayStake = document.getElementById("stake")
    displayStake.textContent = " Stake :" + " " + "$" + stakeValue

    depositInt = parseInt(posteddeposit)
    stakeint = parseInt(stakeValue)

    balanceAfterStake = depositInt - stakeint

    let thedeposit = document.getElementById("balance")
    thedeposit.textContent = "Balance" + ":" + " " + "$" + balanceAfterStake




}

let isAlive = true
let hasBlackJack = false
let cardArray = []
let message = ""

function randcard() {
    card = Math.random() * 13
    randomcard = Math.floor(card) + 1
    return randomcard
}


function rendergame() {
    firstCard = randcard()
    secondCard = randcard()
    sum = firstCard + secondCard
    cardArray.push(firstCard)
    cardArray.push(secondCard)
    return sum

}
let sumToUsed = rendergame()

function startgame() {

    if (sumToUsed < 21) {
        message = "click new-card for another card"
        isAlive = true

    }
    if (sumToUsed === 21) {
        message = "you've got blackjack!!! "
        hasBlackJack = true
        isAlive = true

    }
    if (sumToUsed > 21) {
        message = "Sorry, you are out of the game."
        hasBlackJack = false
        isAlive = false


    }

    getcard = document.getElementById("card")

    for (i = 0; i < cardArray.length; i++) {
        getcard.textContent += "Cards" + ":" + cardArray[i]
        console.log(cardArray[i])

    }

    getsum = document.getElementById("sum")
    getsum.textContent = "Sum" + ":" + " " + sumToUsed

    dispMsg = document.getElementById("message")
    dispMsg.textContent = message


    console.log(cardArray)
    console.log(sumToUsed)
    console.log(message)
}

if (isAlive === false && hasBlackJack === false) {
    message2 = "stake again to start new game"
    console.log(message2)
}



function newcard() {

    if (isAlive === true && hasBlackJack === false) {
        let newcard = randcard()
        sumToUsed += newcard
        cardArray.push(newcard)
        startgame()



    }

}