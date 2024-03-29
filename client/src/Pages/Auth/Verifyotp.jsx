import React, { useContext, useEffect, useState } from 'react'
import OtpInput from 'react-otp-input';
import { useNavigate } from 'react-router-dom';
import { OtpContext } from '../../Context/OtpContext';
import { makeRequest } from '../../Axios';

const Verifyotp = () => {
    const [otp, setOtp] = useState('')
    const navigate = useNavigate()
    const { otpData } = useContext(OtpContext)

    const handleChange = (newValue) => {
        setOtp(newValue)
    }

    useEffect(() => {
        if (!otpData) {
            navigate('/login')
        }
    }, [otpData])

    const handleSubmit = () => {
        makeRequest.post("/verify/otp", {
            uid: otpData.Uid,
            otpref: otpData.OtpRef,
            otp
        })
            .then((res) => {
                if (res.data === 1) {
                    navigate('/branch/viewconsents')
                }
            })
            .catch((err) => {
                console.log(err);
            })
    }

    return (
        <div className='flex justify-center'>
            <div className='w-1/2'>
                <div>
                    <h1 className='text-4xl font-extrabold mt-16'>Verify your OTP</h1>
                    <p className='mb-4'>please enter your user ID and the 6-digit code you recieved</p>
                </div>
                <hr />
                <div className='flex flex-col mt-5 mb-5'>
                    <p style={{ color: 'black' }}>Please Enter Your OTP:</p>
                </div>
                <div className="flex justify-center mt-6">
                    <OtpInput
                        value={otp}
                        onChange={handleChange}
                        shouldAutoFocus={true}
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
                <div className='flex items-center justify-end gap-4 mt-8'>
                    <button class="hover:bg-blue-700 text-black font-bold py-2 px-4 rounded-xl" style={{ background: '#e7eef3' }}>
                        Back
                    </button>
                    <button onClick={handleSubmit} class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-xl">
                        Verify
                    </button>
                </div>
            </div>
        </div>
    )
}

export default Verifyotp