let countEl1 = document.getElementById("count1-el")
let countEl2 = document.getElementById("count2-el")
let homeCount = 0
let guestCount = 0


function increment1a() {
    homeCount += 1
    countEl1.textContent = homeCount
}

function increment2a() {
    homeCount += 2
    countEl1.textContent = homeCount
}

function increment3a() {
    homeCount += 3
    countEl1.textContent = homeCount
}

function increment1b() {
    guestCount += 1
    countEl2.textContent = guestCount
}

function increment2b() {
    guestCount += 2
    countEl2.textContent = guestCount
}

function increment3b() {
    guestCount += 3
    countEl2.textContent = guestCount
}

function newGame()  {
    homeCount = 0
    guestCount = 0
    countEl1.textContent = 0
    countEl2.textContent = 0
    
}