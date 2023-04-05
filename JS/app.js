'use strict';

let name1 = prompt("Enter your Name");

let gender = prompt("enter your gender: male/female");

if (gender == "male" || gender == "female") {

}
else
    gender = prompt("enter your gender: male/female");

let age = prompt("enter you age")
if (age <= 0)
    age = prompt("age is less than or equal to zero, please enter agian");

let ms = confirm("whould you like to see the welcoming message?")
if (ms) {
    if (gender == "male")
        alert("welcome to our page Mr " + name1);
    else if (gender == "female")
        alert("welcome to our page Ms " + name1);
    else
        alert("welcome to our page");
}


let arr=new Array();

let qestion1=prompt("Are you single?, answer: no/yes");
if(qestion1=="")
qestion1="invalid";
arr.push(qestion1);
let qestion2=prompt("Are you student, answer: no/yes");
if(qestion2=="")
qestion2="invalid";
arr.push(qestion2);
let qestion3=prompt("Are you happy, answer: no/yes");
if(qestion3=="")
qestion3="invalid";
arr.push(qestion3);

for(let i=0;i<arr.length;i++)
    console.log(arr[i]);

