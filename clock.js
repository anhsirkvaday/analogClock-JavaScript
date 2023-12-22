// console.log(document.getElementsByClassName('clockContainer')[0]);
setInterval(()=>{
    dateTime=new Date();
    hourTime=dateTime.getHours();
    minuteTime=dateTime.getMinutes();
    secondTime=dateTime.getSeconds();
    console.log(secondTime);
    hRotation=(30*hourTime)+(minuteTime/2);
    mRotation=6*minuteTime;
    sRotation=6*secondTime;

    document.getElementById('hour').style.transform=`rotate(${hRotation}deg)`;
    document.getElementById('minute').style.transform=`rotate(${mRotation}deg)`;
    document.getElementById('second').style.transform=`rotate(${sRotation}deg)`;
},1000)