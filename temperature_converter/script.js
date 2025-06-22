
const num=document.getElementById("num");
const ctof=document.getElementById("celtoFahren");
const ftoc=document.getElementById("Fahrentocel");
const result=document.getElementById("result");
let temp;

function convert(){
    if(ctof.checked){
        temp=Number(num.value);
        temp=temp * 9 / 5 + 32;
        result.textContent=temp.toFixed(2)+"° F";
    
    }else if(ftoc.checked){
        temp=Number(num.value);
        temp=(temp-32)*(5/9);
        result.textContent=temp.toFixed(2)+"° C";

    }else{
        result.textContent="Select a option";
    }

}