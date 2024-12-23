

   let submitt=()=>{

     let name=document.querySelector("#inpname").value;
     let num=document.querySelector("#inpnum").value;
     let email=document.querySelector("#inpemail").value;
     let pass=document.querySelector("#inppass").value;
     let cpass=document.querySelector("#inpcpass").value;





     let errname=document.querySelector("#errorname");
     let errnum=document.querySelector("#errornum");
     let erremail=document.querySelector("#erroremail");
     let errpass=document.querySelector("#errorpass");
     let errcpass=document.querySelector("#errorcpass");


     if(name===""){
        errname.innerHTML="please enter your name";
        errname.style.color="red";
        errname.style.fontSize="30px"
        return false;
     }

     else if(isNaN(num)){
        errnum.innerHTML="please enter digits only";
         errnum.style.color="red";
        errnum.style.fontSize="30px"
        return false;
     }
     else if(num.length!=10){
        errnum.innerHTML="please enter 10 digits only";
         errnum.style.color="red";
        errnum.style.fontSize="30px"
        return false;
     }



   }