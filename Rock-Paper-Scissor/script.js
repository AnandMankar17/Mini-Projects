const options = document.querySelectorAll(".innerdiv")
let result = document.querySelector(".result")

options.forEach((option)=>{
    option.addEventListener('click',(e)=>{
        let user = e.target.getAttribute('id');
        console.log('user ',user);
        const comp = computer();
        console.log('computer ',comp);

        function validate() {
            if(user === comp){
                result.innerHTML = `user :${user} and computer :${comp} <i>''<b>Tie</b></i>`
            }
            else if(user ==='rock' && comp ==='paper'){
                result.innerHTML = `user :${user} and computer :${comp} <i>''<b>computer won</b></i>`
            }
            else if(user ==='paper' && comp ==='rock'){
                result.innerHTML = `user :${user} and computer :${comp} <i>''<b>you won</b></i>`
            }
            else if(user ==='rock' && comp ==='scissor'){
                result.innerHTML = `user :${user} and computer :${comp} <i>''<b>you won</b></i>`
            }
            else if(user ==='scissor' && comp ==='rock'){
                result.innerHTML = `user :${user} and computer :${comp} <i>''<b>computer won</b></i>`
            }
            else if(user ==='scissor' && comp ==='paper'){
                result.innerHTML = `user :${user} and computer :${comp} <i>''<b>you won</b></i>`
            }
            else if(user ==='paper' && comp ==='scissor'){
                result.innerHTML = `user :${user} and computer :${comp} <i>''<b>computer won</b></i>`
            }
        
        }
        validate();

    });
});

const arr = ['rock','paper','scissor']
const computer = function(){
    let cc = Math.floor(Math.random()*3);
    return arr[cc];
};


