import React from 'react';
import tree from '../../images/tree.jpg';
import hdfc from '../../images/hdfc.png';
import southIndian from '../../images/southIndian.png';
import federalBank from '../../images/federalBankLogo.jpg';
import iciciBank from '../../images/ICICI-bank-logo.png';
import { useEffect } from 'react';
import { useState } from 'react';

const AccountDetailsPage = () => {

  const [linkedAccounts, setLinkedAccounts] = useState([]);

  useEffect(() => {
    setLinkedAccounts([
      {
        img: iciciBank,
        username: 'ICICI Bank',
        email: 'ICICI@gmail.com'
      },
      {
        img: southIndian,
        username: 'Souht Indian Bank',
        email: 'southindianbank@gmail.com'
      },
      {
        img: federalBank,
        username: 'Federal Bank',
        email: 'federalBank@gmail.com'
      },
    ])
  }, [])
  return (
    <div className='flex justify-center'>
      <div className='w-2/3'>
        <h2 className="font-extrabold text-3xl tracking-normal	">Account Details</h2>
        <div className='flex mt-8'>
          <img src={tree} alt="tree" style={{ borderRadius: '50%', width: '120px', height: '120px' }} />
          <div className='grid content-center ms-4 '>
            <h2 className='font-bold text-xl'>Prince Jain</h2>
            <p className='text-sm' style={{ color: 'rgb(62, 115, 152)' }}>princejain@gmail.com</p>
            <p className='text-sm' style={{ color: 'rgb(62, 115, 152)' }}>@princej</p>
          </div>
        </div>
        <h2 className='font-bold mt-8'>Linked Accounts</h2>
        {linkedAccounts && linkedAccounts.map((accounts) => (
          <div className='flex justify-between mt-4'>
            <div className='flex items-center'>
              <img src={accounts.img} alt="tree" style={{ borderRadius: '50%', width: '50px', height: '50px' }} />
              <div className='grid content-center ms-4 '>
                <h2 className='font-bold text-sm'>{accounts.username}</h2>
                <p className='text-sm' style={{ color: 'rgb(62, 115, 152)' }}>{accounts.email}</p>
              </div>
            </div>
            <div className='flex items-center'>
              <button class="hover:bg-blue-700 text-black text-xs font-semibold	 py-2 px-4 rounded-xl" style={{ background: '#e7eef3' }}>
                View Consents
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}

export default AccountDetailsPage