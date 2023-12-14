-- Create and use the database
DROP DATABASE IF EXISTS restaurantapp;
CREATE DATABASE restaurantapp;
USE restaurantapp;

-- Create UserLevels table
CREATE TABLE UserLevels (
  user_level_id INT NOT NULL PRIMARY KEY AUTO_INCREMENT,
  level_name VARCHAR(255) NOT NULL
);

-- Create Users table
CREATE TABLE Users (
  user_id INT NOT NULL PRIMARY KEY AUTO_INCREMENT,
  username VARCHAR(255) NOT NULL UNIQUE,
  -- fname VARCHAR(255) NOT NULL,
  -- lname VARCHAR(255) NOT NULL,
  password VARCHAR(255) NOT NULL,
  email VARCHAR(255) NOT NULL UNIQUE,
  user_level_id INT NOT NULL,
  FOREIGN KEY (user_level_id) REFERENCES UserLevels(user_level_id)
);

CREATE TABLE Menus (
  menu_id INT AUTO_INCREMENT PRIMARY KEY,
  name VARCHAR(255) NOT NULL,
  description TEXT,
  diet VARCHAR(50),
  week_number INT,
  day_of_week INT
);

-- Insert menu items for 4 weeks

INSERT INTO Menus (name, description, diet, week_number, day_of_week) VALUES
  -- Monday
  ('Grilled Chicken Salad', 'Fresh greens with grilled chicken breast', 'Lactose-Free, Gluten-Free', 1, 1),
  ('Vegetarian Pasta', 'Pasta with seasonal vegetables and tomato sauce (contains gluten)', 'Lactose-Free', 1, 1),
  -- Tuesday
  ('Salmon Quinoa Bowl', 'Quinoa bowl with grilled salmon and vegetables', 'Lactose-Free, Gluten-Free', 1, 2),
  ('Margherita Pizza', 'Classic pizza with tomato, mozzarella, and basil (contains gluten)', 'Lactose-Free', 1, 2),
  -- Wednesday
  ('Turkey Avocado Wrap', 'Whole wheat wrap with turkey, avocado, and veggies (contains gluten)', 'Lactose-Free', 1, 3),
  ('Vegetable Stir-Fry', 'Stir-fried vegetables with tofu and soy sauce', 'Lactose-Free, Gluten-Free', 1, 3),
  -- Thursday
  ('Quinoa Stuffed Bell Peppers', 'Bell peppers stuffed with quinoa and black beans', 'Lactose-Free, Gluten-Free', 1, 4),
  ('Caprese Panini', 'Panini with tomato, mozzarella, and basil (contains gluten)', 'Lactose-Free', 1, 4),
  -- Friday
  ('Shrimp and Avocado Salad', 'Salad with grilled shrimp, avocado, and citrus dressing', 'Lactose-Free, Gluten-Free', 1, 5),
  ('Mushroom Risotto', 'Creamy risotto with mushrooms and Parmesan cheese (contains gluten)', 'Lactose-Free', 1, 5);

-- Week 2
INSERT INTO Menus (name, description, diet, week_number, day_of_week) VALUES
  -- Monday
  ('Teriyaki Chicken Bowl', 'Bowl with teriyaki chicken, rice, and steamed broccoli', 'Lactose-Free', 2, 1),
  ('Mushroom Risotto', 'Creamy risotto with assorted mushrooms and Parmesan cheese (contains lactose)', 'None', 2, 1),
  -- Tuesday
  ('Caesar Salad with Grilled Shrimp', 'Classic Caesar salad with grilled shrimp', 'Lactose-Free', 2, 2),
  ('Vegetable Lasagna', 'Layers of pasta, marinara sauce, and mixed vegetables (contains lactose)', 'Vegan', 2, 2),
  -- Wednesday
  ('BBQ Chicken Wrap', 'Grilled BBQ chicken wrap with coleslaw and chipotle mayo', 'Lactose-Free', 2, 3),
  ('Spinach and Feta Stuffed Peppers', 'Bell peppers stuffed with spinach, feta, and quinoa', 'Lactose-Free', 2, 3),
  -- Thursday
  ('Salmon and Asparagus Sheet Pan Dinner', 'Salmon fillets with roasted asparagus and lemon', 'Lactose-Free', 2, 4),
  ('Margherita Flatbread', 'Flatbread topped with tomato, mozzarella, and fresh basil (contains lactose)', 'None', 2, 4),
  -- Friday
  ('Shrimp Avocado Sushi Bowl', 'Sushi bowl with shrimp, avocado, rice, and soy sauce', 'Lactose-Free', 2, 5),
  ('Vegetarian Tacos', 'Tacos with black beans, corn, tomatoes, and guacamole', 'Lactose-Free', 2, 5);


