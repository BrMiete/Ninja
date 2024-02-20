class Ninja {
    constructor(nombre, salud){
        this.nombre = nombre;
        this.salud = salud;
        this.velocidad = 3;
        this.fuerza = 3;
    }//Fin del constructor.
    sayName(){
        console.log(`El nombre del ninja es: ${this.nombre}.`);
    }//Fin del método sayName().
    showStats(){
        console.log(`Nombre: ${this.nombre}, Salud: ${this.salud}, Velocidad: ${this.velocidad}, Fuerza: ${this.fuerza}`);
    }//Fin del método showStats().
    drinkSake(){
        this.salud += 10;
    }//Fin del método drinkSake().
}//Fin de la clase Ninja.

const ninja1 = new Ninja("Hyabusa", 100);
console.log(ninja1);
ninja1.sayName();
ninja1.showStats();
ninja1.drinkSake();
console.log(ninja1);

class Sensei extends Ninja {
    constructor(
        nombre,
        salud = 200,
        velocidad = 10,
        fuerza = 10,
        sabiduria = 10
    ){
        super(nombre, salud, velocidad, fuerza);
        this.sabiduria = sabiduria;
    }
    speakWisdom(){
        console.log("Lo que un programador puede hacer en un mes, dos programadores pueden hacerlo en dos meses.")
        super.drinkSake();
    }//Fin del método speakWisdom().
}//Fin de la clase Sensei.

const superSensei = new Sensei("Master Splinter");
console.log(superSensei);
superSensei.speakWisdom();
superSensei.showStats();
console.log(superSensei);