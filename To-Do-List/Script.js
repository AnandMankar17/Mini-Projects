const inp = document.querySelector('.task');
const btn = document.querySelector('.btn');
const ul = document.querySelector('.unorder');

function addtask(){

    let li = document.createElement('li');
    li.innerHTML = inp.value;
    ul.appendChild(li);
    inp.value = '';
    let span = document.createElement('span');
    span.innerHTML = "\u00d7"
    li.appendChild(span);
    saveData();

}
ul.addEventListener('click',(e)=>{
    if(e.target.tagName ==='LI'){
        e.target.classList.toggle('checked');
        saveData();
    }
    else if(e.target.tagName ==='SPAN'){
        e.target.parentElement.remove();
        saveData();
    }
});

function saveData(){
    localStorage.setItem('data',ul.innerHTML)
}
function getData(){
    ul.innerHTML = localStorage.getItem('data');
}
getData();