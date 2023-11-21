const asyncHandler = require("express-async-handler");
const contactService = require("../services/contactService");

//@desc Get Contacts
//@route GET /api/v1/Contacts
//@access Public
const getContacts = asyncHandler(async (req, res) => {
    const allContact = await contactService.getAllContacts();
    res.status(200).json(allContact);
})

//@desc Get Contact
//@route GET /api/v1/Contacts/:id
//@access Public
const getContact = asyncHandler(async (req, res) => {
    const allContact = await contactService.getContactById(req.params.id);
    res.status(200).json(allContact);
})

//@desc Create Contact
//@route POST /api/v1/Contacts
//@access Public
const createContact = asyncHandler(async (req, res) => {
    const { name, number } = req.body;
    if (!name || !number) {
        res.status(400).json({ success: false, msg: "Please provide name, number" });
        return;
    }
    const contactRes = await contactService.createContact(req.body);
    if (contactRes === "Contact already exist") {
        res.status(400).json({ success: false, msg: "Contact already exist" });
        return;
    }
    res.status(201).json(contactRes);
})

//@desc Update Contact
//@route PUT /api/v1/Contacts/:id
//@access Public
const updateContact = asyncHandler(async (req, res) => {
    res.status(200).json({ success: true, msg: "Update Contact" });
})

//@desc Delete Contact
//@route DELETE /api/v1/Contacts/:id
//@access Public
const deleteContact = asyncHandler(async (req, res) => {
    res.status(200).json({ success: true, msg: "Delete all Contact" });
})

module.exports = { getContacts, getContact, createContact, updateContact, deleteContact }