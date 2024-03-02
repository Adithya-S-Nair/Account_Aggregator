import React, { useEffect, useState } from 'react'
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';

const ViewConsents = () => {

    const [consentData, setConsentData] = useState()

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

    return (
        <div className="flex justify-center">
            <div className='w-2/3'>
                <h1 className='text-4xl font-extrabold'>Consent Management</h1>
                <input
                    type="text"
                    style={{
                        background: '#e7eef3',
                        padding: '10px',
                    }}
                    placeholder='🔍    Search for a consent'
                    className='text-black-500 rounded-lg focus:bg mb-2 w-full mt-5'
                />
                <div className="flex justify-center">
                    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
                        {consentData && consentData.map((consent) => (
                            <Card key={consent.consentId} className='mt-5 cursor-pointer' sx={{ minWidth: '13em', width: 'fit-content' }}>
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
        </div>
    )
}

export default ViewConsents