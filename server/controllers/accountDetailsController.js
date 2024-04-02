import dotenv from 'dotenv';
dotenv.config();
import { makeRequest } from '../axios.js';

export const accountDetails = (req, res) => {
    console.log(req.params.aaid);
    const { aaid } = req.params;
    console.log(aaid);
    makeRequest.get(`/aa/branch/aaid?custid=${aaid}`)
        .then((response) => {
            return res.status(200).json(response.data);
        }).catch((error) => {
            console.log(error);
            res.status(500).json({ error: 'Internal Server Error' });
        });
}

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