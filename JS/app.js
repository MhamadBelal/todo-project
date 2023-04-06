'use strict';

/*let name1 = prompt("Enter your Name");

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
*/

let arr=new Array();
let questionOne=prompt("Are you single?, answer: no/yes");
let questionTwo=prompt("Are you student, answer: no/yes");
let questionThree=prompt("Are you happy, answer: no/yes");


function answerArray(data)
{
    if(data=="")
        arr.push("invalid");
    else
        arr.push(data);
}

function printArray(arrayInput)
{
    for(let i=0;i<arrayInput.length;i++)
    console.log(arrayInput[i]);
}


answerArray(questionOne);
answerArray(questionTwo);
answerArray(questionThree);


printArray(arr);
