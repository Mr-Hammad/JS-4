// ___Stopwatch___Workin___//



let [ms, sec, min, hour] = [0, 0, 0, 0];
let timeHour = document.getElementById("hour");
let timeMin = document.getElementById("min");
let timeSec = document.getElementById("sec");
let timeMs = document.getElementById("ms");
let timer = 0;

function stopwatch() {
    ms++;
    if (ms == 10) {
        ms = 0;
        sec++;
        if (sec == 60) {
            sec = 0;
            min++;
            if (min == 60) {
                min = 0;
                hour++;
            }
        }
    }

    // DISPLAY TIME //

    let displayhour = (hour < 10) ? "0" + hour : hour;
    let displaymin = (min < 10) ? "0" + min : min;
    let displaysec = (sec < 10) ? "0" + sec : sec;
    let displayms = (ms < 10) ? "0" + ms : ms;

    timeHour.innerHTML = displayhour + ':';
    timeMin.innerHTML = displaymin + ':';
    timeSec.innerHTML = displaysec + ':';
    timeMs.innerHTML = displayms;
}

function start() {
    if (timer !== 0) {
        clearInterval(timer)
    }
    timer = setInterval(stopwatch, 100)
}
function stop() {
    clearInterval(timer)
    [ms, sec, min, hour] = [0, 0, 0, 0]
    document.getElementById("hour").innerHTML = "00"
    document.getElementById("min").innerHTML = "00"
    document.getElementById("sec").innerHTML = "00"
    document.getElementById("ms").innerHTML = "00"
}
function reset() {
    clearTimeout(timer);
    timer = undefined;
    [ms, sec, min, hour] = [0, 0, 0, 0];
    timeHour.innerHTML = "00:";
    timeMin.innerHTML = "00:";
    timeSec.innerHTML = "00:";
    timeMs.innerHTML = "00";
}

