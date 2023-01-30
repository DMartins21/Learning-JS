let pessoa ={
    nome: "Matheus",
    sobrenome: "Vieira",
    empresa: "CEO",
    cargo: "Diretor"
}
/* 
console.log(pessoa.nome)
console.log(pessoa.cargo) */

/* const {nome:nomePessoa,cargo, empresa, sobrenome} = pessoa
console.log(nomePessoa)
console.log(sobrenome)
console.log(empresa)
console.log(cargo) */

// Desconstruindo Array

let nomes = ["Mateus", "Lucas", "Henrique"]

/* let {0:mateus, 2:henrique} = nomes

console.log(mateus)
console.log(henrique) */

let [primeironome, segundonome] = nomes

console.log(primeironome)
console.log(segundonome)