import React from 'react'
import { Box, Grid } from '@mui/material';
import { PortfolioCard } from '@/components';
import SectionTitle from '@/components/title/section-title';
import projects from '@/data/projects';

const Portfolio = () => {
    return (
        <>
            <SectionTitle whiteText="MY" orangeText="WORK" titleBg="PORTFOLIO" />
            <Box mt={2}>
                <Grid container spacing={4}>
                    {
                        projects.map((project, index) => (
                            <Grid item xs={12} sm={6} md={4} key={project.title}>
                                <PortfolioCard link={project.link} title={project.title} excerpt={project.excerpt} employer={project.employer} img={project.img} />
                            </Grid>
                        ))
                    }
                </Grid>
            </Box>
        </>
    )
}

export default Portfolio