const userModel = require('../models/userModel');

const getUserIdentityService = async (user) => {
    const checkMail = await userModel.getUserByEmail(user.email);
    if(!checkMail.length > 0){
        return "User not found";
    }
    if(checkMail[0].name !== user.name){
        return "Wrong user name not found";
    }
    return checkMail;
}

const createUserService = async (user) => {
    const checkMail = await userModel.getUserByEmail(user.email);
    if(!checkMail.length > 0){
        return "User not found";
    }
    return checkMail;
}

module.exports = { getUserIdentityService, createUserService }