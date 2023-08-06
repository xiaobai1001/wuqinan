const time = document.getElementById("time");
const title = document.getElementById("title");
let year = moment().year();
year = moment() < moment(year + "-11-03") ? year : year + 1;
title.innerHTML = "距离" + year + ".11.03生日还剩";
        
function show_time() {
    const day = 60 * 60 * 24;
    const hour = 60 * 60;
    const minute = 60;
    let total = moment(year + "-11-03").diff(moment(), 'seconds');
    const days = Math.floor(total / day);
    total -= days * day;
    let hours = Math.floor(total / hour);
    total -= hours * hour;
    let minutes = Math.floor(total / minute);
    total -= minutes * minute;
    let seconds = Math.floor(total);
    if (hours < 10) hours = "0" + hours;
    if (minutes < 10) minutes = "0" + minutes;
    if (seconds < 10) seconds = "0" + seconds;

    time.innerHTML = days + "天" + hours + "小时" + minutes + "分钟" + seconds + "秒";
    setTimeout("show_time()", 1000);
}
show_time();