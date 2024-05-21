import React from 'react'
import { Box, Typography } from '@mui/material';

const SectionTitle = ({ whiteText, orangeText, titleBg }) => {
    return (
        <>
            <Box className="title-container" textAlign="center">
                <Typography variant="h1" className="text-color">{whiteText} <span className="text-orange">{orangeText}</span></Typography>
                <Typography className="title-bg">{titleBg}</Typography>
            </Box>
        </>
    )
}

export default SectionTitle