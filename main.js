
//PUNTO 1

function calcularAreaRectangulo(longitud, ancho) {
    return longitud * ancho;
}

// Ejemplos:
console.log("///////////////");
console.log("Solución 1:");
console.log("El aerea de un rectangulo de 5 x 3 es : "+ calcularAreaRectangulo(5, 3)); 
console.log("El aerea de un rectangulo de 7 x 4 es : "+calcularAreaRectangulo(7, 4)); 
console.log("El aerea de un rectangulo de 10 x 2 es : "+calcularAreaRectangulo(10, 2)); 

/* 
Para resolver este problema, pensé en la fórmula del área de un rectángulo, que es longitud por ancho. 
La función toma dos parámetros, realiza la multiplicación y retorna el resultado. La clave fue usar la 
palabra clave 'return' para devolver el área calculada, que luego podemos imprimir en consola.
*/

//PUNTO 2

function contarPalabras(cadena) {
    return cadena.split(" ").length;
}

// Ejemplos:
console.log("///////////////");
console.log("Solución 2:");
console.log("La frase 'Humahuaca es un lugar copado' tiene "+ contarPalabras("Humahuaca es un lugar copado") + " palabras"); 
console.log("La frase 'Práctica formativa obligatoria' tiene "+ contarPalabras("Práctica formativa obligatoria")+ " palabras"); 
console.log("La frase 'Esto es un ejemplo' tiene "+ contarPalabras("Esto es un ejemplo")+ " palabras"); 

/* 
Para contar palabras, utilicé el método split() para dividir la cadena en un array usando los espacios (" ") como separador. 
Luego, simplemente devolví la longitud del array resultante, que corresponde al número de palabras.
*/

//PUNTO 3

function invertirCadena(cadena) {
    return cadena.split("").reverse().join("");
}

// Ejemplos:
console.log("///////////////");
console.log("Solución 3:");
console.log("La palabra 'hola' al reves se dice " + invertirCadena("hola")); 
console.log("La palabra 'javascript' al reves se dice " + invertirCadena("javascript")); 
console.log("La palabra 'espejo' al reves se dice " + invertirCadena("espejo")); 

/* 
Para invertir una cadena, utilicé una combinación de métodos: split() para convertir la cadena en un array de caracteres, 
reverse() para invertir el array y join() para convertirlo nuevamente en una cadena. Este enfoque es eficiente y directo.
*/

//PUNTO 4:

function esPalindromo(cadena) {
    const cadenaInvertida = cadena.split("").reverse().join("");
    return cadena === cadenaInvertida;
}

// Ejemplos:
console.log("///////////////");
console.log("Solución 4:");
console.log("La palabra 'neuquen' es palindromo?: " + esPalindromo("neuquen")); 
console.log("La palabra 'javascript' es palindromo?: " + esPalindromo("javascript")); 
console.log("La palabra 'reconocer' es palindromo?: " + esPalindromo("reconocer")); 

/* 
Para determinar si una cadena es un palíndromo, primero invertí la cadena usando la técnica del ejercicio anterior. 
Luego comparé la cadena original con la invertida. Si son iguales, la función devuelve true, de lo contrario false.
*/

//PUNTO 5:

function edadCanina() {
    const edadHumana = prompt("¿Cuál es la edad de tu perro?");
    const edadConvertida = edadHumana * 7;
    console.log(` Si tu perro tiene ${edadHumana} años, entonces tiene ${edadConvertida} años humanos.`);
}

// Llamar a la función
console.log("///////////////");
console.log("Solución 5:");
edadCanina();

/* 
Para este ejercicio, utilicé prompt() para solicitar al usuario la edad de su perro. Multipliqué este valor por 7 para convertirlo a años humanos 
y luego imprimí el resultado con un mensaje descriptivo. La función no devuelve nada, solo muestra el mensaje por consola.
*/

