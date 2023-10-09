CREATE DATABASE api_senhas;

USE api_senhas;

CREATE TABLE senha (
  id INT NOT NULL AUTO_INCREMENT,
  tipo VARCHAR(2) NOT NULL,
  numeracao VARCHAR(10) NOT NULL,
  data_hora_emissao DATETIME NOT NULL,
  data_hora_atendimento DATETIME,
  guiche VARCHAR(20),
  PRIMARY KEY (id)
);

select * from senha;

CREATE TABLE atendimento (
  id INT NOT NULL AUTO_INCREMENT,
  senha_id INT NOT NULL,
  tempo_atendimento INT NOT NULL,
  PRIMARY KEY (id),
  FOREIGN KEY (senha_id) REFERENCES senha (id)
);

select * from atendimento;



##ESSES FORAM ALGUMAS QUERYS DE CONFIG, NÃO PRECISA EXECUTAR PRA CRIAR O BD##


CREATE USER 'user'@'localhost' IDENTIFIED BY 'admin1234';

GRANT ALL PRIVILEGES ON access TO 'user'@'localhost';
GRANT ALL PRIVILEGES ON api_senhas.* TO 'user'@'localhost';

flush privileges;