-- Week 3
INSERT INTO Menus (name, description, diet, week_number, day_of_week) VALUES
  -- Monday
  ('Grilled Salmon Salad', 'Fresh salad with grilled salmon and citrus dressing', 'Lactose-Free, Gluten-Free', 3, 1),
  ('Quinoa and Black Bean Bowl', 'Bowl with quinoa, black beans, and assorted veggies', 'Lactose-Free, Gluten-Free, Vegan', 3, 1),
  -- Tuesday
  ('Caprese Salad Wrap', 'Wrap with caprese salad and balsamic glaze (contains gluten)', 'Lactose-Free, Vegan', 3, 2),
  ('Chickpea and Vegetable Curry', 'Chickpea curry with mixed vegetables', 'Lactose-Free, Gluten-Free, Vegan', 3, 2),
  -- Wednesday
  ('Grilled Chicken Caesar Salad', 'Classic Caesar salad with grilled chicken', 'Lactose-Free, Gluten-Free', 3, 3),
  ('Vegetable and Tofu Stir-Fry', 'Stir-fried veggies with tofu in soy ginger sauce', 'Lactose-Free, Gluten-Free, Vegan', 3, 3),
  -- Thursday
  ('Baked Cod with Roasted Vegetables', 'Baked cod fillet with seasonal roasted vegetables', 'Lactose-Free, Gluten-Free', 3, 4),
  ('Mushroom and Spinach Quesadilla', 'Quesadilla with mushrooms, spinach, and cheese (contains gluten)', 'Lactose-Free', 3, 4),
  -- Friday
  ('Shrimp and Mango Salad', 'Salad with grilled shrimp, fresh mango, and cilantro-lime dressing', 'Lactose-Free, Gluten-Free, Vegan', 3, 5),
  ('Eggplant Parmesan', 'Baked eggplant with marinara sauce and melted mozzarella (contains gluten)', 'Lactose-Free', 3, 5);

-- Week 4
INSERT INTO Menus (name, description, diet, week_number, day_of_week) VALUES
  -- Monday
  ('Mediterranean Chickpea Salad', 'Chickpea salad with tomatoes, cucumber, and feta cheese (contains lactose)', 'Lactose-Free', 4, 1),
  ('Vegetable Stir-Fry with Tofu', 'Stir-fried vegetables with tofu in teriyaki sauce', 'Lactose-Free, Gluten-Free, Vegan', 4, 1),
  -- Tuesday
  ('Avocado and Black Bean Wrap', 'Wrap with avocado, black beans, and corn salsa (contains gluten)', 'Lactose-Free', 4, 2),
  ('Quinoa Salad with Roasted Vegetables', 'Quinoa salad with seasonal roasted vegetables', 'Lactose-Free, Gluten-Free, Vegan', 4, 2),
  -- Wednesday
  ('Baked Zucchini Boats', 'Zucchini boats filled with quinoa, tomatoes, and basil (contains gluten)', 'Lactose-Free', 4, 3),
  ('Chickpea and Spinach Curry', 'Chickpea curry with spinach and aromatic spices', 'Lactose-Free, Gluten-Free, Vegan', 4, 3),
  -- Thursday
  ('Grilled Portobello Mushrooms', 'Grilled portobello mushrooms with balsamic glaze', 'Lactose-Free, Gluten-Free, Vegan', 4, 4),
  ('Tomato and Basil Risotto', 'Creamy risotto with tomatoes and fresh basil (contains lactose)', 'Lactose-Free', 4, 4),
  -- Friday
  ('Asian Noodle Salad with Tofu', 'Asian-inspired noodle salad with tofu and sesame dressing', 'Lactose-Free, Gluten-Free, Vegan', 4, 5),
  ('Vegetarian Sushi Rolls', 'Sushi rolls with avocado, cucumber, and pickled radish (contains gluten)', 'Lactose-Free', 4, 5);


