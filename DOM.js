let go=()=>{

    let show=document.querySelector("#dis")
    show.innerHTML="Hello Javascript";
    show.style.color="red";
    show.style.fontSize="40px";
}


let counter=0;
let add=()=>{
     counter++;
    let show=document.querySelector("#in");
    show.innerHTML=counter;
    
}


let sub=()=>{   
    let show=document.querySelector("#in")
    if(counter>0){
      counter--;
    }
    show.innerHTML=counter;
}

let zero=()=>{
    counter=0;
    let show=document.querySelector("#in");
    show.innerHTML=counter;

}



// we can get img direct if given in div to convert it into background image so we get that image byt its id   by using "src" in js

  let rot1=()=>{
    let show=document.querySelector("#rotate")
    show.style.background="red";
    show.style.borderRadius="70px";
    show.style.rotate="200deg"
  }

  let rot2=()=>{
    let show=document.querySelector("#rotate")
    show.style.background="blue";
    show.style.borderRadius="100%"
  }

  let openn=()=>{
     let hidee=document.querySelector("#box")
     if(hidee.style.display=="none"){
       hidee.style.display="block"
     }
     else{
       hidee.style.display="none"
     }
   }


  // toggle property  only uses for hide or do none things
   
   //let openn=()=>{
   //  let hidee=document.querySelector("#box")
    // hidee.classList.toggle('hidden')
  // }

  let count=16;   // by defalut font dixe of text

  let upp=()=>{
    let diss= document.querySelector("#outi")
    count++;   // it can be written in that way also  count=count*2;
    diss.style.fontSize=count+"px";
  }

  let loww=()=>{
    let diss= document.querySelector("#outi")
    count--;
    diss.style.fontSize=count+"px";
  }

  let works=()=>{
    let mean=document.querySelector("#saww").value;    // to take the information of input tag we use . value at end
    let mann=document.querySelector("#wordd")
    mann.innerHTML=mean;
  }

  let alrt=()=>{
    let deem=document.querySelector("#asd")
    deem.innerHTML="How U Do It"
  }
