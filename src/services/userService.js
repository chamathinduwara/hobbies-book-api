const UserModel = require('../models/userModel');
const UserHobbies = require('../models/userHobbyModel');
const Contact = require('../models/contactModel');
// const generateUuid  = require('../utils/uuidGenerate');
// const User = require('../data/userData/User').default

const getAllUsersService = async () => {
    const users = await UserModel.getAllUsers();
    return users;
}

const getUserByIdService = (id) => {
    return UserModel.getUserById(id);
}

const createUserService =async (user) => {
    const checkMail = await UserModel.getUserByEmail(user.email);
    if(checkMail.length > 0){;
        return "Email already exist";
    }
    // const userId = generateUuid();
    const newUser = {
        name: user.name,
        email: user.email,
    }
    await UserModel.createUser(newUser);
    const returnUser = await UserModel.getUserByEmail(user.email);
    for (let i = 0; i < user.contact.length; i++) {
        const newContact = {
            user_id: returnUser[0].user_id,
            number: user.contact[i].number,
            type: user.contact[i].type
            
        }
        await Contact.createContact(newContact);
    }
    const nContact = await Contact.getContactByUserId(returnUser[0].user_id);
    console.log(nContact);
    return result;
}

const updateUserService = (id, user) => {
    return UserModel.updateUser(id, user);
}

const deleteUserService = (id) => {
    return UserModel.deleteUser(id);
}

module.exports = { getAllUsersService, getUserByIdService, createUserService, updateUserService, deleteUserService }