-- Menu Suomeksi

-- Viikko 1
INSERT INTO Menus (name, description, diet, week_number, day_of_week) VALUES
  -- Maanantai
  ('Grillattu Kana Salaatti', 'Tuoreita vihanneksia grillatun kanan rinnan kera', 'Laktoositon, Gluteeniton', 1, 1),
  ('Vegetaarinen Pasta', 'Pasta sesonkivihanneksilla ja tomaattikastikkeella (sisältää gluteenia)', 'Laktoositon', 1, 1),
  -- Tiistai
  ('Lohta ja Kvinoakulhoa', 'Kvinoakulho grillatulla lohella ja vihanneksilla', 'Laktoositon, Gluteeniton', 1, 2),
  ('Margherita Pizza', 'Klassinen pizza tomaatilla, mozzarellalla ja basilikalla (sisältää gluteenia)', 'Laktoositon', 1, 2),
  -- Keskiviikko
  ('Kalkkuna Avokado Wrap', 'Kokojyväwrappi kalkkunalla, avokadolla ja vihanneksilla (sisältää gluteenia)', 'Laktoositon', 1, 3),
  ('Vihanneswokki', 'Wokatut vihannekset tofun ja soijakastikkeen kera', 'Laktoositon, Gluteeniton', 1, 3),
  -- Torstai
  ('Kvinoalla Täytetyt Paprikat', 'Paprikat täytettyinä kvinoalla ja mustilla pavuilla', 'Laktoositon, Gluteeniton', 1, 4),
  ('Caprese Panini', 'Panini tomaatilla, mozzarellalla ja basilikalla (sisältää gluteenia)', 'Laktoositon', 1, 4),
  -- Perjantai
  ('Katkarapu Avokado Salaatti', 'Salaatti grillatuilla katkaravuilla, avokadolla ja sitruskastikkeella', 'Laktoositon, Gluteeniton', 1, 5),
  ('Sienirisotto', 'Kermainen risotto sienillä ja parmesaanijuustolla (sisältää gluteenia)', 'Laktoositon', 1, 5);


-- Viikko 2
INSERT INTO Menus (name, description, diet, week_number, day_of_week) VALUES
  -- Maanantai
  ('Teriyaki Kana Kulho', 'Kulho teriyaki kanaa, riisiä ja höyrytettyä parsakaalia', 'Laktoositon', 2, 1),
  ('Sienirisotto', 'Kermainen risotto sienillä ja parmesaanijuustolla (sisältää laktoosia)', 'Ei rajoitteita', 2, 1),
  -- Tiistai
  ('Caesar Salaatti Grillikatkaravuilla', 'Klassinen Caesar salaatti grillikatkaravuilla', 'Laktoositon', 2, 2),
  ('Vihannes Lasagne', 'Lasagnea kerroksittain pastaa, tomaattikastiketta ja sekoitettuja vihanneksia (sisältää laktoosia)', 'Vegaaninen', 2, 2),
  -- Keskiviikko
  ('BBQ Kana Wrap', 'Grillattu BBQ kana wrap coleslawn ja chipotle majoneesin kera', 'Laktoositon', 2, 3),
  ('Pinaatti ja Feta Täytetyt Paprikat', 'Paprikat täytettyinä pinaatilla, fetalla ja kvinoalla', 'Laktoositon', 2, 3),
  -- Torstai
  ('Lohta ja Parsakaalia Peltiruoassa', 'Peltiruoka lohifileistä ja paahdetuista parsakaaleista', 'Laktoositon', 2, 4),
  ('Margherita Litaleipä', 'Litaleipä tomaatilla, mozzarellalla ja tuoreella basilikalla (sisältää laktoosia)', 'Ei rajoitteita', 2, 4),
  -- Perjantai
  ('Katkarapu Avokado Sushikulho', 'Sushikulho katkaravuilla, avokadolla, riisillä ja soijakastikkeella', 'Laktoositon', 2, 5),
  ('Vegaanit Tacot', 'Tacot mustilla pavuilla, maissilla, tomaateilla ja guacamolella', 'Laktoositon', 2, 5);


