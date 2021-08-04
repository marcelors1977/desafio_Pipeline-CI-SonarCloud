// Iniciar objetivos padrões
function iniciarObjetivos(tarefas) {
    tarefas.adicionar("arrumar cama")
    tarefas.adicionar("tomar cafe")
    tarefas.adicionar("limpar casa")
}

// Funcão para executar todas as tarefas dado um timeout
function asyncForEach(array, timeout, callback, index) {
    index = index || 0
    setTimeout(function() {
        callback(array[index], index)
        if (array.length > index + 1) {
            asyncForEach(array, timeout, callback, index + 1)
        }
    }, timeout)
}

module.exports = { 
    asyncForEach,
    iniciarObjetivos
}