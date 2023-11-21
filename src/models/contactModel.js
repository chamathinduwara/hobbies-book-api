const pool = require('../utils/db');

const getAllContacts = async () => {
    try {
        const results = await new Promise((resolve, reject) => {
            pool.query('SELECT * FROM ContactNumbers', (err, results, fields) => {
                if (err) {
                    console.error('Error executing query:', err);
                    reject(err); // Reject the promise if there's an error
                } else {
                    console.log('Fetched Contacts:', results);
                    resolve(results); // Resolve the promise with the fetched data
                }
            });
        });
        return results; // Return the fetched data
    } catch (error) {
        console.error('Error fetching Contacts:', error);
        throw new Error('Failed to fetch Contacts');
    }
}

const getContactById = async (id) => {
    try {
        const results = await new Promise((resolve, reject) => {
            pool.query('SELECT * FROM ContactNumbers WHERE id = ?', [id], (err, results, fields) => {
                if (err) {
                    console.error('Error executing query:', err);
                    reject(err); // Reject the promise if there's an error
                } else {
                    console.log('Fetched Contacts:', results);
                    resolve(results); // Resolve the promise with the fetched data
                }
            });
            return results; // Return the fetched data
        })
    } catch (error) {
        console.error('Error fetching Contacts:', error);
        throw new Error('Failed to fetch Contacts');
    }
}

const getContactByUserId = async (id) => {
    try {
        const result = await new Promise((resolve, reject) => {
            pool.query('SELECT * FROM ContactNumbers WHERE user_id = ?', [id], (err, results, fields) => {
                if (err) {
                    console.error('Error executing query:', err);
                    reject(err); // Reject the promise if there's an error
                } else {
                    console.log('Fetched Contacts:', results);
                    resolve(results); // Resolve the promise with the fetched data
                }
            });
        })
        return result; // Return the fetched data
    } catch (error) {
        console.error('Error fetching Contacts:', error);
        throw new Error('Failed to fetch Contacts');
    }
}

const createContact = async (contact) => {
    try {
        const results = await new Promise((resolve, reject) => {
            pool.query('INSERT INTO ContactNumbers SET ?', [contact], (err, results, fields) => {
                if (err) {
                    console.error('Error executing query:', err);
                    reject(err); // Reject the promise if there's an error
                } else {
                    console.log('Fetched Contacts:', results);
                    resolve(results); // Resolve the promise with the fetched data
                }
            });
        })
        return results; // Return the fetched data
    } catch (error) {
        console.error('Error fetching Contacts:', error);
        throw new Error('Failed to fetch Contacts');
    }
}

const updateContact = async (id, contact) => {
    try {
        const results = await new Promise((resolve, reject) => {
            pool.query('UPDATE ContactNumbers SET ? WHERE id = ?', [contact, id], (err, results, fields) => {
                if (err) {
                    console.error('Error executing query:', err);
                    reject(err);
                } else {
                    console.log('Updated Contacts:', results);
                    resolve(results);
                }
            });
        });
        return results;
    } catch (error) {
        console.error('Error updating Contacts:', error);
        throw new Error('Failed to update Contacts');
    }
}

const deleteContact = async (id) => {
    try {
        const results = await new Promise((resolve, reject) => {
            pool.query('DELETE FROM ContactNumbers WHERE id = ?', [id], (err, results, fields) => {
                if (err) {
                    console.error('Error executing query:', err);
                    reject(err);
                } else {
                    console.log('Deleted Contacts:', results);
                    resolve(results);
                }
            });
        });
        return results;
    } catch (error) {
        console.error('Error deleting Contacts:', error);
        throw new Error('Failed to delete Contacts');
    }
}

module.exports = { getAllContacts, getContactById, getContactByUserId, createContact, updateContact, deleteContact }