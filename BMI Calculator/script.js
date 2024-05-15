let form = document.querySelector("form");
form.addEventListener("submit", function(e){

    e.preventDefault();

    const H = parseInt(document.querySelector("#Height").value);
    const W = parseInt(document.querySelector("#Weight").value);
    const result = document.querySelector(".result");
    if(H=== " " || H<=0 || isNaN(H)){
        
        result.innerHTML = "enter the valid Height";
    }
    else if(W=== " " || W<=0 || isNaN(W)){
        
        result.innerHTML = "enter the valid Weight";
    }
    else{
        var bmi = (W/((H*H)/10000));
        result.innerHTML=bmi.toFixed(2);
    }

   
});
