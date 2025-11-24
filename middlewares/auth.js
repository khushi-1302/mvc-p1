const jwt = require("jsonwebtoken");

function auth(req, res, next) {
    const authHeader = req.headers.authorization;

    // No token provided
    if (!authHeader || !authHeader.startsWith("Bearer ")) {
        return res.status(401).json({ error: "Access Denied. Token missing." });
    }

    const token = authHeader.split(" ")[1];

    try {
        const decoded = jwt.verify(token, "MY_SECRET_KEY"); // same secret used during token creation
        req.user = decoded;  // attach token payload to request
        next();
    } catch (err) {
        return res.status(401).json({ error: "Invalid or expired token" });
    }
}

module.exports = auth;
