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
  -- 1
  ('Grilled Chicken Salad', 'Fresh greens with grilled chicken breast', 'Lactose-Free, Gluten-Free', 1, 1),
  ('Vegetarian Pasta', 'Pasta with seasonal vegetables and tomato sauce (contains gluten)', 'Lactose-Free', 1, 1),
  -- 2
  ('Salmon Quinoa Bowl', 'Quinoa bowl with grilled salmon and vegetables', 'Lactose-Free, Gluten-Free', 1, 2),
  ('Margherita Pizza', 'Classic pizza with tomato, mozzarella, and basil (contains gluten)', 'Lactose-Free', 1, 2),
  -- 3
  ('Turkey Avocado Wrap', 'Whole wheat wrap with turkey, avocado, and veggies (contains gluten)', 'Lactose-Free', 1, 3),
  ('Vegetable Stir-Fry', 'Stir-fried vegetables with tofu and soy sauce', 'Lactose-Free, Gluten-Free', 1, 3),
  -- 4
  ('Quinoa Stuffed Bell Peppers', 'Bell peppers stuffed with quinoa and black beans', 'Lactose-Free, Gluten-Free', 1, 4),
  ('Caprese Panini', 'Panini with tomato, mozzarella, and basil (contains gluten)', 'Lactose-Free', 1, 4),
  -- 5
  ('Shrimp and Avocado Salad', 'Salad with grilled shrimp, avocado, and citrus dressing', 'Lactose-Free, Gluten-Free', 1, 5),
  ('Mushroom Risotto', 'Creamy risotto with mushrooms and Parmesan cheese (contains gluten)', 'Lactose-Free', 1, 5);

-- Week 2
INSERT INTO menu_items (name, description, diet, week_number, day_of_week) VALUES
  -- 1
  ('Teriyaki Chicken Bowl', 'Bowl with teriyaki chicken, rice, and steamed broccoli', 'Lactose-Free', 2, 1),
  ('Mushroom Risotto', 'Creamy risotto with assorted mushrooms and Parmesan cheese (contains lactose)', 'None', 2, 1),
  -- 2
  ('Caesar Salad with Grilled Shrimp', 'Classic Caesar salad with grilled shrimp', 'Lactose-Free', 2, 2),
  ('Vegetable Lasagna', 'Layers of pasta, marinara sauce, and mixed vegetables (contains lactose)', 'Vegan', 2, 2),
  -- 3
  ('BBQ Chicken Wrap', 'Grilled BBQ chicken wrap with coleslaw and chipotle mayo', 'Lactose-Free', 2, 3),
  ('Spinach and Feta Stuffed Peppers', 'Bell peppers stuffed with spinach, feta, and quinoa', 'Lactose-Free', 2, 3),
  -- 4
  ('Salmon and Asparagus Sheet Pan Dinner', 'Salmon fillets with roasted asparagus and lemon', 'Lactose-Free', 2, 4),
  ('Margherita Flatbread', 'Flatbread topped with tomato, mozzarella, and fresh basil (contains lactose)', 'None', 2, 4),
  -- 5
  ('Shrimp Avocado Sushi Bowl', 'Sushi bowl with shrimp, avocado, rice, and soy sauce', 'Lactose-Free', 2, 5),
  ('Vegetarian Tacos', 'Tacos with black beans, corn, tomatoes, and guacamole', 'Lactose-Free', 2, 5);


-- Week 3
INSERT INTO menu_items (name, description, diet, week_number, day_of_week) VALUES
  -- 1
  ('Grilled Salmon Salad', 'Fresh salad with grilled salmon and citrus dressing', 'Lactose-Free, Gluten-Free', 3, 1),
  ('Quinoa and Black Bean Bowl', 'Bowl with quinoa, black beans, and assorted veggies', 'Lactose-Free, Gluten-Free, Vegan', 3, 1),
  -- 2
  ('Caprese Salad Wrap', 'Wrap with caprese salad and balsamic glaze (contains gluten)', 'Lactose-Free, Vegan', 3, 2),
  ('Chickpea and Vegetable Curry', 'Chickpea curry with mixed vegetables', 'Lactose-Free, Gluten-Free, Vegan', 3, 2),
  -- 3
  ('Grilled Chicken Caesar Salad', 'Classic Caesar salad with grilled chicken', 'Lactose-Free, Gluten-Free', 3, 3),
  ('Vegetable and Tofu Stir-Fry', 'Stir-fried veggies with tofu in soy ginger sauce', 'Lactose-Free, Gluten-Free, Vegan', 3, 3),
  -- 4
  ('Baked Cod with Roasted Vegetables', 'Baked cod fillet with seasonal roasted vegetables', 'Lactose-Free, Gluten-Free', 3, 4),
  ('Mushroom and Spinach Quesadilla', 'Quesadilla with mushrooms, spinach, and cheese (contains gluten)', 'Lactose-Free', 3, 4),
  -- 5
  ('Shrimp and Mango Salad', 'Salad with grilled shrimp, fresh mango, and cilantro-lime dressing', 'Lactose-Free, Gluten-Free, Vegan', 3, 5),
  ('Eggplant Parmesan', 'Baked eggplant with marinara sauce and melted mozzarella (contains gluten)', 'Lactose-Free', 3, 5);

