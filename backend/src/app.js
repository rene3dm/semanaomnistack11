const express = require('express');
const cors = require('cors');
const { errors} = require('celebrate');
const routes = require('./routes');

const app = express();

app.use(cors());
app.use(express.json());
app.use(routes);
app.use(errors());

module.exports = app;


/**
 * tipos de parametros
 * 
 * Query Params: Parâmetros noemados enviados na rota após o  "?" (filtros, paginação)
 *     exemplo: http://localhost:3333/users?page=2&nome=Diego&idade=25
 *      app.get('/users', (request, response)=>{
        const params = request.query;

        console.log(params);

 * Route Params: Parâmetros utilizados para identificar recursos
 *     exemplo: http://localhost:3333/users/1
 *      app.get('/users/:id', (request, response)=>{
        const params = request.params;

        console.log(params);
 * 
 * Request body: Corpo da requisição , utilizado para criar ou alterar recursos
 * 
 * app.post('/users', (request, response)=>{
        const body = request.body;

        console.log(body);
 * 
 * 
 */

 /**
  * 
  * Driver: SELECT * FROM users
  * Query Builder: table('users').select('*').where()
  * 
  */