const nombre = ["Noemi", "Karina", "Juana"];


const cant = nombre.length;
console.log(cant) //Imprime cantidad

var miArray = nombre[0];
console.log(miArray); //Imprime "Noemi"

var miArray = nombre [1]
console.log(miArray); //Imprime "Juana"

console.log(nombre); //Imprime: ["Noemi", "Karina", "Juana"]

//Agregar elementos
nombre.push("Samy");
console.log(miArray); //Imprime: ["Noemi", "Karina", "Juana", "Samy"]

nombre.unshift("Agustina");
console.log(nombre); //Imprime ["Agustina", "Noemi", "Karina", "Juana", "Samy"]

//Quitar elementos
let final = nombre.pop();
console.log(nombre); //Imprime ["Noemi", "Karina"]
console.log(final); //Imprime: ["Juana"]

let inicio = nombre.shift();
console.log(nombre); //Imprime ["Karina"]

//Poner los nombres en lista
//Recorrer/Iterar el array
for (let i = 0; i < nombres.lencght; i++) {
    console.log(nombres[i]);
}

nombres.forEach((elemento)=> {
    console.log(elemento); 
});

//Crear un objeto
const persona = {
    nombre: "Noemi",
    edad: 24,
    comidaFavorita: "Hamburguesa"
};

let edad = persona.edad;
console.log(edad); //Imprime: 24

persona.edad = 25; //Edita la propiedad: edad

persona.deporteFavorito = "Tenis"; //Agrega una nueva propiedad

delete persona.comidaFavorita; //Borra propiedad

for (let key in persona) { //Recorrer / Iterar un objeto
    console.log(key, persona[key]);
}

//Dar los datos de varios objetos
const arrayDeObjetos = [
    {
        nombre: "Noemi",
        edad: 24,
        comidaFavorita: "Tamales"
    },
    {
        nombre: "Karina",
        edad: 25,
        comidaFavorita: "Todo"
    },
    {
        nombre: "Juana",
        edad: 24,
        comidaFavorita: "Pozole"
    },
];

for (let i = 0; i < arrayDeObjetos.length; i++) {
    console.log("============");
    console.log("Nombre: " + arrayDeObjetos[i].nombre);
    console.log("Edad : " + arrayDeObjetos[i].edad);
    console.log("Comida Favorita : " + arrayDeObjetos[i].comidaFavorita);
}

//=================//
const objetoConArray = {
    nombre: "Objeto con Array",
    arr: ["abeja", "banana", "camión", "dado"],
};
objetoConArray.arr.forEach(elemento => {
    console.log(elemento + " jaja");
});