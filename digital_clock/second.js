const time=document.getElementById("time");
var container=document.getElementById("container");
function updateTime(){
    let temp=new Date();
    let hour=temp.getHours();
    let meridium;
    if (hour>12){
        hour=hour%12;
        meridium="PM"
    }else{
        meridium="AM";
    }
    hour=hour.toString().padStart(2,"0");
    let minutes=temp.getMinutes().toString().padStart(2,"0");
    let seconds=temp.getSeconds().toString().padStart(2,"0");
    let str=`${hour}:${minutes}:${seconds} ${meridium}`;
    document.getElementById("time").textContent=str;

}


setInterval(updateTime,1000);