-- Week 4
INSERT INTO menu_items (name, description, diet, week_number, day_of_week) VALUES
  -- 1
  ('Mediterranean Chickpea Salad', 'Chickpea salad with tomatoes, cucumber, and feta cheese (contains lactose)', 'Lactose-Free', 4, 1),
  ('Vegetable Stir-Fry with Tofu', 'Stir-fried vegetables with tofu in teriyaki sauce', 'Lactose-Free, Gluten-Free, Vegan', 4, 1),
  -- 2
  ('Avocado and Black Bean Wrap', 'Wrap with avocado, black beans, and corn salsa (contains gluten)', 'Lactose-Free', 4, 2),
  ('Quinoa Salad with Roasted Vegetables', 'Quinoa salad with seasonal roasted vegetables', 'Lactose-Free, Gluten-Free, Vegan', 4, 2),
  -- 3
  ('Baked Zucchini Boats', 'Zucchini boats filled with quinoa, tomatoes, and basil (contains gluten)', 'Lactose-Free', 4, 3),
  ('Chickpea and Spinach Curry', 'Chickpea curry with spinach and aromatic spices', 'Lactose-Free, Gluten-Free, Vegan', 4, 3),
  -- 4
  ('Grilled Portobello Mushrooms', 'Grilled portobello mushrooms with balsamic glaze', 'Lactose-Free, Gluten-Free, Vegan', 4, 4),
  ('Tomato and Basil Risotto', 'Creamy risotto with tomatoes and fresh basil (contains lactose)', 'Lactose-Free', 4, 4),
  -- 5
  ('Asian Noodle Salad with Tofu', 'Asian-inspired noodle salad with tofu and sesame dressing', 'Lactose-Free, Gluten-Free, Vegan', 4, 5),
  ('Vegetarian Sushi Rolls', 'Sushi rolls with avocado, cucumber, and pickled radish (contains gluten)', 'Lactose-Free', 4, 5);


-- Week 5
INSERT INTO menu_items (name, description, diet, week_number, day_of_week) VALUES
('Grilled Chicken Salad', 'Fresh greens with grilled chicken breast', 'Lactose-Free, Gluten-Free', 5, 1),
('Vegetarian Pasta', 'Pasta with seasonal vegetables and tomato sauce (contains gluten)', 'Lactose-Free', 5, 1),
('Salmon Quinoa Bowl', 'Quinoa bowl with grilled salmon and vegetables', 'Lactose-Free, Gluten-Free', 5, 2),
('Margherita Pizza', 'Classic pizza with tomato, mozzarella, and basil (contains gluten)', 'Lactose-Free', 5, 2),
('Turkey Avocado Wrap', 'Whole wheat wrap with turkey, avocado, and veggies (contains gluten)', 'Lactose-Free', 5, 3),
('Vegetable Stir-Fry', 'Stir-fried vegetables with tofu and soy sauce', 'Lactose-Free, Gluten-Free', 5, 3),
('Quinoa Stuffed Bell Peppers', 'Bell peppers stuffed with quinoa and black beans', 'Lactose-Free, Gluten-Free', 5, 4),
('Caprese Panini', 'Panini with tomato, mozzarella, and basil (contains gluten)', 'Lactose-Free', 5, 4),
('Shrimp and Avocado Salad', 'Salad with grilled shrimp, avocado, and citrus dressing', 'Lactose-Free, Gluten-Free', 5, 5),
('Mushroom Risotto', 'Creamy risotto with mushrooms and Parmesan cheese (contains gluten)', 'Lactose-Free', 5, 5);

-- Week 6
INSERT INTO menu_items (name, description, diet, week_number, day_of_week) VALUES
('Teriyaki Chicken Bowl', 'Bowl with teriyaki chicken, rice, and steamed broccoli', 'Lactose-Free', 6, 1),
('Mushroom Risotto', 'Creamy risotto with assorted mushrooms and Parmesan cheese (contains lactose)', 'None', 6, 1),
('Caesar Salad with Grilled Shrimp', 'Classic Caesar salad with grilled shrimp', 'Lactose-Free', 6, 2),
('Vegetable Lasagna', 'Layers of pasta, marinara sauce, and mixed vegetables (contains lactose)', 'Vegan', 6, 2),
('BBQ Chicken Wrap', 'Grilled BBQ chicken wrap with coleslaw and chipotle mayo', 'Lactose-Free', 6, 3),
('Spinach and Feta Stuffed Peppers', 'Bell peppers stuffed with spinach, feta, and quinoa', 'Lactose-Free', 6, 3),
('Salmon and Asparagus Sheet Pan Dinner', 'Salmon fillets with roasted asparagus and lemon', 'Lactose-Free', 6, 4),
('Margherita Flatbread', 'Flatbread topped with tomato, mozzarella, and fresh basil (contains lactose)', 'None', 6, 4),
('Shrimp Avocado Sushi Bowl', 'Sushi bowl with shrimp, avocado, rice, and soy sauce', 'Lactose-Free', 6, 5),
('Vegetarian Tacos', 'Tacos with black beans, corn, tomatoes, and guacamole', 'Lactose-Free', 6, 5);

