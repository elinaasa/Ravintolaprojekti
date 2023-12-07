CREATE DATABASE IF NOT EXISTS restaurant_menu;

-- Use the created database
USE restaurant_menu;

-- Create a table for menu items
CREATE TABLE IF NOT EXISTS menu_items (
  id INT AUTO_INCREMENT PRIMARY KEY,
  name VARCHAR(255) NOT NULL,
  description TEXT,
  diet VARCHAR(50),
  week_number INT,
  day_of_week VARCHAR(50)
);

-- Insert menu items for 4 weeks

INSERT INTO menu_items (name, description, diet, week_number, day_of_week) VALUES
  -- Monday
  ('Grilled Chicken Salad', 'Fresh greens with grilled chicken breast', 'Lactose-Free, Gluten-Free', 1, Monday),
  ('Vegetarian Pasta', 'Pasta with seasonal vegetables and tomato sauce (contains gluten)', 'Lactose-Free', 1, Monday),
  -- Tuesday
  ('Salmon Quinoa Bowl', 'Quinoa bowl with grilled salmon and vegetables', 'Lactose-Free, Gluten-Free', 1, Tuesday),
  ('Margherita Pizza', 'Classic pizza with tomato, mozzarella, and basil (contains gluten)', 'Lactose-Free', 1, Tuesday),
  -- Wednesday
  ('Turkey Avocado Wrap', 'Whole wheat wrap with turkey, avocado, and veggies (contains gluten)', 'Lactose-Free', 1, Wednesday),
  ('Vegetable Stir-Fry', 'Stir-fried vegetables with tofu and soy sauce', 'Lactose-Free, Gluten-Free', 1, Wednesday),
  -- Thursday
  ('Quinoa Stuffed Bell Peppers', 'Bell peppers stuffed with quinoa and black beans', 'Lactose-Free, Gluten-Free', 1, Thursday),
  ('Caprese Panini', 'Panini with tomato, mozzarella, and basil (contains gluten)', 'Lactose-Free', 1, Thursday),
  -- Friday
  ('Shrimp and Avocado Salad', 'Salad with grilled shrimp, avocado, and citrus dressing', 'Lactose-Free, Gluten-Free', 1, Friday),
  ('Mushroom Risotto', 'Creamy risotto with mushrooms and Parmesan cheese (contains gluten)', 'Lactose-Free', 1, Friday);

-- Week 2
INSERT INTO menu_items (name, description, diet, week_number, day_of_week) VALUES
  -- Monday
  ('Teriyaki Chicken Bowl', 'Bowl with teriyaki chicken, rice, and steamed broccoli', 'Lactose-Free', 2, Monday),
  ('Mushroom Risotto', 'Creamy risotto with assorted mushrooms and Parmesan cheese (contains lactose)', 'None', 2, Monday),
  -- Tuesday
  ('Caesar Salad with Grilled Shrimp', 'Classic Caesar salad with grilled shrimp', 'Lactose-Free', 2, Tuesday),
  ('Vegetable Lasagna', 'Layers of pasta, marinara sauce, and mixed vegetables (contains lactose)', 'Vegan', 2, Tuesday),
  -- Wednesday
  ('BBQ Chicken Wrap', 'Grilled BBQ chicken wrap with coleslaw and chipotle mayo', 'Lactose-Free', 2, Wednesday),
  ('Spinach and Feta Stuffed Peppers', 'Bell peppers stuffed with spinach, feta, and quinoa', 'Lactose-Free', 2, Wdnesday),
  -- Thursday
  ('Salmon and Asparagus Sheet Pan Dinner', 'Salmon fillets with roasted asparagus and lemon', 'Lactose-Free', 2, Thursday),
  ('Margherita Flatbread', 'Flatbread topped with tomato, mozzarella, and fresh basil (contains lactose)', 'None', 2, Thursday),
  -- Friday
  ('Shrimp Avocado Sushi Bowl', 'Sushi bowl with shrimp, avocado, rice, and soy sauce', 'Lactose-Free', 2, Friday),
  ('Vegetarian Tacos', 'Tacos with black beans, corn, tomatoes, and guacamole', 'Lactose-Free', 2, Friday);


