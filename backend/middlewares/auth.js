// // backend/middleware/auth.js

// const jwt = require('jsonwebtoken');
// const JWT_SECRET = process.env.JWT_SECRET || 'devSecret@2025';

// module.exports = function (req, res, next) {
//   const authHeader = req.headers['authorization'];
//   const token = authHeader && authHeader.split(' ')[1]; // Format: "Bearer <token>"

//   if (!token) {
//     return res.status(401).json({ message: 'No token provided' });
//   }

//   try {
//     const decoded = jwt.verify(token, JWT_SECRET);
//     req.user = decoded; // Store user info from token
//     next();
//   } catch (err) {
//     res.status(403).json({ message: 'Invalid or expired token' });
//   }
// };

const jwt = require('jsonwebtoken');

const JWT_SECRET = process.env.JWT_SECRET || 'devSecret@2025';

module.exports = function (req, res, next) {
  const token = req.header('Authorization')?.replace('Bearer ', '');

  if (!token) {
    return res.status(401).json({ message: 'Access denied. No token provided.' });
  }

  try {
    const decoded = jwt.verify(token, JWT_SECRET);
    req.user = decoded; // You can access this in routes
    next();
  } catch (err) {
    res.status(400).json({ message: 'Invalid token.' });
  }
};
