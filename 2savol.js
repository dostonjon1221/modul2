"use strict"
// function sub(a,b){
//     if(a!==b){
//         console.log(a+b)
//     }
//     else {
//         console.log(a*b)
//     }
// }
// sub(5,2)
// function make(a,b){
//     if(a==10 || b==10 || a+b ==10){
//         console.log(true)
//     }else{
//         console.log(false)
//     }
// }
// make(10,9)
function  notString( str ) {
 for(let i in str){
    if(i=="not"){
        console.log(str)
        break
    }else{
        console.log("not"+ str)
        break
    }
 }
}
notString("is not'")

// notString("Doston")
// const a = ["d","b","c"];
// for(let i in a.){
    
// }
