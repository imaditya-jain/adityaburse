import React from 'react'
import { Box, Chip, Typography } from '@mui/material';

const ExperienceCard = ({ period, title, excerpt }) => {
    return (
        <>
            <Box mb={2} p={2} className="experience-card cardEffect shadow-sm">
                <Chip label={period} className='mb-2' />
                <Typography variant="h5" className="text-color" gutterBottom>{title}</Typography>
                <Typography className="text-color" gutterBottom>{excerpt}</Typography>
            </Box>
        </>
    )
}

export default ExperienceCard