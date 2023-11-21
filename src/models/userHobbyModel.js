const pool = require('../utils/db');

const getHobbyIdbyUserId = async (id) => {
    try {
        const results = await new Promise((resolve, reject) => {
            pool.query('SELECT hobby_id FROM UserHobbies WHERE user_id = ?', [id], (err, results, fields) => {
                if (err) {
                    console.error('Error executing query:', err);
                    reject(err); // Reject the promise if there's an error
                } else {
                    console.log('Fetched UserHobbies:', results);
                    resolve(results); // Resolve the promise with the fetched data
                }
            });
            return results; // Return the fetched data
        })
    } catch (error) {
        console.error('Error fetching UserHobbies:', error);
        throw new Error('Failed to fetch UserHobbies');
    }
}