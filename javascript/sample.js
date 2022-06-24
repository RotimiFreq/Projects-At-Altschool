let count = 0

let welcom = document.getElementById("welcome")

let name = "Oluwarotimi samuel"
let greetings = "Welcome back!"

welcom.innerText = greetings + name

let counter = document.getElementById("counter")

function increment() {
    count = count + 1
    console.log("the button was clicked")
    counter.innerText = count



}



function save() {
    let savevalue = document.getElementById("savevalue")
    let dash = " - "
    let sv = count + dash
    savevalue.textContent += sv
}