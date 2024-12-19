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



// we can get img direct if given in div to convert it into background image so we get that image byt its id

  let rot1=()=>{
    let show=document.querySelector("#rotate")
    show.style.background="red";
    show.style.borderRadius="100%";
    show.style.rotate="100deg"
  }

  let rot2=()=>{
    let show=document.querySelector("#rotate")
    show.style.background="blue";
    show.style.borderRadius="60px"
  }