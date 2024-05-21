import React from 'react';
import { SkillCard } from '@/components';
import skills from '@/data/skills';
import SectionTitle from '@/components/title/section-title';
import { Box, Grid, } from '@mui/material';

const Skills = () => {
    return (
        <>
            <SectionTitle orangeText="My" whiteText="SKILLS" titleBg="" />
            <Box mt={2}>
                <Grid container spacing={4}>

                    {
                        skills.map(item =>
                            <Grid item xs={6} sm={6} key={item.key}>
                                <SkillCard title={item.key} value={item.value} />
                            </Grid>
                        )}
                </Grid>
            </Box>
        </>
    )
}

export default Skills