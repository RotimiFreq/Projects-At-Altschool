// getting the data stored from the homepage

postedname = sessionStorage.getItem("PlayerName")
posteddeposit = sessionStorage.getItem("Deposit")

// retrieving the data and storing it in a variable
let theName = document.getElementById("welc")
theName.textContent = "Welcome" + " " + postedname + "!"

let thedeposit = document.getElementById("balance")
thedeposit.textContent = "Balance" + ":" + " " + "$" + posteddeposit

//a function  stake() to get the amount the player want stake
// and also update the balance after the stake as been made

function stake() {
    let getStake = document.getElementById("stakein")
    stakeValue = getStake.value

    let displayStake = document.getElementById("stake")
    displayStake.textContent = " Stake :" + " " + "$" + stakeValue

    //converting the string saved in session storage to numbers

    depositInt = parseInt(posteddeposit)
    stakeint = parseInt(stakeValue)

    balanceAfterStake = depositInt - stakeint

    // updating the balance

    let thedeposit = document.getElementById("balance")
    thedeposit.textContent = "Balance" + ":" + " " + "$" + balanceAfterStake




}

// declaring some global variables 

let isAlive = true
let hasBlackJack = false
let cardArray = []
let message = ""


// the randcard() generates random number which represents our card
function randcard() {
    card = Math.random() * 10
    randomcard = Math.floor(card) + 1
    return randomcard
}

// get the first 2 cards anf push them into an array and also returns the sum

function rendergame() {
    firstCard = randcard()
    secondCard = randcard()
    sum = firstCard + secondCard
    cardArray.push(firstCard)
    cardArray.push(secondCard)
    return sum

}

// init the sum here and we can start playing the game
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
    getcard.textContent = "Cards :"
        // use the for loop to logout the data in the array
    for (i = 0; i < cardArray.length; i++) {
        getcard.textContent += cardArray[i] + " "
        console.log(cardArray[i])

    }

    getsum = document.getElementById("sum")
    getsum.textContent = "Sum" + ":" + " " + sumToUsed

    dispMsg = document.getElementById("message")
    dispMsg.textContent = message

    // the cashout logic to update balance
    if (hasBlackJack === true) {
        cashWon = stakeint * 1.5
        thedeposit.textContent = "Balance" + ":" + " " + "$" + cashWon

    }
    if (isAlive === false && hasBlackJack === false) {
        cashLoss = depositInt - stakeint
        thedeposit.textContent = "Balance" + ":" + " " + "$" + cashLoss


    }



}

// logic to get new cards

function newcard() {

    if (isAlive === true && hasBlackJack === false) {
        let newcard = randcard()
        sumToUsed += newcard
        cardArray.push(newcard)
        startgame()



    }

}