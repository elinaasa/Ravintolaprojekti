CREATE USER 'restaurant'@'localhost' IDENTIFIED BY 'restaurant;
GRANT ALL PRIVILEGES ON `restaurantapp`.* TO 'restaurantapp'@'localhost';
FLUSH PRIVILEGES;
