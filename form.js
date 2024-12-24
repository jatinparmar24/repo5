

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

     else if(num===""){
      errnum.innerHTML="please enter digits";
      errnum.style.color="red";
      errnum.style.fontSize="30px"
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

     else if(email===""){
        erremail.innerHTML="please enter your email";
        erremail.style.color="red";
        erremail.style.fontSize="30px"
        return false;
     }

     else if(pass===""){
      errpass.innerHTML="please enter your password";
      errpass.style.color="red";
      errpass.style.fontSize="30px"
      return false;
   }

   else if(cpass===""){
      errcpass.innerHTML="please confirm your password";
      errcpass.style.color="red";
      errcpass.style.fontSize="30px"
      return false;
   }

   else if(pass!==cpass){
      errcpass.innerHTML="please confirm your c password";
      return false;

   }










   }