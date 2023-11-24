const userHobbyModel = require('../models/userHobbyModel');

// const getAllUserHobbiesService = async () => {
//     const userHobbies = await userHobbyModel.getAllUserHobbies();
//     return userHobbies;
// }

const getUserHobbyByIdService = async (id) => {
    return await userHobbyModel.getHobbyIdbyUserId(id);
}

const createUserHobbyService = async (userHobby) => {
    const newUserHobby = {
        user_id: userHobby.user_id,
        hobby_id: userHobby.hobby_id,
    }
    await userHobbyModel.createUserHobby(newUserHobby);
    const returnUserHobby = await userHobbyModel.getHobbyIdbyUserId(userHobby.user_id);
    return returnUserHobby;
}

const updateUserHobbyService = async (id, userHobby) => {
    await userHobbyModel.deleteHobbyByUserId(id);
    for (let i = 0; i < userHobby.length; i++) {
        const newUserHobby = {
            user_id: id,
            hobby_id: userHobby[i].hobby_id,
        }
        await userHobbyModel.createUserHobby(newUserHobby);
    }
    return await userHobbyModel.getHobbyIdbyUserId(id);
}

const deleteUserHobbyService = async (id) => {
    return await userHobbyModel.deleteHobbyByUserId(id);
}

module.exports = { getUserHobbyByIdService, createUserHobbyService, deleteUserHobbyService, updateUserHobbyService }