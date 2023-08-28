function clock(){
    let d = new Date();
    let h = d.getHours();
    let m = d.getMinutes();
    let s = d.getSeconds();
    let ampm = "PM";

    let time = document.querySelector('.time');
    let date = document.querySelector('.date');



    if(h < 12){
        ampm = "AM";   
    }

    if(h == 0){
        h = 12;
    }

    if(h > 12){
        h = h - 12;
    }

    if(h < 10){
        h = '0' + h;
    }

    if(m < 10){
        m = '0' + m;
    }

    if(s < 10){
        s = '0' + s;
    }

    time.innerHTML = h + ':' + m + ':' +s + ' ' + ampm;
    
    let days = [
        'Sunday',
        'Monday',
        'Tuesday',
        'Wednesday',
        'Thrusday',
        'Friday',
        'Saturday'
    ];

    let months = [
        'january',
        'February',
        'March',
        'April',
        'May',
        'June',
        'July',
        'August',
        'September',
        'October',
        'November',
        'December'
    ];

    date.innerHTML = d.getDate() + ' ' + months[d.getMonth()]  + ' ' + d.getFullYear() + ', ' + days[d.getDay()];


}

setInterval(clock, 1000);