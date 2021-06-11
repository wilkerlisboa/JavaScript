// tudo que vem após barras normais duplas é um comentário em linguagem natural.
// Leia os comentários atentamentes: eles explicam o codigo JavaScript.

//Variável é um nome simbólico para um valor.
//As variáveis são declaradas com a palavra - chave VAR:

var x;  //Declara uma variável chamada 'x'.

//Valores podem ser atribuidos às variáveis com o sinal '='

x = 0; //Agora a variável 'x' tem o valor 0 

x // => 0; Uma variável é avaliada com seu valor.

//JavaScript aceita vários tipos de valores
x = 1; //Números 
x = 0.01; //Apenas um tipo Number para inteiros e reais.
x = "hello world"; //Strings de texto entre aspas.
x = 'JavaScript'; //Apóstrofos também delimitam strings.
x = true; //Valores Booleanos.
x = false; //Outro valor booleano. 
x = null; //Null é um valor especial que significa "Nenhum valor"
x = undefined; //Undefined é como null.

//O tipo de dados mais importante de JavaScript é o Objeto.
//Uma objeto é uma coleção de pares  nome/valor ou uma string para mapa de valores.

var book = {  //Objeto são colocados entre chaves.
    topic: "JavaScript", //A propriedade "topic" tem o valor "JavaScript".
    fat: true //A propriedade "fat" tem o valor true.
}; //A chave marca o fim do objeto.

// Acesse as propriedades de uma objetos com "." ou "[]":
book.topic  //=> "JavaScript"
book["fat"] // => true: outro modo de acessar valores de propriedade.
book.author = "Flanagan"; //Crie novas propriedades por meio de atribuição.
book.contents = {}; //{} é um objeto vazio sem qualquer propriedade.

//JavaScript  também aceita arrays (listas indexadas numericamente) de valores.
var primes = [2, 3, 5, 7]; // Um Array de 4 valores, delimitados com '[]'.
primes[0] // => 2: o primeiro elemento (indice 0) do array.
primes.length // => 4: quantidades de elemento do array.
primes[primes.length-1] // => 7: o último elemento do array.
primes[4] = 9; //Adiciona um novo elemento por meio de atribuição.
primes[4] = 11; //Ou altera um elemento existente por meio de atribuição.
var empty = []; //[] é um array vazio, sem qualquer elemento.
empty.length //=> 0.

// Os arrays e objetos podem conter outros arrays e objetos: 
var points =[ 
    {x: 0, y:0},
    {x:1,  y:0}
]