"use strict"




var salys = [{},{},{},{},{}]
var salys = [
    {name: "Lietuva", area: 65300  , popul: 2794329},
    {name: "Latvija", area: 64589, popul: 1907675},
    {name: "Estija", area: 45339, popul: 1328439},
    {name: "Nyderlandai", area: 41865, popul: 17629200},
    {name: "Anglija", area: 130395, popul: 55619400},
 
]

// for(var x of salys){
//     console.log(`Šalis: ${x.name} joje gyvena ${x.popul} mln. gyventojų. `)
//     console.log(`Valstybės plotas: ${x.area} km², plotas tenkantis vienam gyventojui: ${x.area / x.popul} m².`)
    
// }

function usersPrint(country, area, poulation, populForOne){
   
    console.log(`Šalis: ${x.name} joje gyvena ${x.popul} mln. gyventojų. `)
    console.log(`Valstybės plotas: ${x.area} km², plotas tenkantis vienam gyventojui: ${x.area / x.popul} m².`)
    
}

for(var x of salys) {
    usersPrint(x.country, x.area, x.population, x.populForOne)
  
}
  



