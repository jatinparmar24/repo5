let arr= ["Jatin",23,"Sehore"] // its array
let str= "kjalkhdgku,aljkdh.,kahfsdjh";

let obj= {         // has unique key value

     name:"Jatin",
     age:23,
     city:"Sehore",

     // we can make function also in object

     welcome: function(){
        console.log("Welcome to my Home Page")
     }

}

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

