let workTitle = document.getElementById('work');
let breakTitle = document.getElementById('break');

let workTime = 25;
let breakTime = 5;

let seconds = "00";


window.onload =() => {
    document.getElementById('minutes').innerHTML = workTime;
    document.getElementById('seconds').innerHTML = seconds;

    workTitle.classList.add('active');


}

function updateTimerColor(minutes, seconds) {
    const timerElement = document.querySelector('.timer'); // Use querySelector to select by class
    if (minutes === 0 && seconds < 5) {
        document.getElementById('minutes').style.color = "#FF0000"; // Change minutes color to red
        document.getElementById('seconds').style.color = "#FF0000"; // Change seconds color to red
        timerElement.style.color = "#FF0000"; // Change timer container color to red
    } else {
        document.getElementById('minutes').style.color = "#ffffff"; // Change minutes color back to black
        document.getElementById('seconds').style.color = "#ffffff"; // Change seconds color back to black
        timerElement.style.color = "#000000"; // Change timer container color back to black
    }
}

function start(){

    document.getElementById('start').style.display = "none";
    document.getElementById('reset').style.display = "block";

    seconds = 59;
    let workMinutes = workTime -1;
    let breakMinutes = breakTime -1;

    breakCount = 0;

    let timerFunction = () => {
        document.getElementById('minutes').innerHTML = workMinutes;
        document.getElementById('seconds').innerHTML = seconds;

        seconds = seconds-1;

        updateTimerColor(workMinutes, seconds);

        if(seconds ===0){
            workMinutes = workMinutes-1;
            if(workMinutes === -1){
                if(breakCount%2 === 0){
                    workMinutes = breakMinutes;
                    breakCount++;

                    workTitle.classList.remove('active');
                    breakTitle.classList.add('active');

                }else{
                    workMinutes =workTime;
                    breakCount++;

                    workTitle.classList.add('active');
                    breakTitle.classList.remove('active');
                }
            }
            
            seconds = 59;
        }

    }
    setInterval(timerFunction, 1000);
}