-- Week 7
INSERT INTO menu_items (name, description, diet, week_number, day_of_week) VALUES
('Grilled Salmon Salad', 'Fresh salad with grilled salmon and citrus dressing', 'Lactose-Free, Gluten-Free', 7, 1),
('Quinoa and Black Bean Bowl', 'Bowl with quinoa, black beans, and assorted veggies', 'Lactose-Free, Gluten-Free, Vegan', 7, 1),
('Caprese Salad Wrap', 'Wrap with caprese salad and balsamic glaze (contains gluten)', 'Lactose-Free, Vegan', 7, 2),
('Chickpea and Vegetable Curry', 'Chickpea curry with mixed vegetables', 'Lactose-Free, Gluten-Free, Vegan', 7, 2),
('Grilled Chicken Caesar Salad', 'Classic Caesar salad with grilled chicken', 'Lactose-Free, Gluten-Free', 7, 3),
('Vegetable and Tofu Stir-Fry', 'Stir-fried veggies with tofu in soy ginger sauce', 'Lactose-Free, Gluten-Free, Vegan', 7, 3),
('Baked Cod with Roasted Vegetables', 'Baked cod fillet with seasonal roasted vegetables', 'Lactose-Free, Gluten-Free', 7, 4),
('Mushroom and Spinach Quesadilla', 'Quesadilla with mushrooms, spinach, and cheese (contains gluten)', 'Lactose-Free', 7, 4),
('Shrimp and Mango Salad', 'Salad with grilled shrimp, fresh mango, and cilantro-lime dressing', 'Lactose-Free, Gluten-Free, Vegan', 7, 5),
('Eggplant Parmesan', 'Baked eggplant with marinara sauce and melted mozzarella (contains gluten)', 'Lactose-Free', 7, 5);

-- Week 8
INSERT INTO menu_items (name, description, diet, week_number, day_of_week) VALUES
('Mediterranean Chickpea Salad', 'Chickpea salad with tomatoes, cucumber, and feta cheese (contains lactose)', 'Lactose-Free', 8, 1),
('Vegetable Stir-Fry with Tofu', 'Stir-fried vegetables with tofu in teriyaki sauce', 'Lactose-Free, Gluten-Free, Vegan', 8, 1),
('Avocado and Black Bean Wrap', 'Wrap with avocado, black beans, and corn salsa (contains gluten)', 'Lactose-Free', 8, 2),
('Quinoa Salad with Roasted Vegetables', 'Quinoa salad with seasonal roasted vegetables', 'Lactose-Free, Gluten-Free, Vegan', 8, 2),
('Baked Zucchini Boats', 'Zucchini boats filled with quinoa, tomatoes, and basil (contains gluten)', 'Lactose-Free', 8, 3),
('Chickpea and Spinach Curry', 'Chickpea curry with spinach and aromatic spices', 'Lactose-Free, Gluten-Free, Vegan', 8, 3),
('Grilled Portobello Mushrooms', 'Grilled portobello mushrooms with balsamic glaze', 'Lactose-Free, Gluten-Free, Vegan', 8, 4),
('Tomato and Basil Risotto', 'Creamy risotto with tomatoes and fresh basil (contains lactose)', 'Lactose-Free', 8, 4),
('Asian Noodle Salad with Tofu', 'Asian-inspired noodle salad with tofu and sesame dressing', 'Lactose-Free, Gluten-Free, Vegan', 8, 5),
('Vegetarian Sushi Rolls', 'Sushi rolls with avocado, cucumber, and pickled radish (contains gluten)', 'Lactose-Free', 8, 5);

-- Week 9
INSERT INTO menu_items (name, description, diet, week_number, day_of_week) VALUES
('Grilled Chicken Salad', 'Fresh greens with grilled chicken breast', 'Lactose-Free, Gluten-Free', 9, 1),
('Vegetarian Pasta', 'Pasta with seasonal vegetables and tomato sauce (contains gluten)', 'Lactose-Free', 9, 1),
('Salmon Quinoa Bowl', 'Quinoa bowl with grilled salmon and vegetables', 'Lactose-Free, Gluten-Free', 9, 2),
('Margherita Pizza', 'Classic pizza with tomato, mozzarella, and basil (contains gluten)', 'Lactose-Free', 9, 2),
('Turkey Avocado Wrap', 'Whole wheat wrap with turkey, avocado, and veggies (contains gluten)', 'Lactose-Free', 9, 3),
('Vegetable Stir-Fry', 'Stir-fried vegetables with tofu and soy sauce', 'Lactose-Free, Gluten-Free', 9, 3),
('Quinoa Stuffed Bell Peppers', 'Bell peppers stuffed with quinoa and black beans', 'Lactose-Free, Gluten-Free', 9, 4),
('Caprese Panini', 'Panini with tomato, mozzarella, and basil (contains gluten)', 'Lactose-Free', 9, 4),
('Shrimp and Avocado Salad', 'Salad with grilled shrimp, avocado, and citrus dressing', 'Lactose-Free, Gluten-Free', 9, 5),
('Mushroom Risotto', 'Creamy risotto with mushrooms and Parmesan cheese (contains gluten)', 'Lactose-Free', 9, 5);

