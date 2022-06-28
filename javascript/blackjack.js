function getdeetails() {
    let uname1 = document.getElementById("playername")
    Usersname = uname1.value
    let deposit = document.getElementById("deposit")
    playerdeposit = deposit.value
    console.log(Usersname, playerdeposit)
}

function gamepage() {
    window.location.href = "./gameBJ.html"


}

function firstfunc() {
    getdeetails()
    sessionStorage.setItem("PlayerName", Usersname)
    sessionStorage.setItem("Deposit", playerdeposit)
    gamepage()
}