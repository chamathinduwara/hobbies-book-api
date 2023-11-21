const errorHandler = (err, req, res, next) => {
    console.log(err.stack.red);
    const statusCode = res.statusCode === 200 ? 500 : res.statusCode;
    res.status(statusCode).json({ success: false, error: err.message });
};

module.exports = errorHandler;