-- Week 3
INSERT INTO menu_items (name, description, diet, week_number, day_of_week) VALUES
  -- Monday
  ('Grilled Salmon Salad', 'Fresh salad with grilled salmon and citrus dressing', 'Lactose-Free, Gluten-Free', 3, Monday),
  ('Quinoa and Black Bean Bowl', 'Bowl with quinoa, black beans, and assorted veggies', 'Lactose-Free, Gluten-Free, Vegan', 3, Monday),
  -- Tuesday
  ('Caprese Salad Wrap', 'Wrap with caprese salad and balsamic glaze (contains gluten)', 'Lactose-Free, Vegan', 3, Tuesday),
  ('Chickpea and Vegetable Curry', 'Chickpea curry with mixed vegetables', 'Lactose-Free, Gluten-Free, Vegan', 3, Tuesday),
  -- Wednesday
  ('Grilled Chicken Caesar Salad', 'Classic Caesar salad with grilled chicken', 'Lactose-Free, Gluten-Free', 3, Wednesday),
  ('Vegetable and Tofu Stir-Fry', 'Stir-fried veggies with tofu in soy ginger sauce', 'Lactose-Free, Gluten-Free, Vegan', 3, Wednesday),
  -- Thursday
  ('Baked Cod with Roasted Vegetables', 'Baked cod fillet with seasonal roasted vegetables', 'Lactose-Free, Gluten-Free', 3, Thursday),
  ('Mushroom and Spinach Quesadilla', 'Quesadilla with mushrooms, spinach, and cheese (contains gluten)', 'Lactose-Free', 3, Thursday),
  -- Friday
  ('Shrimp and Mango Salad', 'Salad with grilled shrimp, fresh mango, and cilantro-lime dressing', 'Lactose-Free, Gluten-Free, Vegan', 3, Friday),
  ('Eggplant Parmesan', 'Baked eggplant with marinara sauce and melted mozzarella (contains gluten)', 'Lactose-Free', 3, Friday);

-- Week 4
INSERT INTO menu_items (name, description, diet, week_number, day_of_week) VALUES
  -- Monday
  ('Mediterranean Chickpea Salad', 'Chickpea salad with tomatoes, cucumber, and feta cheese (contains lactose)', 'Lactose-Free', 4, Monday),
  ('Vegetable Stir-Fry with Tofu', 'Stir-fried vegetables with tofu in teriyaki sauce', 'Lactose-Free, Gluten-Free, Vegan', 4, Monday),
  -- Tuesday
  ('Avocado and Black Bean Wrap', 'Wrap with avocado, black beans, and corn salsa (contains gluten)', 'Lactose-Free', 4, Tuesday),
  ('Quinoa Salad with Roasted Vegetables', 'Quinoa salad with seasonal roasted vegetables', 'Lactose-Free, Gluten-Free, Vegan', 4, Tuesday),
  -- Wednesday
  ('Baked Zucchini Boats', 'Zucchini boats filled with quinoa, tomatoes, and basil (contains gluten)', 'Lactose-Free', 4, Wednesday),
  ('Chickpea and Spinach Curry', 'Chickpea curry with spinach and aromatic spices', 'Lactose-Free, Gluten-Free, Vegan', 4, Wednesday),
  -- Thursday
  ('Grilled Portobello Mushrooms', 'Grilled portobello mushrooms with balsamic glaze', 'Lactose-Free, Gluten-Free, Vegan', 4, Thursday),
  ('Tomato and Basil Risotto', 'Creamy risotto with tomatoes and fresh basil (contains lactose)', 'Lactose-Free', 4, Thursday),
  -- Friday
  ('Asian Noodle Salad with Tofu', 'Asian-inspired noodle salad with tofu and sesame dressing', 'Lactose-Free, Gluten-Free, Vegan', 4, Friday),
  ('Vegetarian Sushi Rolls', 'Sushi rolls with avocado, cucumber, and pickled radish (contains gluten)', 'Lactose-Free', 4, Friday);


-- Menu Suomeksi

