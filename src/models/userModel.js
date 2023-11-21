const pool = require("../utils/db");


const getAllUsers = async () => {
    try {
        const results = await new Promise((resolve, reject) => {
            pool.query('SELECT * FROM Users', (err, results, fields) => {
                if (err) {
                    console.error('Error executing query:', err);
                    reject(err); // Reject the promise if there's an error
                } else {
                    console.log('Fetched Users:', results);
                    resolve(results); // Resolve the promise with the fetched data
                }
            });
        });
        return results; // Return the fetched data
    } catch (error) {
        console.error('Error fetching users:', error);
        throw new Error('Failed to fetch users');
    }
};

const getUserById =async (id) => {
    try {
        const result = await new Promise((resolve, reject) => {
            pool.query('SELECT * FROM Users WHERE user_id = ?', id, (err, results, fields) => {
                if (err) {
                    console.error('Error executing query:', err);
                    reject(err); // Reject the promise if there's an error
                } else {
                    console.log('Fetched Users:', results);
                    resolve(results); // Resolve the promise with the fetched data
                }
            });
        })
        return result; // Return the fetched data
    } catch (error) {
        console.error('Error fetching users:', error);
        throw new Error('Failed to fetch users');
    }
}

const getUserByEmail = async (email) => {
    try {
        const result = await new Promise((resolve, reject) => {
            pool.query('SELECT * FROM Users WHERE email = ?', email, (err, results, fields) => {
                if (err) {
                    console.error('Error executing query:', err);
                    reject(err); // Reject the promise if there's an error
                } else {
                    console.log('Fetched Users:', results);
                    resolve(results); // Resolve the promise with the fetched data
                }
            });
        })
        return result; // Return the fetched data
    } catch (error) {
        console.error('Error fetching users:', error);
        throw new Error('Failed to fetch users');
    }
}


const createUser = async (user) => {
    try {
        const result = await new Promise((resolve, reject) => {
            pool.query('INSERT INTO Users SET ?', [user], (err, results, fields) => {
                if (err) {
                    console.error('Error executing query:', err);
                    reject(err); // Reject the promise if there's an error
                } else {
                    resolve(results); // Resolve the promise with the fetched data
                }
            });

        })
        return result;
    } catch (error) {
        console.error('Error fetching users:', error);
        throw new Error('Failed to fetch users');
    } 
}

const updateUser = async (id, user) => {
    try {
        const results = await new Promise((resolve, reject) => {
            pool.query('UPDATE Users SET ? WHERE id = ?', [user, id], (err, results, fields) => {
                if (err) {
                    console.error('Error executing query:', err);
                    reject(err); // Reject the promise if there's an error
                } else {
                    console.log('Fetched Users:', results);
                    resolve(results); // Resolve the promise with the fetched data
                }
            });
            return results; // Return the fetched data
        })
    } catch (error) {
        console.error('Error fetching users:', error);
        throw new Error('Failed to fetch users');
    }
}

const deleteUser = async (id) => {
    try {
        const results = await new Promise((resolve, reject) => {
            pool.query('DELETE FROM Users WHERE id = ?', [id], (err, results, fields) => {
                if (err) {
                    console.error('Error executing query:', err);
                    reject(err); // Reject the promise if there's an error
                } else {
                    console.log('Fetched Users:', results);
                    resolve(results); // Resolve the promise with the fetched data
                }
            });
            return results; // Return the fetched data
        })
    } catch (error) {
        console.error('Error fetching users:', error);
        throw new Error('Failed to fetch users');
    }
}

module.exports = { getAllUsers, getUserById, getUserByEmail, createUser, updateUser, deleteUser }
