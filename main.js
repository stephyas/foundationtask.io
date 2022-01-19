let increment=document.querySelector(".button1");
let decrement=document.querySelector(".button2");
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
