let box = document.querySelectorAll("span")

box.forEach((box)=>{
    console.log(box);
    box.addEventListener("click",function(e){
        if(e.target.id =="green"){
            document.body.style.backgroundColor=e.target.id;
        }
        else if(e.target.id =="red"){
            document.body.style.backgroundColor=e.target.id;
        }
        else if(e.target.id =="pink"){
            document.body.style.backgroundColor=e.target.id;
        }
        else if(e.target.id =="yellow"){
            document.body.style.backgroundColor=e.target.id;
        }
        else{
            document.body.style.backgroundColor="#ffffff"
        }

    });
});

