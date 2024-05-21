import React from 'react';
import { ExperienceCard } from '@/components';
import experience from '@/data/experience';
import SectionTitle from '@/components/title/section-title';
import { Box, Grid, Typography } from '@mui/material';

const Experience = () => {
    return (
        <>
            <SectionTitle orangeText="MY" whiteText="EXPERIENCE" titleBg="EXPERIENCE" />
            <Box mt={2}>
                <Grid container spacing={4} alignItems={"center"}>
                    <Grid item xs={12} md={6}>
                        <Typography variant='h3' className="text-color" gutterBottom>A Journey Through Professional Development</Typography>
                        <Typography className="text-color">Embarking on my coding expedition, I've navigated through various roles, each adding a new chapter to my story. From debugging as an intern to seamlessly blending frontend and backend as a Full Stack Developer, every step has been a thrilling revelation. Crafting user interfaces, I've woven digital tapestries that resonate with industry standards, all while maintaining brand consistency. Each role has been a beacon guiding me through the labyrinth of technology, shaping me into the versatile developer I am today.</Typography>
                    </Grid>
                    <Grid item xs={12} md={6}>
                        {
                            experience.map(item =>
                                <ExperienceCard key={item.title} period={item.period} title={item.title} excerpt={item.excerpt} />
                            )}
                    </Grid>
                </Grid>
            </Box>
        </>
    )
}

export default Experience