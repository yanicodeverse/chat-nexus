import { createContact, getContact, getSingleContact, updateContact, deleteContact, createUser } from "./controller.js"
import express from 'express'

const router = express.Router()

router.post('/contact', async (req, res) => {
    try {
        const token = await createContact(req.body)
        res.setHeader("authorization", `Bearer ${token}`)
        res.send({ message: "User successfully created. Thankyou" })
    } catch (error) {
        res.status(400).json({ message: { errors: [error.message] } })
    }
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

// USER ROUTES
router.post('/contact/user', async (req, res) => {
    const date = new Date().getDate()
    const user = await createUser(req.params.id, req.body, date)
    res.json(user)
})

export default router 