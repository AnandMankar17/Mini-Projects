const inp = document.querySelector('input');
const btns = document.querySelectorAll('.buttons')
let val = '';
btns.forEach((btn)=>{
    btn.addEventListener('click',(e)=>{
        if(e.target.innerHTML== '='){
            val = eval(val);
            inp.value = val;

        }else if(e.target.innerHTML=='DEL'){
            val=val.substring(0,val.length-1);
            inp.value = val;

        }else if(e.target.innerHTML=='AC'){
            val='';
            inp.value = val;
        }
        else{
            val = val + e.target.innerHTML;
            inp.value = val;
        }

    });
});