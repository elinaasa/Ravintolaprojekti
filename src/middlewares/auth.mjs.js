// authMiddleware.js

const jwt = require('jsonwebtoken');

// Sample secret key for JWT (replace with your own secret)
const secretKey = 'your-secret-key';

// Middleware to authenticate users using JWT
const authMiddleware = (req, res, next) => {
  // Get the token from the request header
  const token = req.header('Authorization');

  // Check if the token is present
  if (!token) {
    return res.status(401).json({message: 'Unauthorized - Token not provided'});
  }

  try {
    // Verify the token using the secret key
    const decoded = jwt.verify(token, secretKey);

    // Attach the decoded user information to the request for further use
    req.user = decoded;

    // Continue to the next middleware or route handler
    next();
  } catch (error) {
    // Token verification failed
    return res.status(401).json({message: 'Unauthorized - Invalid token'});
  }
};

module.exports = authMiddleware;
