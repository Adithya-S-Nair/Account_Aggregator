import React from 'react';
import TextField from '@mui/material/TextField';
import Checkbox from '@mui/material/Checkbox';
import { FormControlLabel, FormGroup } from '@mui/material';

const LoginPage = () => {
  return (
    <div className='w-full pt-20' style={{ background: '#fafbfd' }}>
      <div className='flex flex-col items-center'>
        <div>
          <h2 className='font-bold mb-3'>Welcome back to Account Aggregator</h2>
          <p className='text-center text-sm mb-4'>Log in to your account</p>
        </div>

        <form className="w-1/3">
          <label className='font-semibold text-sm'>Username or Email</label><br />
          <input
            className="w-full rounded-xl mt-2 mb-3 text-sm"
            type="text"
            name="userName"
            placeholder='example@gmail.com'
            style={{
              height: '40px',
              borderColor: '#d1dde6',
              borderWidth: '1px',
              borderStyle: 'solid',
              padding: '0 10px',
            }} /> <br />
          <label className='font-semibold text-sm mt-3'>Password</label><br />
          <input
            className="w-full rounded-xl mt-2 text-sm"
            type="text"
            name="password"
            placeholder='Enter Password'
            style={{
              height: '40px',
              borderColor: '#d1dde6',
              borderWidth: '1px',
              borderStyle: 'solid',
              padding: '0 10px', // Adjust padding for better appearance

            }} /> <br />
          <FormGroup className='mt-3 mb-3'>
            <FormControlLabel control={<Checkbox />} label="Keep me signed in" />
          </FormGroup>
          <button className="w-full hover:bg-blue-700 text-white text-xs font-semibold py-2 px-4 rounded-xl" style={{ background: '#1395ec' }}>
            Log in
          </button>
        </form>

        <div className='mt-1'>
          <p className='flex justify-center underline text-xs mt-2' style={{ color: 'rgb(62, 115, 152)' }}>forget your username?</p>
          <p className='flex justify-center underline text-xs mt-2' style={{ color: 'rgb(62, 115, 152)' }}>or password?</p>
          <p className='flex justify-center underline text-xs mt-2' style={{ color: 'rgb(62, 115, 152)' }}>New to Account Aggregator?Sign up</p>        </div>
      </div>
    </div>
  )
}

export default LoginPage;
