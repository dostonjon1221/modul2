const numberOfSeries = prompt("nechta o'yin ko'rdiz")
const seriesDB= {
    count:`${numberOfSeries}`,
    series:{},
    actors:{},
    genres:[],
    privat:false,
};
const a = prompt("Oxirgi ko'rgan seriallariz"),
b=prompt("Nechi baho berasiz"),
c= prompt("Oxirgi ko'rgan kinoyiz"),
d = prompt("nechi baho berasiz");

seriesDB.series[a]= b;
seriesDB.series[c]= d
console.log(seriesDB)

// seriesDB.series[0]= prompt("oxirgi ko'rgan serialingiz")
// seriesDB.series[1]= prompt("oxirgi ko'rgan serialingiz")
// seriesDB.genres[0]=prompt("nechi baho berasiz")
// seriesDB.genres[1]=prompt("nechi baho berasiz")
// console.log(`${seriesDB.series} + ${seriesDB.genres}`) 
// console.log(seriesDB.count)
// series[1]= prompt("oxirgi ko'rgan serialingiz")