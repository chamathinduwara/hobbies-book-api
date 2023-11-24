const pool = require('../utils/db');

const getHobbyIdbyUserId = async (id) => {
    try {
        const result = await new Promise((resolve, reject) => {
            pool.query('SELECT hobby_id FROM User_Hobbies WHERE user_id = ?', [id], (err, results, fields) => {
                if (err) {
                    console.error('Error executing query:', err);
                    reject(err);
                } else {
                    resolve(results);
                }
            });
        })
        return result;
    } catch (error) {
        console.error('Error fetching User_Hobbies:', error);
        throw new Error('Failed to fetch User_Hobbies');
    }
}

const createUserHobby = async (userHobby) => {
    try {
        const result = await new Promise((resolve, reject) => {
            pool.query('INSERT INTO User_Hobbies SET ?', [userHobby], (err, results, fields) => {
                if (err) {
                    console.error('Error executing query:', err);
                    reject(err);
                } else {
                    resolve(results);
                }
            });

        })
        return result;
    } catch (error) {
        console.error('Error fetching users:', error);
        throw new Error('Failed to fetch users');
    } 
}

const deleteHobbyByUserId = async (id) => {
    try {
        const result = await new Promise((resolve, reject) => {
            pool.query('DELETE FROM User_Hobbies WHERE user_id = ?', [id], (err, results, fields) => {
                if (err) {
                    console.error('Error executing query:', err);
                    reject(err);
                } else {
                    resolve(results);
                }
            });

        })
        return result;
    } catch (error) {
        console.error('Error fetching users:', error);
        throw new Error('Failed to fetch users');
    } 
}


module.exports = { getHobbyIdbyUserId, createUserHobby, deleteHobbyByUserId };