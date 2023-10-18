const Fighter = require('./src/Fighter');
//const {max_life} = require('./src/Fighter');
// First Labour : Heracles vs Nemean Lion
// use your Figher class here



const heracles = new Fighter("🧔Heracles", 5, 6)
const nemean = new Fighter("🦁Nemean Lion", 11, 13)
/* console.log(heracles.fight(nemean))
console.log(nemean.fight(heracles)) */

let i = 1;
do{
    
    console.log(`🕰️ Round #${i}`)
    console.log(heracles.fight(nemean))
    if(nemean.life > 1){
    console.log(nemean.fight(heracles))
    i++;
    }

}while(heracles.life > 0 && nemean.life > 0)

if(nemean.life <= 0){
    console.log(`Winner is🏆 ===> ${heracles.name} and Loser is💀 ===> ${nemean.name}`)
}else{
    console.log(`Winner🏆===> ${nemean.name} and Loser is 💀 ===> ${heracles.name}`)
}
