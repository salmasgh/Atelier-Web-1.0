const text = document.querySelector("p");

const color = document.querySelector("#textColor");

const size = document.querySelector("#textSize");

const font = document.querySelector("#textFont");

const textarea = document.querySelector("textarea");

textarea.addEventListener("input", function(){
    text.innerHTML=textarea.value;
})

color.addEventListener("input", function () {
    text.style.color = color.value;
    })
size.addEventListener("input", function () {
    text.style.fontSize = size.value + "px";
    })
font.addEventListener("input", function () {
    text.style.fontFamily = font.value;
    })

