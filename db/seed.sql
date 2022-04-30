INSERT INTO 
    department ( name)
VALUES 
    ("Executive"),
    ("Transfiguration"),
    ("Charms"),
    ("Potions"),
    ("History of Magic"),
    ("Defence Against the Dark Arts"),
    ("Astronomy"),
    ("Herbology"),
    ("Divination"),
    ("Care of Maginal Creatures");

INSERT INTO 
role (title, salary, department_id)
VALUES 
    ("Headmaster", 250000, 1),
    ("Deputy Headmistress", 150000, 2),
    ("Tenure Faculty", 100000, 3),
    ("Adjunct Faculty", 75000, 4);


INSERT INTO 
    employee (first_name, last_name, role_id, manager_id)
VALUES 
    ( "Albus", "Dumbledore", 1, NULL),
    ("Minerva", "McGonagall", 2, 1),
    ("Alastor", "Moody",4, 2),
    ("Aurora", "Sinistra", 3, 2),
    ("Cuthbert", "Binns", 3, 2),
    ("Dolores", "Umbridge", 4, NULL),
    ("Filius", "Flitwick", 3, 2),
    ("Firenze", "Centaur", 4, 2),
    ("Gilderoy", "Lockhart", 4, 2),
    ("Horace", "Slughorn", 4, 2),
    ("Pomona", "Sprout", 3, 2),
    ("Quirinus", "Quirell", 4, 2),
    ("Remus", "Lupis", 4, 2),
    ("Rubeus", "Hagrid", 4, 2),
    ("Severus", "Snape", 3, 2),
    ("Sybill", "Trelawney", 3, 2);



