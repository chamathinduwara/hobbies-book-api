const UserModel = require('../models/userModel');
const Hobby = require('../models/hobbyModel');
const UserHobbiesService = require('./userHobbyService');
const Contact = require('../models/contactModel');
const contactService = require('./contactService');
const hobbyService = require('./hobbyService');
const e = require('express');


const getAllUsersService = async () => {
    const users = await UserModel.getAllUsers();
    for (let i = 0; i < users.length; i++) {
        users[i].contact_numbers = JSON.parse(users[i].contact_numbers);
        users[i].hobbies = JSON.parse(users[i].hobbies);
    }
    return users;
}

const getUserByIdService = async (id) => {
    user = await UserModel.getUserById(id);
    const contact = await contactService.getContactByUserId(id);
    const userHobby = await UserHobbiesService.getUserHobbyByIdService(id);
    const hobbies = [];
    for (let i = 0; i < userHobby.length; i++) {
        const hobby = await hobbyService.getHobbyByIdService(userHobby[i].hobby_id);
        hobbies.push(hobby[0].hobby_name);
    }
    usern = {
        user_id: user[0].user_id,
        name: user[0].name,
        email: user[0].email,
        contact_numbers: contact,
        hobbies: hobbies
    }
    return usern;
}

const getUserByEmailService = async (email) => {
    const user = await UserModel.getUserByEmail(email);
    if (user.length <= 0) {
        return "User not found";
    }
    return user;
}

const createUserService = async (user) => {
    const checkMail = await getUserByEmailService(user.email);
    if (checkMail != "User not found") {
        return "Email already exist";
    }
    // const userId = generateUuid();
    const newUser = {
        name: user.name,
        email: user.email,
    }
    await UserModel.createUser(newUser);

    const returnUser = await getUserByEmailService(newUser.email);
    for (let i = 0; i < user.contact.length; i++) {
        const newContact = {
            user_id: returnUser[0].user_id,
            number: user.contact[i].number,
            type: user.contact[i].type

        }
        await contactService.createContact(newContact)
    }

    for (let i = 0; i < user.hobbies.length; i++) {
        let hobbyres = await hobbyService.getHobbyByNameService(user.hobbies[i]);
        if (hobbyres.length <= 0) {
            const newHobby = {
                hobby_name: user.hobbies[i],
            }
            await Hobby.createHobby(newHobby);
            hobbyres = await hobbyService.getHobbyByNameService(user.hobbies[i]);
        }
        const newUserHobby = {
            user_id: returnUser[0].user_id,
            hobby_id: hobbyres[0].hobby_id,
        }
        await UserHobbiesService.createUserHobby(newUserHobby);
    }

    await contactService.getContactById(returnUser[0].user_id);
    return returnUser;
}

const updateUserService = async (id, user) => {
    console.log(id)
    const editUser = {
        name: user.name,
        email: user.email,
    }
    const updateUser = await UserModel.updateUser(id, editUser);
    const updateContact = await contactService.updateContact(id, user.contact_numbers);
    const newHobbiesList = [];
    for (let i = 0; i < user.hobbies.length; i++) {
        let hobbyres = await hobbyService.getHobbyByNameService(user.hobbies[i]);
        if (hobbyres.length <= 0) {
            const newHobby = {
                hobby_name: user.hobbies[i],
            }
            await Hobby.createHobby(newHobby);
            hobbyres = await hobbyService.getHobbyByNameService(user.hobbies[i]);
        }
        const newUserHobby = {
            user_id: id,
            hobby_id: hobbyres[0].hobby_id,
        }
        newHobbiesList.push(newUserHobby);
    }
    const updateUserHobby = await UserHobbiesService.updateUserHobbyService(id, newHobbiesList);
    return await getUserByIdService(id);
}

const deleteUserService =async (id) => {
    await UserHobbiesService.deleteUserHobbyService(id);
    await contactService.deleteContact(id);
    return UserModel.deleteUser(id);
}

module.exports = { getAllUsersService, getUserByEmailService, getUserByIdService, createUserService, updateUserService, deleteUserService }