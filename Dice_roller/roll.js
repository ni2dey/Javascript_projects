const roll_count=document.getElementById("roll_no");
const diceresult=document.getElementById("Diceresult");
const diceimage=document.getElementById("DiceImages");


function rollDice(){
    const results=[];
    const images=[];
    value=roll_count.value;
    for(let i=0;i<value;i++){
        const result=Math.floor(Math.random()*6)+1;
        results.push(result);
        images.push(`<img src="images/${result}.png" alt="Dice ${result}">`);
    }
    diceresult.textContent=`dice:${results.join(', ')}`;
    diceimage.innerHTML=images.join(" ");
}