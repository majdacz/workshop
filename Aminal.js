/*Vytvořte třídu zvířat

    Každé zvíře má hodnotu hladu, což je celé číslo 
    Každé zvíře má hodnotu žízně, což je celé číslo 
    Při vytváření nové instance zvířete musí být tyto hodnoty nastaveny na výchozí hodnotu 50
    Každé zvíře může jíst(), což snižuje jeho hlad o jednu
    Každé zvíře může pít(), což snižuje jeho žízeň o jednu
    Každé zvíře může hrát(), což zvyšuje jeho hlad a žízeň o jeden
    kontrolu funkčnistí pak provede klasicky napřklad.... lev.hraje() consol log.(lev)
    
    Já si spouštím Terminál na Consoli  přímo ve Visualu. V horní liště rozkliknout Run => Star Debugging => 
    vyberu na středu v horní liště Node.js a otevře se mi Debug Console přímo ve Visualu.
    Refresh "console" uděláte buďto opětovným rozkliknutím Run a Start Debugging, nebo mě to jde zkrtakou Ctrl+F5.
*/

//třída zvíře
class Animal {
//nastavení konstruktoru: každe zvíře které doděláme bude mít nastavenou hodnotu: (berte tak že 50 = největší úrověň hladu a žízně)
//hunger-hlad 50
//thirst-žízeň 50
    constructor () {
        this.hunger= 50;
        this.thirst= 50;
   }
//jídlo 
// this.hunger-= 1; definuje že po tom co se zvíře nají, sníží se mu hladina hladu na 49
   eat() {
    this.hunger= this.hunger -1;
   // this.hunger-= 1; oba zápisy jsou správné
   }

//pití
// this.thirst-= 1; definuje že po tom co se zvíře napije, sníží se mu hladina žízně na 49
   drink() {
       this.thirst= this.thirst -1;
    //   this.thirst+= 1;  oba zápisy jsou správné
   }
   
//hra
//this.hunger+=1; je definece zvyšování hladu o 1(zvíře je hladovější)
//this.thirst+=1  je definece zvyšování žízně o 1(zvíře je žíznivější)
   play() {
       this.hunger+=1;
       this.thirst+= 1;
   }
   //běh definice stejná jako u hry jen větší hlad a žízeň
   run(){
       this.hunger+=10;
       this.thirst+=10;
   }
}

// vytvoření zvířete 
const Lev = new Animal()


//vypíše lva před jídlem
console.log(Lev)

//lev se najedl 
Lev.eat()

//vypíše lva po jídle (ubyl hlad)
console.log(Lev)

//lev si hraje
Lev.play()

//lev po hře (přibyl hlad a žízeň)
console.log(Lev)

//lev běhá
Lev.run()

//lev po běhu (přibyl hlad a žízeň)
console.log(Lev)