-- Viikko 3
INSERT INTO Menus (name, description, diet, week_number, day_of_week) VALUES
  -- Maanantai
  ('Grillattu Lohisalaatti', 'Raikas salaatti grillatulla lohella ja sitruskastikkeella', 'Laktoositon, Gluteeniton', 3, 1),
  ('Quinoa ja Mustapapukulho', 'Kulho quinoaa, mustapapuja ja sekoitettuja vihanneksia', 'Laktoositon, Gluteeniton, Vegaaninen', 3, 1),
  -- Tiistai
  ('Caprese Salaatti Wrap', 'Wrap caprese-salaatilla ja balsamiviiniglasuurilla (sisältää gluteenia)', 'Laktoositon, Vegaaninen', 3, 2),
  ('Kikherne- ja Kasviscurry', 'Kikherne-curry sekoitetuilla vihanneksilla', 'Laktoositon, Gluteeniton, Vegaaninen', 3, 2),
  -- Keskiviikko
  ('Grillattu Kana Caesar Salaatti', 'Klassinen Caesar salaatti grillatulla kanalla', 'Laktoositon, Gluteeniton', 3, 3),
  ('Vihannes- ja Tofuwokki', 'Wokatut vihannekset tofun ja soijakastikkeen kera', 'Laktoositon, Gluteeniton, Vegaaninen', 3, 3),
  -- Torstai
  ('Uunissa paistettu turska ja paahdetut vihannekset', 'Uunissa paistettu turskan filee kauden paahdetuilla vihanneksilla', 'Laktoositon, Gluteeniton', 3, 4),
  ('Sieni- ja Pinaattiquesadilla', 'Quesadilla sienillä, pinaatilla ja juustolla (sisältää gluteenia)', 'Laktoositon', 3, 4),
  -- Perjantai
  ('Katkarapu ja Mango Salaatti', 'Salaatti grillatuilla katkaravuilla, tuoreella mangolla ja korianteri-limekastikkeella', 'Laktoositon, Gluteeniton, Vegaaninen', 3, 5),
  ('Melanzane Parmigiana', 'Uunissa paistettu munakoiso tomaattikastikkeella ja sulaneella mozzarellalla (sisältää gluteenia)', 'Laktoositon', 3, 5);

