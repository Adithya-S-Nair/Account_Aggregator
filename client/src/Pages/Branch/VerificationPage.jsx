import React, { useContext, useState } from 'react'
import OtpInput from 'react-otp-input';
import ManageSearchIcon from '@mui/icons-material/ManageSearch';
import { makeRequest } from '../../Axios';
import { Navigate, useNavigate } from 'react-router-dom';
import AccountDetailsPage from './AccountDetailsPage';
import { AccountDetailContext } from '../../Context/AccountDetailContext';
import CircularProgress from '@mui/material/CircularProgress';
import Box from '@mui/material/Box';

const VerificationPage = () => {
    const [otp, setOtp] = useState('')
    const [otpRef, setOtpRef] = useState('')
    const [loading, setLoading] = useState(false)
    const { setAccountDetail, aaid, setAaid } = useContext(AccountDetailContext)
    const navigate = useNavigate();

    const handleChange = (newValue) => {
        setOtp(newValue)
    }

    const handleaaid = (e) => {
        setAaid(e.target.value)
    }

    const handleSubmit = () => {
        setLoading(true)
        makeRequest.get(`/accountdetail/accountdetails/${aaid}`)
            .then((res) => {
                setOtpRef(res.data.otpref);
            })
            .catch((error) => {
                console.log(error);
            })
            .finally(() => {
                setLoading(false)
            })
    }

    const verifyOtp = () => {
        setLoading(true)
        makeRequest.post('/accountdetail/verifyconsentotp', {
            otpref: otpRef,
            aaid,
            otp
        })
            .then((response) => {
                if (response.status === 200) {
                    setAccountDetail(response.data)
                    navigate('/branch/accountdetails')
                }
            })
            .catch((err) => {
                console.log(err);
            })
            .finally(() => {
                setLoading(false)
            })
    }

    return (
        <>
            <div className='flex justify-center'>
                <div className='w-1/2'>
                    <div>
                        <h1 className='text-4xl font-extrabold'>Verify your details</h1>
                        <p>please enter your user ID and the 6-digit code you recieved</p>
                    </div>
                    <div className='flex flex-col gap-2 mt-5 mb-5'>
                        <label htmlFor="">AA ID :</label>
                        <div className='flex items-center gap-2 justify-between mb-2'>
                            <input
                                type="text"
                                style={{
                                    background: '#e7eef3',
                                    padding: '10px',
                                }}
                                placeholder='Enter your aaid'
                                className='text-black-500 rounded-lg focus:bg w-full'
                                onChange={handleaaid}

                            />
                            <button onClick={handleSubmit} class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-xl">
                                <ManageSearchIcon />
                            </button>
                        </div>
                    </div>
                    {otpRef &&
                        <>
                            <hr />
                            <div className="flex items-center justify-between mt-5 mb-5">
                                <div className='flex flex-col'>
                                    <p style={{ color: 'rgb(62, 115, 152)' }}>Send again</p>
                                    <p>0:20</p>
                                </div>
                                <div className='flex flex-col'>
                                    <p style={{ color: 'rgb(62, 115, 152)' }}>Resend via email</p>
                                    <p>office@secureid.com</p>
                                </div>
                            </div>
                            <hr />
                            <div className='flex flex-col mt-5 mb-5'>
                                <p style={{ color: 'rgb(62, 115, 152)' }}>Use a different number</p>
                                <p>2-4-5-7-2-1</p>
                            </div>
                            <div className="flex justify-center">
                                <OtpInput
                                    value={otp}
                                    onChange={handleChange}
                                    numInputs={6}
                                    inputStyle={{
                                        background: '#e7eef3',
                                        padding: '10px',
                                        color: 'black',
                                        width: '3em',
                                        borderRadius: '0.7em'
                                    }}
                                    renderSeparator={<span>&nbsp;&nbsp;&nbsp;</span>}
                                    renderInput={(props) => <input
                                        {...props}
                                    />}
                                />
                            </div>
                            <div className='flex items-center justify-end gap-4 mt-5'>
                                <button class="hover:bg-blue-700 text-black font-bold py-2 px-4 rounded-xl" style={{ background: '#e7eef3' }}>
                                    Back
                                </button>
                                <button onClick={verifyOtp} class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-xl">
                                    Verify
                                </button>
                            </div>
                        </>
                    }
                </div>
            </div>
            {loading &&
                <Box sx={{ display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                    <CircularProgress />
                </Box>
            }
        </>

    )
}

export default VerificationPage