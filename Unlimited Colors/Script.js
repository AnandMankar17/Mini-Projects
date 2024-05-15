const start = document.querySelector("#start");
const stop = document.querySelector("#stop");

const colors = '0123456789abcdef'
let color = '#'

let BG = ()=>{
    for(let i=0; i<6; i++){
        color += colors[Math.floor(Math.random()*16)]
       
    } console.log(color);
    document.body.style.backgroundColor=color
    color ='#';
    }


setInterval(BG,1000);




