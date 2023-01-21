"use strict"
// const age = +prompt("how old are you")
// if(age == 18 ){
//     prompt("Horror films")
// }else if(age> 18 && age<25){
// alert("boevik film")
// }else{
//     alert("cartoon  ")
// }

const age = 20
for(let i = 1; i<10 ; i++){
    if(age+i === 25){
        break
        // continue
    }
    console.log(i+age)
}