const cal=document.querySelector("#result")
const btn=document.querySelector("button")


// btn.addEventListener("click",()=>{
//     const cal=document.querySelector("#result");
//     const number1=parseInt(document.getElementById("number1").value);
//     const number2=parseInt(document.getElementById("number2").value);
//     result=number1+number2;
//     cal.innerText=`result:${result}`;
// });
const Addition=()=>{
    const cal=document.querySelector("#result");
    const number1=parseInt(document.getElementById("number1").value);
    const number2=parseInt(document.getElementById("number2").value);
    result1=number1+number2;
    cal.innerHTML=`<h1>ADDITION:${result1}</h1>`;
    cal.style.backgroundColor="purple";
    cal.style.color="white";
}

const multiplication=function(){
    const cal=document.querySelector("#result");
    const number1=parseInt(document.getElementById("number1").value);
    const number2=parseInt(document.getElementById("number2").value);
    result2=number1*number2;
    cal.innerHTML=`<h1>MULTIPLICATION:${result2}</h1>`;
    cal.style.backgroundColor="purple";
    cal.style.color="white";
    
}

Subadd=document.getElementById("subadd")

window.addEventListener("keyup", (events)=>{ 
    if(events.key==="Enter"){
        Addition();
    }}); 


window.addEventListener("keyup", (events)=>{ 
    if(events.key==="Shift"){
        console.log(events)
        multiplication();
    }}); 
    
function division(){
    const cal=document.querySelector("#result");
    const number1=parseInt(document.getElementById("number1").value);
    const number2=parseInt(document.getElementById("number2").value);
    result3=number1/number2
    cal.innerHTML=`<h1>DIVISION is ${result3}</h1>`
    cal.style.backgroundColor="purple"
    cal.style.color="white"
    
}

function subtraction(){
    const cal=document.querySelector("#result");
    const number1=parseInt(document.getElementById("number1").value);
    const number2=parseInt(document.getElementById("number2").value);
    result3=number1-number2
    cal.innerHTML=`<h1>SUBTRACTION is ${result3}</h1>`
    cal.style.backgroundColor="purple"
    cal.style.color="white"
    
}
window.addEventListener("keyup",(e)=>{
    if(e.key==="Tab"){
        console.log(e.key);
        division();
    }
})



