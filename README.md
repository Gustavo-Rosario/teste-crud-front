# TESTE-CRUD-FRONT
Teste CRUD (AngularJS)

## CRUD de Clientes
### 1. Escopo
Crie um mini sistema, em AngularJS, para gerenciamento de clientes genéricos.

O mesmo deverá conter: 
  * Cadastro
  * Listagem
    * Detalhes do cliente selecionado
    * Exclusão
    * Edição (opcional)
    
### 2. Estrutura de dados CLIENTE
Campo        | Tipo    | Observação
------------ | ------- | ----------
ID           | String  |
Nome         | String  |
Biografia    | String  | Texto longo sobre o cliente
Nascimento   | Date    |
CPF          | Int     | CPF sem formatação
Especial     | Boolean | Campo marcavel

### 3. Tarefas
* Siga o padrão implementado no esqueleto do projeto
* Crie uma branch com seu nome a partir de **dev** para fazer suas modificações
  * Exemplo: **fulano/crud-front**
* Use a conexão com a API do segundo projeto <https://github.com/Gustavo-Rosario/teste-crud-api>

### 4. Boas praticas
* Separar um arquivo para configirações do projeto, como strings de conexão com a api
  * Exemplo: app.config.js
* Separação de rotas, controllers e views
* Indentar todo o código
* Arquivo **.gitignore** para remover arquivos e pastas privadas ou desnecessárias
  * Exemplo: node_modules

