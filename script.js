`use strict`

let running = false;

$(function () {
    let timer = 0;
    let seconds = 0;
    let minutes = 0;
    let hours = 0;
    stopwatch.textContent = `${hours} : ${minutes} : ${seconds} : ${timer}`;

    let interval;

    function startTimer(){
        interval = setInterval(function () {
            if (running == true) {
                timer+=10;
                stopwatch.textContent = `${hours} : ${minutes} : ${seconds} : ${timer}`;
                if (timer >= 1000) {
                    seconds++;
                    stopwatch.textContent = `${hours} : ${minutes} : ${seconds} : ${timer}`;
                    timer = 0;
                    if (seconds >= 60) {
                        minutes++;
                        stopwatch.textContent = `${hours} : ${minutes} : ${seconds} : ${timer}`;
                        seconds = 0;
                        if (minutes >= 60) {
                            hours++;
                            stopwatch.textContent = `${hours} : ${minutes} : ${seconds} : ${timer}`;
                            minutes = 0;
                        }
                    }
                }
            }
        }, 10);
    }

    function stopInt(){
        clearInterval(interval)
    }

    $(`#start`).on(`click`, function () {
        if (running == true) {
            running = false;
            stopInt();
        } else {
            running = true;
            startTimer();
        }
    });

    $(`#lap`).on(`click`, function () {
        $(`#lapSpace`).append(` <p>${stopwatch.textContent}</p>`);
    });

    $(`#lap`).on(`click`, function () {
        if (running == false) {
            timer = 0;
            seconds = 0;
            minutes = 0;
            hours = 0;
            stopwatch.textContent = `${hours} : ${minutes} : ${seconds} : ${timer}`;
        }
    });

});