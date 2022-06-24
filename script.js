 // Crie um array que receba 5 itens e exiba no console.
 let languages = ['.NET', 'C++', 'C#', 'C', 'Java'];
 console.log(languages);

// Utilize um método para adicionar um nome ao inicio do array.
languages.unshift('JavaScript');
console.log(languages);

// Utilize um método para remover o último nome do array.
languages.pop();
console.log(languages);

// Utilize um método para adicionar dois nomes ao fim do array.
languages.push('CSS','TypeScript');
console.log(languages);

// Utilize um método para remover o primeiro nome do array.
languages.shift();
console.log(languages);

// Utilize um método para organizar em ordem crescente o seguinte array:
let numbers = [7,5,6,3,8,9,2,1,4];

numbers.sort(function(a,b){
    return(a-b)
})

console.log(numbers);
