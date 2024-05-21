import React from 'react'
import { Box, Typography } from '@mui/material';

const SkillCard = ({ title, value }) => {
    return (
        <>
            <Typography variant="h6" className="text-color" gutterBottom>{title}</Typography>
            <Box className="progress">
                <div class="progress-bar progress-bar-striped progress-bar-animated" role="progressbar" style={{ width: `${value}%`, backgroundColor: 'var(--main-primary-color)' }} ariaValuenow={value} ariaValuemin={0} ariaValuemax={100}></div>
            </Box>
        </>
    )
}

export default SkillCard