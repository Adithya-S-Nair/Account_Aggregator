import jwt from 'jsonwebtoken';
import dotenv from 'dotenv';
dotenv.config();

const checkAuth = (req, res, next) => {
    try {
        const { accessToken } = req.cookies;
        if (!accessToken) {
            return res.status(401).json({ msg: 'Unauthorized: Missing token' });
        }
        jwt.verify(accessToken, process.env.SECRET, {}, (err, userData) => {
            if (err) {
                return res.status(401).json({ msg: 'Unauthorized: Invalid Token' });
            }
            console.log(userData);
            req.userId = userData.userId;
            req.userName = userData.userName;
            next();
        });
    } catch (err) {
        console.log(err);
        return res.status(500).json({ msg: 'Internal Server Error' });
    }
};

export default checkAuth;