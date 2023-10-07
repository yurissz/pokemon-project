const { Pokemon, PokeItem, PokeMove } = require('fast-poke-fetch')

const pokemonFunction = async (req, res) => {

    const { pokemonName } = req.params

    const pokemonData = await Pokemon(pokemonName)
    console.log(pokemonData)

    res.status(200).json(pokemonData)

}

const itemFunction = async (req, res) => {

    const { itemName } = req.params

    const itemData = await PokeItem(itemName)
    console.log(itemData)

    res.status(200).json(itemData)

}

const moveFunction = async (req, res) => {

    const { moveName } = req.params

    const moveData = await PokeMove(moveName)
    console.log(moveData)

    res.status(200).json(moveData)

}




module.exports = {
    pokemonFunction,
    itemFunction,
    moveFunction
}