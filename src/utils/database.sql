-- File: create_tables.sql
CREATE DATABASE IF NOT EXISTS hobbies;

USE hobbies;
-- Users Table
CREATE TABLE Users (
    user_id INT AUTO_INCREMENT PRIMARY KEY,
    email VARCHAR(255) UNIQUE NOT NULL,
    name VARCHAR(255) NOT NULL
);

-- Contact Numbers Table
CREATE TABLE ContactNumbers (
    contact_id INT AUTO_INCREMENT PRIMARY KEY,
    user_id INT,
    number VARCHAR(20),
    type VARCHAR(20),
    FOREIGN KEY (user_id) REFERENCES Users(user_id)
);

-- Hobbies Table
CREATE TABLE Hobbies (
    hobby_id INT AUTO_INCREMENT PRIMARY KEY,
    hobby_name VARCHAR(255) UNIQUE
);

-- User_Hobbies Table (Many-to-Many Relationship)
CREATE TABLE User_Hobbies (
    user_hobby_id INT AUTO_INCREMENT PRIMARY KEY,
    user_id INT,
    hobby_id INT,
    FOREIGN KEY (user_id) REFERENCES Users(user_id),
    FOREIGN KEY (hobby_id) REFERENCES Hobbies(hobby_id)
);
