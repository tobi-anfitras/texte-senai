const tarefa = require("./tarefa.json");
const adicionarTarefa = require('./tarefas').adicionarTarefa
const removerTarefa = require('./tarefas').removerTarefa
const contarTarefas = require('./tarefas').contarTarefas

test("Verificar que a tarefa 'Estudar Jest' está na lista após ser adicionada",()=>{
    expect(adicionarTarefa(",Estudar jest")).toContain(lista)
});