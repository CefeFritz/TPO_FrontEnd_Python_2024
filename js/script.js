console.log("¡Hola a todos! Observen este número: ", 5000 * 22);
// estoy en carpeta script javascript
//VARIABLESSSSSSS
var iva = 21;
iva = 10.5;
console.log("valor actual de impuesto IVA =", iva);
var resultado;
resultado = (1 + 3) * 2;
console.log("resultado es =", resultado);
/* const iva = 21;
// las constantes no se deben cambiar sino aparece error
iva = 10.5; */
nombre = "juan";
console.log("tu nombre es: ", nombre);
/* IDENTIFICAMOS TIPOS DE DATOS */
var s = "Hola, me llamo Juan"; // s, de string
var n = 28; // n, de número
var b = true; // b, de booleano
var u; // u, de undefined
console.log("var s = Hola, me llamo Juan es variable de tipo :", typeof s);
console.log("var n = 28 es variable de tipo : ", typeof n);
console.log("var b= true es variable de tipo : ", typeof b);
console.log("var u es variable de tipo : ", typeof u);
/* DECLARACION DE VARIABLES Y CONSTANTES COMO OBJETOS con el CONSTRUCTOR NUMBER*/
const pi = new Number(3.14);
var n2 = new Number(44);
console.log("const=", pi);
console.log("var=", n2); // true
/* Comprobaciones numéricas */

// ¿Número seguro?

// ¿No es un número?
Number.isNaN(5);
console.log(Number.isInteger(5)); // true
console.log(Number.isInteger(9.7)); // false
console.log(Number.isFinite(Infinity)); // false
console.log(Number.isFinite(2324556)); // true
console.log(Number.isSafeInteger(1e15)); // true
console.log(Number.isSafeInteger(9007199254740992)); // false porque supera 9.007.199.254.740.991
console.log(Number.isNaN(NaN)); // true
console.log(Number.isNaN(235)); // false

/* Conversión numérica - Veamos un ejemplo con parseInt(). */

console.log(Number.parseInt("42")); // 42
console.log(Number.parseInt("42€")); // 42
console.log(Number.parseInt("Núm. 42")); // NaN
console.log(Number.parseInt("A")); // NaN
/*                */
console.log(Number.parseInt("11101", 2)); // 29
console.log(Number.parseInt("31", 8)); // 25

/*  CONCATENACION   */
var txt1 = "Juan";
var txt2 = "Pablo";
var txt3 = txt1 + " " + txt2;
console.log(txt3);
var txt4 = "Bienvenidos ";
txt4 += "a Javascript";
console.log(txt4);

