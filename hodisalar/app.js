"use strict";
// const button = document.querySelector("button")
// console.log(button)
// const bDelete = (e)=>{
//     e.target.remove()
// }
// button.addEventListener("click", bDelete)

// const a = document.querySelector("a")
// a.addEventListener("click", (e)=>{
//     e.preventDefault(),
//     alert("link");
// })
const btns= document.querySelectorAll("button")
btns.forEach((e)=>{
    e.addEventListener("click",()=>{
        alert("salom")
    })
})