// console.log("HELLO WORLD")
// //document.write("JAVA SCRIPT")
// var number1 = 60;
// var number2 = 70;
// console.log( number1 + number2);

// // At a very high level,there are two tyes of data types in java Script
// // 1. primetive data types:undefinded,null,Number,str,var,boolean,symbol
// // 2. Referance data types: array and Objects

// var array =[1,"bablu",2,4,5]

// // operators in javascript
// // Arithmatic operation
// var a = 100;
// var b = 10;
   
// console.log("the value of a+b is",a+b);
// console.log("the value of a/b is",a/b);


// //assignment operators
// // var c = b;
// // c += 5;
// // c -=10;
// // c *=5;

// // console.log(c);


// //comparison operator

// var x = 20;
// var y = 80;
// console.log(x==y);
// console.log(a<=b);

// function avg(a,b){
//     c=(a+b)/2;
//     return c;

// }

// // c1=avg(4,6);
// // c2=avg(14,16);
// // //console.log(c1,c2);




// var age=100;
// if (age > 18)
// {
//     console.log('you can drink water');
// // }
// // else{
// //     console.log('you cannot drink watetr')
// // }

// var arr =[1,2,3,4,5,6,7];
// console.log(arr);
// for(var i=0;i<arr.length;i++){
// console.log(arr[i])
// }


// let mystring ="ganpati bappa morya";
// console.log(mystring.length);
// console.log(mystring.indexOf("bappa"));
 

// mydate= new Date();
// console.log(mydate);
// console.log(mydate.getTime());
// console.log(mydate);

let elem = document.getElementById('click');
console.log(elem);


let elemclass = document.getElementsByClassName('container');
console.log(elemclass);
// elemclass[0].style.background ="yellow";
elemclass[0].classList.add ("bg-primary");
elemclass[0].classList.add ("text-success");

 
console.log(elem.innerHTML);
console.log(elem.innerText);

// // console.log(elemclass.innerHTML);
// // console.log(elemclass.innerText);

// tn=document.getElementsByTagName('div')
// console.log(tn)


// createdElement = document.createElement('p')
// createdElement.innerText="This is a created paragraph"
// tn[1].appendChild(createdElement);

// createdElement2 = document.createElement('b');
// // createdElement2.innerText="this is bold command"
// // tn[1].replaceChild(createdElement2,createdElement);


// // //eventListner
// // function clicked(){
// //     console.log('click function are disply')
// // }
// // window.onload = function(){
// //     console.log('the document is loaded')

// // }

// // firstcontainer.addEventListener("mouseover", function()
// //     {
// //         console.log('mouse on conatiner')
// //     })
// let prevHTML = document.querySelectorAll('.container')[1].innerHTML;

// firstcontainer.addEventListener("mouseup", function()
//     {
//         document.querySelectorAll('.container')[1].innerHTML =prevHTML;
//         console.log('mouse up conatiner')
//     })
// firstcontainer.addEventListener("mousedown", function()
//     {
//         document.querySelectorAll('.container')[1].innerHTML ="<b>We have clicked</b>"
//         console.log('mouse down conatiner')
//     })
// //arrow function

// sum = (a,b)=>{
//     return (a+b);
// }


// //timeout event &setinterval

// logkaro = ()=>{
//     console.log("i am your tag")
// }
// setTimeout(logkaro, 2000);
// clr = setInterval(logkaro, 2000);

obj = {name: "hrishi", length:1 , a: {this:"that"}}
jso =JSON.stringify(obj);

console.log(typeof jso)
console.log(jso)

// parse
parsed = JSON.parse(`{"name": "hrishi", "length":1 , "a": {"this":"that"}}`)
 console.log(parsed);

document.getElementById("Image").src ="tiger.png";



