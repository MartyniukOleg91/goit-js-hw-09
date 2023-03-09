
const btnStart = document.querySelector('button[data-start]');
const btnStop = document.querySelector('button[data-stop]');
const body = document.querySelector('body');

let timerId = null;
const INTERVAL_DELAY = 500;
btnStart.disabled = false;
btnStop.disabled = true;

function getRandomHexColor() {
    return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
  }

function updateBackgroundColor (){
    body.style.backgroundColor =  getRandomHexColor();
}  

btnStart.addEventListener('click', onBtnStartClick);
btnStop.addEventListener('click', onBtnStopClick);

function togle() {
    if (btnStart.disabled) {
        btnStart.disabled = true;
        btnStop.disabled = false;
        return;
    } else
    btnStart.disabled = false;
    btnStop.disabled = true;
}

function onBtnStartClick(){
    console.log(`Call onBtnStartClick every ${INTERVAL_DELAY} ms`)

    timerId = setInterval(updateBackgroundColor, INTERVAL_DELAY);
    togle()
};



function onBtnStopClick(){
    togle()
    
    clearInterval(timerId);
    console.log(`Interval has stopped!`);
};