-- Viikko 1
INSERT INTO menu_items (name, description, diet, week_number, day_of_week) VALUES
  -- Maanantai
  ('Grillattu Kana Salaatti', 'Tuoreita vihanneksia grillatun kanan rinnan kera', 'Laktoositon, Gluteeniton', 1, Maanantai),
  ('Vegetaarinen Pasta', 'Pasta sesonkivihanneksilla ja tomaattikastikkeella (sisältää gluteenia)', 'Laktoositon', 1, Maanantai),
  -- Tiistai
  ('Lohta ja Kvinoakulhoa', 'Kvinoakulho grillatulla lohella ja vihanneksilla', 'Laktoositon, Gluteeniton', 1, Tiistai),
  ('Margherita Pizza', 'Klassinen pizza tomaatilla, mozzarellalla ja basilikalla (sisältää gluteenia)', 'Laktoositon', 1, Tiistai),
  -- Keskiviikko
  ('Kalkkuna Avokado Wrap', 'Kokojyväwrappi kalkkunalla, avokadolla ja vihanneksilla (sisältää gluteenia)', 'Laktoositon', 1, Keskiviikko),
  ('Vihanneswokki', 'Wokatut vihannekset tofun ja soijakastikkeen kera', 'Laktoositon, Gluteeniton', 1, Keskiviikko),
  -- Torstai
  ('Kvinoalla Täytetyt Paprikat', 'Paprikat täytettyinä kvinoalla ja mustilla pavuilla', 'Laktoositon, Gluteeniton', 1, Torstai),
  ('Caprese Panini', 'Panini tomaatilla, mozzarellalla ja basilikalla (sisältää gluteenia)', 'Laktoositon', 1, Torstai),
  -- Perjantai
  ('Katkarapu Avokado Salaatti', 'Salaatti grillatuilla katkaravuilla, avokadolla ja sitruskastikkeella', 'Laktoositon, Gluteeniton', 1, Perjantai),
  ('Sienirisotto', 'Kermainen risotto sienillä ja parmesaanijuustolla (sisältää gluteenia)', 'Laktoositon', 1, Perjantai);


-- Viikko 2
INSERT INTO menu_items (name, description, diet, week_number, day_of_week) VALUES
  -- Maanantai
  ('Teriyaki Kana Kulho', 'Kulho teriyaki kanaa, riisiä ja höyrytettyä parsakaalia', 'Laktoositon', 2, Maanantai),
  ('Sienirisotto', 'Kermainen risotto sienillä ja parmesaanijuustolla (sisältää laktoosia)', 'Ei rajoitteita', 2, Maanantai),
  -- Tiistai
  ('Caesar Salaatti Grillikatkaravuilla', 'Klassinen Caesar salaatti grillikatkaravuilla', 'Laktoositon', 2, Tiistai),
  ('Vihannes Lasagne', 'Lasagnea kerroksittain pastaa, tomaattikastiketta ja sekoitettuja vihanneksia (sisältää laktoosia)', 'Vegaaninen', 2, Tiistai),
  -- Keskiviikko
  ('BBQ Kana Wrap', 'Grillattu BBQ kana wrap coleslawn ja chipotle majoneesin kera', 'Laktoositon', 2, Keskiviikko),
  ('Pinaatti ja Feta Täytetyt Paprikat', 'Paprikat täytettyinä pinaatilla, fetalla ja kvinoalla', 'Laktoositon', 2, Keskiviikko),
  -- Torstai
  ('Lohta ja Parsakaalia Peltiruoassa', 'Peltiruoka lohifileistä ja paahdetuista parsakaaleista', 'Laktoositon', 2, Torstai),
  ('Margherita Litaleipä', 'Litaleipä tomaatilla, mozzarellalla ja tuoreella basilikalla (sisältää laktoosia)', 'Ei rajoitteita', 2, Torstai),
  -- Perjantai
  ('Katkarapu Avokado Sushikulho', 'Sushikulho katkaravuilla, avokadolla, riisillä ja soijakastikkeella', 'Laktoositon', 2, Perjantai),
  ('Vegaanit Tacot', 'Tacot mustilla pavuilla, maissilla, tomaateilla ja guacamolella', 'Laktoositon', 2, Perjantai);


