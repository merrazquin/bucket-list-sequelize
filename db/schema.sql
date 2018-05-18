### Schema

CREATE DATABASE bucketlist_db;
USE bucketlist_db;

CREATE TABLE items
(
	id int NOT NULL AUTO_INCREMENT,
	item varchar(255) NOT NULL,
	accomplished BOOLEAN DEFAULT false,
	PRIMARY KEY (id)
);
