const admin = require('../config/firebase-config')

class Middleware {
  async decodeToken(req, res, next) {
    try {
      const token = req.headers.authorization.split(' ')[1];

      const decodedValue = await admin.auth().verifyIdToken(token);
      if (decodedValue) {
        return next();
      }
      return res.status(401).json({ message: 'Please log in first' })
    } catch (e) {
      console.log(e);
      return res.status(500).json({ message: 'Internal error' })
    }
  }
}

module.exports = new Middleware();