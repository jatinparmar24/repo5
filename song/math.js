 // console.log(Math.PI);
 // console.log(Math.abs(-8));   // gives positive number of negetive

 console.log(Math.floor(Math.random()+2));      // floor removes digit after point(.)   random gives digit between 0 and 1
 
 
  // dice function

  let roll=()=>{

   let show=document.querySelector("#mid")
   let show1=document.querySelector("#mid2")
   let show2=document.querySelector("#mid3")

   if(Math.floor(Math.random()+1)){
    show.style.backgroundColor="red"
   }

  
  else if(Math.floor(Math.random()+2)){
    show1.style.backgroundColor="red"
    show2.style.backgroundColor="red"
   }
     



  }