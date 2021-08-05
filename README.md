Repositório para entrega do desafio Pipeline CI com SonarCloud

Abaixo está descriminado os passos efetuados para a entrega deste desafio:

    1 - criado processo em NodeJs que visa implementar uma lista de tarefas a serem executadas. O código principal insere 3 tarefas, e as mesmas são executadas num intervalo de 2 segundos entre cada uma;

    2 - as operações necessárias para esta implementação foram disponibilizada no fonte tarefas.js;

    3 - também foi criado o fonte testes.js, que realizará os testes sobre as operações criadas para atender a manutenção da lista de tarefas. Foi instalada a dependência "Mocha" no pacote do para automatizar estes testes e "Nyc" para gerar o insumo de cobertura de código para o sonarquebe. Os seguintes testes são realizados:
        
            3.1 - "Sobre a classe Objetivos - testar se listagem vazia de tarefas está realmente vazia"
            3.2 - "Sobre a classe Objetivos - testar adição de nova tarefa na lista a ser executada"
            3.3 - "Sobre a classe Objetivos - testar adição de outra tarefa na lista sem impactar tarefa já inserida"
            3.4 - "Sobre a classe Objetivos - testar execução das tarefas disponíveis na lista e adicionar nova tarefa"
            3.5 - "Sobre processos util.js - testar execução da tarefa de inicialização padrão de objetivos"
            3.6 - "Sobre processos util.js - testar execução conclusão de todas as tarefasda lista de objetivos"

    4 - através do comando "npm run coverage" é gerado o arquivo lcov.info usando pelo sonar-scanner carregar a cobertura de código no sonarqube;