import express from 'express';
import checkAuth from '../middlewares/checkAuth.js';
import { login, logout, verify, verifyOtp } from '../controllers/authController.js';

const router = express.Router();

// Define auth routes
router.post('/login', login);
router.post('/verifyotp', verifyOtp);
router.get('/logout', checkAuth, logout);
router.get('/verify', checkAuth, verify);

export default router;