console.log("Hi from the javascript")
let Locationh2 = document.getElementById("Location")
console.log(Locationh2)
Locationh2.innerHTML = "I live in idk"

function hello(){
    console.log("This is the Hello Function")
}
hello()

function saywhat(word){
    console.log("The word that you type is:", word)

}


saywhat("Pupusas");


let count = 0;
function counter(){
    count = count + 1
    console.log("The button was clicked", count)
    let number = document.getElementById("Count")
    number.innerHTML = count
}
console.log("This count is;", count)
counter()
counter()

console.log("This is the count again", count)

let button = document.getElementById("button")
console.log(button)


button.onclick = counter;
console.log

