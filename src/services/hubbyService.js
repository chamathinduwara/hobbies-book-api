const Hobby = require("../models/hobbyModel");

const getAllHobbiesService = async () => {
    const hobbies = await Hobby.getAllHobbies();
    return hobbies;
}

const getHobbyByNameService = (name) => {
    return Hobby.getHobbyByName(name);
}

const getHobbyByIdService = (id) => {
    return Hobby.getHobbyById(id);
}

const createHobbyService = (hobby) => {
    return Hobby.createHobby(hobby);
}

const updateHobbyService = (id, hobby) => {
    return Hobby.updateHobby(id, hobby);
}

module.exports = { getAllHobbiesService, getHobbyByIdService, getHobbyByNameService, createHobbyService, updateHobbyService }