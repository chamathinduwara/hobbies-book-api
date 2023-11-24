const pool = require("../utils/db");


const getAllUsers = async () => {
    try {
        const result = await new Promise((resolve, reject) => {
            pool.query(`SELECT Users.user_id, Users.name, Users.email,
            (SELECT JSON_ARRAYAGG(
                    JSON_OBJECT('type', IFNULL(ContactNumbers.type, ''), 'number', IFNULL(ContactNumbers.number, ''))
                ) 
            FROM ContactNumbers WHERE ContactNumbers.user_id = Users.user_id) AS contact_numbers,
            (SELECT JSON_ARRAYAGG(IFNULL(Hobbies.hobby_name, '')) 
            FROM User_Hobbies 
            LEFT JOIN Hobbies ON User_Hobbies.hobby_id = Hobbies.hobby_id 
            WHERE User_Hobbies.user_id = Users.user_id) AS hobbies
        FROM Users;
            `, (err, results, fields) => {
                if (err) {
                    reject(err);
                } else {
                    resolve(results);
                }
            });
        });
        return result;
    } catch (error) {
        console.error('Error fetching users:', error);
        throw new Error('Failed to fetch users');
    }
};

const getUserById = async (id) => {
    console.log(id);
    try {
        const result = await new Promise((resolve, reject) => {
            pool.query('SELECT * FROM Users WHERE user_id = ?', id, (err, results, fields) => {
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

const getUserByEmail = async (email) => {
    try {
        const result = await new Promise((resolve, reject) => {
            pool.query('SELECT * FROM Users WHERE email = ?', [email], (err, results, fields) => {
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


const createUser = async (user) => {
    try {
        const result = await new Promise((resolve, reject) => {
            pool.query('INSERT INTO Users SET ?', [user], (err, results, fields) => {
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

const updateUser = async (id, user) => {
    try {
        const result = await new Promise((resolve, reject) => {
            pool.query('UPDATE Users SET ? WHERE user_id = ?', [user, id], (err, results, fields) => {
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

const deleteUser = async (id) => {
    try {
        const result = await new Promise((resolve, reject) => {
            pool.query('DELETE FROM Users WHERE user_id = ?', [id], (err, results, fields) => {
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

module.exports = { getAllUsers, getUserById, getUserByEmail, createUser, updateUser, deleteUser }