-- Viikko 3
INSERT INTO menu_items (name, description, diet, week_number, day_of_week) VALUES
  -- Maanantai
  ('Grillattu Lohisalaatti', 'Raikas salaatti grillatulla lohella ja sitruskastikkeella', 'Laktoositon, Gluteeniton', 3, Maanantai),
  ('Quinoa ja Mustapapukulho', 'Kulho quinoaa, mustapapuja ja sekoitettuja vihanneksia', 'Laktoositon, Gluteeniton, Vegaaninen', 3, Maanantai),
  -- Tiistai
  ('Caprese Salaatti Wrap', 'Wrap caprese-salaatilla ja balsamiviiniglasuurilla (sisältää gluteenia)', 'Laktoositon, Vegaaninen', 3, Tiistai),
  ('Kikherne- ja Kasviscurry', 'Kikherne-curry sekoitetuilla vihanneksilla', 'Laktoositon, Gluteeniton, Vegaaninen', 3, Tiistai),
  -- Keskiviikko
  ('Grillattu Kana Caesar Salaatti', 'Klassinen Caesar salaatti grillatulla kanalla', 'Laktoositon, Gluteeniton', 3, Keskiviikko),
  ('Vihannes- ja Tofuwokki', 'Wokatut vihannekset tofun ja soijakastikkeen kera', 'Laktoositon, Gluteeniton, Vegaaninen', 3, Keskiviikko),
  -- Torstai
  ('Uunissa paistettu turska ja paahdetut vihannekset', 'Uunissa paistettu turskan filee kauden paahdetuilla vihanneksilla', 'Laktoositon, Gluteeniton', 3, Torstai),
  ('Sieni- ja Pinaattiquesadilla', 'Quesadilla sienillä, pinaatilla ja juustolla (sisältää gluteenia)', 'Laktoositon', 3, Torstai),
  -- Perjantai
  ('Katkarapu ja Mango Salaatti', 'Salaatti grillatuilla katkaravuilla, tuoreella mangolla ja korianteri-limekastikkeella', 'Laktoositon, Gluteeniton, Vegaaninen', 3, Perjantai),
  ('Melanzane Parmigiana', 'Uunissa paistettu munakoiso tomaattikastikkeella ja sulaneella mozzarellalla (sisältää gluteenia)', 'Laktoositon', 3, Perjantai);

-- Viikko 4
INSERT INTO menu_items (name, description, diet, week_number, day_of_week) VALUES
  -- Maanantai
  ('Välimerellinen Kikherne Salaatti', 'Kikherne salaatti tomaateilla, kurkulla ja fetajuustolla (sisältää laktoosia)', 'None', 4, Maanantai),
  ('Vihanneswokki Tofulla', 'Wokatut vihannekset tofun ja teriyaki-kastikkeen kera', 'Laktoositon, Gluteeniton, Vegaaninen', 4, Maanantai),
  -- Tiistai
  ('Avokado ja Mustapapu Wrap', 'Wrap avokadolla, mustapavuilla ja maissisalsalla (sisältää gluteenia)', 'Laktoositon', 4, Tiistai),
  ('Quinoasalaatti Paahdetuilla Vihanneksilla', 'Quinoasalaatti kauden paahdetuilla vihanneksilla', 'Laktoositon, Gluteeniton, Vegaaninen', 4, Tiistai),
  -- Keskiviikko
  ('Uunissa Paistetut Kesäkurpitsaveneet', 'Kesäkurpitsaveneet täytettyinä kvinoalla, tomaateilla ja basilikalla (sisältää gluteenia)', 'Laktoositon', 4, Keskiviikko),
  ('Kikherne- ja Pinaatticurry', 'Kikherne-curry pinaatin ja aromikkaiden mausteiden kera', 'Laktoositon, Gluteeniton, Vegaaninen', 4, Keskiviikko),
  -- Torstai
  ('Grillatut Portobello-sienet', 'Grillatut portobello-sienet balsamiviiniglasuurilla', 'Laktoositon, Gluteeniton, Vegaaninen', 4, Torstai),
  ('Tomaatti ja Basilika Risotto', 'Kermainen risotto tomaateilla ja tuoreella basilikalla (sisältää laktoosia)', 'None', 4, Torstai),
  -- Perjantai
  ('Aasialainen Nuudelisalaatti Tofulla', 'Aasialaishenkinen nuudelisalaatti tofulla ja seesamikastikkeella', 'Laktoositon, Gluteeniton, Vegaaninen', 4, Perjantai),
  ('Vegetaariset Sushirullat', 'Sushirullat avokadolla, kurkulla ja etikkakurkulla (sisältää gluteenia)', 'Laktoositon', 4, Perjantai);
