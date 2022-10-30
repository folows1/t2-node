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
('Palmeiras', 'Santos', 1, 0, '2019-11-10', '16:00', 'Allianz Parque'),
('São Paulo', 'Corinthians', 1, 1, '2019-11-10', '16:00', 'Morumbi'),
('Flamengo', 'Vasco', 2, 1, '2019-11-10', '16:00', 'Maracanã'),
('Botafogo', 'Fluminense', 1, 1, '2019-11-10', '16:00', 'Nilton Santos'),
('Atlético-MG', 'Cruzeiro', 1, 0, '2019-11-10', '16:00', 'Mineirão'),
('Bahia', 'Grêmio', 1, 1, '2019-11-10', '16:00', 'Arena Fonte Nova'),
('Internacional', 'Athletico-PR', 1, 0, '2019-11-10', '16:00', 'Beira-Rio'),
('Fortaleza', 'Ceará', 1, 1, '2019-11-10', '16:00', 'Castelão'),
('Goiás', 'Chapecoense', 1, 0, '2019-11-10', '16:00', 'Serra Dourada'),
('Sport', 'Vitória', 1, 0, '2019-11-10', '16:00', 'Ilha do Retiro');