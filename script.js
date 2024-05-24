var time_ele = document.getElementsByClassName("time")[0];
var start_btn = document.getElementById("start");
var lap_btn = document.getElementById("lap");
var stop_btn = document.getElementById("stop");
var reset_btn = document.getElementById("reset");
var lapss = document.getElementsByClassName("laps");

let seconds = 0;
let interval = null;
let counter= 1;

start_btn.addEventListener("click", start);
lap_btn.addEventListener("click", lap);
stop_btn.addEventListener("click", stop);
reset_btn.addEventListener("click", reset);


function timer() {
    seconds++;

    let hrs = Math.floor(seconds / 3600);
    let mins = Math.floor((seconds - (hrs * 3600)) / 60);
    let sec = seconds % 60;

    if(sec < 10)
        sec = '0' + sec;

    if(mins < 10)
        mins = '0' + mins;

    if(hrs < 10)
        hrs = '0' + hrs;

    time_ele.innerHTML = `${hrs}:${mins}:${sec}`;
}

function start() {
    if(interval)
    {
        return;
    }

    interval = setInterval(timer, 1000);
    if(start_btn.innerText == "Resume"){
        start_btn.innerText = "Start";
    }
    
}

let lapTimes = [];
time_ele.innerHTML = "00:00:00";
function lap() {
  let lapTime = Date.now() - timer;
  lapTimes.push(lapTime);
  let lapDisplay = document.createElement("div");
  lapDisplay.innerText = "Lap " + counter + ": " + time_ele.innerHTML;
  document.getElementById("lapTimes").prepend(lapDisplay);
  counter++;
}


function stop() {
    clearInterval(interval);
    start_btn.innerText = "Resume";
    interval = null;
}



function reset() {
    stop();
    seconds = 0;
    counter = 1;
    time_ele.innerHTML = "00:00:00";
    start_btn.innerText = "Start";
    lapTimes = [];
    document.getElementById("lapTimes").innerHTML = "";
}