-- Week 10
INSERT INTO menu_items (name, description, diet, week_number, day_of_week) VALUES
('Teriyaki Chicken Bowl', 'Bowl with teriyaki chicken, rice, and steamed broccoli', 'Lactose-Free', 10, 1),
('Mushroom Risotto', 'Creamy risotto with assorted mushrooms and Parmesan cheese (contains lactose)', 'None', 10, 1),
('Caesar Salad with Grilled Shrimp', 'Classic Caesar salad with grilled shrimp', 'Lactose-Free', 10, 2),
('Vegetable Lasagna', 'Layers of pasta, marinara sauce, and mixed vegetables (contains lactose)', 'Vegan', 10, 2),
('BBQ Chicken Wrap', 'Grilled BBQ chicken wrap with coleslaw and chipotle mayo', 'Lactose-Free', 10, 3),
('Spinach and Feta Stuffed Peppers', 'Bell peppers stuffed with spinach, feta, and quinoa', 'Lactose-Free', 10, 3),
('Salmon and Asparagus Sheet Pan Dinner', 'Salmon fillets with roasted asparagus and lemon', 'Lactose-Free', 10, 4),
('Margherita Flatbread', 'Flatbread topped with tomato, mozzarella, and fresh basil (contains lactose)', 'None', 10, 4),
('Shrimp Avocado Sushi Bowl', 'Sushi bowl with shrimp, avocado, rice, and soy sauce', 'Lactose-Free', 10, 5),
('Vegetarian Tacos', 'Tacos with black beans, corn, tomatoes, and guacamole', 'Lactose-Free', 10, 5);

-- Week 11
INSERT INTO menu_items (name, description, diet, week_number, day_of_week) VALUES
('Grilled Salmon Salad', 'Fresh salad with grilled salmon and citrus dressing', 'Lactose-Free, Gluten-Free', 11, 1),
('Quinoa and Black Bean Bowl', 'Bowl with quinoa, black beans, and assorted veggies', 'Lactose-Free, Gluten-Free, Vegan', 11, 1),
('Caprese Salad Wrap', 'Wrap with caprese salad and balsamic glaze (contains gluten)', 'Lactose-Free, Vegan', 11, 2),
('Chickpea and Vegetable Curry', 'Chickpea curry with mixed vegetables', 'Lactose-Free, Gluten-Free, Vegan', 11, 2),
('Grilled Chicken Caesar Salad', 'Classic Caesar salad with grilled chicken', 'Lactose-Free, Gluten-Free', 11, 3),
('Vegetable and Tofu Stir-Fry', 'Stir-fried veggies with tofu in soy ginger sauce', 'Lactose-Free, Gluten-Free, Vegan', 11, 3),
('Baked Cod with Roasted Vegetables', 'Baked cod fillet with seasonal roasted vegetables', 'Lactose-Free, Gluten-Free', 11, 4),
('Mushroom and Spinach Quesadilla', 'Quesadilla with mushrooms, spinach, and cheese (contains gluten)', 'Lactose-Free', 11, 4),
('Shrimp and Mango Salad', 'Salad with grilled shrimp, fresh mango, and cilantro-lime dressing', 'Lactose-Free, Gluten-Free, Vegan', 11, 5),
('Eggplant Parmesan', 'Baked eggplant with marinara sauce and melted mozzarella (contains gluten)', 'Lactose-Free', 11, 5);

