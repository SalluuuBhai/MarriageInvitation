const days=document.querySelector("#days");
const hours=document.querySelector("#hours");
const minutes=document.querySelector("#minutes");
const seconds=document.querySelector("#seconds");
// const mseconds=document.querySelector("#mseconds");

const currentYear=new Date().getFullYear();
const newYear=new Date(`September 28 ${currentYear} 12:00:00`);

function UpdateTime(){
  const currentDate=new Date();
  const diff=newYear-currentDate;
  const d=Math.floor(diff/1000/60/60/24);
  const h=Math.floor((diff/1000/60/60)%24);
  const m=Math.floor((diff/1000/60)%60);
  const s=Math.floor((diff/1000)%60);
  const ms=Math.floor(diff%1000);

  days.innerHTML=d<10?""-d:d;
  hours.innerHTML=h<10?""-h:h;
  minutes.innerHTML=m<10?""-m:m;
  seconds.innerHTML=s<10?""-s:s;
  // mseconds.innerHTML=ms<10?"0"+ms:ms;
}
setInterval(UpdateTime,1000);


var loader = document.getElementById("preloader");
  
      window.addEventListener("load",function(){
      loader.style.display="none"
  });

