"use strict";

// NAV
var navButtons = document.getElementsByClassName("nav-button");
var logo = document.getElementById("nav-logo");

function jumpTo(num){
    switch(num){
        case 1:
            document.getElementById("section-3").scrollIntoView({ behavior: "smooth", block: "start" });
            break;
        case 2:
            document.getElementById("section-4").scrollIntoView({ behavior: "smooth", block: "start"});
            break;
        case 3:
            document.getElementById("section-6").scrollIntoView({ behavior: "smooth", block: "start"});
            break;
        case 4:
            document.getElementById("section-7").scrollIntoView({ behavior: "smooth", block: "start"});
            break;
        case 5:
            document.getElementById("section-8").scrollIntoView({ behavior: "smooth", block: "start"});
            break;
    }
}

logo.addEventListener("click", () => {
    document.getElementById("da-top").scrollIntoView({ behavior: "smooth", block: "start"});
});

// SIDE MENU AND BURGER

var burger = document.getElementById("burger");
var sideMenu = document.getElementsByClassName("side-menu")[0];

burger.addEventListener("click", function () {
    sideMenu.classList.toggle("open");
    for(var x of navButtons){
        x.addEventListener("click", function(){
            jumpTo();
            sideMenu.classList.remove("open");
        });
    };
});

window.addEventListener("resize", function () {
    if (window.innerWidth > 800) {
        sideMenu.classList.remove("open");
    }
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