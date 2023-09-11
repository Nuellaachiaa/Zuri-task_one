





const weekday = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
var myDate = new Date();
let myDay = weekday[myDate.getUTCDay()];
document.getElementById("Day").innerHTML = myDay;

// Display UTC time format
var utcTime = myDate.toISOString();
document.write(utcTime);
document.getElementById("time").innerHTML = utcTime;