// Spread Operator
/* 
let primeiros = [1,2,3]

let numeros = [...primeiros,4,5,10]

console.log(numeros) */

/* let pessoa = {
    nome: "Matheus",
    idade: 45,
    cargo: "RH"
}

let novaPessoa = {
    ...pessoa,
    status: "Ativo",
    cidade: "Belo Horizonte / MG"
}

console.log(novaPessoa) */

/* function novoUsuario(info){
    let data = {
        ...info,
        status:"Ativo",
        inicio: Date.now(),
        codigo: "511200"
    }
    console.log(data)
}

novoUsuario({nome: "Joseph", sobrenome: "Steiner", cargo:"Gerente"}) */

//Rest Operator
/* 
function convidados(...nomes){
    console.log("Sejam Bem Vindos")
    console.log(nomes)
}
convidados("Mateus", "Lucas", "Maria", "Carol") */

function sort(...numeros){
    console.log(numeros)

    const numeroGerado = Math.floor(Math.random() * numeros.length)
    console.log(` numero gerado:${numeros[numeroGerado]}`)
}
sort(1,2,35,75,23,12,199,188,134,53,42,4)