-- Week 12
INSERT INTO menu_items (name, description, diet, week_number, day_of_week) VALUES
('Mediterranean Chickpea Salad', 'Chickpea salad with tomatoes, cucumber, and feta cheese (contains lactose)', 'Lactose-Free', 12, 1),
('Vegetable Stir-Fry with Tofu', 'Stir-fried vegetables with tofu in teriyaki sauce', 'Lactose-Free, Gluten-Free, Vegan', 12, 1),
('Avocado and Black Bean Wrap', 'Wrap with avocado, black beans, and corn salsa (contains gluten)', 'Lactose-Free', 12, 2),
('Quinoa Salad with Roasted Vegetables', 'Quinoa salad with seasonal roasted vegetables', 'Lactose-Free, Gluten-Free, Vegan', 12, 2),
('Baked Zucchini Boats', 'Zucchini boats filled with quinoa, tomatoes, and basil (contains gluten)', 'Lactose-Free', 12, 3),
('Chickpea and Spinach Curry', 'Chickpea curry with spinach and aromatic spices', 'Lactose-Free, Gluten-Free, Vegan', 12, 3),
('Grilled Portobello Mushrooms', 'Grilled portobello mushrooms with balsamic glaze', 'Lactose-Free, Gluten-Free, Vegan', 12, 4),
('Tomato and Basil Risotto', 'Creamy risotto with tomatoes and fresh basil (contains lactose)', 'Lactose-Free', 12, 4),
('Asian Noodle Salad with Tofu', 'Asian-inspired noodle salad with tofu and sesame dressing', 'Lactose-Free, Gluten-Free, Vegan', 12, 5),
('Vegetarian Sushi Rolls', 'Sushi rolls with avocado, cucumber, and pickled radish (contains gluten)', 'Lactose-Free', 12, 5);

-- Week 13
INSERT INTO menu_items (name, description, diet, week_number, day_of_week) VALUES
('Grilled Chicken Salad', 'Fresh greens with grilled chicken breast', 'Lactose-Free, Gluten-Free', 13, 1),
('Vegetarian Pasta', 'Pasta with seasonal vegetables and tomato sauce (contains gluten)', 'Lactose-Free', 13, 1),
('Salmon Quinoa Bowl', 'Quinoa bowl with grilled salmon and vegetables', 'Lactose-Free, Gluten-Free', 13, 2),
('Margherita Pizza', 'Classic pizza with tomato, mozzarella, and basil (contains gluten)', 'Lactose-Free', 13, 2),
('Turkey Avocado Wrap', 'Whole wheat wrap with turkey, avocado, and veggies (contains gluten)', 'Lactose-Free', 13, 3),
('Vegetable Stir-Fry', 'Stir-fried vegetables with tofu and soy sauce', 'Lactose-Free, Gluten-Free', 13, 3),
('Quinoa Stuffed Bell Peppers', 'Bell peppers stuffed with quinoa and black beans', 'Lactose-Free, Gluten-Free', 13, 4),
('Caprese Panini', 'Panini with tomato, mozzarella, and basil (contains gluten)', 'Lactose-Free', 13, 4),
('Shrimp and Avocado Salad', 'Salad with grilled shrimp, avocado, and citrus dressing', 'Lactose-Free, Gluten-Free', 13, 5),
('Mushroom Risotto', 'Creamy risotto with mushrooms and Parmesan cheese (contains gluten)', 'Lactose-Free', 13, 5);

-- Week 14
INSERT INTO menu_items (name, description, diet, week_number, day_of_week) VALUES
('Teriyaki Chicken Bowl', 'Bowl with teriyaki chicken, rice, and steamed broccoli', 'Lactose-Free', 14, 1),
('Mushroom Risotto', 'Creamy risotto with assorted mushrooms and Parmesan cheese (contains lactose)', 'None', 14, 1),
('Caesar Salad with Grilled Shrimp', 'Classic Caesar salad with grilled shrimp', 'Lactose-Free', 14, 2),
('Vegetable Lasagna', 'Layers of pasta, marinara sauce, and mixed vegetables (contains lactose)', 'Vegan', 14, 2),
('BBQ Chicken Wrap', 'Grilled BBQ chicken wrap with coleslaw and chipotle mayo', 'Lactose-Free', 14, 3),
('Spinach and Feta Stuffed Peppers', 'Bell peppers stuffed with spinach, feta, and quinoa', 'Lactose-Free', 14, 3),
('Salmon and Asparagus Sheet Pan Dinner', 'Salmon fillets with roasted asparagus and lemon', 'Lactose-Free', 14, 4),
('Margherita Flatbread', 'Flatbread topped with tomato, mozzarella, and fresh basil (contains lactose)', 'None', 14, 4),
('Shrimp Avocado Sushi Bowl', 'Sushi bowl with shrimp, avocado, rice, and soy sauce', 'Lactose-Free', 14, 5),
('Vegetarian Tacos', 'Tacos with black beans, corn, tomatoes, and guacamole', 'Lactose-Free', 14, 5);

