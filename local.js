
 let signup=()=>{

    let signname=document.querySelector("#name").value
    let signemail=document.querySelector("#email").value
    let signnum=document.querySelector("#num").value
    let signpass=document.querySelector("#pass").value

    if(signname==""){
        let err=document.querySelector("#name")
        err.style.border="1px solid red"
        return false
    }

    localStorage.setItem("Name",signname)
    localStorage.setItem("Email",signemail)
    localStorage.setItem("Number",signnum)
    localStorage.setItem("Password",signpass)

    location.href='localLogin.html'
    return false


 }


 let login=()=>{

   let loginname=document.querySelector("#loginname").value
   let loginpass=document.querySelector("#loginpass").value

   let localname=localStorage.getItem("Name")
   let localpass=localStorage.getItem("Password")

   if(loginname==localname && loginpass==localpass){
    location.href='localHome.html'
   }
   else{
    alert("Invalid name and password")
   }

   return false

 }