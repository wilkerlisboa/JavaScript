//Declaração de variaveis 

var num; 
num = 10;

//OU 

var num2 = 20;

//Boolean 
var verdadeiro = true;

var falso = false;

//Exercicios 
var name = "WILKER LISBOA SOARES DA SILVA";

var home = "ALAMEDA PEDRA NEGRA"

document.write(name + '<br>');

document.write(home + '<br>');

//Array 

var MyArray = new Array();

MyArray[0] = 'JOÃO COSTA GOMES';
MyArray[1] = 'SÃO PAULO';
MyArray[2] = true;
MyArray[3] = 18;

document.write(MyArray[0] + "<br>");

document.write(MyArray[1] + "<br>");

document.write(MyArray[2] + "<br>");

document.write(MyArray[3] + "<br>");
    
    //INDICES ASSOCIATIVOS ARRAY

var estados = new Array();

estados['rj'] = "RIO DE JANEIRO";
estados['sp'] = "SÂO PAULO";
    
document.write(estados['rj'] + '<br>');
    
document.write(estados['sp'] + '<br>');
    
//EXERCICIOS 

var nome = window.prompt("OLÁ QUAL É SEU NOME");
    
var age = window.prompt('OLÁ QUAL É SUA IDADE?');
    
document.write(`SEU NOME E: ${nome}` + '<br>')
    
document.write(`SUA IDADE E: ${age} ANOS `);
  
//exercicio
