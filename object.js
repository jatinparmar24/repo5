let arr= ["Jatin",23,"Sehore"] // its array
let str= "kjalkhdgku,aljkdh.,kahfsdjh";  // string

let obj= {         // has unique key value  like name , age ,city etc.

     name:"Jatin",
     age:23,
     city:"Sehore",

     // we can make function also in object

    // welcome: function(){
     //   console.log("Welcome to my Home Page")   // to add something in function we add template leteral and "this" and key word
    // }

    welcome: function(){
      console.log(`Welcome to ${this.name} Home `)   
   },        // to add array in function

   friuts:["Mango","Grapes","Banana"]

}

console.log(obj.friuts[1])

console.log(arr[1])  // gives index value
console.log(obj.name);  // object access

// to add another thing in object

obj.email="Jatin232423@gmail.com";
console.log(obj.email)
console.log(obj)          // update after email add


 // to delete

 delete obj.city;    // city has been deleted

 // to see function or to call it

 obj.welcome();


 // destructuring of object to make object cleaner

 const {name,city,age}=obj
 console.log(name)

 // spreadoperator is used to add to object

 const stud1={name:"Jatin",age:23}
 const stud2={city:"Sehore", Mark:49,}    // if we add same key here then it overright the first key

 const combinedstudent={...stud1,...stud2};

 console.log( combinedstudent);

 // in array

 const stud3=["Jatin", 23]
 const stud4=["Sehore", 49]

 const combinedstudents=[...stud3,...stud4];

 console.log( combinedstudents);

 // it can add also

 let arry=[1,2,3,4]
 let combinearry=[0,...arry,5]

 console.log(combinearry)
 


 // array of Object ==========

 let student=[
   {name:"jatin",age:23},
   {name:"raj",age:24},
   {name:"vijay",age:25}
 ]

 // let newarr=student.map((e)=>{
 //  return e.age+1;
// })

 // console.log(newarr)


// let newfil=student.filter((e)=>{
 //  return e.age>23;
// })

 // console.log(newfil);


 
