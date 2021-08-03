const Todos = require("./tarefas")
const assert = require('assert').strict


describe("Testes automatizados da aplicação de lista de tarefas", function() {
    it("testar se lista de tarefas iniciou sem tarefas", function() {
        assert.strictEqual(Todos.listar().length, 0)
    })

    it("testar adição de nova tarefa na lista a ser executada", function() {
        Todos.adicionar("Arrumar cama ao levantar")
        assert.strictEqual(Todos.listar().length, 1)
        assert.deepStrictEqual(Todos.listar(), [{tarefa: "Arrumar cama ao levantar", executada: false}])
    })

    it("testar adição de outra tarefa na lista sem impactar tarefa já inserida", function() {
        Todos.adicionar("Tomar café")
        assert.strictEqual(Todos.listar().length, 2)
        assert.deepStrictEqual(Todos.listar(), 
            [
                {tarefa: "Arrumar cama ao levantar", executada: false},
                {tarefa: "Tomar café", executada: false}
            ]
        )
    })

    it("testar execução das tarefas disponíveis na lista e adicionar nova tarefa", function() {
        Todos.adicionar("Tirar pijama")
        Todos.realizar("Tomar café")
        Todos.realizar("Arrumar cama ao levantar")
        assert.strictEqual(Todos.listar().length, 3)
        assert.deepStrictEqual(Todos.listar(), 
            [
                {tarefa: "Arrumar cama ao levantar", executada: true},
                {tarefa: "Tomar café", executada: true},
                {tarefa: "Tirar pijama", executada: false}
            ]
        )
    })
})
