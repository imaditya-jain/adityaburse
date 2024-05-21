import React from 'react';
import { ExperienceCard } from '@/components';
import education from '@/data/education';
import SectionTitle from '@/components/title/section-title';
import { Box } from '@mui/material';

const Education = () => {
    return (
        <>
            <SectionTitle orangeText="My" whiteText="EDUCATION" titleBg="EDUCATION" />
            <Box mt={2}>
                {
                    education.map(item =>
                        <ExperienceCard key={item.title} period={item.period} title={item.title} excerpt={item.excerpt} />
                    )
                }
            </Box>
        </>
    )
}

export default Education