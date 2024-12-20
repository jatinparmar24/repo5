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