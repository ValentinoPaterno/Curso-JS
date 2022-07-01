/* Algoritmo que pide al usuario una palabra. Evalua si la palabra es texto, hasta que el usuario decida no ingresar mas palabras. Concatena las palabras ingresadas y las muestra al finalizar
el ciclo */

concatenación = "";
do{
    let palabra = prompt("Ingrese una palabra/oracion:");
    if(isNaN(palabra)){
        if(concatenación == ""){
            concatenación = concatenación + palabra;
        }
        else{
            concatenación = concatenación + " " + palabra;
        }
    } else{
        alert(`${palabra} no es una palabra`);
}
} while(confirm("Desea seguir ingresando?"));
document.write(concatenación);