-- Week 15
INSERT INTO menu_items (name, description, diet, week_number, day_of_week) VALUES
('Grilled Salmon Salad', 'Fresh salad with grilled salmon and citrus dressing', 'Lactose-Free, Gluten-Free', 15, 1),
('Quinoa and Black Bean Bowl', 'Bowl with quinoa, black beans, and assorted veggies', 'Lactose-Free, Gluten-Free, Vegan', 15, 1),
('Caprese Salad Wrap', 'Wrap with caprese salad and balsamic glaze (contains gluten)', 'Lactose-Free, Vegan', 15, 2),
('Chickpea and Vegetable Curry', 'Chickpea curry with mixed vegetables', 'Lactose-Free, Gluten-Free, Vegan', 15, 2),
('Grilled Chicken Caesar Salad', 'Classic Caesar salad with grilled chicken', 'Lactose-Free, Gluten-Free', 15, 3),
('Vegetable and Tofu Stir-Fry', 'Stir-fried veggies with tofu in soy ginger sauce', 'Lactose-Free, Gluten-Free, Vegan', 15, 3),
('Baked Cod with Roasted Vegetables', 'Baked cod fillet with seasonal roasted vegetables', 'Lactose-Free, Gluten-Free', 15, 4),
('Mushroom and Spinach Quesadilla', 'Quesadilla with mushrooms, spinach, and cheese (contains gluten)', 'Lactose-Free', 15, 4),
('Shrimp and Mango Salad', 'Salad with grilled shrimp, fresh mango, and cilantro-lime dressing', 'Lactose-Free, Gluten-Free, Vegan', 15, 5),
('Eggplant Parmesan', 'Baked eggplant with marinara sauce and melted mozzarella (contains gluten)', 'Lactose-Free', 15, 5);

-- Week 16
INSERT INTO menu_items (name, description, diet, week_number, day_of_week) VALUES
('Mediterranean Chickpea Salad', 'Chickpea salad with tomatoes, cucumber, and feta cheese (contains lactose)', 'Lactose-Free', 16, 1),
('Vegetable Stir-Fry with Tofu', 'Stir-fried vegetables with tofu in teriyaki sauce', 'Lactose-Free, Gluten-Free, Vegan', 16, 1),
('Avocado and Black Bean Wrap', 'Wrap with avocado, black beans, and corn salsa (contains gluten)', 'Lactose-Free', 16, 2),
('Quinoa Salad with Roasted Vegetables', 'Quinoa salad with seasonal roasted vegetables', 'Lactose-Free, Gluten-Free, Vegan', 16, 2),
('Baked Zucchini Boats', 'Zucchini boats filled with quinoa, tomatoes, and basil (contains gluten)', 'Lactose-Free', 16, 3),
('Chickpea and Spinach Curry', 'Chickpea curry with spinach and aromatic spices', 'Lactose-Free, Gluten-Free, Vegan', 16, 3),
('Grilled Portobello Mushrooms', 'Grilled portobello mushrooms with balsamic glaze', 'Lactose-Free, Gluten-Free, Vegan', 16, 4),
('Tomato and Basil Risotto', 'Creamy risotto with tomatoes and fresh basil (contains lactose)', 'Lactose-Free', 16, 4),
('Asian Noodle Salad with Tofu', 'Asian-inspired noodle salad with tofu and sesame dressing', 'Lactose-Free, Gluten-Free, Vegan', 16, 5),
('Vegetarian Sushi Rolls', 'Sushi rolls with avocado, cucumber, and pickled radish (contains gluten)', 'Lactose-Free', 16, 5);

-- Week 17
INSERT INTO menu_items (name, description, diet, week_number, day_of_week) VALUES
('Grilled Chicken Salad', 'Fresh greens with grilled chicken breast', 'Lactose-Free, Gluten-Free', 17, 1),
('Vegetarian Pasta', 'Pasta with seasonal vegetables and tomato sauce (contains gluten)', 'Lactose-Free', 17, 1),
('Salmon Quinoa Bowl', 'Quinoa bowl with grilled salmon and vegetables', 'Lactose-Free, Gluten-Free', 17, 2),
('Margherita Pizza', 'Classic pizza with tomato, mozzarella, and basil (contains gluten)', 'Lactose-Free', 17, 2),
('Turkey Avocado Wrap', 'Whole wheat wrap with turkey, avocado, and veggies (contains gluten)', 'Lactose-Free', 17, 3),
('Vegetable Stir-Fry', 'Stir-fried vegetables with tofu and soy sauce', 'Lactose-Free, Gluten-Free', 17, 3),
('Quinoa Stuffed Bell Peppers', 'Bell peppers stuffed with quinoa and black beans', 'Lactose-Free, Gluten-Free', 17, 4),
('Caprese Panini', 'Panini with tomato, mozzarella, and basil (contains gluten)', 'Lactose-Free', 17, 4),
('Shrimp and Avocado Salad', 'Salad with grilled shrimp, avocado, and citrus dressing', 'Lactose-Free, Gluten-Free', 17, 5),
('Mushroom Risotto', 'Creamy risotto with mushrooms and Parmesan cheese (contains gluten)', 'Lactose-Free', 17, 5);

