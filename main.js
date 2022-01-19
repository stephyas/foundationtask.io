let increment=document.querySelector(".btn1");
let decrement=document.querySelector(".btn2");
let add=document.querySelector(".numbers");
let sub=0;
increment.addEventListener("click",function(){
   
    sub+=1;
    add.innerHTML=sub;
})

decrement.addEventListener("click",function(){
    sub-=1;
    add.innerHTML= sub;
})