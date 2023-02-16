let home = document.getElementById("home-result");
let geust = document.getElementById("guest-result");
let countHome = 0;
let countGuest = 0;

function PlusOneHome() {
    countHome += 1;
    home.innerText = countHome;
}

function PlusTwoHome() {
    countHome += 2;
    home.innerText = countHome;
}

function PlusThreeHome() {
    countHome += 3;
    home.innerText = countHome;
}

function PlusOneGuest() {
    countGuest += 1;
    geust.innerText = countGuest;
}

function PlusTwoGuest() {
    countGuest += 2;
    geust.innerText = countGuest;
}

function PlusThreeGuest() {
    countGuest += 3;
    geust.innerText = countGuest;
}

function reset() {
    home.innerText = 0;
    geust.innerText = 0
}