const Tarefas = require("./objetivos")
const util = require("./util")

const tarefas = new Tarefas()

util.iniciarObjetivos(tarefas)

console.log('Tarefas a executar:')
tarefas.listar().forEach(objetivo => {
    console.log (objetivo.tarefa)
})

if (tarefas.listar().length) {
    util.asyncForEach(tarefas.listar(), 1000, function(item, index) {
        tarefas.realizar(item.tarefa)
        console.log(item.tarefa + ' -> ' + (item.executada === "false" ? "não realizada ainda" : "tarefa executada") )
    })    
}
