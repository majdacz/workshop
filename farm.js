
/*Farma
    Znovu použijte třídu zvířat z prvního cvičení
    Vytvořte třídu Farma, ta má seznam zvířat který má limit, ten který definuje, 
    kolik zvířat lze chovat na farmě a lze jej nastavit při založení farmy
        má dvě metody:
            plemeno() -> vytvoří nové zvíře, pokud je pro něj místo
            sell() -> prodá (odstraní) zvíře
            */

class Animal {

    constructor () {
        this.hunger= 50;
        this.thirst= 50;
   }
   eat() {
       this.hunger-= 1;
   }
   drink() {
       this.thirst= this.thirst -1;
   }
   play() {
       this.hunger= this.hunger +1;
       this.thirst+= 1;
   }
   run(){
       this.hunger+=10;
       this.thirst+=10;
   }
}
class Farma {
    listOfAnimals = [];
    limitOfAnimals= 0;
    constructor (limitOfAnimals) {
        this.limitOfAnimals=limitOfAnimals;
    }
    breed (){
        if (this.limitOfAnimals > this.listOfAnimals.length) {
           // this.listOfAnimals [this.listOfAnimals.length] = new Animal();
           this.listOfAnimals.push(new Animal());
            console.log("narodilo se zvíře ");
        }
        else {
            console.log("neni misto");
        }
    }
    sell () {
            this.listOfAnimals.pop();
    }
}

const LAMA = new Farma(3);

LAMA.breed();
LAMA.breed();
LAMA.breed();
LAMA.breed();


console.log(LAMA.listOfAnimals);
LAMA.sell();
LAMA.sell();
console.log(LAMA.listOfAnimals);
LAMA.breed();
console.log(LAMA.listOfAnimals);

