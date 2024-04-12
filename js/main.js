const selectMenu=document.querySelectorAll("select");
const timeClock=document.querySelector(".time");
const setalarm=document.querySelector("button");
let alarmtime , alarmState='none';
const content=document.querySelector('.content');
const ringtone=new Audio('./style/ringtone.mp3');

for(let i=23 ; i>=0;i--){
    i= i<10 ? "0" +i : i=i
    let option=`<option value="${i}">${i}</option>`;   
    selectMenu[0].firstElementChild.insertAdjacentHTML("afterend",option) ;
    console.log(option);
}
for(let i=59 ; i>=0;i--){
    i= i<10 ? "0" +i : i=i;
    let option=`<option value="${i}">${i}</option>`;   
    selectMenu[1].firstElementChild.insertAdjacentHTML("afterend",option) ;
    console.log(option);
};

setInterval(()=>{
    let date= new Date();
    let h=date.getHours();
    let m=date.getMinutes();
    let s=date.getSeconds();
    s=s<10 ?"0"+s:s;
    h=h<10 ?"0"+h:h;
    m=m<10 ?"0"+m:m;
  
   
    timeClock.innerHTML=`${h}:${m}:${s}`;
    if(alarmtime==`${h}:${m}`){
        ringtone.play();
        ringtone.loop=true;
    }

}
,1000);

setalarm.addEventListener('click',()=>{
    alarmtime=`${selectMenu[0].value}:${selectMenu[1].value}`;
   if(alarmtime.includes("hour") || alarmtime.includes("minute")){
    return alert('ساعت و دقیقه را انتخاب کنید')
   }
   checkstate(alarmState);

});
function checkstate(state){
    if(state=='noset'){
        setalarm.innerHTML='clear alarm';
        content.classList.add('disable');
        alarmState='set'
    }else{
        content.classList.remove('disable');
        alarmState='noset';
        alarmtime='';
        ringtone.pause();
        setalarm.innerHTML='set alarm';
    }

}; 