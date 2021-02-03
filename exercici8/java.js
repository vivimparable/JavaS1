alert("Operadores: +suma,  -resta, *multiplicación y /division.");

var valor1=prompt("introduce el primer numero");
var operador= prompt("introduce un operador");
var valor2=prompt("introduce un segundo numero");
var resultado;




if (operador === "-"){
    resultado=(valor1-valor2);

}else if(operador === "+"){
    resultado= parseInt(valor1) + parseInt(valor2); /* solucionado el problema de la suma con parseINT*/

}else if(operador === "/"){
    resultado= (valor1/valor2);

}else if(operador === "*"){
    resultado=(valor1*valor2);
}

alert("Da como resultado: " + resultado)