-- Viikko 4
INSERT INTO Menus (name, description, diet, week_number, day_of_week) VALUES
  -- Maanantai
  ('Välimerellinen Kikherne Salaatti', 'Kikherne salaatti tomaateilla, kurkulla ja fetajuustolla (sisältää laktoosia)', 'None', 4, 1),
  ('Vihanneswokki Tofulla', 'Wokatut vihannekset tofun ja teriyaki-kastikkeen kera', 'Laktoositon, Gluteeniton, Vegaaninen', 4, 1),
  -- Tiistai
  ('Avokado ja Mustapapu Wrap', 'Wrap avokadolla, mustapavuilla ja maissisalsalla (sisältää gluteenia)', 'Laktoositon', 4, 2),
  ('Quinoasalaatti Paahdetuilla Vihanneksilla', 'Quinoasalaatti kauden paahdetuilla vihanneksilla', 'Laktoositon, Gluteeniton, Vegaaninen', 4, 2),
  -- Keskiviikko
  ('Uunissa Paistetut Kesäkurpitsaveneet', 'Kesäkurpitsaveneet täytettyinä kvinoalla, tomaateilla ja basilikalla (sisältää gluteenia)', 'Laktoositon', 4, 3),
  ('Kikherne- ja Pinaatticurry', 'Kikherne-curry pinaatin ja aromikkaiden mausteiden kera', 'Laktoositon, Gluteeniton, Vegaaninen', 4, 3),
  -- Torstai
  ('Grillatut Portobello-sienet', 'Grillatut portobello-sienet balsamiviiniglasuurilla', 'Laktoositon, Gluteeniton, Vegaaninen', 4, 4),
  ('Tomaatti ja Basilika Risotto', 'Kermainen risotto tomaateilla ja tuoreella basilikalla (sisältää laktoosia)', 'None', 4, 4),
  -- Perjantai
  ('Aasialainen Nuudelisalaatti Tofulla', 'Aasialaishenkinen nuudelisalaatti tofulla ja seesamikastikkeella', 'Laktoositon, Gluteeniton, Vegaaninen', 4, 5),
  ('Vegetaariset Sushirullat', 'Sushirullat avokadolla, kurkulla ja etikkakurkulla (sisältää gluteenia)', 'Laktoositon', 4, 5);

-- Week 49
INSERT INTO Menus (name, description, diet, week_number, day_of_week) VALUES
('Mediterranean Chickpea Salad', 'Chickpea salad with tomatoes, cucumber, and feta cheese (contains lactose)', 'Lactose-Free', 49, 1),
('Vegetable Stir-Fry with Tofu', 'Stir-fried vegetables with tofu in teriyaki sauce', 'Lactose-Free, Gluten-Free, Vegan', 49, 1),
('Avocado and Black Bean Wrap', 'Wrap with avocado, black beans, and corn salsa (contains gluten)', 'Lactose-Free', 49, 2),
('Quinoa Salad with Roasted Vegetables', 'Quinoa salad with seasonal roasted vegetables', 'Lactose-Free, Gluten-Free, Vegan', 49, 2),
('Baked Zucchini Boats', 'Zucchini boats filled with quinoa, tomatoes, and basil (contains gluten)', 'Lactose-Free', 49, 3),
('Chickpea and Spinach Curry', 'Chickpea curry with spinach and aromatic spices', 'Lactose-Free, Gluten-Free, Vegan', 49, 3),
('Grilled Portobello Mushrooms', 'Grilled portobello mushrooms with balsamic glaze', 'Lactose-Free, Gluten-Free, Vegan', 49, 4),
('Tomato and Basil Risotto', 'Creamy risotto with tomatoes and fresh basil (contains lactose)', 'Lactose-Free', 49, 4),
('Asian Noodle Salad with Tofu', 'Asian-inspired noodle salad with tofu and sesame dressing', 'Lactose-Free, Gluten-Free, Vegan', 49, 5),
('Vegetarian Sushi Rolls', 'Sushi rolls with avocado, cucumber, and pickled radish (contains gluten)', 'Lactose-Free', 49, 5);

-- Week 50
INSERT INTO Menus (name, description, diet, week_number, day_of_week) VALUES
('Grilled Chicken Salad', 'Fresh greens with grilled chicken breast', 'Lactose-Free, Gluten-Free', 50, 1),
('Vegetarian Pasta', 'Pasta with seasonal vegetables and tomato sauce (contains gluten)', 'Lactose-Free', 50, 1),
('Salmon Quinoa Bowl', 'Quinoa bowl with grilled salmon and vegetables', 'Lactose-Free, Gluten-Free', 50, 2),
('Margherita Pizza', 'Classic pizza with tomato, mozzarella, and basil (contains gluten)', 'Lactose-Free', 50, 2),
('Turkey Avocado Wrap', 'Whole wheat wrap with turkey, avocado, and veggies (contains gluten)', 'Lactose-Free', 50, 3),
('Vegetable Stir-Fry', 'Stir-fried vegetables with tofu and soy sauce', 'Lactose-Free, Gluten-Free', 50, 3),
('Quinoa Stuffed Bell Peppers', 'Bell peppers stuffed with quinoa and black beans', 'Lactose-Free, Gluten-Free', 50, 4),
('Caprese Panini', 'Panini with tomato, mozzarella, and basil (contains gluten)', 'Lactose-Free', 50, 4),
('Shrimp and Avocado Salad', 'Salad with grilled shrimp, avocado, and citrus dressing', 'Lactose-Free, Gluten-Free', 50, 5),
('Mushroom Risotto', 'Creamy risotto with mushrooms and Parmesan cheese (contains gluten)', 'Lactose-Free', 50, 5);

