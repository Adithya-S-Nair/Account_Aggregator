import dotenv from 'dotenv';
dotenv.config();
import { makeRequest } from '../axios.js';

export const accountDetails = (req, res) => {
    console.log(req.params.aaid);
    const {aaid} = req.params;

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
    const {aaid} = req.params;

    makeRequest.get(`/aa/list/consent?custid=${aaid}`)
    .then((response) => {
        return res.status(200).json(response.data);
    }).catch((error) => {
        console.log(error);
        res.status(500).json({ error: 'Internal Server Error' });
    });
}

export const getFiRequest = (req, res) => {
    // console.log(req.params.aaid);
    const {aaid, consentId} = req.params;

    makeRequest.get(`/aa/list/FIRequest?custId=${aaid}&consentId=${consentId}`)
    .then((response) => {
        return res.status(200).json(response.data);
    }).catch((error) => {
        console.log(error);
        res.status(500).json({ error: 'Internal Server Error' });
    });
}