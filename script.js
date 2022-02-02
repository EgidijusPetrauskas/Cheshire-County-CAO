"use strict";

// NAV
var navButtons = document.getElementsByClassName("nav-button");
var logo = document.getElementById("nav-logo");

function jumpTo(num){
    switch(num){
        case 1:
            window.location.hash = "section-3"
            break;
        case 2:
            window.location.hash = "section-4"
            break;
        case 3:
            window.location.hash = "section-6"
            break;
        case 4:
            window.location.hash = "section-7"
            break;
        case 5:
            window.location.hash = "section-8"
            break;
    }
}

logo.addEventListener("click", () => {
    window.location.hash = "da-top"
});

// SECTION 3

var tabs = document.getElementsByClassName("swipe-button");

for (var x of tabs) {
    x.addEventListener("click", function () {
        for (var x of tabs) {
            x.classList.remove("active");
        }
        var index = this.getAttribute("index");
        swiper.slideTo(index, 1000);
        this.classList.add("active");
    });
}