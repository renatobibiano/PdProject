API DE DISCOS E COLEÇÕES - USANDO NODE.JS, MySQL E EXPRESS.JS

Para rodar o servidor é preciso apenas executar os seguintes comandos:
 - npm install
 - npm start

O arquivo createSqlSchema.sql tem o script para a criação do banco de dados para a API. Dentro do arquivo "dbconnection.js" devem ser configurados as informações para conexão com o banco de dados.

Com o server e o banco rodando, a API disponibiliza os seguintes métodos:
- Obter os discos de uma coleção: GET para http://localhost:3000/collections/[ID] - sendo [ID] o ID da coleção
- Buscar um disco por ID: GET para http://localhost:3000/discs/[ID] - sendo [ID] o ID do disco
- Listar todos os discos: GET para http://localhost:3000/discs
- Buscar discos por nome: GET para http://localhost:3000/discs/?text=[TEXTO] - sendo [TEXTO] a palavra buscada
- Apagar um disco: DELETE para http://localhost:3000/discs/[ID] - sendo [ID] o ID do disco
- Atualizar informações de disco: PUT para http://localhost:3000/discs/[ID] - sendo [ID] o ID do disco
  - Passando os parâmetros "name" e "year" com as informações do disco
- Inserir um novo disco: POST para http://localhost:3000/discs/
  - Passando os parâmetros "name" e "year" com as informações do disco, e o parâmetro "col_id" com o ID da coleção.
