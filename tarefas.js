const tarefa = require('./tarefa.json')

function adicionarTarefa(lista, tarefa) {
    
    lista.push(tarefa)
    return lista
    }
    function removerTarefa(lista, tarefa) {
    return lista.filter(t => t !== tarefa)
    }
    function contarTarefas(lista) {
    return lista.length
    }
    module.exports = { adicionarTarefa, removerTarefa, contarTarefas }
