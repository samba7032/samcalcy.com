let btn1 = document.querySelector('#one');
let btn2 = document.querySelector('#two');
let btn3 = document.querySelector('#three');
let btn4 = document.querySelector('#four');
let btn5 = document.querySelector('#five');
let btn6 = document.querySelector('#six');
let btn7 = document.querySelector('#seven');
let btn8 = document.querySelector('#eight');
let btn9 = document.querySelector('#nine');
let btn0 = document.querySelector('#zero');
let btnPlus = document.querySelector('#plus');
let btnMin = document.querySelector('#minus');
let btnDiv = document.querySelector('#div');
let btnMul = document.querySelector('#mul');
let btnClear = document.querySelector('#clear');
let btnEqual = document.querySelector('#equal');
let fun = function (n) {
    let val = n.toString();
    let InpValue = document.querySelector('#val');
    let cal = InpValue.value;
    InpValue.value = cal + val;

}

btn1.addEventListener("click",function () {
    fun(1);
});
btn2.addEventListener("click",function () {
    fun(2);
});

btn3.addEventListener("click",function () {
    fun(3);
});

btn4.addEventListener("click",function () {
    fun(4);
});

btn5.addEventListener("click",function () {
    fun(5);
});

btn6.addEventListener("click",function () {
    fun(6);
});

btn7.addEventListener("click",function () {
    fun(7);
});

btn8.addEventListener("click",function () {
    fun(8);
});

btn9.addEventListener("click",function () {
    fun(9);
});

btnPlus.addEventListener("click",function () {
    let InpValue = document.querySelector('#val');
    let cal = InpValue.value;
    InpValue.value = cal + "+";
});
btnMin.addEventListener("click",function () {
    fun('-');
});

btnMul.addEventListener("click",function () {
    fun('*');
});

btnDiv.addEventListener("click",function () {
    fun("/");
});
btnClear.addEventListener("click",function () {
    let Value = document.querySelector('#val');
        Value.value = ""
    let va = document.querySelector('.mow');
    va.style.display ='none';
});
btn0.addEventListener("click",function () {
    fun(0);
});
btnEqual.addEventListener("click",function () {

    let tExt = document.querySelector('#val');
    if (tExt.value.length == 0){
        alert('Value required');
        let va = document.querySelector('.mow');
        va.style.display ='none';
    }
   else{

       let va = document.querySelector('.mow');
       va.style.display ='block';
    }

});

let bB = document.querySelector('#bb');
bB.addEventListener('click',function () {
    let tExt = document.querySelector('#text');
    if (tExt.value.length == 0){
        let dim = document.querySelector('.h3');
        dim.style.display = 'block';
    }
   else {
       let dis = document.querySelector('.cal-head');
       dis.style.display = 'block';
        let tea = document.querySelector('.team');
       tea.style.display = 'none';
        let Value = document.querySelector('#val');
        Value.value = ""
    }
});
