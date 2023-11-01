const express = require('express')
const app = express()
const port = 3000
const config = {
  host: 'db',
  user: 'root',
  password: 'root',
  database: 'nodedb'
}

const mysql = require('mysql')
const connection = mysql.createConnection(config)

const sqlCreate = `CREATE TABLE IF NOT EXISTS people(id int NOT NULL AUTO_INCREMENT, name varchar(255) NOT NULL, PRIMARY KEY(id))`

connection.query(sqlCreate, (error, results) => {
  if (error) {
    console.error('Erro ao inserir dados:', error)
  } else {
    console.log('Dados inseridos com sucesso.')
  }
})

const sqlInsert = `INSERT INTO people(name) values ('José'), ('Maria'), ('Ana')`

connection.query(sqlInsert, (error, results) => {
  if (error) {
    console.error('Erro ao inserir dados:', error)
  } else {
    console.log('Dados inseridos com sucesso.')
  }
})

app.get('/', (req, res) => {
  const sqlSelect = 'SELECT name FROM people'

  connection.query(sqlSelect, (error, results) => {
    if (error) {
      res.status(500).json({ error: 'Erro ao consultar a tabela people' })
    } else {
      const names = results.map((row) => row.name)
      res.send(`
        <h1>Full Cycle Rocks!</h1>
        <h2>Nomes Cadastrados:</h2>
        <ul>
          ${names.map((name) => `<li>${name}</li>`).join('')}
        </ul>
      `)
    }
  })
})

app.listen(port, () => {
  console.log('Rodando na porta ' + port)
})