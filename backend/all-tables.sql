CREATE DATABASE moonlifters;

USE moonlifters;

CREATE TABLE USER
(
    username VARCHAR(255) PRIMARY KEY,
    password VARCHAR(255),
    did VARCHAR(255),
    persona ENUM('Volunteer', 'Program Manager')
);

CREATE TABLE SCHEMAS_USE
(
    id INT NOT NULL AUTO_INCREMENT PRIMARY KEY,
    username VARCHAR(255),
    structure VARCHAR(255)
);

CREATE TABLE PROGRAM
(
    id INT AUTO_INCREMENT,
    username VARCHAR(255),
    name VARCHAR(255),
    startdate VARCHAR(255),
    enddate VARCHAR(255),
    place VARCHAR(255),
    PRIMARY KEY (`id`)
);

CREATE TABLE PROGRAM_SCHEMAS
(
    id INT,
    program_id INT,
    schema_id INT,
    FOREIGN KEY (`program_id`) REFERENCES PROGRAM(`id`),
    FOREIGN KEY (`schema_id`) REFERENCES SCHEMAS_USE(`id`)
);
