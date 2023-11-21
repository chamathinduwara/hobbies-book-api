const pool = require("../utils/db");

const getAllHobbies =async () => {
    try {
        const result = await new Promise((resolve, reject) => {
            pool.query('SELECT * FROM Hobbies', (err, results, fields) => {
                if (err) {
                    console.error('Error executing query:', err);
                    reject(err);
                } else {
                    resolve(results);
                }
            });
        });
        return result;
    } catch (error) {
        console.error('Error fetching Hobbies:', error);
        throw new Error('Failed to fetch Hobbies');
    }
}

const getHobbyByName = async (name) => {
    try {
        const result = await new Promise((resolve, reject) => {
            pool.query('SELECT * FROM Hobbies WHERE hobby_name = ?', [name], (err, results, fields) => {
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
        console.error('Error fetching Hobbies:', error);
        throw new Error('Failed to fetch Hobbies');
    }
}


const getHobbyById = async (id) => {
    try {
        const result = await new Promise((resolve, reject) => {
            pool.query('SELECT * FROM Hobbies WHERE hobby_id = ?', [id], (err, results, fields) => {
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
        console.error('Error fetching Hobbies:', error);
        throw new Error('Failed to fetch Hobbies');
    }
}


const createHobby = async (hobby) => {
    try {
        const result = await new Promise((resolve, reject) => {
            pool.query('INSERT INTO Hobbies SET ?', [hobby], (err, results, fields) => {
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
        console.error('Error fetching Hobbies:', error);
        throw new Error('Failed to fetch Hobbies');
    } 
}

const updateHobby = async (id, hobby) => {
    try {
        const result = await new Promise((resolve, reject) => {
            pool.query('UPDATE Hobbies SET ? WHERE hobby_id = ?', [hobby, id], (err, results, fields) => {
                if (err) {
                    console.error('Error executing query:', err);
                    reject(err);
                } else {
                    console.log('Fetched Hobbies:', results);
                    resolve(results);
                }
            });
        })
        return result;
    } catch (error) {
        console.error('Error fetching Hobbies:', error);
        throw new Error('Failed to fetch Hobbies');
    } 
}

module.exports = { getAllHobbies, getHobbyById, getHobbyByName, createHobby, updateHobby };