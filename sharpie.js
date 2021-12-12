
/*Vytvořte třídu Pero

O každém Peru bychom měli vědět následující:
    barva (což by měl být string),
    šířka (což bude number) a
    inkAmount= překlad obsah inkoustu (jiné number)
Při vytváření musíme určit barvu a šířku
Každé Pero je vytvořen s výchozí hodnotou inkAmount(obsah inkoustu): 100
Použít() objektu typu pero: jeho použití sníží množství inkoustu o 10
*/



class Sharpie{
    constructor (color,width) {
        this.color= color;
        this.width= width;
        this.inkAmount= 100;
    }
    use() {
        this.inkAmount-=10;
    }
}

const Pilot = new Sharpie("yellow",100);

console.log(Pilot)

Pilot.use() 
console.log(Pilot)