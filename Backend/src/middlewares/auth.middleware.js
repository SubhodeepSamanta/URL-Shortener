import { findUserById } from "../dao/user.js";
import User from "../models/user.model.js";
import { verifyToken } from "../utils/helper.js";

export const authMiddleware = async (req, res, next) => {
    try {
        const token = req.cookies.accessToken;
        if (!token) return res.status(401).json({ message: "No token provided" });
        const decoded = await verifyToken(token);
        const user = await User.findById(decoded.id);
        if (!user) return res.status(401).json({ message: "Unauthorised" });
        req.user = user;
        next();
    } catch (err) {
        if (err.name === "TokenExpiredError") {
            return res.status(401).json({ message: "Token expired" });
        }
        return res.status(401).json({ message: err.message });
    }
}