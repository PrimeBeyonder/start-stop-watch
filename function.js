const display = document.getElementById('display');
let timer = null;
let starTime = 0;
let elapsedTime = 0;
let isRunning = false;
function start() {
    if (!isRunning) {
        starTime = Date.now() - elapsedTime;
        timer = setInterval(update, 10);
        isRunning = true;
    }
}
function stop() {
    if (isRunning) {
        clearInterval(timer);
        elapsedTime = Date.now() - starTime;
        isRunning = false;
    }
}
function reset() {
    clearInterval(timer)

    starTime = 0;
    elapsedTime = 0;
    isRunning = false;
    display.textContent = "00:00:00:00";
}
function update() {
    const current = Date.now();
    elapsedTime = current - starTime;
    let hour = Math.floor(elapsedTime / (1000 * 60 * 60));
    let min = Math.floor(elapsedTime / (1000 * 60) % 60);
    let sec = Math.floor(elapsedTime / (1000) % 60);
    let msec = Math.floor(elapsedTime % 1000 / 10);


    hour = String(hour).padStart(2, "0");
    min = String(min).padStart(2, "0");
    sec = String(sec).padStart(2, "0");
    msec = String(msec).padStart(2, "0");
    display.textContent = `${hour}:${min}:${sec}:${msec}`
}
