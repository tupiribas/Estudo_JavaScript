const escola = [{
    nome: 'Turma M1',
    alunos: [{
        nome: 'Tupi',
        nota: 8.2
    }, {
        nome: 'Ana',
        nota: 9.2
    }, {
        nome: 'Salino',
        nota: 2.2
    },]
}, {
    nome: 'Turma M2',
    alunos: [{
        nome: 'Rebeca',
        nota: 8.9
    }, {
        nome: 'Vânia',
        nota: 7.4
    }]
}]

const getNotaDoAluno = aluno => aluno.nota
const getNotasDaTurma = turma => turma.alunos.map(getNotaDoAluno)

const notas = escola.flatMap(getNotasDaTurma)
console.log(notas);