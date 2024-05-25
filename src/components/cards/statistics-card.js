import React from 'react'
import { HorizontalRule } from '@mui/icons-material';
import { Box, Typography } from '@mui/material';

const StatisticsCard = ({ value, title }) => {
    return (
        <>
            <Box p={4} className="statistics-card cardEffect shadow-sm">
                <Typography variant="h2" className="text-orange">{value}</Typography>
                <Typography variant='h6' className="text-color"><HorizontalRule /> {title}</Typography>
            </Box>
        </>
    )
}

export default StatisticsCard