const express = require('express')
const cors = require('cors')
const routes = require('./routes')

const app = express()

app.use(cors())
app.use(express.json())
app.use(routes)

app.listen(3333)




/*
  Métodos HTTP:

  GET: Buscar uma informação
  POST: Criar uma informação
  PUT: Editar uma informação
  DELETE: Deleta uma informação
*/

/*
  Tipos de parâmetros:

  Query: Parâmetros nomeados enviados na rota após "?" (filtos, paginação)
  Route params: Parâmetros utilizados para identificar recursos
  Request body: Corpo da requisição, utilizado para criar ou alterar recursos
*/

/*
  SQL: MySQL, SQLite, PostgreSQL, Oracle, Microsoft SQL Server
  NoSQL: MongoDB, CouchDB
*/

/*
  Driver: SELECT * FROM users
  Query Builder: table('users').select('*').where()
*/