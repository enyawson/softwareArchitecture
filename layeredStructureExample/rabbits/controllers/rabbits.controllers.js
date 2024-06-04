// rabbits.controllers.js
const { getAllItems, getItem, editItem, addItem, deleteItem } = require('../models/rabbits.models')

// logic to perform on the data retrieved from the model
const listRabbits = (req, res) => {
    try {
        const resp = getAllItems()
        res.status(200).send(resp)

    } catch (err) {
        res.status(500).send(err)
    }
}

const getRabbit = (req, res) => {
    try {
        const resp = getItem(parseInt(req.params.id))
        res.status(200).send(resp)

    } catch (err) {
        res.status(500).send(err)
    }
}

const editRabbit = (req, res) => {
    try {
        const resp = editItem(req.params.id, req.body.item)
        res.status(200).send(resp)
    } catch (err) {
        res.status(500).send(err)
    }
}

const addRabbit = (req, res) => {
    try {
        console.log( req.body.item )
        const resp = addItem(req.body.item)
        res.status(200).send(resp)
    } catch (err) {
        res.status(500).send(err)
    }
}

const deleteRabbit = (req, res) => {
    try {
        const resp = deleteItem(req.params.idx)
        res.status(200).send(resp)
    } catch (err) {
        res.status(500).send(err)
    }
}

module.export = { listRabbits, getRabbit, editRabbit, addRabbit, deleteRabbit };