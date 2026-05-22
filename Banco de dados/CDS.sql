create database DB_CDS;
use DB_CDS;

create table tb_artista(
	cod_art int auto_increment  primary key,
    nome_art varchar(100) not null
);

select * from tb_artista;

create table tb_gravadora(
	cod_grav int auto_increment  primary key,
    nome_grav varchar(50) not null
);

select * from tb_gravadora;

create table tb_categoria(
	cod_cat int auto_increment  primary key,
    nome_cat varchar(50) not null
);

select * from tb_categoria;

create table tb_estado(
	sigla_est char(2) not null primary key,
    nome_est varchar(50) not null
);

select * from tb_estado;

create table tb_cidade(
	cod_cid int auto_increment primary key,
    sigla_est int,
    nome_cid varchar(100) not null
);

select * from tb_cidade;
	
create table tb_cliente(
	cod_cli int auto_increment primary key,
    cod_cid INT,
    nome_cli VARCHAR(100) NOT NULL,
    end_cli VARCHAR(200) NOT NULL,
    renda_cli DECIMAL(10,2) NOT NULL,
    genero_cli ENUM('f','m','outros')
);

select * from tb_cliente;

CREATE TABLE tb_conjuge(
	cod_cli INT PRIMARY KEY,
    nome_conj VARCHAR(100) NOT NULL,
    renda_conj DECIMAL(10,2) NOT NULL,
	genero_conj ENUM('f','m','outros')
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
    genero_sep ENUM('f','m','outros')
);

CREATE TABLE tb_titulo(
	cod_tit INT AUTO_INCREMENT PRIMARY KEY,
    cod_cat INT,
    cod_grav INT,
    nome_cd VARCHAR(100) NOT NULL,
    val_cd DECIMAL(10,2) NOT NULL,
    qtd_estd INT
);

CREATE TABLE tb_pedido(
	num_ped INT AUTO_INCREMENT PRIMARY KEY,
    cod_cli INT,
    cod_func INT,
    data_ped DATETIME,
    val_ped DECIMAL(10,2) NOT NULL
);

CREATE TABLE tb_titulo_pedido(
	num_ped INT,
    cod_tit INT,
    qtd_cd INT NOT NULL CHECK (qtd_cd >= 1),
    val_cd DECIMAL(10,2) NOT NULL CHECK (val_cd >=0),
    PRIMARY KEY (num_ped, cod_tit)
);

CREATE TABLE tb_titulo_artista(
	cod_tit INT,
    cod_art INT
);
