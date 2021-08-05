const Objetivos = require("./objetivos")
const util = require("./util")
// const index = require("./index")
const assert = require('assert').strict

const obj = new Objetivos()

describe("Testes automatizados da aplicação de lista de tarefas", function() {
    it("Sobre a classe Objetivos - testar se listagem vazia de tarefas está realmente vazia", function() {
        assert.strictEqual(obj.listar().length, 1)
    })

    it("Sobre a classe Objetivos - testar adição de nova tarefa na lista a ser executada", function() {
        obj.adicionar("Arrumar cama ao levantar")
        assert.strictEqual(obj.listar().length, 1)
        assert.deepStrictEqual(obj.listar(), [{tarefa: "Arrumar cama ao levantar", executada: false}])
    })

    it("Sobre a classe Objetivos - testar adição de outra tarefa na lista sem impactar tarefa já inserida", function() {
        obj.adicionar("Tomar café")
        assert.strictEqual(obj.listar().length, 2)
        assert.deepStrictEqual(obj.listar(), 
            [
                {tarefa: "Arrumar cama ao levantar", executada: false},
                {tarefa: "Tomar café", executada: false}
            ]
        )
    })

    it("Sobre a classe Objetivos - testar execução das tarefas disponíveis na lista e adicionar nova tarefa", function() {
        obj.adicionar("Tirar pijama")
        obj.realizar("Tomar café")
        obj.realizar("Arrumar cama ao levantar")
        assert.strictEqual(obj.listar().length, 3)
        assert.deepStrictEqual(obj.listar(), 
            [
                {tarefa: "Arrumar cama ao levantar", executada: true},
                {tarefa: "Tomar café", executada: true},
                {tarefa: "Tirar pijama", executada: false}
            ]
        )
    })

    it("Sobre processos util.js - testar execução da tarefa de inicialização padrão de objetivos", function() {
        util.iniciarObjetivos(obj)
        assert.strictEqual(obj.listar().length, 6)
        assert.deepStrictEqual(obj.listar(), 
            [
                {tarefa: "Arrumar cama ao levantar", executada: true},
                {tarefa: "Tomar café", executada: true},
                {tarefa: "Tirar pijama", executada: false},
                {tarefa: "arrumar cama", executada: false},
                {tarefa: "tomar cafe", executada: false},
                {tarefa: "limpar casa", executada: false}
            ]
        )
    })

    it("Sobre processos util.js - testar execução conclusão de todas as tarefasda lista de objetivos", function() {
        util.asyncForEach(obj.listar(), 1, function(item, index) {
            obj.realizar(item.tarefa)
        })
        setTimeout(() => {
            assert.strictEqual(obj.listar().length, 6)
            assert.deepStrictEqual(obj.listar(), 
                [
                    {tarefa: "Arrumar cama ao levantar", executada: true},
                    {tarefa: "Tomar café", executada: true},
                    {tarefa: "Tirar pijama", executada: true},
                    {tarefa: "arrumar cama", executada: true},
                    {tarefa: "tomar cafe", executada: true},
                    {tarefa: "limpar casa", executada: true}
                ]
            )    
        },100)
    })
})
