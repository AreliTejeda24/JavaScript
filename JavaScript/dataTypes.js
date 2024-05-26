// PRIMITIVOS

// String -- Cadena -- cualquier cosas dentro de comillas
const nombre = "Miranda";
const edad = "24";
const space = ' ';

// Number - cualquier número
const favNum = 15;
const favNum1 = 15.9;

// Boolean - 2 opciones (true or false)
const iLoveCoding = true;
const iLoveCoding1 = false;

// Undefined
let casa; // no le agrego un valor, así que es undefined
console.log(casa);

// Null - nulo
const hoja = null;


// *******************************************************************************************
// CHALLENGES

// 1. String Concatenation
// Voy a crear 3 variables constantes y les voy a asignar unas palabras a cada una
const first = "Welcome ";
const second = "to the";
const third = " to the";

const example = {
    first:"Welcome",
    second:"to the",
    third:"to the",
}
// Hacer un console.log concatenando estas variables PERO voy a guardar esa frase en otra variable
// TU CÓDIGO AQUÍ
const welcome = first + second + third;

console.log(welcome);

// OUTPUT: "Welcome to the jungle"


// ********************TIPOS DE DATOS COMPUESTOS*******************************
// Nos permiten guardar en variables colecciones de datos asociados o no 

// OBJECT 

const persona = {
    // NOMBRE --- VALOR // KEY VALUE PAIRS
    // KEY -- VALUE
    // strings
    nombre: "Miranda Jaramillo Morales",
    nacimiento: "15/07/1999",
    colorOjos: "cafés",
    // Number
    edad: 24,
    // Boolean
    estudia: true,
}

console.log(persona);
// ¿CÓMO ACCEDEMOS A LOS VALORES DEL OBJETO?
// QUIERO ACCEDER AL NOMBRE DE LA PERSONA
console.log("Mi nombre es " + persona.nombre);
console.log("Mi nacimiento es " + persona.nacimiento);

console.log(persona.edad);


// ARRAY 
//              index 0 ,   index 1,   index 2,  index 3
const frutas = [ "banana", "manzana", "melón", "pera"];
const vacio = [ ];
const fruta = [ "tomate"];
//TIPOS DE DATOS DENTRO DE MI ARRAY
const miArray = [ 21, "ramen", true, undefined, false];
const miArray2 = [ 15, "manzana", [1, 2, 3, true, "banana"],{uno:1}];

console.log(frutas[3]);
console.log(frutas[1]);

const fruta1 = "sandía";
//          ACCEDO A EL NOMBRE DE LA VARIABLE fruta1 Y CON [] ESTOY ACCEDIENDO AL ÍNDICE EN ESPECÍFICO
console.log(fruta1[0]);

// AGREGAR VALORES A MI ARRAY INDIRECTAMENTE
// Método push (función )
vacio.push("holis");

console.log(vacio);













// Objetos vacíos también son objetos
const empty = {};