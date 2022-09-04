var today = new Date();

//DATE, DAY, MONTH AND YEAR
var dd = today.getDate();
var mm= today.getMonth()+1;
var yyyy= today.getFullYear();
var day = today.getDay();



//TURNING DAY NUMBERS INTO WORDS
if(day === 1){
    day= 'Monday';
}
if(day === 2){
    day= 'Tuesday';
}
if(day === 3){
    day= 'Wednesday';
}
if(day === 4){
    day= 'Thursday';
}
if(day === 5){
    day= 'Friday';
}
if(day === 6){
    day= 'Saturday';
}
if(day === 0){
    day= 'Sunday';
}
/////////////////////////

//Turning months numbers to names
if (mm === 1){
    mm = 'January';
}
if (mm === 2){
    mm = 'February';
}
if (mm === 3){
    mm = 'March';
}
if (mm === 4){
    mm = 'April';
}
if (mm === 5){
    mm = 'May';
}
if (mm === 6){
    mm = 'June';
}
if (mm === 7){
    mm = 'July';
}
if (mm === 8){
    mm = 'August';
}
if (mm === 9){
    mm = 'September';
}
if (mm === 10){
    mm = 'October';
}
if (mm === 11){
    mm = 'November';
}
if (mm === 12){
    mm = 'December';
}
///////////////////

//ADDING SUPERSCRIPT ORDINALS
var first = 'st';
var second = 'nd';
var third = 'rd';
var rest = 'th';
if(dd === 1 || dd === 21 || dd === 31){
    dd=dd+first.sup();
}
else if(dd === 2 || dd === 22){
    dd=dd+second.sup();
}
else if(dd === 3 || dd === 23){
    dd=dd+third.sup();
}
else{
    dd=dd+rest.sup();
}

//COMPLETE RESULT:
today= day + ' ' + mm +' ' + dd + ', '+yyyy;


//ADDING TO HTML
document.getElementById('today').innerHTML = today;