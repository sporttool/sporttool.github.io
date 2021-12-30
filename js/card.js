function clickCounter() {
    if (typeof(Storage) !== "undefined") {
        if (localStorage.clickcount) {
        localStorage.clickcount = Number(localStorage.clickcount)+1;
        } else {
        localStorage.clickcount = 1;
        }
        showCounter();
    }}
function showCounter(){
    if(typeof(Storage) !== "undefined") {
            document.getElementById("count").innerHTML = localStorage.clickcount;
    }}
