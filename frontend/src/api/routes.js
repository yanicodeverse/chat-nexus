import { createContact, getContact, getSingleContact, updateContact, deleteContact } from "./controller.js"
import express from 'express'

const router = express.Router()

router.post('/contact', (req, res) => {
    createContact(req.body)
    res.send(req.body)
})

router.get('/contact', async (req, res) => {
    const contacts = await getContact()
    res.json(contacts)
})

router.get('/contact/:id', async (req, res) => {
    const singleContact = await getSingleContact(req.params.id)
    res.json(singleContact)
})

router.patch('/contact/:id', async (req, res) => {
    const updatedContact = await updateContact(req.params.id, req.body)
    res.json(updatedContact)
})

router.delete('/contact/:id', async (req, res) => {
    const deletedContact = await deleteContact(req.params.id)
    res.json(deletedContact)
})
export default router 