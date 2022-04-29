INSERT INTO department (name)
VALUES ("Executive"),
       ("Transfiguration"),
       ("Charms"),
       ("Potions"),
       ("History of Magic"),
       ("Defence Against the Dark Arts"),
       ("Astronomy"),
       ("Herbology"),
       ("Divination"),
       ("Care of Maginal Creatures");

INSERT INTO role (title, salary, department_id)
VALUES ("Headmaster", 250000, 1),
       ("Deputy Headmistress", 150000, 2),
       ("Tenure Charms Faculty", 100000, 3),
       ("Tenure Potions Faculty", 100000, 4),
       ("Adjunct Potions Faculty", 75000, 4),
       ("Tenure History Faculty", 0, 5),
       ("Adjunct Defense Against the Dark Arts Faculty", 75000, 6),
       ("Tenure Astronomy Faculty", 100000, 7),
       ("Tenure Herbolody Faculty", 100000, 8),
       ("Tenure Diviniation Faculty", 100000, 9),
       ("Adjunct Diviniation Faculty", 100000, 9),
       ("Adjunct Care of Magical Creatures Faculty", 75000, 10);

INSERT INTO employee (first_name, last_name, role_id, manager_id)
VALUES ("Albus", "Dumbledore", 1, NULL),
       ("Minerva", "McGonagall", 2, 1),
       ("Alastor", "Moody",6, 2),
       ("Aurora", "Sinistra", 5, 2),
       ("Cuthbert", "Binns", 5, 2),
       ("Dolores", "Umbridge", 6, NULL),
       ("Filius", "Flitwick", 3, 2),
       ("Firenze", "Centaur", 10, 2),
       ("Gilderoy", "Lockhart", 6, 2),
       ("Horace", "Slughorn", 4, 2),
       ("Pomona", "Sprout", 8, 2),
       ("Quirinus", "Quirell", 6, 2),
       ("Remus", "Lupis", 6, 2),
       ("Rubeus", "Hagrid", 11, 2),
       ("Severus", "Snape", 4, 2),
       ("Sybill", "Trelawney", 9, 2);



