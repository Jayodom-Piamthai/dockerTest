CREATE DATABASE test;
use test;
CREATE TABLE user(
	userID int primary key,
    userName varchar(255),
    userYear int
);

INSERT INTO user(userID,userName,userYear)
VALUES(1,'ace','3'),(2,'jay',3);