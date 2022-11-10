var obj = {
    nome: "Eduardo", 
    idade: 21,
    profissao: "Estudante",
    estaTrabalhando: true,
};

console.log(obj) //mostra o obj

console.log(typeof obj)

console.log(obj.nome) //mostra só uma propriedade do obj
console.log(obj.idade)
console.log(obj.profissao)

console.log("O meu nome é " + obj.nome)

obj.nome = "Pedro" // mudou o eduardo para pedro

console.log(obj.nome)

console.log(obj) //tudo igual antes só o nome diferente

obj.graduacao = true; //adicionando mais uma propriedade

console.log(obj)