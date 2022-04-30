INSERT INTO 
    department (id, name)
VALUES 
    (1, "Executive"),
    (2, "Transfiguration"),
    (3, "Charms"),
    (4, "Potions"),
    (5, "History of Magic"),
    (6, "Defence Against the Dark Arts"),
    (7, "Astronomy"),
    (8, "Herbology"),
    (9, "Divination"),
    (10,"Care of Maginal Creatures");

INSERT INTO 
role (id, title, salary, department_id)
VALUES 
    (1, "Headmaster", 250000, 1),
    (2, "Deputy Headmistress", 150000, 2),
    (3, "Tenure Faculty", 100000, 3),
    (4, "Adjunct Faculty", 75000, 4);


INSERT INTO 
    employee (id, first_name, last_name, role_id, manager_id)
VALUES 
    (1, "Albus", "Dumbledore", 1, NULL),
    (2, "Minerva", "McGonagall", 2, 1),
    (3, "Alastor", "Moody",4, 2),
    (4, "Aurora", "Sinistra", 3, 2),
    (5, "Cuthbert", "Binns", 3, 2),
    (6, "Dolores", "Umbridge", 4, NULL),
    (7, "Filius", "Flitwick", 3, 2),
    (8, "Firenze", "Centaur", 4, 2),
    (9, "Gilderoy", "Lockhart", 4, 2),
    (10, "Horace", "Slughorn", 4, 2),
    (11, "Pomona", "Sprout", 3, 2),
    (12, "Quirinus", "Quirell", 4, 2),
    (13, "Remus", "Lupis", 4, 2),
    (14, "Rubeus", "Hagrid", 4, 2),
    (15, "Severus", "Snape", 3, 2),
    (16, "Sybill", "Trelawney", 3, 2);



