const QUERY = {
    GET_ALL_USERS: `SELECT Users.user_id, Users.name, Users.email, ContactNumbers.number, ContactNumbers.type, Hobbies.hobby_name
    FROM Users
    LEFT JOIN ContactNumbers ON Users.user_id = ContactNumbers.user_id
    LEFT JOIN User_Hobbies ON Users.user_id = User_Hobbies.user_id
    LEFT JOIN Hobbies ON User_Hobbies.hobby_id = Hobbies.hobby_id;
    `,
}