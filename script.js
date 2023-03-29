const DayHtml = document.querySelector('#tiles > span:nth-child(1)')

const HourHtml = document.querySelector('#tiles > span:nth-child(2)')
const MinuteHtml = document.querySelector('#tiles > span:nth-child(3)')
const SecondHtml = document.querySelector('#tiles > span:nth-child(4)')





setInterval(() => {
    const Bac  = new Date("2023-06-11").getTime();
const Today = new Date().getTime();
let diff = (Bac - Today) / 1000
let days = Math.floor(diff / 60 / 60 / 24)+1
let hours = Math.floor(diff /60 / 60) - days*24
let minutes = Math.floor(diff/ 60) -days*24*60 - hours*60
let seconds = Math.floor(diff) - days *24 *60 *60 -hours *60*60 -minutes*60

    
DayHtml.innerText= days;
HourHtml.innerHTML= hours;
MinuteHtml.innerHTML = minutes;
SecondHtml.innerHTML = seconds;


}, 1000);


