const prova = {
    aluno: "João",
    materia: "Português",
    valor: 10,
    questoes: [
        {
            resposta: "a",
            correta: "b"
        },
        {
            resposta: "c",
            correta: "c"
        },
        {
            resposta: "e",
            correta: "b"
        },
        {
            resposta: "b",
            correta: "b"
        },
        {
            resposta: "c",
            correta: "c"
        }
    ]
};


const { questoes, aluno } = prova;
let counter = 0;


questoes.forEach(object => {
    if (object.resposta === object.correta) counter++;
})

console.log(`O aluno(a) ${aluno} acertou ${counter} questões e obteve nota ${counter * 2}.`)

