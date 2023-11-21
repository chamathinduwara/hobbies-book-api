const Hobby = require("../models/hobbyModel");

const getAllHobbiesService = async () => {
    const hobbies = await Hobby.getAllHobbies();
    return hobbies;
}

const getHobbyByNameService = async (name) => {
    return await Hobby.getHobbyByName(name);
}

const getHobbyByIdService = async(id) => {
    return await Hobby.getHobbyById(id);
}

const createHobbyService =async (hobby) => {
    const hobbyres = await Hobby.getHobbyByName(hobby.name.toLowerCase());
    if (hobbyres.length > 0) {
        return "Hobby already exist";
    }
    const newHobby = {
        hobby_name: hobby.name,
    }
    await Hobby.createHobby(newHobby);
    const hobbyresult = await getHobbyByNameService(hobby.name)
    return hobbyresult;
}

const updateHobbyService = (id, hobby) => {
    return Hobby.updateHobby(id, hobby);
}

module.exports = { getAllHobbiesService, getHobbyByIdService, getHobbyByNameService, createHobbyService, updateHobbyService }