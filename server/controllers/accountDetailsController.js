import dotenv from 'dotenv';
dotenv.config();
import { makeRequest } from '../axios.js';

export const accountDetails = async (req, res) => {
    try {
        const { aaid } = req.params;

        const aaidResponse = await makeRequest.get(`/aa/branch/aaid?custid=${aaid}`);

        if (aaidResponse.status !== 200) {
            return res.status(401).json({ error: 'Internal error' });
        }

        const response = await makeRequest.post('/otp/create-otp', { uid: req.userId });

        if (response.status !== 200) {
            console.error(response.data);
            return res.status(500).json({ error: 'Internal Server Error' });
        }

        await makeRequest.post('/verify/sendotp', {
            to: aaidResponse.data.emailId,
            subject: "Otp for fetching consents",
            text: `Otp for fetching consent is : ${response.data.otp}`
        });

        return res.status(200).json({ otpref: response.data.otpRef });
    } catch (error) {
        console.error(error);
        return res.status(500).json({ error: 'Internal Server Error' });
    }
};

export const verifyConsentOtp = async (req, res) => {
    try {
        const response = await makeRequest.post("/verify/otp", {
            uid: req.userId,
            otpref: req.body.otpref,
            otp: req.body.otp,
            name: req.userName
        });

        if (response.data === 1) {
            const aaidResponse = await makeRequest.get(`/aa/branch/aaid?custid=${req.body.aaid}`);
            return res.status(200).json(aaidResponse.data);
        }
    } catch (error) {
        console.error(error);
        return res.status(500).json({ error: 'Internal Server Error' });
    }
};



export const getConsents = (req, res) => {
    // console.log(req.params.aaid);
    const { aaid } = req.params;

    makeRequest.get(`/aa/list/consent?custid=${aaid}`)
        .then((response) => {
            return res.status(200).json(response.data);
        }).catch((error) => {
            console.log(error);
            res.status(500).json({ error: 'Internal Server Error' });
        });
}

export const getConsentsById = (req, res) => {
    const { aaid, consentId } = req.params;
    let consents = {};
    makeRequest.get(`/aa/list/consent?custid=${aaid}`)
        .then((response) => {
            for(let i = 0; i< response.data.ConsentList.length; i++){
                if(response.data.ConsentList[i].consentId === consentId){
                     consents = response.data.ConsentList[i]
                }
            } 
            return res.status(200).json(consents);
             
        }).catch((error) => {
            console.log(error);
            res.status(500).json({ error: 'Internal Server Error' });
        });
}

export const getFiRequest = (req, res) => {
    // console.log(req.params.aaid);
    const { aaid, consentId } = req.params;

    makeRequest.get(`/aa/list/FIRequest?custId=${aaid}&consentId=${consentId}`)
        .then((response) => {
            return res.status(200).json(response.data);
        }).catch((error) => {
            console.log(error);
            res.status(500).json({ error: 'Internal Server Error' });
        });
}