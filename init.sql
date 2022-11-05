-- POSTGRES SQL SCRIPT TO CREATE TABLES AND INSERT DATA
CREATE TABLE IF NOT EXISTS "jogos" (
    "id" serial NOT NULL,
    "mandante" varchar(50) NOT NULL,
    "visitante" varchar(50) NOT NULL,
    "gols_mandante" integer NOT NULL,
    "gols_visitante" integer NOT NULL,
    "data" date NOT NULL,
    "horario" varchar(10) NOT NULL,
    "estadio" varchar(50) NOT NULL,
    PRIMARY KEY ("id")
);

INSERT INTO jogos (mandante, visitante, gols_mandante, gols_visitante, data, horario, estadio) VALUES
('Palmeiras', 'Santos', 1, 4, '2019-05-05', '16:00', 'Allianz Parque'),
('São Paulo', 'Corinthians', 1, 1, '2019-05-05', '16:00', 'Morumbi'),
('Flamengo', 'Vasco', 2, 1, '2019-05-05', '16:00', 'Maracanã'),
('Atlético-MG', 'Cruzeiro', 2, 0, '2019-05-05', '16:00', 'Mineirão'),
('Grêmio', 'Internacional', 1, 1, '2019-05-05', '16:00', 'Arena do Grêmio'),
('Fluminense', 'Botafogo', 1, 0, '2019-05-05', '16:00', 'Maracanã'),
('Bahia', 'Chapecoense', 1, 0, '2019-05-05', '16:00', 'Arena Fonte Nova'),
('Santos', 'Palmeiras', 2, 0, '2019-05-05', '16:00', 'Vila Belmiro'),
('Corinthians', 'São Paulo', 1, 1, '2019-05-05', '16:00', 'Arena Corinthians'),
('Vasco', 'Flamengo', 1, 2, '2019-05-05', '16:00', 'São Januário'),
('Cruzeiro', 'Atlético-MG', 0, 2, '2019-05-05', '16:00', 'Mineirão'),
('Internacional', 'Grêmio', 1, 1, '2019-05-05', '16:00', 'Beira-Rio'),
('Botafogo', 'Fluminense', 0, 1, '2019-05-05', '16:00', 'Nilton Santos'),
('Chapecoense', 'Bahia', 0, 1, '2019-05-05', '16:00', 'Arena Condá'),
('Palmeiras', 'Corinthians', 1, 0, '2019-05-12', '16:00', 'Allianz Parque'),
('São Paulo', 'Santos', 1, 6, '2019-05-12', '16:00', 'Morumbi'),
('Flamengo', 'Cruzeiro', 2, 0, '2019-05-12', '16:00', 'Maracanã'),
('Atlético-MG', 'Vasco', 2, 0, '2019-05-12', '16:00', 'Mineirão'),
('Grêmio', 'Botafogo', 1, 1, '2019-05-12', '16:00', 'Arena do Grêmio'),
('Fluminense', 'Internacional', 1, 0, '2019-05-12', '16:00', 'Maracanã'),
('Bahia', 'Santos', 0, 3, '2019-05-12', '16:00', 'Arena Fonte Nova');
