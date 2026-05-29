CREATE DATABASE escola_idiomas;
USE escola_idiomas;

CREATE TABLE aluno (
    id_aluno INT PRIMARY KEY AUTO_INCREMENT,
    nome VARCHAR(100) NOT NULL,
    data_nascimento DATE,
    telefone VARCHAR(20),
    email VARCHAR(100) UNIQUE
);

CREATE TABLE professor (
    id_professor INT PRIMARY KEY AUTO_INCREMENT,
    nome VARCHAR(100) NOT NULL,
    especialidade VARCHAR(50),
    email VARCHAR(100) UNIQUE
);

CREATE TABLE curso (
    id_curso INT PRIMARY KEY AUTO_INCREMENT,
    nome VARCHAR(100) NOT NULL,
    idioma VARCHAR(50) NOT NULL,
    nivel VARCHAR(30),
    carga_horaria INT
);

CREATE TABLE turma (
    id_turma INT PRIMARY KEY AUTO_INCREMENT,
    id_curso INT NOT NULL,
    id_professor INT NOT NULL,
    horario VARCHAR(50),
    sala VARCHAR(20),

    FOREIGN KEY (id_curso)
        REFERENCES curso(id_curso),

    FOREIGN KEY (id_professor)
        REFERENCES professor(id_professor)
);

CREATE TABLE matricula (
    id_matricula INT PRIMARY KEY AUTO_INCREMENT,
    id_aluno INT NOT NULL,
    id_turma INT NOT NULL,
    data_matricula DATE,
    status_matricula VARCHAR(20),

    FOREIGN KEY (id_aluno)
        REFERENCES aluno(id_aluno),

    FOREIGN KEY (id_turma)
        REFERENCES turma(id_turma)
);

CREATE TABLE aula (
    id_aula INT PRIMARY KEY AUTO_INCREMENT,
    id_turma INT NOT NULL,
    data_aula DATE,
    conteudo TEXT,

    FOREIGN KEY (id_turma)
        REFERENCES turma(id_turma)
);
