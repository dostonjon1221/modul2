
"use strict";
 // old ways
// const box = document.getElementById("box");
// // console.log(box)

// const buttons = document.getElementsByTagName("button")[1];
// console.log(buttons)  //massivdagi taglarga birdaniga style berib bo'lmadyi 

// const circles = document.getElementsByClassName("circle")
// console.log(circles)

// new ways 

// const hearts = document.querySelector(".heart")
// const hearts = document.querySelectorAll(".heart")
// console.log(hearts)
// hearts.forEach((item)=>{
//     console.log(item)
// })

// work with mathods 

const box = document.querySelector("#box")
// box.style.backgroundColor="red";  //rang berish
const buttons = document.querySelectorAll("button")
// buttons.style.width="100px" // hammasiga berib bo'lmaydi faqat tartib asosida berish kerak

// 1-usul hammasini o'zgartirish 
// for(let i=0; i<buttons.length;i++){
//     buttons[i].style.backgroundColor="yellow"
// } // hammasini rangini o'zgartiradi bittada;
// 2-usul 
// buttons.forEach(i =>{
//     i.style.backgroundColor="orange"
// })

// bodyga atribute qo'shish 
const circles = document.querySelectorAll(".circle")
const circleWrapper = document.querySelector(".circle__wrapper") //ona quti
const myCircle = document.createElement("div") //ona quti ichidan bola quti yaratish 
myCircle.classList.add("circle") //bola divga class berish
circleWrapper.append(myCircle) // bolani windowga joylash
// circleWrapper.before(myCircle)
// circleWrapper.after(myCircle)
// circles[3].before(myCircle)  //massivni ixtiyoriy joyiga moslash
// circles[2].remove() //bu massivni indexidagini o'chirib tashlaydi
// circles[2].replaceWith(myCircle) // bu yangi yaratilgan divni massivdagi div o'rniga olib keladi
// circleWrapper.insertAdjacentHTML('beforebegin',"<pre>E</pre>")
// circleWrapper.insertAdjacentHTML('afterbegin',"<pre>E</pre>")
// circleWrapper.insertAdjacentHTML('afterend',"<pre>E</pre>")