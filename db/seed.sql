INSERT INTO department (id, name)
VALUES (1, "Executive"),
       (2, "Transfiguration"),
       (3, "Charms"),
       (4, "Potions"),
       (5, "History of Magic"),
       (6, "Defence Against the Dark Arts"),
       (7, "Astronomy"),
       (8, "Herbology"),
       (9. "Divination"),
       (10, "Care of Maginal Creatures");

INSERT INTO role (id, title, salary, department_id)
VALUES (1, "Headmaster", 250000, 1),
       (2, "Deputy Headmistress", 150000, 2),
       (3, "Tenure Charms Faculty", 100000, 3),
       (3, "Tenure Potions Faculty", 100000, 4),
       (4, "Adjunct Potions Faculty", 75000, 4),
       (5, "Tenure History Faculty", 0, 5),
       (6, "Adjunct Defense Against the Dark Arts Faculty", 75000, 6),
       (7, "Tenure Astronomy Faculty", 100000, 7),
       (8, "Tenure Herbolody Faculty", 100000, 8),
       (9, "Tenure Diviniation Faculty", 100000, 9),
       (10, "Adjunct Diviniation Faculty", 100000, 9),
       (11, "Adjunct Care of Magical Creatures Faculty", 75000, 10);

INSERT INTO employee (id, first_name, last_name, role_id, manager_id)
VALUES (1, "Albus", "Dumbledore", 1, NULL),
       (2, "Minerva", "McGonagall", 2, 1),
       (3,"Alastor", "Moody",6, 2),
       (4, "Aurora", "Sinistra", 5, 2),
       (5, "Cuthbert", "Binns", 5, 2),
       (6, "Dolores", "Umbridge", 6, NULL),
       (7, "Filius", "Flitwick", 3, 2),
       (8, "Firenze", "Centaur", 10, 2),
       (9, "Gilderoy", "Lockhart", 6, 2),
       (10, "Horace", "Slughorn", 4, 2),
       (11, "Pomona", "Sprout", 8, 2),
       (12, "Quirinus", "Quirell", 6, 2),
       (13, "Remus", "Lupis", 6, 2),
       (14, "Rubeus", "Hagrid", 11, 2),
       (15, "Severus", "Snape", 4, 2),
       (16, "Sybill", "Trelawney", 9, 2);



