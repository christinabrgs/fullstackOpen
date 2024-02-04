
const Contact = require('../models/contactModel')
const contactsRouter = require('express').Router()

contactsRouter.get('/', async (req, res) => {
    const contacts = await Contact.find({})
    res.status(200).json(contacts)

})

contactsRouter.post('/', async (req, res) => {
    const body = req.body

    const contact = new Contact({
        name: body.name,
        number: body.number,
    })

    const savedContact = await contact.save()
    response.status(201).json(savedContact)
})

contactsRouter.get(':/id', async (req, res) => {
    const body = req.body
})