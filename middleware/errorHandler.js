function logError(err, req, res, next) {
  console.log('logError');
  console.error(err);
  next(err);
}

// eslint-disable-next-line no-unused-vars
function errorHandler(err, req, res, next) {
  console.log('errorHandler');
  res.status(500).json({
    message: err.message,
    stack: err.stack,
  });
}

function boomErrorHandler(err, req, res, next) {
  if(err.isBoom === true) {
    const { output } = err
    res.status(output.statusCode).json(output.payload);
  };

  next(err);
}

module.exports = { logError, errorHandler, boomErrorHandler };
