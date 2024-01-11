const secretApp = '1234567890';

function checkSecretMiddleware(req, res, next) {
  if (req.headers.secretapp !== secretApp) {
    return res.status(401).send('Unauthorized');
  }
  next();
}

module.exports.checkSecretMiddleware = checkSecretMiddleware;