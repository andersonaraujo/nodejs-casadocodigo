--------------------------------
-- CREATE USER
--------------------------------
CREATE USER 'casadocodigo'@'localhost' IDENTIFIED BY 'casadocodigo';

--------------------------------
-- CREATE DATABASE
--------------------------------
CREATE DATABASE casadocodigo_nodejs;
USE casadocodigo_nodejs;
GRANT ALL PRIVILEGES ON casadocodigo_nodejs.* To 'casadocodigo'@'localhost';

--------------------------------
-- CREATE TABLES
--------------------------------
create table produtos (
    id int NOT NULL AUTO_INCREMENT PRIMARY KEY,
    titulo varchar(255),
    descricao text,
    preco decimal(10,2)
);