let time;

function start(){
    time = setInterval(timer, 1000);
}
function stop(){
    clearInterval(time);
}

function zerar(){
    clearInterval(time);
    document.querySelector('.time').innerHTML = '00:00:00';
}

function timer(){
    let d = new Date;

    let h = d.getHours();
    let m = d.getMinutes();
    let s = d.getSeconds();

    let txt = h + ':' + m + ':'+ s;

    document.querySelector('.time').innerHTML = txt
}
