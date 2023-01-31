// Map = Percorerer todo um array
/* 
let lista = ["Matheus","Jose","Maria","Lucas"]

lista.map((item,index) => {
    console.log('Passando ' + item + ' está na posição ' + index)
}) */

//Reduce = Reduzir um array
/* 
let numeros = [5,3,2,4]

let total = numeros.reduce((acumulaodr, numero,indice,original) => {
    console.log(`${acumulaodr} - Total até o momento`)
    console.log(`${numero} - Valor atual`)
    console.log(`${indice} - Indice atual`)
    console.log(`${original} - Array original`)

    return acumulaodr += numero
})

console.log(`Total do reduce ${total}`) */

//Find = busca em lista

/* let listagem = [5,3,"Jose","Matheus",2]

let busca = listagem.find((item) => {
    if(item == "Jose"){
        return console.log("Item encontrado com sucesso")
    }

})
console.log(busca) */

//Filter

let palavras = ["Matheus", "Ana", "Jose", "Ricardo Silva", "Sujeito"]

let resultado = palavras.filter((item) => {
    return item.length >= 4
})

console.log(resultado)