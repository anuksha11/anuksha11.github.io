// Script for navigation bar
const bar=document.getElementById('bar')
const nav=document.getElementById('navbar')
const close=document.getElementById('close')
if(bar){
    bar.addEventListener('click',()=>{
        nav.classList.add('active');
    })
}
if(close){
    close.addEventListener('click',()=>{
        nav.classList.remove('active');
    })
}

var pro=document.querySelectorAll('.pro')
for(allp of pro){
    allp.addEventListener('click',()=>{
        window.location.href='sproduct.html';
    })
}
var final=document.querySelector('#finalcart');
final.addEventListener('click',()=>{
    window.location.href='cart.html';
})
