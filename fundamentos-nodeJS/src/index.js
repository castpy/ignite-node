//importa o express
const { response, request } = require('express')
const express = require('express')

//inicia o express na constante app
const app = express()

//define a porta que será inicializada
app.listen(3030)

//define a rota após a porta, o request e o response
app.get('/', (request, response) => {
    return response.json({mensagem: "Olá, mundo!"})
})