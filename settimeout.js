
// 1 millisecond is equal to 1 second

//let startt=()=>(

 //   setTimeout(()=>{
 //       console.log("I Am Running");  
  //  },2000)   // takes 2 secdond to show the result
// )


//   js is syncronus language=====


// console.log("Starting");

// setTimeout(()=>{
  //  console.log("I Am Running");     // it delays to give result   // it makes js ansycronus
// },2000)

// console.log("Ending");



//let stt=()=>{

 //   let des=document.querySelector("#red")
    
 //   setTimeout(()=>{
 //    des.style.backgroundColor="red"
  //  },2000)
   
//  }

// set interval

//let startt=()=>{

 //   setInterval(() => {
 //       console.log("I AM Running");
 //   },3000);   // works after every 3 seconds
    
// }


// counter ++ =======

// let startt=()=>{

// let counter=0;
// setInterval(()=>{
  //  console.log(counter++)
// },2000)

// }

//  counter in home screeen  plus number

//  let incr=()=>{
//     let counter=0;
//     setInterval(()=>{
//         let show=document.querySelector("#addd")
//       show.innerHTML=counter
//       counter++;
//     },1000)
//  }

// reverse number

//  let incr=()=>{
//     let counter=10;
//     setInterval(()=>{
//         let show=document.querySelector("#addd")
//       show.innerHTML=counter
//       counter--;
//     },1000)
//  }


 // stop interval with clearinterval

//  let ints=setInterval(()=>{
//     console.log("Running"); 
//  },1000)

//  let startt=()=>{
//     clearInterval(ints)     // it stops when button is clicked
//  }


  

    // let result=document.querySelector("#auto")
    // let counter=1;


    // let a = setInterval(() => {
    //   result.innerHTML=counter++
    // }, 1000);

    // setTimeout(()=>{
    //       clearInterval(a)
    // },6000)
  

  //   let isname=true;

  //   setInterval(() => {
  //     let show=document.querySelector("#text")
  //   show.innerHTML=isname?"Jatin":"Parmar"                to show at title place just need to write ===== document.title in place of show.innerHTML
  //   //  isname=!isname; //     it is true what we can do that with if else also


  //   // either with isname=!isname   ======  or=======
  //  //  or with if else

  //   if(isname==true){
  //     isname =false
  //   }

  //   else{
  //     isname=true
  //   }

  //   }, 1000);



     /// now to show in title   means to change its name

     let isname=true;

     setInterval(() => {
       let show=document.querySelector("#text")
     document.title=isname?"Jatin":"Parmar"
     //  isname=!isname; //     it is true what we can do that with if else also
 
 
     // either with isname=!isname   ======  or=======
    //  or with if else
 
     if(isname==true){
       isname =false
     }
 
     else{
       isname=true
     }
 
     }, 1000);


     // timer    stops at =====  1

    //  let timer=()=>{
    //       let counter=6;
    //     let inter  =setInterval(()=>{
    //           let show=document.querySelector("#wert")
    //         show.innerHTML=counter
    //         counter--;

    //         if(counter==0){
    //           clearInterval(inter)
    //         }
    //       },1000)
    //    }


       //   stop watch

       
     let runn=()=>{
      
      let inp=document.querySelector("#timer").value

    let inter  =setInterval(()=>{
    
       let display=document.querySelector("#text1")
        display.innerHTML=inp
        inp--;

        if(inp==0){
          clearInterval(inter)
        }
      },1000)
   }

   // digital clock

   setInterval(() => {
    let show=document.querySelector("#display")
    let time= new Date()

    let currenttime=`${time.getHours()}:${time.getMinutes()}:${time.getSeconds()}`
     show.innerHTML=currenttime
   },1000)

   // alarm clock

   let rune=()=>{

    let show1=document.querySelector("#inp").value;
   

   let inter= setInterval(()=>{
        
    let war=document.querySelector("#shows")
     war.innerHTML=`Alarm Set For ${show1}`

    let time=new Date()   // time in object form=====

      time=`${time.getHours().toString() .padStart(2,"0")}:${time.getMinutes().toString() .padStart(2,"0")}`   // get hours are in  number form so we use to string to change intt string because padstart take value in string format ===== padstart take 2 parameter first is how many digit u want to add and secondly whar u want to add

    if(show1==time){
    war.innerHTML="Alarm Snoozing";
     document.querySelector("#sing").play()
    war.style.color="red"
    war.style.fontSize="50px"

    setTimeout(() => {
      document.querySelector("#sing").pause()
      clearInterval(inter)
    }, 10000);
    }

    else{
      war.innerHTML="Alarm Set";
    }
  },1000)
  }


  