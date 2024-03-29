import React, { useEffect, useState } from 'react'

const FiReq = () => {
    const [fiReqs, setFiReqs] = useState();

    useEffect(() => {
        setFiReqs([
            {
                id: 1,
                title: 'Report for financial information request #98765',
                requestedAgo: 'Requested 3 days ago',
            },
            {
                id: 2,
                title: 'Summary for financial request #54321',
                requestedAgo: 'Requested 1 day ago',
            },
            {
                id: 3,
                title: 'Detailed report for request #11111',
                requestedAgo: 'Requested 7 days ago',
            },
            {
                id: 4,
                title: 'Financial analysis for request #22222',
                requestedAgo: 'Requested 2 days ago',
            },
            {
                id: 5,
                title: 'Report for request #33333',
                requestedAgo: 'Requested 5 days ago',
            },
            {
                id: 6,
                title: 'Financial overview for request #44444',
                requestedAgo: 'Requested 4 days ago',
            },
            {
                id: 7,
                title: 'Summary report for request #55555',
                requestedAgo: 'Requested 6 days ago',
            },
            {
                id: 8,
                title: 'Detailed analysis for request #66666',
                requestedAgo: 'Requested 1 week ago',
            },
            {
                id: 9,
                title: 'Financial report for request #77777',
                requestedAgo: 'Requested 2 weeks ago',
            },
            {
                id: 10,
                title: 'Overview for request #88888',
                requestedAgo: 'Requested 4 weeks ago',
            },
        ])
    }, [])

    return (
        <div className='flex justify-center'>
            <div className="w-2/3">
                <h1 className='text-4xl font-extrabold mb-5'>Consent details</h1>
                <div>
                    <div className="flex items-center gap-24 p-5">
                        <span className='w-24' style={{ color: 'rgb(62, 115, 152)' }}>Consent id</span>
                        <span>1234567</span>
                    </div>
                    <hr />
                    <div className="flex items-center gap-24 p-5">
                        <span className='w-24' style={{ color: 'rgb(62, 115, 152)' }}>Created at</span>
                        <span>10/10/2023</span>
                    </div>
                    <hr />
                    <div className="flex items-center gap-24 p-5">
                        <span className='w-24' style={{ color: 'rgb(62, 115, 152)' }}>Updated at</span>
                        <span>10/10/2024</span>
                    </div>
                    <hr />
                    <div className="flex items-center gap-24 p-5">
                        <span className='w-24' style={{ color: 'rgb(62, 115, 152)' }}>Expires at</span>
                        <span>10/10/2025</span>
                    </div>
                    <hr />
                    <div className="flex items-center gap-24 p-5">
                        <span className='w-24' style={{ color: 'rgb(62, 115, 152)' }}>Status</span>
                        <span>Active</span>
                    </div>
                    <hr />
                    <div className="flex items-center gap-32 p-5">
                        <span className='w-24' style={{ color: 'rgb(62, 115, 152)' }}>Purpose</span>
                        <span>Insight is requesting access to your financial data inorder to provide you with insights on how you can save money.Your data will never be sold or used for advertising puposes</span>
                    </div>
                </div>
                <div>
                    <div className='flex items-center justify-between'>
                        <h1 className="text-2xl font-bold my-10">Financial information requests</h1>
                        <button className='p-2 rounded-lg mt-3 flex items-center gap-5' style={{ background: 'rgb(231, 238, 243)' }}>
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                                <path strokeLinecap="round" strokeLinejoin="round" d="M6.75 3v2.25M17.25 3v2.25M3 18.75V7.5a2.25 2.25 0 0 1 2.25-2.25h13.5A2.25 2.25 0 0 1 21 7.5v11.25m-18 0A2.25 2.25 0 0 0 5.25 21h13.5A2.25 2.25 0 0 0 21 18.75m-18 0v-7.5A2.25 2.25 0 0 1 5.25 9h13.5A2.25 2.25 0 0 1 21 11.25v7.5m-9-6h.008v.008H12v-.008ZM12 15h.008v.008H12V15Zm0 2.25h.008v.008H12v-.008ZM9.75 15h.008v.008H9.75V15Zm0 2.25h.008v.008H9.75v-.008ZM7.5 15h.008v.008H7.5V15Zm0 2.25h.008v.008H7.5v-.008Zm6.75-4.5h.008v.008h-.008v-.008Zm0 2.25h.008v.008h-.008V15Zm0 2.25h.008v.008h-.008v-.008Zm2.25-4.5h.008v.008H16.5v-.008Zm0 2.25h.008v.008H16.5V15Z" />
                            </svg>
                            Sort by date
                        </button>
                    </div>
                    {fiReqs && fiReqs.map((fiReq) => (
                        <div key={fiReq.id} className='flex items-center justify-between mb-7'>
                            <div className="flex items-center gap-5">
                                <div className="p-3 rounded-lg" style={{ background: '#e8eef2' }}>
                                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                                        <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 14.25v-2.625a3.375 3.375 0 0 0-3.375-3.375h-1.5A1.125 1.125 0 0 1 13.5 7.125v-1.5a3.375 3.375 0 0 0-3.375-3.375H8.25m0 12.75h7.5m-7.5 3H12M10.5 2.25H5.625c-.621 0-1.125.504-1.125 1.125v17.25c0 .621.504 1.125 1.125 1.125h12.75c.621 0 1.125-.504 1.125-1.125V11.25a9 9 0 0 0-9-9Z" />
                                    </svg>
                                </div>
                                <div className='flex flex-col'>
                                    <span>{fiReq.title}</span>
                                    <span style={{ color: 'rgb(62, 115, 152)' }}>{fiReq.requestedAgo}</span>
                                </div>
                            </div>
                            <button class="hover:bg-blue-700 text-black font-bold py-2 px-4 rounded-xl" style={{ background: '#e7eef3' }}>
                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                                    <path strokeLinecap="round" strokeLinejoin="round" d="M2.036 12.322a1.012 1.012 0 0 1 0-.639C3.423 7.51 7.36 4.5 12 4.5c4.638 0 8.573 3.007 9.963 7.178.07.207.07.431 0 .639C20.577 16.49 16.64 19.5 12 19.5c-4.638 0-8.573-3.007-9.963-7.178Z" />
                                    <path strokeLinecap="round" strokeLinejoin="round" d="M15 12a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z" />
                                </svg>
                            </button>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    )
}

export default FiReq