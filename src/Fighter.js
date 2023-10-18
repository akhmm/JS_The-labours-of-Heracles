/* Fighter class definition */



class Fighter{
      
    constructor(name, strength, dexterity, life){
    this.name = name;
    this.strength = strength;
    this.dexterity = dexterity;
    this.life = 10;
    

    this.showStatus = function(){
        return `${this.name} : Life💙${this.life}`
    }
    this.fight = function(defender){
        const attack = 1 + Math.floor(Math.random() * this.strength)
        console.log(`${this.name} attack! ===>  ${attack}`)
        const damage = attack - defender.dexterity
        console.log(`${defender.name} defend! dexterity ===> ${defender.dexterity}`)
        
        
        if (damage > 0){
            defender.life -= damage;
            console.log(`${defender.name} got ${damage} damage😭`)
        } else{
            console.log("Well defended, no damage!💪")
        }
        if(defender.life <= 0){
            
            return (`${defender.name} has no more life💀`);
        } else{
            return(`${defender.name} : Life💙${defender.life}`); 
        }
    }
    
    }
}


module.exports = Fighter;
