

 let time= new Date();

 console.log(time.toLocaleDateString());

 let time1= time.getFullYear()    // year
 let time2=time.getMonth()  // month
 let time3=time.getDate()  // date
 let time4=time.getDay()  // day
 let time5=time.getHours()  // hours
 let time6=time.getMinutes()  // minutes
 let time7=time.getSeconds()  // seconds
 let time8=time.getMilliseconds()    // milliseconds
  
 console.log(time8);
 

 let startt=()=>{
    let tim= new Date();
    let show=document.querySelector("#timee")
    show.innerHTML= tim.getMilliseconds();
 }

 // day== 
 let das=()=>{
    let arr=["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"]
    let tim= new Date();
    let show=document.querySelector("#dayy")
    show.innerHTML= arr[time.getDay()];
 }