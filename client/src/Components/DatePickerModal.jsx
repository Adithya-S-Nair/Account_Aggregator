import React from 'react'
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Modal from '@mui/material/Modal';
import 'react-date-range/dist/styles.css'; // main style file
import 'react-date-range/dist/theme/default.css'; // theme css file
import { DateRangePicker } from 'react-date-range'; // Import DateRangePicker
import { IconButton, Tooltip } from '@mui/material';
import CloseIcon from '@mui/icons-material/Close';
import { useState } from 'react';

const style = {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: 'fit-content',
    bgcolor: 'background.paper',
    borderRadius: '0.7em',
    boxShadow: 24,
    p: 4,
};



const DatePickerModal = ({ dateModalOpen, setDateModalOpen, consentData, filteredData, setFilteredData }) => {

    const [startDate, setStartDate] = useState(new Date());
    const [endDate, setEndDate] = useState(new Date());

    const selectionRange = {
        startDate: startDate,
        endDate: endDate,
        key: 'selection',
    }

    const handleSelect = (selectedDate) => {

        console.log(selectedDate);
        // if (consentData) {
        //     const filterData = filteredData.filter((task) => {
        //         const projectDate = new Date(task.planned_start_date);
        //         return (
        //             projectDate >= selectedDate.selection.startDate &&
        //             projectDate <= selectedDate.selection.endDate
        //         );
        //     });
        //     setFilteredData(filterData);
        // }
        // setStartDate(selectedDate.selection.startDate);
        // setEndDate(selectedDate.selection.endDate);
    };

    return (
        <div>

            <Modal
                open={dateModalOpen}
                // onClose={handleClose}
                aria-labelledby="modal-modal-title"
                aria-describedby="modal-modal-description"
            >
                <Box sx={style}>
                    <div className="flex items-center justify-between mb-2">
                        <Typography id="modal-modal-title" variant="h6" component="h2">
                            Search By Date
                        </Typography>
                        <Tooltip title="Close">
                            <IconButton onClick={() => { setDateModalOpen(!dateModalOpen) }}>
                                <CloseIcon />
                            </IconButton>
                        </Tooltip>
                    </div>
                    <hr />
                    <DateRangePicker
                        className='mt-3'
                        ranges={[selectionRange]}
                        onChange={handleSelect}
                    />
                </Box>
            </Modal>

        </div>
    )
}

export default DatePickerModal