const input = document.querySelector('input');
const btn = document.querySelector('.btn');
let msg = document.querySelector('.msg');
const selectors = document.querySelectorAll('.dropdown select');
let slt = document.querySelector(".slt")

selectors.forEach((select)=>{
    for(let currCode in countryList){
        const option = document.createElement("option")
        option.innerText = currCode;
        if(select.name ==='from' && currCode == 'USD'){
            option.selected ='selected';
        }
        else if(select.name ==='to' && currCode == 'INR'){
            option.selected ='selected';
        }
        select.appendChild(option);
    }
    select.addEventListener('change',(evt)=>{
        updateFlag(evt.target);
    });
})

const updateFlag = (element)=>{
    let currCode = element.value;
    let code = countryList[currCode];
    let newImg = `https://flagsapi.com/${code}/flat/64.png`;
    let img = element.parentElement.querySelector('img');
    img.src = newImg;
};

const base_Url= `https://cdn.jsdelivr.net/gh/fawazahmed0/currency-api@1/latest/currencies/`
let fromCurr = document.querySelector('.from select');
let toCurr = document.querySelector('.to select');

btn.addEventListener('click',(e)=>{
    e.preventDefault();
    let amount = input.value;
    if(amount ==='' || amount<=0){
        amount = 1;
        input.value = '1';
    }

    fetch(`${base_Url}${fromCurr.value.toLowerCase()}/${toCurr.value.toLowerCase()}`)
    .then((res)=>{
        res.json()
    }).then((res)=>{
        let data = res[toCurr.value.toLowerCase()];
        let finalAmount = amount*data;
        msg.innerHTML = `${amount}${fromCurr.value} = ${finalAmount}${toCurr.value}`
    })
})