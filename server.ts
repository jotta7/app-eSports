//const express = require('express');
import  express, { response }  from 'express';
//ECMAScript modules
const app = express() //criar aplicação

//rodando no localhost: 3333/ads
app.get('/ads', (request, response) => {//primeira rota andpoint da aplicação
    //console.log('Acessou ads!') ele ja sabe que acessou.
    return response.json([
        {id: 1, name: 'anuncio 1'},
        {id: 2, name: 'anuncio 2'},
        {id: 3, name: 'anuncio 3'},
        {id: 3, name: 'anuncio 4'},
    ])
} )

app.listen(3333) //definindo a porta, quero que fique ouvindo as requisições, só para ctrl+c.