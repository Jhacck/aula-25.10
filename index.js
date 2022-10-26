/*
for(let i = 0; <= 10; i++){
    console.log(`i = `)
}
*/
const num = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

/*
for ( let i = 0; i < num.length; i++){
    console.log(`valor do i: ${i}`)
}
Anatomis do for => contador; comparador; incrementador */
// for ( let i = 0; i < num.length; i++){
//         console.log(`Posições: ${i}`);
//         console.log(`Os valores de acordo com cada posição ${num[i]}`);
   
// };

/*
i = 0
i é menor que num.length > num.length = 9 
ele é menor. Então, adiciona mais um. (...)
*/

// for ( let i = 0; i < num.length; i++){
//     const tabuada = num[i] * 2;
//     console.log(tabuada)
// };

// i mostra a POSIÇÃO que foi no caso comparada com o número da lista total. 

// i = 0 É que contém de valor nesta posição? Para olhar o valor da posição ->
// 1. O nome da lista de acordo com o que está no FOR => num
// // 2. Para mostrar o valor de acordo com a posição, precisamos indicar a posição num[i];

//Exercício -> Mostre todos os nomes das alunas e mantenha apenas a letra inicial maiúscula.

const alunas = ["jéssica", "bruna", "Eduarda", "leide", "Luiza", "Jaqueline", "isabella"];

i = alunas.length

// for(let i = 0; i < alunas.length; i++){
//     console.log(i)
//     console.log(alunas[i])
//     console.log()
// };

// for(let i = 0; i < alunas.length; i++){

//     const primeiraLetraNome = alunas[i].charAt(0).toUpperCase()
//     const demaisLetrasNome = alunas[i].substring(1)

//     console.log(primeiraLetraNome + demaisLetrasNome)
// };

for(let i = 0; i < alunas.length; i++){

    const tratarNome = alunas[i].charAt().toUpperCase() + alunas[i].substring(1)
    console.log(tratarNome)
};