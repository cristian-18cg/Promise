let nombre;
let edad;
const readline = require('readline');
 
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});
console.log('-------Bienvenido a porteria-------');

rl.question('Digita tu nombre por favor: ', (input1)=>{
    nombre=input1;
    rl.question('Digita tu edad por favor: ', (input2)=>{
        edad = input2;
        porteria(nombre,edad);
        rl.close();
    });
});

function porteria(nombre,edad){

    const miPromesa = new Promise((resolve, reject)=> {
        setTimeout(() => {                 //funciona para Tiempo de retraso                              
            if (edad>=18 & edad<=100 ){
                resolve(`${nombre} si puedes ingresar a la discoteca`);
            }else if(edad<=18 & edad>=0){
                reject(`${nombre} no puedes ingresar a la discoteca`);
            }else if(edad>100){
                reject('No es una edad validad');
            }else {
                reject('No es una entrada valida');
            }
        }, 1);
    });

    
    
    miPromesa.then((valor)=>{
        console.log(valor);
    }).catch( err => console.log(err));
}

