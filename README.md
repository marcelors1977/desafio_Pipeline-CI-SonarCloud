Repositório para entrega do desafio Pipeline CI com SonarCloud

Abaixo está descriminado os passos efetuados para a entrega deste desafio:

    1 - criado processo em NodeJs que visa implementar uma lista de tarefas a serem executadas. 
        O código principal insere 3 tarefas, e as mesmas são executadas num intervalo de 2 segundos
        entre cada uma;
    2 - as operações necessárias para esta implementação foram disponibilizada no fonte tarefas.js;
    3 - também foi criado o fonte testes.js, que realizará os testes sobre as operações criadas para
        atender a manutenção da lista de tarefas. Foi instalada a dependência "Mocha" no pacote do 
        para automatizar estes testes.
        Os seguintes testes serão realizados:
        
            3.1 - "testar se lista de tarefas iniciou sem tarefas"
            3.2 - "testar adição de nova tarefa na lista a ser executada"
            3.3 - "testar adição de outra tarefa na lista sem impactar tarefa já inserida"
            3.4 - "testar execução das tarefas disponíveis na lista e adicionar nova tarefa"