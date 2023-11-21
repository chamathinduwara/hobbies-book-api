const userHobbyModel = require('../models/userHobbyModel');

// const getAllUserHobbiesService = async () => {
//     const userHobbies = await userHobbyModel.getAllUserHobbies();
//     return userHobbies;
// }

const getUserHobbyByIdService = async (id) => {
    return await userHobbyModel.getUserHobbyById(id);
}

const createUserHobbyService =async (userHobby) => {
    const newUserHobby = {
        user_id: userHobby.user_id,
        hobby_id: userHobby.hobby_id,
    }
    await userHobbyModel.createUserHobby(newUserHobby);
    const returnUserHobby = await userHobbyModel.getHobbyIdbyUserId(userHobby.user_id);
    return returnUserHobby;
}

// const updateUserHobbyService = (id, userHobby) => {
//     return userHobbyModel.updateUserHobby(id, userHobby);
// }

// const deleteUserHobbyService = (id) => {
//     return userHobbyModel.deleteUserHobby(id);
// }

module.exports = { getAllUserHobbiesService, getUserHobbyByIdService, createUserHobbyService, updateUserHobbyService, deleteUserHobbyService }