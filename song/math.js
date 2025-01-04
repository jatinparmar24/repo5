 // console.log(Math.PI);
 // console.log(Math.abs(-8));   // gives positive number of negetive

 console.log(Math.floor(Math.random()*6))+2;      // floor removes digit after point(.)   random gives digit between 0 and 1
 
 
  // dice function

  let roll=()=>{

    let result=document.querySelector("#result") 
       let numb=Math.floor(Math.random()*6)+1;
       result.innerHTML=numb;



  }