
// 1 millisecond is equal to 1 second

//let startt=()=>(

 //   setTimeout(()=>{
 //       console.log("I Am Running");  
  //  },2000)
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
 //   },3000);
    
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

 let incr=()=>{
    let counter=10;
    setInterval(()=>{
        let show=document.querySelector("#addd")
      show.innerHTML=counter
      counter--;
    },1000)
 }


 // stop interval with clearinterval

 let ints=setInterval(()=>{
    console.log("Running"); 
 },1000)

 let startt=()=>{
    clearInterval(ints)     // it stops when button is clicked
 }


