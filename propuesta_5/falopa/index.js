//FALTA
//  1. GENERAR USUARIO CON EL FORMULARIO
//  2. GENERAR LA ORDEN CON LOS ELEMENTOS DEL LOCAL STORAGE
//  3. REDUCIR LA CANTIDAD DE PRODUCTOS DEPENDIENDO DE LA VENTA

const express = require('express')
const bodyParser = require('body-parser')
const app = express()
const db = require('./queries')
const port = 3002;


app.use(bodyParser.json())
app.use(
  bodyParser.urlencoded({
    extended: true,
  })
)

app.get('/', (request, response) => {
  response.json({ info: 'Node.js, Express, and Postgres API' })
})
app.get('/productos', db.obtPro)
app.get('/ultId', db.obtUltId)

app.post('/cliente', db.newClient)
app.post('/venta', db.newSale)
app.put('/actProdu/:id', db.actProdu)

app.listen(port, () => {
    console.log(`App running on port ${port}.`)
  })







//   https://blog.logrocket.com/crud-rest-api-node-js-express-postgresql/
// https://desarrolloweb.com/articulos/axios-ajax-cliente-http-javascript.html