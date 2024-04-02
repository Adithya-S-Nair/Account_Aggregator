import express from 'express';
import checkAuth from '../middlewares/checkAuth.js';
import { accountDetails, verifyConsentOtp, getConsents, getFiRequest, getConsentsById } from '../controllers/accountDetailsController.js';

const router = express.Router();

// Define auth routes
router.get('/accountdetails/:aaid', checkAuth, accountDetails);
router.post('/verifyconsentotp', checkAuth, verifyConsentOtp);
router.get('/getconsents/:aaid', checkAuth, getConsents);
router.get('/getconsentsbyid/:aaid/:consentId', checkAuth, getConsentsById);
router.get('/getfirequest/:aaid/:consentid', checkAuth, getFiRequest);

export default router;