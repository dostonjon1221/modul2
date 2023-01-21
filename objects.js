"use strict";
var guy={
    height:"70",
    weight:"180px",
    heir:{
        color:"black",
        type:"curcle"
    },
};
// console.log(Object.keys(guy).length);  //o'lchamini aniqlash
// delete guy.height;
// console.log(guy);

for(let key in guy){
    console.log(guy[key] , [key])
}