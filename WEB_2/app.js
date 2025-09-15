import * as util from "./util.js"
//possiamo destrutturare così:
import {API_KEY,SECRET_KEY} from "./util.js"

console.log(util.API_KEY)
console.log(util.SECRET_KEY)
console.log(util.draw("Okkkkk"))


const arr1=[1,2,3]

arr1.push(4);

console.log(arr1,...arr1);

console.log(a);


const arr2 = [...arr1] //prendono i valori dell'array e lo clonano e vengono generati due locazioni di memoria

arr2.unshift(0)

console.log(arr1, arr2)


//
const prof={
    nome:"Roberto",
    "lastname":"Delisio",
    eta:48,
    indirizzo:{
        via:"Cesare Pevese",
        citta: "Roma"
    }
};

console.log(prof.nome);
console.log(prof["lastname"])
console.log(prof.indirizzo.via)


const prof2=new Object();
prof2.nome="rob";
prof2.cognome="del";

console.log(prof2)




class Persona {
    constructor(nome = '', cognome = '') {
        this.nome = nome;
        this.cognome = cognome;
    }
}

personalbar.prototype.telefono="12345"

const robdel=new Persona("Rob", "Del");

//oppure 
robdel.telefono="9876"; 

const mariorossi=new Persona("Mario", "Rossi");

console.log(robdel,robdel.telefono,mariorossi)

