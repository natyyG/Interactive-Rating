const one = document.getElementById('one');
const two = document.getElementById('two');
const three = document.getElementById('three');
const four = document.getElementById('four');
const five = document.getElementById('five');
const hidden = document.getElementById('hidden');
const thank = document.getElementById('thankyou');
const num = document.getElementById('num');
function removeClass(x,y,z,a){
    x.classList.remove('active');
    y.classList.remove('active');
    z.classList.remove('active');
    a.classList.remove('active');
}
let val = 0;
one.addEventListener('click', ()=>{
    one.classList.toggle('active');
    val=1;
    console.log(val);
    removeClass(five,two,three,four);
}
)
two.addEventListener('click', ()=>{
    two.classList.toggle('active');
    val=2;
    console.log(val);
    removeClass(one,five,three,four);
}
)
three.addEventListener('click', ()=>{
    three.classList.toggle('active');
    val=3;
    console.log(val);
    removeClass(one,two,five,four);
}
)
four.addEventListener('click', ()=>{
    four.classList.toggle('active');
    val=4;
    console.log(val);
    removeClass(one,two,three,five);
}   
)
five.addEventListener('click', ()=>{
    five.classList.toggle('active');
    val=5;
    console.log(val);
    removeClass(one,two,three,four);
}   
)
btn.addEventListener('click', ()=>{
    hidden.classList.toggle('hidden');
    thank.classList.toggle('display');
    num.innerHTML = val;
})