-- Week 18
INSERT INTO menu_items (name, description, diet, week_number, day_of_week) VALUES
('Teriyaki Chicken Bowl', 'Bowl with teriyaki chicken, rice, and steamed broccoli', 'Lactose-Free', 18, 1),
('Mushroom Risotto', 'Creamy risotto with assorted mushrooms and Parmesan cheese (contains lactose)', 'None', 18, 1),
('Caesar Salad with Grilled Shrimp', 'Classic Caesar salad with grilled shrimp', 'Lactose-Free', 18, 2),
('Vegetable Lasagna', 'Layers of pasta, marinara sauce, and mixed vegetables (contains lactose)', 'Vegan', 18, 2),
('BBQ Chicken Wrap', 'Grilled BBQ chicken wrap with coleslaw and chipotle mayo', 'Lactose-Free', 18, 3),
('Spinach and Feta Stuffed Peppers', 'Bell peppers stuffed with spinach, feta, and quinoa', 'Lactose-Free', 18, 3),
('Salmon and Asparagus Sheet Pan Dinner', 'Salmon fillets with roasted asparagus and lemon', 'Lactose-Free', 18, 4),
('Margherita Flatbread', 'Flatbread topped with tomato, mozzarella, and fresh basil (contains lactose)', 'None', 18, 4),
('Shrimp Avocado Sushi Bowl', 'Sushi bowl with shrimp, avocado, rice, and soy sauce', 'Lactose-Free', 18, 5),
('Vegetarian Tacos', 'Tacos with black beans, corn, tomatoes, and guacamole', 'Lactose-Free', 18, 5);

-- Week 19
INSERT INTO menu_items (name, description, diet, week_number, day_of_week) VALUES
('Grilled Salmon Salad', 'Fresh salad with grilled salmon and citrus dressing', 'Lactose-Free, Gluten-Free', 19, 1),
('Quinoa and Black Bean Bowl', 'Bowl with quinoa, black beans, and assorted veggies', 'Lactose-Free, Gluten-Free, Vegan', 19, 1),
('Caprese Salad Wrap', 'Wrap with caprese salad and balsamic glaze (contains gluten)', 'Lactose-Free, Vegan', 19, 2),
('Chickpea and Vegetable Curry', 'Chickpea curry with mixed vegetables', 'Lactose-Free, Gluten-Free, Vegan', 19, 2),
('Grilled Chicken Caesar Salad', 'Classic Caesar salad with grilled chicken', 'Lactose-Free, Gluten-Free', 19, 3),
('Vegetable and Tofu Stir-Fry', 'Stir-fried veggies with tofu in soy ginger sauce', 'Lactose-Free, Gluten-Free, Vegan', 19, 3),
('Baked Cod with Roasted Vegetables', 'Baked cod fillet with seasonal roasted vegetables', 'Lactose-Free, Gluten-Free', 19, 4),
('Mushroom and Spinach Quesadilla', 'Quesadilla with mushrooms, spinach, and cheese (contains gluten)', 'Lactose-Free', 19, 4),
('Shrimp and Mango Salad', 'Salad with grilled shrimp, fresh mango, and cilantro-lime dressing', 'Lactose-Free, Gluten-Free, Vegan', 19, 5),
('Eggplant Parmesan', 'Baked eggplant with marinara sauce and melted mozzarella (contains gluten)', 'Lactose-Free', 19, 5);

-- Week 20
INSERT INTO menu_items (name, description, diet, week_number, day_of_week) VALUES
('Mediterranean Chickpea Salad', 'Chickpea salad with tomatoes, cucumber, and feta cheese (contains lactose)', 'Lactose-Free', 20, 1),
('Vegetable Stir-Fry with Tofu', 'Stir-fried vegetables with tofu in teriyaki sauce', 'Lactose-Free, Gluten-Free, Vegan', 20, 1),
('Avocado and Black Bean Wrap', 'Wrap with avocado, black beans, and corn salsa (contains gluten)', 'Lactose-Free', 20, 2),
('Quinoa Salad with Roasted Vegetables', 'Quinoa salad with seasonal roasted vegetables', 'Lactose-Free, Gluten-Free, Vegan', 20, 2),
('Baked Zucchini Boats', 'Zucchini boats filled with quinoa, tomatoes, and basil (contains gluten)', 'Lactose-Free', 20, 3),
('Chickpea and Spinach Curry', 'Chickpea curry with spinach and aromatic spices', 'Lactose-Free, Gluten-Free, Vegan', 20, 3),
('Grilled Portobello Mushrooms', 'Grilled portobello mushrooms with balsamic glaze', 'Lactose-Free, Gluten-Free, Vegan', 20, 4),
('Tomato and Basil Risotto', 'Creamy risotto with tomatoes and fresh basil (contains lactose)', 'Lactose-Free', 20, 4),
('Asian Noodle Salad with Tofu', 'Asian-inspired noodle salad with tofu and sesame dressing', 'Lactose-Free, Gluten-Free, Vegan', 20, 5),
('Vegetarian Sushi Rolls', 'Sushi rolls with avocado, cucumber, and pickled radish (contains gluten)', 'Lactose-Free', 20, 5);

