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
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import PersonIcon from '@mui/icons-material/Person';
import Avatar from '@mui/material/Avatar';
import AccountBalanceIcon from '@mui/icons-material/AccountBalance';
import { IconButton, Tooltip } from '@mui/material';

const AccountDetailsPage = () => {
  const [linkedAccounts, setLinkedAccounts] = useState([]);
  const { accountDetail } = useContext(AccountDetailContext)
  const img = federalBank;
  const navigate = useNavigate();

  const handleSubmit = () => {
    navigate('/branch/viewconsents')
  }

  const goBack = () => {
    navigate('/branch/verify')
  };
  // console.log(accountDetail);
  return (
    <div className='flex justify-center'>
      <div className='w-2/3'>
        <div className='flex items-center gap-x-3'>
          <div className="mt-[10px]">
            <Tooltip title="Go Back">
              <IconButton onClick={goBack}>
                <ArrowBackIcon />
              </IconButton>
            </Tooltip>
          </div>
          <h2 className="font-extrabold text-3xl tracking-normal">Account Details</h2>
        </div>
        <div className="flex justify-between">
          <div className='flex mt-8'>
            <Avatar style={{ padding: '2em' }}>
              <PersonIcon />
            </Avatar>
            <div className='grid content-center ms-4 '>
              <h2 className='font-bold text-xl'>{accountDetail.customerId}</h2>
              <p className='text-sm' style={{ color: 'rgb(62, 115, 152)' }}>{accountDetail.emailId}</p>
              <p className='text-sm' style={{ color: 'rgb(62, 115, 152)' }}>{accountDetail.mobileNo}</p>
            </div>
          </div>
          <div className='flex items-center'>
            <button onClick={handleSubmit} class="hover:bg-blue-700 text-black text-xs font-semibold	 py-2 px-4 rounded-xl" style={{ background: '#e7eef3' }}>
              View Consents
            </button>
          </div>
        </div>
        <h2 className='font-bold mt-8'>Linked Accounts</h2>
        {accountDetail.DiscoveredAccounts && accountDetail.DiscoveredAccounts.map((accounts) => (
          <div className='flex justify-between mt-4'>
            <div className='flex items-center'>
              <Avatar style={{ padding: '1.2em' }}>
                <AccountBalanceIcon />
              </Avatar>
              <div className='grid content-center ms-4 '>
                <h2 className='font-bold text-sm'>{accounts.FIType}</h2>
                <p className='text-sm' style={{ color: 'rgb(62, 115, 152)' }}>{accounts.accType}</p>
                <p className='text-sm' style={{ color: 'rgb(62, 115, 152)' }}>{accounts.linkRefNumber}</p>
                <p className='text-sm' style={{ color: 'rgb(62, 115, 152)' }}>{accounts.maskedAccNumber}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}

export default AccountDetailsPage