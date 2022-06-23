let count = 0

let counter = document.getElementById("counter")

function increment() {
    count = count + 1
    console.log("the button was clicked")
    counter.innerText = count



}

function save() {
    console.log(count)
}