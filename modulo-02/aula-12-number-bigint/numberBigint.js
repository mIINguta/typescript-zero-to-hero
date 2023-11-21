"use strict";
// number
let num1 = 23.0;
let num2 = 0x78CF;
let num3 = 0o577;
let num4 = 0b11001;
console.log('Number - Ponto Flutuante', num1);
console.log('Number - Hexadecimal', num2);
console.log('Number - Octal', num3);
console.log('Number - Binário', num4);
//bigint
let big1 = 9007199254740991n;
let big2 = 9007199254740995n;
;
let big3 = 0x20000000000003n;
let big4 = 9007199254740995n;
//só funcionará com o Target do tsconfig acima do es2020.
console.log('Bigint...: ', big1);
console.log('Bigint - Binário...: ', big2);
console.log('Bigint - Hexadecimal...: ', big3);
console.log('Bigint - Octal...: ', big4);
