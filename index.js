//document.getElementById("my-age").innerText = 10

// let myage = 35
// console.log (count)

// let myAge = 35
// let humanAgeDogRatio=7

// let myDogAge = myAge*humanAgeDogRatio
// console.log(myDogAge)

// let bonusPoint = 50
// console.log(bonusPoint)

// bonusPoint = bonusPoint + 50
// console.log(bonusPoint)

// bonusPoint = bonusPoint - 75
// console.log(bonusPoint)

// bonusPoint = bonusPoint + 45
// console.log(bonusPoint)

// function increment() {
//     console.log ("the button was clicked")
// }
// function myLogger() {
//     console.log(42)
// }

// myLogger()

// let lap1 = 34
// let lap2 = 33
// let lap3 = 36


// function TotalLap () {
//     let TotalLapTime = lap1 + lap2 + lap3
//     console.log(TotalLapTime)
    
// }
// TotalLap()

// let lapsCompleted = 0

// function TotallapsCompleted() {

//    lapsCompleted = lapsCompleted + 1
// }

// TotallapsCompleted()
// TotallapsCompleted()
// TotallapsCompleted()

// console.log(lapsCompleted)]

// let countEl = document.getElementById("count-el")
// console.log(countEl)

// let count = 0

// function increment() {
//     count = count + 1
//     countEl.innerText = count
// }

// function save() {
//     console.log(count)
// }

// save()
// let username = "Ditty"
// let message = "You have 3 notification"
// let messageToUser = message + "," + username + "!"
// console.log(messageToUser)

// let myName = "Ditty"
// let greeting = "Hi My name is"
// let myGreeting = greeting + "," + myName 

// console.log(myGreeting)

// let welcomeEl = document.getElementById("welcome-el")
// let myName = "Ditty"
// let greeting = "Welcome back, "
// welcomeEl.innerText = greeting + myName

// welcomeEl.innerText += "👋"

// let countEl = document.getElementById("count-el")
// let saveEl = document.getElementById("save-el")
// console.log(countEl)
// let count = 0


// function increment() {
//     count = count + 1
//     countEl.innerText = count
// }
//  function save () {
//     let countStr = count + "-"
//     saveEl.innerText += countStr 

//  }

let count = 0
let countEl = document.getElementById("count-el")
let saveEl = document.getElementById("save-el")


function increment() {
    count = count + 1
    countEl.textContent = count
}
function save() {
    let countStr = count + " - "
    saveEl.textContent += countStr
    countEl.textContent = 0
    count = 0

}
