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
    const newContact = {
        user_id: contact.user_id,
        number: contact.number,
        type: contact.type
    }
    await contactModel.createContact(newContact);
    const returnContact = await contactModel.getContactByUserId(contact.user_id);
    return returnContact;
}

const updateContact = (id, contact) => {
    return contactModel.updateContact(id, contact);
}

const deleteContact = (id) => {
    return contactModel.deleteContact(id);
}

module.exports = { getAllContacts, getContactById, getContactByUserId, createContact, updateContact, deleteContact }
