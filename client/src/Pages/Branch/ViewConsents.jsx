import React, { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import DatePickerModal from '../../Components/DatePickerModal';

const ViewConsents = () => {
    const navigate = useNavigate();
    const [consentData, setConsentData] = useState()
    const [filteredList, setFilteredList] = useState([])
    const [dateModalOpen, setDateModalOpen] = useState(false)

    useEffect(() => {
        setFilteredList(consentData)
    }, [consentData])

    useEffect(() => {
        setConsentData([
            {
                consentId: 1,
                consentName: 'Consent 1',
                consentType: 'xyz',
                consentFrom: '10/10/2023',
                consentTill: '10/10/2025'
            },
            {
                consentId: 2,
                consentName: 'Consent 2',
                consentType: 'abc',
                consentFrom: '12/15/2023',
                consentTill: '12/15/2025'
            },
            {
                consentId: 3,
                consentName: 'Consent 3',
                consentType: 'pqr',
                consentFrom: '05/20/2023',
                consentTill: '05/20/2025'
            },
            {
                consentId: 4,
                consentName: 'Consent 4',
                consentType: 'lmn',
                consentFrom: '08/08/2023',
                consentTill: '08/08/2025'
            },
            {
                consentId: 5,
                consentName: 'Consent 5',
                consentType: 'def',
                consentFrom: '03/03/2023',
                consentTill: '03/03/2025'
            },
            {
                consentId: 6,
                consentName: 'Consent 6',
                consentType: 'ghi',
                consentFrom: '07/07/2023',
                consentTill: '07/07/2025'
            },
            {
                consentId: 7,
                consentName: 'Consent 7',
                consentType: 'jkl',
                consentFrom: '11/11/2023',
                consentTill: '11/11/2025'
            },
            {
                consentId: 8,
                consentName: 'Consent 8',
                consentType: 'uvw',
                consentFrom: '04/04/2023',
                consentTill: '04/04/2025'
            },
            {
                consentId: 9,
                consentName: 'Consent 9',
                consentType: 'rst',
                consentFrom: '09/09/2023',
                consentTill: '09/09/2025'
            },
            {
                consentId: 10,
                consentName: 'Consent 10',
                consentType: 'opq',
                consentFrom: '06/06/2023',
                consentTill: '06/06/2025'
            }
        ])
    }, [])

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

    return (
        <div className="flex justify-center">
            <div className='w-2/3'>
                <div className='flex justify-between items-center'>
                    <h1 className='text-4xl font-extrabold'>Consent Management</h1>
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
                                        {consent.consentName}
                                    </Typography>
                                    <Typography sx={{ mb: 1.5, fontSize: 14 }} color="text.secondary">
                                        {consent.consentType}
                                    </Typography>
                                    <Typography variant="body2">
                                        {`${consent.consentFrom} - ${consent.consentTill}`}
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