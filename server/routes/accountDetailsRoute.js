import express from 'express';
import checkAuth from '../middlewares/checkAuth.js';
import { accountDetails, getConsents } from '../controllers/accountDetailsController.js';

const router = express.Router();

// Define auth routes
router.get('/accountdetails/:aaid', checkAuth, accountDetails);                                                            
router.get('/getconsents/:aaid', checkAuth, getConsents);                                                            

export default router;