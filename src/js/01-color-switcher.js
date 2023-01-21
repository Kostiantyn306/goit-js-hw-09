

const backround = document.querySelector("body")
const clickStart = document.querySelector("button[data-start]")
const clickStop = document.querySelector("button[data-stop]")
let randomTimer = null;
clickStop.disabled = true; 
    
clickStart.addEventListener("click", btnStart)
clickStop.addEventListener("click", btnStop)


function btnStart() {
    clickStart.disabled = true; 
    clickStop.disabled = false; 
 randomTimer = setInterval(() => {backround.style.backgroundColor = `#${Math.floor(Math.random() * 16777215).toString(16)}`}, 1000);

   
}

function btnStop() {
    clickStart.disabled = false; 
    clickStop.disabled = true; 
   clearInterval(randomTimer);
}
console.log("work...");


