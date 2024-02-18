const ol = document.querySelectorAll("ol");
const btn = document.querySelector("button");

function getRandomColor() {
    const red = Math.floor(Math.random() * 256);
    const green = Math.floor(Math.random() * 256);
    const blue = Math.floor(Math.random() * 256);
    return `rgb(${red},${green},${blue})`;
}

ol.addEventListener("click", (e)=>{
    if(e.target.tagName==="LI"){
        e.target.style.color=getRandomColor();
    }
})

btn.addEventListener("click",()=>{
    li.forEach((entry)=>{
        entry.style.color="black";
    })
})
