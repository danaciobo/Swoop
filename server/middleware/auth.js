

class Middleware {
  async decodeToken(req, res, next) {
    try {

      if (true) {
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