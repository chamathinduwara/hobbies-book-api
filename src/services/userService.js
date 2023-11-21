const UserModel = require('../models/userModel');
const Hobby = require('../models/hobbyModel');
const UserHobbiesService = require('../models/userHobbyModel');
const Contact = require('../models/contactModel');
const contactService = require('./contactService');
const hobbyService = require('./hobbyService');


const getAllUsersService = async () => {
    const users = await UserModel.getAllUsers();
    return users;
}

const getUserByIdService =async (id) => {
    return await UserModel.getUserById(id);
}

const getUserByEmailService = async (email) => {
    return await UserModel.getUserByEmail(email);
}

const createUserService =async (user) => {
    const checkMail = await getUserByEmailService(user.email);
    if(checkMail.length > 0){;
        return "Email already exist";
    }
    // const userId = generateUuid();
    const newUser = {
        name: user.name,
        email: user.email,
    }
    await UserModel.createUser(newUser);
    const returnUser = await getUserByEmailService(user.email);
    for (let i = 0; i < user.contact.length; i++) {
        const newContact = {
            user_id: returnUser[0].user_id,
            number: user.contact[i].number,
            type: user.contact[i].type
            
        }
        await contactService.createContact(newContact);
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

const updateUserService = (id, user) => {
    return UserModel.updateUser(id, user);
}

const deleteUserService = (id) => {
    return UserModel.deleteUser(id);
}

module.exports = { getAllUsersService, getUserByIdService, createUserService, updateUserService, deleteUserService }