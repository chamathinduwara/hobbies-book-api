const contactModel = require("../models/contactModel");

const getAllContacts = async () => {
    const contacts = await contactModel.getAllContacts();
    return contacts;
}

const getContactById = async (id) => {
    return await contactModel.getContactById(id);
}

const getContactByUserId = async (id) => {
    return await contactModel.getContactByUserId(id);
}

const createContact = async (contact) => {
    console.log(contact);
    const newContact = {
        user_id: contact.user_id,
        type: contact.type,
        number: contact.number
    }
    await contactModel.createContact(newContact);
    const returnContact = await contactModel.getContactByUserId(contact.user_id);
    return returnContact;
}

const updateContact = async (id, contact) => {
    await deleteContact(id);
    for (let i = 0; i < contact.length; i++) {
        const newContact = {
            user_id: id,
            number: contact[i].number,
            type: contact[i].type
        }
        await createContact(newContact);
    }
    return await contactModel.getContactByUserId(id);
}

const deleteContact = async (id) => {
    return await contactModel.deleteContact(id);
}

module.exports = { getAllContacts, getContactById, getContactByUserId, createContact, updateContact, deleteContact }
