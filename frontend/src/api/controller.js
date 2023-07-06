import { Contact } from "./model.js"

export function createContact(payload) {
    Contact.create(
        payload
    )
}

export async function getContact() {
    const contact = await Contact.find()
    return contact
}

export async function getSingleContact(id) {
    const singleContact = await Contact.findById(id)
    return singleContact
}

export async function updateContact(id, body) {
    const updatedContact = await Contact.updateOne({ _id: id }, body)
    return updatedContact
}

export async function deleteContact(id) {
    const deletedContact = await Contact.deleteOne({ _id: id })
    return deletedContact
}