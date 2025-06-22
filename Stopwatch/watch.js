let has_started=false;
let starttime=0;
let running_time=0;
const time=document.getElementById("time");
let timer=null;

function start(){
    if (!has_started){
        starttime=Date.now()-running_time;
        has_started=true;
        timer=setInterval(update,10);
    
    }
    
}

function stop(){
    if (has_started){
        clearInterval(timer);
        running_time=Date.now()-starttime;
        has_started=false;

    }

}
function reset(){
    
    clearInterval(timer);
    running_time=0;
    starttime=0;
    has_started=false;
    time.textContent="00:00:00:00";

}
function update(){
    if (has_started==true){
        running_time=Date.now()-starttime;
        let hour=Math.floor(running_time/(1000*60*60));
        let  minutes=Math.floor(running_time/(1000*60)%60);
        let seconds=Math.floor(running_time/(1000)%60);
        let millisec=Math.floor(running_time%1000 /10);
        hour=hour.toString().padStart(2,"0");
        minutes=minutes.toString().padStart(2,"0");
        seconds=seconds.toString().padStart(2,"0");
        millisec=millisec.toString().padStart(2,"0");
        time.textContent=`${hour}:${minutes}:${seconds}:${millisec}`
       }
}