-- Week 21
INSERT INTO menu_items (name, description, diet, week_number, day_of_week) VALUES
('Grilled Chicken Salad', 'Fresh greens with grilled chicken breast', 'Lactose-Free, Gluten-Free', 21, 1),
('Vegetarian Pasta', 'Pasta with seasonal vegetables and tomato sauce (contains gluten)', 'Lactose-Free', 21, 1),
('Salmon Quinoa Bowl', 'Quinoa bowl with grilled salmon and vegetables', 'Lactose-Free, Gluten-Free', 21, 2),
('Margherita Pizza', 'Classic pizza with tomato, mozzarella, and basil (contains gluten)', 'Lactose-Free', 21, 2),
('Turkey Avocado Wrap', 'Whole wheat wrap with turkey, avocado, and veggies (contains gluten)', 'Lactose-Free', 21, 3),
('Vegetable Stir-Fry', 'Stir-fried vegetables with tofu and soy sauce', 'Lactose-Free, Gluten-Free', 21, 3),
('Quinoa Stuffed Bell Peppers', 'Bell peppers stuffed with quinoa and black beans', 'Lactose-Free, Gluten-Free', 21, 4),
('Caprese Panini', 'Panini with tomato, mozzarella, and basil (contains gluten)', 'Lactose-Free', 21, 4),
('Shrimp and Avocado Salad', 'Salad with grilled shrimp, avocado, and citrus dressing', 'Lactose-Free, Gluten-Free', 21, 5),
('Mushroom Risotto', 'Creamy risotto with mushrooms and Parmesan cheese (contains gluten)', 'Lactose-Free', 21, 5);

-- Week 22
INSERT INTO menu_items (name, description, diet, week_number, day_of_week) VALUES
('Teriyaki Chicken Bowl', 'Bowl with teriyaki chicken, rice, and steamed broccoli', 'Lactose-Free', 22, 1),
('Mushroom Risotto', 'Creamy risotto with assorted mushrooms and Parmesan cheese (contains lactose)', 'None', 22, 1),
('Caesar Salad with Grilled Shrimp', 'Classic Caesar salad with grilled shrimp', 'Lactose-Free', 22, 2),
('Vegetable Lasagna', 'Layers of pasta, marinara sauce, and mixed vegetables (contains lactose)', 'Vegan', 22, 2),
('BBQ Chicken Wrap', 'Grilled BBQ chicken wrap with coleslaw and chipotle mayo', 'Lactose-Free', 22, 3),
('Spinach and Feta Stuffed Peppers', 'Bell peppers stuffed with spinach, feta, and quinoa', 'Lactose-Free', 22, 3),
('Salmon and Asparagus Sheet Pan Dinner', 'Salmon fillets with roasted asparagus and lemon', 'Lactose-Free', 22, 4),
('Margherita Flatbread', 'Flatbread topped with tomato, mozzarella, and fresh basil (contains lactose)', 'None', 22, 4),
('Shrimp Avocado Sushi Bowl', 'Sushi bowl with shrimp, avocado, rice, and soy sauce', 'Lactose-Free', 22, 5),
('Vegetarian Tacos', 'Tacos with black beans, corn, tomatoes, and guacamole', 'Lactose-Free', 22, 5);

-- Week 23
INSERT INTO menu_items (name, description, diet, week_number, day_of_week) VALUES
('Grilled Salmon Salad', 'Fresh salad with grilled salmon and citrus dressing', 'Lactose-Free, Gluten-Free', 23, 1),
('Quinoa and Black Bean Bowl', 'Bowl with quinoa, black beans, and assorted veggies', 'Lactose-Free, Gluten-Free, Vegan', 23, 1),
('Caprese Salad Wrap', 'Wrap with caprese salad and balsamic glaze (contains gluten)', 'Lactose-Free, Vegan', 23, 2),
('Chickpea and Vegetable Curry', 'Chickpea curry with mixed vegetables', 'Lactose-Free, Gluten-Free, Vegan', 23, 2),
('Grilled Chicken Caesar Salad', 'Classic Caesar salad with grilled chicken', 'Lactose-Free, Gluten-Free', 23, 3),
('Vegetable and Tofu Stir-Fry', 'Stir-fried veggies with tofu in soy ginger sauce', 'Lactose-Free, Gluten-Free, Vegan', 23, 3),
('Baked Cod with Roasted Vegetables', 'Baked cod fillet with seasonal roasted vegetables', 'Lactose-Free, Gluten-Free', 23, 4),
('Mushroom and Spinach Quesadilla', 'Quesadilla with mushrooms, spinach, and cheese (contains gluten)', 'Lactose-Free', 23, 4),
('Shrimp and Mango Salad', 'Salad with grilled shrimp, fresh mango, and cilantro-lime dressing', 'Lactose-Free, Gluten-Free, Vegan', 23, 5),
('Eggplant Parmesan', 'Baked eggplant with marinara sauce and melted mozzarella (contains gluten)', 'Lactose-Free', 23, 5);

-- Week 49
INSERT INTO menu_items (name, description, diet, week_number, day_of_week) VALUES
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
INSERT INTO menu_items (name, description, diet, week_number, day_of_week) VALUES
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
INSERT INTO menu_items (name, description, diet, week_number, day_of_week) VALUES
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
INSERT INTO menu_items (name, description, diet, week_number, day_of_week) VALUES
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
