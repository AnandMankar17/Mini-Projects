let btns = document.querySelectorAll(".btn");
let reset = document.querySelector(".reset");
let para = document.querySelector('.p1');

let turn0 =true;
const arr = [[0,1,2],[3,4,5],[6,7,8],[0,3,6],[1,4,7],[2,5,8],[0,4,8],[2,4,6]];
btns.forEach((btn)=>{
    btn.addEventListener('click',()=>{
        if(turn0){
            btn.innerText = "0";
            turn0=false;
        }else{
            btn.innerText = "X";
            turn0 = true;
        }
        btn.disabled = true;
        Validate();
    });
});

function Validate(){
    for(let i of arr){
        let pos1 = btns[i[0]].innerText;
        let pos2 = btns[i[1]].innerText;
        let pos3 = btns[i[2]].innerText;

        if(pos1 !="" && pos2 !="" && pos3 !=""){
            if(pos1 === pos2 && pos2 === pos3){
                para.innerText=`WINNER ${pos1}`
                
            }
        }
    }
};
reset.addEventListener('click',()=>{
    btns.forEach((btn)=>{
        btn.innerText='';
        para.innerText='';
        btn.disabled =false;
    })
})
