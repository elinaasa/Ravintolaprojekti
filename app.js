// app.js
const express = require('express');
const menuRouter = require('./routes/menuRouter'); // Adjust the path based on your project structure

const app = express();

// Use the menuRouter for the /menu endpoint
app.use('/api/menu', menuRouter);

// Other middleware and configurations...

// Start the server
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
