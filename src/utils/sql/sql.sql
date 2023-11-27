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
  fname VARCHAR(255) NOT NULL,
  lname VARCHAR(255) NOT NULL,
  password VARCHAR(255) NOT NULL,
  email VARCHAR(255) NOT NULL UNIQUE,
  user_level_id INT NOT NULL,
  created_at TIMESTAMP NOT NULL,
  FOREIGN KEY (user_level_id) REFERENCES UserLevels(user_level_id)
);

-- Create Menu table
CREATE TABLE Menus (
  menu_id INT NOT NULL PRIMARY KEY AUTO_INCREMENT,
  menu_name VARCHAR(255) NOT NULL,
  menu_description VARCHAR(255) NOT NULL,
  menu_image VARCHAR(255) NOT NULL,
  created_at TIMESTAMP NOT NULL
);

-- Create FoodItem table
CREATE TABLE FoodItems (
  food_id INT NOT NULL PRIMARY KEY AUTO_INCREMENT,
  food_name VARCHAR(255) NOT NULL,
  quantity INT NOT NULL,
  unit_price DECIMAL(10, 2) NOT NULL,
  diet_description VARCHAR(255) NOT NULL
);

-- Create OrderStatus table
CREATE TABLE OrderStatus (
  order_status_id INT NOT NULL PRIMARY KEY AUTO_INCREMENT,
  order_status_name VARCHAR(255) NOT NULL
);

-- Create Order table
CREATE TABLE Orders (
  order_id INT NOT NULL PRIMARY KEY AUTO_INCREMENT,
  user_id INT NOT NULL,
  order_date TIMESTAMP NOT NULL,
  order_status_id INT NOT NULL,
  FOREIGN KEY (user_id) REFERENCES Users(user_id),
  FOREIGN KEY (order_status_id) REFERENCES OrderStatus(order_status_id)
);

-- Create OrderItem table
CREATE TABLE OrderItems (
  order_item_id INT NOT NULL PRIMARY KEY AUTO_INCREMENT,
  order_id INT NOT NULL,
  food_id INT NOT NULL,
  quantity INT NOT NULL,
  unit_price DECIMAL(10, 2) NOT NULL,
  FOREIGN KEY (order_id) REFERENCES Orders(order_id),
  FOREIGN KEY (food_id) REFERENCES FoodItems(food_id)
);

-- Create Diets table
CREATE TABLE Diets (
  diet_id INT NOT NULL PRIMARY KEY AUTO_INCREMENT,
  diet_name VARCHAR(255) NOT NULL
);



-- Mock data for UserLevels table
INSERT INTO UserLevels (level_name) VALUES
( 'Admin'),
( 'Regular'),
( 'Guest');

-- Mock data for Users table
INSERT INTO Users (username, fname, lname, password, email, user_level_id, created_at) VALUES
('Pekka', 'Pekka', 'Hamalainen', 'password123', 'pekka@example.com', 2, NOW()),
('Maija', 'Maija', 'Virtanen', 'securepass', 'maija@example.com', 3, NOW()),
('Juha', 'Juha', 'Koivisto', 'pass123', 'juha@example.com', 2, NOW());

-- Mock data for Menu table
INSERT INTO Menus (menu_name, menu_description, menu_image, created_at) VALUES
('Breakfast', 'Delicious breakfast options', 'breakfast.jpg', NOW()),
('Lunch', 'A variety of lunch items', 'lunch.jpg', NOW()),
('Dinner', 'Scrumptious dinner choices', 'dinner.jpg', NOW());

-- Mock data for FoodItem table
INSERT INTO FoodItems (food_id, food_name, quantity, unit_price, diet_description) VALUES
(1, 'Pancakes', 10, 8.99, 'Vegetarian'),
(2, 'Chicken Salad', 15, 12.99, 'Low Calorie'),
(3, 'Spaghetti Bolognese', 12, 14.99, 'Regular');

-- Mock data for OrderStatus table
INSERT INTO OrderStatus (order_status_name) VALUES
('Pending'),
('Processing'),
('Delivered');


-- Mock data for Order table
INSERT INTO Orders (user_id, order_date, order_status_id) VALUES
(1, NOW(), 1),
(2, NOW(), 2),
(3, NOW(), 3);

-- Mock data for OrderItem table
INSERT INTO OrderItems (order_id, food_id, quantity, unit_price) VALUES
(1, 1, 2, 8.99),
(1, 2, 1, 12.99),
(2, 3, 1, 14.99),
(3, 1, 1, 8.99),
(3, 2, 1, 12.99),
(3, 3, 1, 14.99);

-- Mock data for Diets table
INSERT INTO Diets (diet_id, diet_name) VALUES
(1, 'Vegetarian'),
(2, 'Low Calorie'),
(3, 'Regular');

SELECT * FROM Users;
SELECT * FROM Menus;
SELECT * FROM FoodItems;
SELECT * FROM OrderStatus;
SELECT * FROM OrderItems;
SELECT * FROM Diets;
SELECT * FROM Orders;



-- Deletion
DELETE FROM Menus WHERE menu_name = 'Breakfast';
DELETE FROM OrderItems WHERE order_item_id = 1;


-- Updates
UPDATE Users SET password = 'newpassword' WHERE username = 'Maija';
UPDATE FoodItems SET quantity = 20, unit_price = 9.99 WHERE food_id = 1;
UPDATE Orders SET order_status_id = 2 WHERE order_id = 2;
UPDATE Users SET username = "UusiPekka" WHERE user_id = 1;

--Queries
SELECT * FROM OrderItems WHERE quantity > 1;
SELECT order_date FROM Orders WHERE order_id = 1;
