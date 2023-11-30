CREATE USER 'restaurant'@'localhost' IDENTIFIED BY 'restaurant';
GRANT ALL PRIVILEGES ON `restaurantapp`.* TO 'restaurant'@'localhost';
FLUSH PRIVILEGES;
