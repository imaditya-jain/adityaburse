import React from 'react';
import { StatisticsCard } from '@/components';
import statistics from '@/data/statistics';
import info from '@/data/info';
import SectionTitle from '@/components/title/section-title';
import { Box, Button, Grid, List, ListItem, ListItemText, Typography } from '@mui/material';
import Link from 'next/link';

const Info = () => {
    return (
        <>
            <SectionTitle whiteText="ABOUT" orangeText="ME" titleBg="RESUME" />
            <Box mt={2}>
                <Grid container spacing={2}>
                    <Grid item xs={12} md={6}>
                        <Typography variant="h3" className="text-color" gutterBottom>PERSONAL INFOS</Typography>
                        <Box p={2} mb={2} className="d-flex justify-content-center d-sm-none">
                            <img src="/images/new-avatar.png" className='img-fluid banner-mob-image' alt="Aditya Nitin Burse (Jain)" title="Aditya Nitin Burse (Jain)" />
                        </Box>
                        <List className="personal-info">
                            {info.map((item) => (
                                <ListItem key={item.key}>
                                    <ListItemText
                                        primary={
                                            <>
                                                <span className='text-color'>{item.key} :</span>
                                                <strong className="text-white"> {item.value}</strong>
                                            </>
                                        }
                                    />
                                </ListItem>
                            ))}
                        </List>
                        <Box my={2}>
                            <Button className='primary-button'>
                                <Link href="/resume/Resume - Aditya Burse.pdf" target='_blank' className='fw-bold text-color' download={true}>Download Resume</Link>
                            </Button>
                        </Box>
                    </Grid>
                    <Grid item xs={12} md={6}>
                        <Grid container spacing={2}>
                            {
                                statistics.map((item) => (
                                    <Grid item xs={6} key={item.key}>
                                        <StatisticsCard value={item.value} title={item.key} />
                                    </Grid>
                                ))
                            }
                        </Grid>
                    </Grid>
                </Grid>
            </Box>
        </>
    )
}

export default Info