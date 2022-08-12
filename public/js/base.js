const nome = "Humberto";
let nome2 = "";
let pessoaDefault = {
    nome: "Humberto",
    idade: "18",
    trabalho: "trabalho" 
}

let nomes = ["Humberto", "Francisco","Daniel"]
let pessoas = [
    {
        nome: "Humberto",
        idade: "18",
        trabalho: "trabalho"
    },
    {
        nome: "Francisco",
        idade: "19",
        trabalho: "trabalho"
    },
    {
        nome: "Daniel",
        idade: "20",
        trabalho: "trabalho"
    }
]

function alterarnome() {
    nome2 = "Daniela"
    console.log("Valor alterado:")
    console.log(nome2)
}

function recebeEalteranome (novoNome) {
    nome2 = novoNome;
    console.log("Valor alterado recebendo um nome:")
    console.log(nome2)
}

function imprimirPessoa(pessoa) {
    console.log("Nome:");
    console.log(pessoa.nome);

    console.log("Idade:");
    console.log(pessoa.idade);

    console.log("Trabalho:");
    console.log(pessoa.trabalho);
}

function adicionarPessoa(pessoa) {
    pessoas.push(pessoa)
}

function imprimirPessoas() {
    console.log("---IMPRIMIR PESSOAS---");
    pessoas.forEach((item) => {
        console.log("Nome");
        console.log(item.nome);

        console.log("Idade:");
        console.log(item.idade);

        console.log("Trabalho:");
        console.log(item.trabalho); 
    })
}

imprimirPessoas();

adicionarPessoa({
    nome: "Lucas",
    idade: "21",
    trabalho: "trabalho"
});

imprimirPessoas();