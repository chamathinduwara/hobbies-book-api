const pool = require("../utils/db");

const getAllHobbies =async () => {
    try {
        const results = await new Promise((resolve, reject) => {
            pool.query('SELECT * FROM Hobbies', (err, results, fields) => {
                if (err) {
                    console.error('Error executing query:', err);
                    reject(err); // Reject the promise if there's an error
                } else {
                    console.log('Fetched Hobbies:', results);
                    resolve(results); // Resolve the promise with the fetched data
                }
            });
        });
        return results; // Return the fetched data
    } catch (error) {
        console.error('Error fetching Hobbies:', error);
        throw new Error('Failed to fetch Hobbies');
    }
}

const getHobbyByName = async (name) => {
    try {
        const results = await new Promise((resolve, reject) => {
            pool.query('SELECT * FROM Hobbies WHERE name = ?', [name], (err, results, fields) => {
                if (err) {
                    console.error('Error executing query:', err);
                    reject(err); // Reject the promise if there's an error
                } else {
                    console.log('Fetched Hobbies:', results);
                    resolve(results); // Resolve the promise with the fetched data
                }
            });
            return results; // Return the fetched data
        })
    } catch (error) {
        console.error('Error fetching Hobbies:', error);
        throw new Error('Failed to fetch Hobbies');
    }
}


const getHobbyById = async (id) => {
    try {
        const results = await new Promise((resolve, reject) => {
            pool.query('SELECT * FROM Hobbies WHERE id = ?', [id], (err, results, fields) => {
                if (err) {
                    console.error('Error executing query:', err);
                    reject(err); // Reject the promise if there's an error
                } else {
                    console.log('Fetched Hobbies:', results);
                    resolve(results); // Resolve the promise with the fetched data
                }
            });
            return results; // Return the fetched data
        })
    } catch (error) {
        console.error('Error fetching Hobbies:', error);
        throw new Error('Failed to fetch Hobbies');
    }
}

const getHobbyByUserId = async (id) => {
    try {
        const results = await new Promise((resolve, reject) => {
            pool.query('SELECT * FROM Hobbies WHERE userId = ?', [id], (err, results, fields) => {
                if (err) {
                    console.error('Error executing query:', err);
                    reject(err); // Reject the promise if there's an error
                } else {
                    console.log('Fetched Hobbies:', results);
                    resolve(results); // Resolve the promise with the fetched data
                }
            });
            return results; // Return the fetched data
        })
    } catch (error) {
        console.error('Error fetching Hobbies:', error);
        throw new Error('Failed to fetch Hobbies');
    }
}

const createHobby = async (hobby) => {
    try {
        const results = await new Promise((resolve, reject) => {
            pool.query('INSERT INTO Hobbies SET ?', [hobby], (err, results, fields) => {
                if (err) {
                    console.error('Error executing query:', err);
                    reject(err); // Reject the promise if there's an error
                } else {
                    console.log('Fetched Hobbies:', results);
                    resolve(results); // Resolve the promise with the fetched data
                }
            });
            return results; // Return the fetched data
        })
    } catch (error) {
        console.error('Error fetching Hobbies:', error);
        throw new Error('Failed to fetch Hobbies');
    } 
}

const updateHobby = async (id, hobby) => {
    try {
        const results = await new Promise((resolve, reject) => {
            pool.query('UPDATE Hobbies SET ? WHERE id = ?', [hobby, id], (err, results, fields) => {
                if (err) {
                    console.error('Error executing query:', err);
                    reject(err); // Reject the promise if there's an error
                } else {
                    console.log('Fetched Hobbies:', results);
                    resolve(results); // Resolve the promise with the fetched data
                }
            });
            return results; // Return the fetched data
        })
    } catch (error) {
        console.error('Error fetching Hobbies:', error);
        throw new Error('Failed to fetch Hobbies');
    } 
}

module.exports = { getAllHobbies, getHobbyById, getHobbyByName, getHobbyByUserId, createHobby, updateHobby };