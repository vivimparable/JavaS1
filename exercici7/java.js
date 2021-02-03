var articulos = [ 
    'taula',
    'cadira',
    'ordinador',
    'libreta']

var resultado="";
var i;


for (i = 0; i <articulos.length; i++){
    
     resultado += articulos[i] + [i]+ "<br/>"  ;
}

alert(resultado)