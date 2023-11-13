DROP DATABASE IF EXISTS restaurantapp;
CREATE DATABASE restaurantapp;
USE restaurantapp;

CREATE TABLE UserLevels (
  user_level_id INT NOT NULL PRIMARY KEY AUTO_INCREMENT,
  level_name VARCHAR(255) NOT NULL
);

CREATE TABLE Users (
  user_id INT NOT NULL PRIMARY KEY AUTO_INCREMENT,
  username VARCHAR(255) NOT NULL UNIQUE,
  fname VARCHAR(255) NOT NULL,
  lname VARCHAR(255) NOT NULL,
  password VARCHAR(255) NOT NULL,
  email VARCHAR(255) NOT NULL UNIQUE,
  user_level_id INT NOT NULL FOREIGN KEY REFERENCES UserLevels(user_level_id),
  created_at TIMESTAMP NOT NULL
);

CREATE TABLE Menu (
  menu_id INT NOT NULL PRIMARY KEY AUTO_INCREMENT,
  menu_name VARCHAR(255) NOT NULL,
  menu_description VARCHAR(255) NOT NULL,
  menu_image VARCHAR(255) NOT NULL,
  created_at TIMESTAMP NOT NULL
);

CREATE TABLE FoodItem (
  food_id INT PRIMARY KEY,
  food_name VARCHAR(255) NOT NULL,
  quantity INT NOT NULL,
  unit_price INT NOT NULL,
  diet_description VARCHAR(255) NOT NULL,
);

CREATE TABLE OrderItem (
    order_item_id INT PRIMARY KEY,
    order_id INT NOT NULL,
    food_id INT NOT NULL,
    quantity INT NOT NULL,
    unit_price DECIMAL(10, 2) NOT NULL,
    FOREIGN KEY (order_id) REFERENCES Order(OrderId),
    FOREIGN KEY (FoodId) REFERENCES FoodItem(FoodId)
);

CREATE TABLE Order (
    order_id INT PRIMARY KEY,
    user_id INT NOT NULL,
    order_date DATETIME NOT NULL,
    order_status VARCHAR(255) NOT NULL,
    FOREIGN KEY (UserId) REFERENCES User(UserId)
    FOREIGN KEY (order_status) REFERENCES OrderStatus(order_status_id)
);

CREATE TABLE OrderStatus (
    order_status_id INT PRIMARY KEY,
    order_status_name VARCHAR(255) NOT NULL
);

CREATE  TABLE Diets (
    diet_id INT PRIMARY KEY,
    diet_name VARCHAR(255) NOT NULL
);



-- Mock data for UserLevels table
INSERT INTO UserLevels (level_name) VALUES
( 'Admin'),
( 'Regular'),
( 'Guest');

-- Mock data for Users table
INSERT INTO Users (username, fname, lname, password, email, user_level_id, created_at) VALUES
('Pekka', 'Pekka', 'Hämäläinen', 'password123', 'pekka@example.com', 2, NOW()),
('Maija', 'Maija', 'Virtanen', 'securepass', 'maija@example.com', 3, NOW()),
('Juha', 'Juha', 'Koivisto', 'pass123', 'juha@example.com', 2, NOW());

-- Mock data for Menu table
INSERT INTO Menu (menu_name, menu_description, menu_image, created_at) VALUES
('Breakfast', 'Delicious breakfast options', 'breakfast.jpg', NOW()),
('Lunch', 'A variety of lunch items', 'lunch.jpg', NOW()),
('Dinner', 'Scrumptious dinner choices', 'dinner.jpg', NOW());

-- Mock data for FoodItem table
INSERT INTO FoodItem (food_id, food_name, quantity, unit_price, diet_description) VALUES
(1, 'Pancakes', 10, 8.99, 'Vegetarian'),
(2, 'Chicken Salad', 15, 12.99, 'Low Calorie'),
(3, 'Spaghetti Bolognese', 12, 14.99, 'Regular');

-- Mock data for OrderStatus table
INSERT INTO OrderStatus (order_status_name) VALUES
('Pending'),
('Processing'),
('Delivered');

-- Mock data for Order table
INSERT INTO Order (user_id, order_date, order_status) VALUES
(1, NOW(), 'Pending'),
(2, NOW(), 'Processing'),
(3, NOW(), 'Delivered');

-- Mock data for OrderItem table
INSERT INTO OrderItem (order_id, food_id, quantity, unit_price) VALUES
(1, 1, 2, 17.98),
(2, 2, 1, 12.99),
(3, 3, 3, 44.97);

-- Mock data for Diets table
INSERT INTO Diets (diet_id, diet_name) VALUES
(1, 'Vegetarian'),
(2, 'Low Calorie'),
(3, 'Regular');