-- Week 51
INSERT INTO Menus (name, description, diet, week_number, day_of_week) VALUES
('Teriyaki Chicken Bowl', 'Bowl with teriyaki chicken, rice, and steamed broccoli', 'Lactose-Free', 51, 1),
('Mushroom Risotto', 'Creamy risotto with assorted mushrooms and Parmesan cheese (contains lactose)', 'None', 51, 1),
('Caesar Salad with Grilled Shrimp', 'Classic Caesar salad with grilled shrimp', 'Lactose-Free', 51, 2),
('Vegetable Lasagna', 'Layers of pasta, marinara sauce, and mixed vegetables (contains lactose)', 'Vegan', 51, 2),
('BBQ Chicken Wrap', 'Grilled BBQ chicken wrap with coleslaw and chipotle mayo', 'Lactose-Free', 51, 3),
('Spinach and Feta Stuffed Peppers', 'Bell peppers stuffed with spinach, feta, and quinoa', 'Lactose-Free', 51, 3),
('Salmon and Asparagus Sheet Pan Dinner', 'Salmon fillets with roasted asparagus and lemon', 'Lactose-Free', 51, 4),
('Margherita Flatbread', 'Flatbread topped with tomato, mozzarella, and fresh basil (contains lactose)', 'None', 51, 4),
('Shrimp Avocado Sushi Bowl', 'Sushi bowl with shrimp, avocado, rice, and soy sauce', 'Lactose-Free', 51, 5),
('Vegetarian Tacos', 'Tacos with black beans, corn, tomatoes, and guacamole', 'Lactose-Free', 51, 5);

-- Week 52
INSERT INTO Menus (name, description, diet, week_number, day_of_week) VALUES
('Grilled Salmon Salad', 'Fresh salad with grilled salmon and citrus dressing', 'Lactose-Free, Gluten-Free', 52, 1),
('Quinoa and Black Bean Bowl', 'Bowl with quinoa, black beans, and assorted veggies', 'Lactose-Free, Gluten-Free, Vegan', 52, 1),
('Caprese Salad Wrap', 'Wrap with caprese salad and balsamic glaze (contains gluten)', 'Lactose-Free, Vegan', 52, 2),
('Chickpea and Vegetable Curry', 'Chickpea curry with mixed vegetables', 'Lactose-Free, Gluten-Free, Vegan', 52, 2),
('Grilled Chicken Caesar Salad', 'Classic Caesar salad with grilled chicken', 'Lactose-Free, Gluten-Free', 52, 3),
('Vegetable and Tofu Stir-Fry', 'Stir-fried veggies with tofu in soy ginger sauce', 'Lactose-Free, Gluten-Free, Vegan', 52, 3),
('Baked Cod with Roasted Vegetables', 'Baked cod fillet with seasonal roasted vegetables', 'Lactose-Free, Gluten-Free', 52, 4),
('Mushroom and Spinach Quesadilla', 'Quesadilla with mushrooms, spinach, and cheese (contains gluten)', 'Lactose-Free', 52, 4),
('Shrimp and Mango Salad', 'Salad with grilled shrimp, fresh mango, and cilantro-lime dressing', 'Lactose-Free, Gluten-Free, Vegan', 52, 5),
('Eggplant Parmesan', 'Baked eggplant with marinara sauce and melted mozzarella (contains gluten)', 'Lactose-Free', 52, 5);
