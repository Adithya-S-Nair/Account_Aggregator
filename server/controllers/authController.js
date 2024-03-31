import dotenv from 'dotenv';
dotenv.config();
import jwt from 'jsonwebtoken';
import { makeRequest } from '../axios.js';

export const login = (req, res) => {

    makeRequest.post('/verify/login', req.body)
        .then((response) => {
            if (response.status === 200) {
                console.log(response.data);
                
                return res.status(200).json(response.data)
            }
            else
                return res.status(401)
        }).catch((error) => {
            return res.status(500).json({ "error": error.message })
        })

};

export const verifyOtp = (req, res) => {
    
    makeRequest.post('/verify/otp', {
        uid: req.body.uid,
        otpref: req.body.otpref,
        otp: req.body.otp,
        name: req.body.name,
    })
        .then((response) => {
            if (response.data) {
                console.log(req.body);    
                const token = jwt.sign(
                    {
                        userId: req.body.uid,
                        userName: req.body.name,
                    },
                    process.env.SECRET
                );
                res.cookie("accessToken", token, { httpOnly: true }).status(200).json(req.body);            
            }
            else
                return res.status(401)
        }).catch((error) => {
            return res.status(500).json({ "error": error.message })
        })
}

export const logout = (req, res) => {
    return res
        .clearCookie("accessToken")
        .status(200)
        .json({ message: "Successfully logged out" });
}

export const verify = (req, res) => {
    if (req.userId) {
        return res.status(200).json({
            msg: "authorization successful",
            userId: req.userId,
            userName: req.userName,
        })
    }
}