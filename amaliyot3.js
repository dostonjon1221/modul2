"use strict"

let numberOfSeries;

function start(){
    numberOfSeries = +prompt("nechta o'yin ko'rdiz")
    while(numberOfSeries == "" || numberOfSeries==null ||isNaN(numberOfSeries)){

        numberOfSeries=+prompt("nechta o'yin ko'rdiz")
    }
}
start()
    const seriesDB= {
        count:numberOfSeries,
        series:{},
        actors:{},
        genres:[],
        privat:false,
    };
    for(let i = 0; i<seriesDB.length; i++){
        if(seriesDB.privat=== false){
            alert("incorrect")
        }
        else{
            console.log(seriesDB)
        }
    }
    
    
    // console.log(seriesDB)
    for(let i = 0; i<=1; i++){
        const a = prompt("Oxirgi ko'rgan seriallariz"),
        b=prompt("Nechi baho berasiz");
        seriesDB.series[a]= b;
        if(a !=null && b !=null && a !="" && b !=""){
            seriesDB.series[a]= b;
            console.log("done")
        }else{
            console.log("error");
            i--;
        }
        
        
}
if(seriesDB.count <=5){
    console.log("kam kino")
}else if(seriesDB.count >=5 && seriesDB.count <=10 ){
    console.log("ortacha")
}else if(seriesDB.count >=10){
    console.log("super")
}
console.log(seriesDB)
