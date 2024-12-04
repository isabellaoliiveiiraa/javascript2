for (let i = 0; i <= 5; i++) {
    console.log(`Número: ${i}`)
  }

  

let frutas = ["Maçã", "Banana", "Laranja", 'melancia', 'abacate', 'uva', 'abacaxi', 'jabuticaba']

// Usando o loop for para percorrer o array:

//o contador 'i' começa no valor 0 e vai até frutas.length -1 (ultimo elemento do array)
for (let i = 0; i < frutas.length; i++) { 
  
  //'frutas[i]' acessa o elemento no índice atual
  console.log(`Elemento no índice ${i}: ${frutas[i]}`)
  
}



// Procurando por uma fruta específica
let fruta = ["Maçã", "Banana", "Laranja", "Manga", 'melancia', 'abacate', 'uva', 'abacaxi', 'jabuticaba']
let frutaProcurada = "abacaxi"

for (let i = 0; i < frutas.length; i++) {
  console.log(`Verificando: ${frutas[i]}`)

  if (frutas[i] === frutaProcurada) {
    console.log(`Fruta encontrada: ${frutas[i]}`);
    break; // Interrompe o loop ao encontrar a fruta
  }
}


//Somar números de um array:
let numeros = [1, 2, 3, 4, 5, 6, 7, 8, 9];
let soma = 0;

for (let i = 0; i < numeros.length; i++) {
  soma += numeros[i]; // Adiciona o número atual à variável 'soma'
}
console.log("A soma dos números é:", soma);


//Modificar os valores de um array:

let valores = [2, 4, 6, 8];
for (let i = 0; i < valores.length; i++) {
  valores[i] *= 2; // Multiplica cada valor por 2
}
console.log("Array modificado:", valores);



// Método forEach()
let numero = [10, 20, 30]

// Definindo uma função que será usada pelo forEach
function exibirNumero(numero) {
  console.log(`O número é: ${numero}`)
}

 //Usando o forEach para percorrer o array e chamar a função p/ cada elemento
numeros.forEach(exibirNumero)

