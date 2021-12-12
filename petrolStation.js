
/*Benzínka

    Vytvořte třídy Benzínka a Auto
    Benzínka 
        ukládá, kolik benzínu je k dispozici: gasAmount
        může doplnit - natankovat (auto):
            Benzínka sníží množství benzínu o kapacitu vozu který naplnila (předpokládejme, že vůz je prázdný) a
            zvyšuje množství benzínu v autě které naplnila.
    Auto
        ukládá, kolik benzínu je skutečně přítomno: gasAmount
        ukládá kapacitu nádrže: kapacita
        vytvořte konstruktor pro třídu Auto, kde:
            nastavíte gasAmount -> 0
            nastavíte kapacitu -> 100
*/

class Station {
gasAmount= 0;
constructor(gas) {
this.gasAmount=gas;
}
refill(Car){
Car.gasAmount=Car.capacity;
this.gasAmount-= Car.capacity;
console.log("natankoval jsem Váš " + Car.name);
}
}

class Car {
gasAmount=0;
capacity=0;
name="";
constructor(name) {
    this.gasAmount=0;
    this.capacity=100;
    this.name=name;
}

}

const Shell= new Station(500);
const NewBeatle= new Car("NewBeatle");

console.log(NewBeatle);
console.log(Shell);
Shell.refill(NewBeatle);
console.log(Shell);
console.log(NewBeatle);

