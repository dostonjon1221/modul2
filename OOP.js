"use strict ";
const car ={
    model:"x",
    color:"red",
    isAirBag:true,
}
const gm={
    isAirBag:false
}
// eski usuli 
// gm.__proto__ = car
// console.log(gm.color)

// 1- usul 
// Object.setPrototypeOf(gm, car)
// console.log(gm.color)

// 2-usul 
const bmw = Object.create(car)
console.log(bmw.color)