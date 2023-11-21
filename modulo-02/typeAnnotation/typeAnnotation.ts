let nome: string = "Gustavo Minguta";

//array
let animais: string[] = ['Cachorro', 'Gato', 'Pássaro'];

//array de objetos
let carros: {
    nome: string;
    ano: number;
    preco: number;
};

carros = {nome: "Siena", ano: 2010, preco: 20.000};
console.log(carros);

function multiplicarNumeros(num1: number, num2: number) {
    return num1 * num2;
}
console.log(multiplicarNumeros(2,3));