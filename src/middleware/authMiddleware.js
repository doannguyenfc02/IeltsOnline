// middleware/authMiddleware.js
const jwt = require('jsonwebtoken');

module.exports = function(req, res, next) {
  const token = req.cookies?.token || req.headers?.['x-auth-token'];

  if (!token) {
    return res.redirect('/login');
  }

  try {
    const decoded = jwt.verify(token, 'your-secret-key');
    req.user = decoded.user;
    next();
  } catch (error) {
    res.redirect('/login');
  }
};
