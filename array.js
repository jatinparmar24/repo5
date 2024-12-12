// it store multiple data types or same data types or variables or number etc

function okk(){

    let fruits=["Apple","Mango","Grapes","Banana"]

   // let ans=fruits.length;
   // document.write(ans)


  //pop removes last element of an array
   //let ans=fruits.pop()
   // have to use pop again to remove second element
 //  document.write(ans) it stores pop means last one which it removes
 //  document.write(fruits) it store what reamin after pop

 // shift it removes starting element

 //let ans= fruits.shift()
 //document.write(ans) gives index number
 //document.write(fruits) adds new one

 //push adds the last element

 //let ans=fruits.push("Orange","Avocadra")
 //document.write(ans)
 //document.write(fruits)

 // unshift adds an element in starting

// let ans= fruits.unshift("Oranges") 
// document.write(ans)
 //document.write(fruits)
 //console.log(fruits)





 // short method gives data in accending order

 //let arr= [4,7,3,9,2,6,1]
 //let ans =arr.sort()
 //document.write(ans)

 // in reverse order
 //let ans= arr.reverse()
 //document.write(ans)



 //decending order

 //let ans= arr.sort().reverse()
 //document.write(ans)

// let ar1= [1,3,5,7,9]
 // let ar2= [2,4,6,8]

 //let ans= ar1.concat(ar2)
// ans.sort()
 //document.write(ans)

 // let ar1= [1,33,5,17,9]
 // let ar2= [2,4,64,8]
 // let ans=ar1.sort( (a,b) =>a-b )   sort with correct order 

 // let ans=ar1.sort( (a,b) =>b-a )   reverse with descending order in correct way
 // document.write(ans)



//=====slice=======

 let a=[2,4,7,9,1,3,4]

 //let ans=a.slice(0,6)
 //let ans=a.slice(0,-6)  //  remove from last
// document.write(ans)


// =======splice=========

// a.splice(2,2,14,20)  (starting positon ,    how many number should be deleted,   what to add or how many to add)
// document.write(a)


//=======map============ to perforn specific method to specific numor alpha bet 

//let ans=a.map(function(num){
 //  return num*2
//})
//let ans=a.map(function(b){
 // return b+3
// })


//==with arrow function
 //let ans=a.map((num)=>num*2)  used with arrow function

 // document.write(ans)



 // ======= filter======

 // let ans=a.filter((num)=>num>3)
//  let ans=a.filter((num)=>num%2==0)  gives even number
 // let ans=a.filter((num)=>num%2!==0)  odd number
 // document.write(ans)


 // ========== for each=========  not return array but string


// a.forEach((num)=>{
 // document.write(num*2)
// })

//=====for of====== return string

// for(let num of a ){
//  document.write(num);
// }


  

}

//pick id in js

function start(){

    let show= document.getElementById("text")
  //  show.textContent=("Yes it comes") changes only content
  show.innerHTML="<h2>Yes it comes</h2>"
    show.style.color="blue"


}

//======arrow function==========
// its a one line code 

// const go=()=>{

// }
