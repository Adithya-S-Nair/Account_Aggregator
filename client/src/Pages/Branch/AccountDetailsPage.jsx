import React, { useContext } from 'react';
import tree from '../../images/tree.jpg';
import hdfc from '../../images/hdfc.png';
import southIndian from '../../images/southIndian.png';
import federalBank from '../../images/federalBankLogo.jpg';
import iciciBank from '../../images/ICICI-bank-logo.png';
import { useEffect } from 'react';
import { useState } from 'react';
import { AccountDetailContext } from '../../Context/AccountDetailContext';
import { useNavigate } from 'react-router-dom';

const AccountDetailsPage = () => {

  const [linkedAccounts, setLinkedAccounts] = useState([]);
  const { accountDetail } = useContext(AccountDetailContext)
  const img = federalBank;
  const navigate = useNavigate();

  const handleSubmit = () => {
    navigate('/branch/viewconsents')
  }
  console.log(accountDetail);
  return (
    <div className='flex justify-center'>
      <div className='w-2/3'>
        <h2 className="font-extrabold text-3xl tracking-normal	">Account Details</h2>
        <div className='flex mt-8'>
          <img src={tree} alt="tree" style={{ borderRadius: '50%', width: '120px', height: '120px' }} />
          <div className='grid content-center ms-4 '>
            <h2 className='font-bold text-xl'>{accountDetail.customerId}</h2>
            <p className='text-sm' style={{ color: 'rgb(62, 115, 152)' }}>{accountDetail.emailId}</p>
            <p className='text-sm' style={{ color: 'rgb(62, 115, 152)' }}>{accountDetail.mobileNo}</p>
          </div>
        </div>
        <h2 className='font-bold mt-8'>Linked Accounts</h2>
        {accountDetail.DiscoveredAccounts && accountDetail.DiscoveredAccounts.map((accounts) => (
          <div className='flex justify-between mt-4'>
            <div className='flex items-center'>
              <img src={img} alt="tree" style={{ borderRadius: '50%', width: '100px', height: '100px' }} />
              <div className='grid content-center ms-4 '>
                <h2 className='font-bold text-sm'>{accounts.FIType}</h2>
                <p className='text-sm' style={{ color: 'rgb(62, 115, 152)' }}>{accounts.accType}</p>
                <p className='text-sm' style={{ color: 'rgb(62, 115, 152)' }}>{accounts.linkRefNumber}</p>
                <p className='text-sm' style={{ color: 'rgb(62, 115, 152)' }}>{accounts.maskedAccNumber}</p>
              </div>
            </div>
            <div className='flex items-center'>
              <button onClick={handleSubmit} class="hover:bg-blue-700 text-black text-xs font-semibold	 py-2 px-4 rounded-xl" style={{ background: '#e7eef3' }}>
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