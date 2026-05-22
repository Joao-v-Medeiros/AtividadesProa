CREATE DATABASE DB_CDS;
USE DB_CDS;

CREATE TABLE tb_artista(
	cod_art INT AUTO_INCREMENT PRIMARY KEY,
    nome_art VARCHAR(100) NOT NULL UNIQUE
);

SELECT * FROM tb_artista;

CREATE TABLE tb_gravadora(
	cod_grav INT AUTO_INCREMENT PRIMARY KEY,
    nome_grav VARCHAR(50) NOT NULL UNIQUE
);

SELECT * FROM tb_gravadora;

CREATE TABLE tb_categoria(
	cod_cat INT AUTO_INCREMENT PRIMARY KEY,
    nome_cat VARCHAR(50) NOT NULL UNIQUE
);

SELECT * FROM tb_categoria;

CREATE TABLE tb_estado(
	sigla_est CHAR(2) NOT NULL PRIMARY KEY,
    nome_est VARCHAR(50) NOT NULL UNIQUE
);

SELECT * FROM tb_estado;

CREATE TABLE tb_cidade(
	cod_cid INT AUTO_INCREMENT PRIMARY KEY,
    sigla_est CHAR(2),
    nome_cid VARCHAR(100) NOT NULL UNIQUE,

    FOREIGN KEY (sigla_est)
        REFERENCES tb_estado(sigla_est)
);

SELECT * FROM tb_cidade;

CREATE TABLE tb_cliente(
	cod_cli INT AUTO_INCREMENT PRIMARY KEY,
    cod_cid INT,

    nome_cli VARCHAR(100) NOT NULL,

    end_cli VARCHAR(200) NOT NULL,

    renda_cli DECIMAL(10,2) NOT NULL
    DEFAULT 0
    CHECK (renda_cli >= 0),

    genero_cli ENUM('f','m','outros'),

    FOREIGN KEY (cod_cid)
        REFERENCES tb_cidade(cod_cid)
);

SELECT * FROM tb_cliente;

CREATE TABLE tb_conjuge(
	cod_cli INT PRIMARY KEY,

    nome_conj VARCHAR(100) NOT NULL,

    renda_conj DECIMAL(10,2) NOT NULL,

	genero_conj ENUM('f','m','outros'),

    FOREIGN KEY (cod_cli)
        REFERENCES tb_cliente(cod_cli)
);

CREATE TABLE tb_funcionario(
	cod_func INT AUTO_INCREMENT PRIMARY KEY,

    nome_func VARCHAR(100) NOT NULL,

    end_func VARCHAR(200) NOT NULL,

    sal_func DECIMAL(10,2) NOT NULL,

    genero_func ENUM('f','m','outros')
);

CREATE TABLE tb_dependente(
	cod_dep INT AUTO_INCREMENT PRIMARY KEY,

    cod_func INT,

    nome_dep VARCHAR(100) NOT NULL,

    genero_dep ENUM('f','m','outros'),

    FOREIGN KEY (cod_func)
        REFERENCES tb_funcionario(cod_func)
);

CREATE TABLE tb_titulo(
	cod_tit INT AUTO_INCREMENT PRIMARY KEY,

    cod_cat INT,

    cod_grav INT,

    nome_cd VARCHAR(100) NOT NULL,

    val_cd DECIMAL(10,2) NOT NULL,

    qtd_estd INT,

    FOREIGN KEY (cod_cat)
        REFERENCES tb_categoria(cod_cat),

    FOREIGN KEY (cod_grav)
        REFERENCES tb_gravadora(cod_grav)
);

CREATE TABLE tb_pedido(
	num_ped INT AUTO_INCREMENT PRIMARY KEY,

    cod_cli INT,

    cod_func INT,

    data_ped DATETIME,

    val_ped DECIMAL(10,2) NOT NULL,

    FOREIGN KEY (cod_cli)
        REFERENCES tb_cliente(cod_cli),

    FOREIGN KEY (cod_func)
        REFERENCES tb_funcionario(cod_func)
);

CREATE TABLE tb_titulo_pedido(
	num_ped INT,

    cod_tit INT,

    qtd_cd INT NOT NULL
    CHECK (qtd_cd >= 1),

    val_cd DECIMAL(10,2) NOT NULL
    CHECK (val_cd >= 0),

    PRIMARY KEY (num_ped, cod_tit),

    FOREIGN KEY (num_ped)
        REFERENCES tb_pedido(num_ped),

    FOREIGN KEY (cod_tit)
        REFERENCES tb_titulo(cod_tit)
);

CREATE TABLE tb_titulo_artista(
	cod_tit INT,

    cod_art INT,

    PRIMARY KEY (cod_tit, cod_art),

    FOREIGN KEY (cod_tit)
        REFERENCES tb_titulo(cod_tit),

    FOREIGN KEY (cod_art)
        REFERENCES tb_artista(cod_art)
);

