"use strict"

// const arr = [1,2,3,4,5]
// console.log(arr.length)
// console.log(arr.pop()) //axirgi indeksni olib tashlaydi
// console.log(arr.push(6)) indeks qo'shadi 
// for(let i of arr){
//     console.log([i])
// }

// arr[99]=0;
// console.log(arr)

// arr.forEach(function(item,index,arr){
//     console.log(`${index} , he was ${item} ${arr}`)
// })

var movie = prompt("whaat is your movie");
let user = movie.split(".") //arrayga o'tkazish
// console.log(user)
console.log(user.join(" -"))