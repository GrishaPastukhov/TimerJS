'use scrict'
const root = document.getElementById('root');
const timer = document.getElementById('timer');
const startButton = document.getElementById('timer__startBtn');
const stopButton = document.getElementById('timer__stopBtn');
const timerScreen = document.getElementById('timer__screen');

let i = 0;

startButton.addEventListener('click', function timer (){
    startButton.classList.remove('stop');
    if(startButton.classList.contains('start') == false){
    startButton.classList.add('start');
    const newInterval = setInterval(function(){
        timerScreen.innerHTML = i++ + ' sec';

        if(startButton.classList.contains('stop') == true){
            clearInterval(newInterval);
            console.log('test')
        }
    }
    , 1000);
    newInterval;
    }}
)

stopButton.addEventListener('click', function(){
    timerScreen.innerHTML = i +' sec';
    startButton.classList.remove('start');
    startButton.classList.add('stop');
})