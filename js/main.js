// setInterval
function getData() {
    document.querySelector("#demo").innerHTML = new Date();
}

var mouse = setInterval(getData, 1000);

document.querySelector("#stop").addEventListener("click", function () {
    clearInterval(mouse);
});


// navbar
window.addEventListener("scroll", function () {
    var navbar = document.querySelector("#navbar");

    if (window.scrollY > 300) {
        navbar.setAttribute("class", "bg-gray-100 w-full z-10 shadow-sm fixed top-0");
    } else {
        navbar.setAttribute("class", "bg-gray-100 w-full z-10 shadow-sm");
    }
});


// setTimeout
var mouse2;

function showMessage() {
    document.querySelector("#demo2").innerHTML = "Hello! This appeared after 3 seconds";
}

document.querySelector("#click").addEventListener("click", function () {
    clearTimeout(mouse2);
    mouse2 = setTimeout(showMessage, 3000);
});

document.querySelector("#stop2").addEventListener("click", function () {
    clearTimeout(mouse2);
});