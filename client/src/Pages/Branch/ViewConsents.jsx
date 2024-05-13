import React, { useContext, useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import DatePickerModal from '../../Components/DatePickerModal';
import { makeRequest } from '../../Axios';
import { AccountDetailContext } from '../../Context/AccountDetailContext';
import moment from 'moment';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import { IconButton, Tooltip } from '@mui/material';

const ViewConsents = () => {
    const navigate = useNavigate();
    // const [consentData, setConsentData] = useState()
    const [filteredList, setFilteredList] = useState([])
    const [dateModalOpen, setDateModalOpen] = useState(false)
    const { aaid, setAaid, consentData, setConsentData } = useContext(AccountDetailContext)


    useEffect(() => {
        setFilteredList(consentData)
    }, [consentData])

    useEffect(() => {
        makeRequest.get(`/accountdetail/getconsents/${aaid}`)
            .then((res) => {
                setConsentData(res.data.ConsentList)
            })
            .catch((error) => {
                console.log(error);
            })
    }, [])

    // console.log(consentData);

    const handleSelectedConsent = (consentId) => {
        navigate(`/branch/viewfireq/${consentId}`);
    }

    const handleKeyChange = (event) => {
        const key = event.target.value;
        const filteredList = consentData.filter((item) => {
            return Object.values(item).some(
                (field) =>
                    field &&
                    field.toString().toLowerCase().includes(key.toLocaleLowerCase())
            );
        })
        setFilteredList(filteredList)
    }

    const goBack = () => {
        navigate('/branch/accountdetails')
    };

    return (
        <div className="flex justify-center">
            <div className='w-2/3'>
                <div className='flex justify-between items-center'>
                    <div className='flex items-center gap-x-3'>
                        <div className="mt-[10px]">
                            <Tooltip title="Go Back">
                                <IconButton>
                                    <ArrowBackIcon className='cursor-pointer' onClick={goBack} />
                                </IconButton>
                            </Tooltip>
                        </div>
                        <h1 className='text-4xl font-extrabold'>Consent Management</h1>
                    </div>
                    <button onClick={() => { setDateModalOpen(true) }} className='p-2 rounded-lg mt-3 flex items-center gap-5' style={{ background: 'rgb(231, 238, 243)' }}>
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M6.75 3v2.25M17.25 3v2.25M3 18.75V7.5a2.25 2.25 0 0 1 2.25-2.25h13.5A2.25 2.25 0 0 1 21 7.5v11.25m-18 0A2.25 2.25 0 0 0 5.25 21h13.5A2.25 2.25 0 0 0 21 18.75m-18 0v-7.5A2.25 2.25 0 0 1 5.25 9h13.5A2.25 2.25 0 0 1 21 11.25v7.5m-9-6h.008v.008H12v-.008ZM12 15h.008v.008H12V15Zm0 2.25h.008v.008H12v-.008ZM9.75 15h.008v.008H9.75V15Zm0 2.25h.008v.008H9.75v-.008ZM7.5 15h.008v.008H7.5V15Zm0 2.25h.008v.008H7.5v-.008Zm6.75-4.5h.008v.008h-.008v-.008Zm0 2.25h.008v.008h-.008V15Zm0 2.25h.008v.008h-.008v-.008Zm2.25-4.5h.008v.008H16.5v-.008Zm0 2.25h.008v.008H16.5V15Z" />
                        </svg>
                        Sort by date
                    </button>
                </div>
                <input
                    type="text"
                    style={{
                        background: '#e7eef3',
                        padding: '10px',
                    }}
                    placeholder='🔍    Search for a consent'
                    className='text-black-500 rounded-lg focus:bg mb-2 w-full mt-5'
                    onChange={handleKeyChange}
                />
                <div className="flex justify-center">
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
                        {filteredList && filteredList.map((consent) => (
                            <Card
                                key={consent.consentId}
                                className='mt-5 cursor-pointer'
                                sx={{ minWidth: '13em', width: 'fit-content' }}
                                onClick={() => { handleSelectedConsent(consent.consentId) }}
                            >
                                <CardContent>
                                    <Typography sx={{ fontSize: 16 }} color="text.primary" gutterBottom>
                                        {consent.consentId}
                                    </Typography>
                                    <Typography sx={{ mb: 1.5, fontSize: 14 }} color="text.secondary">
                                        {consent.status}
                                    </Typography>
                                    <Typography variant="body2">
                                        {`${moment(consent.consentDetail.consentStart).format('YYYY-MM-DD')} - ${moment(consent.consentDetail.consentExpiry).format('YYYY-MM-DD')}`}
                                    </Typography>
                                </CardContent>
                            </Card>
                        ))
                        }
                    </div>
                </div>
            </div>
            <DatePickerModal
                dateModalOpen={dateModalOpen}
                setDateModalOpen={setDateModalOpen}
                consentData={consentData}
                filteredData={filteredList}
                setFilteredData={setFilteredList}
            />

        </div>

    )
}

export default ViewConsents