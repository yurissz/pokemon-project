const express = require('express')
const controladores = require('./controladores')

const app = express()

app.use(express.json())

app.get('/pokemons/:pokemonName', controladores.pokemonFunction)
app.get('/items/:itemName', controladores.itemFunction)
app.get('/moves/:moveName', controladores.moveFunction)

app.listen(3000)