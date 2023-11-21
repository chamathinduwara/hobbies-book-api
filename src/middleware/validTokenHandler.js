const asyncHandler = require("express-async-handler");
const jwt = require("jsonwebtoken");

const validToken = asyncHandler(async (req, res, next) => {
    let token;
    let authHeader = req.headers.authorization || req.headers.Authorization;
    if (authHeader && authHeader.startsWith("Bearer")) {
        token = authHeader.split(" ")[1];
        jwt.verify(token, process.env.ACCESS_TOKEN_SECRET, (err, user) => {
            if (err) {
                res.status(403).json({ success: false, msg: "Invalid token" });
                return;
            }
            req.user = user;
            next();
        });
    }
    else {
        res.status(401).json({ success: false, msg: "Token not found" });
        return;
    }
});

module.exports = validToken;