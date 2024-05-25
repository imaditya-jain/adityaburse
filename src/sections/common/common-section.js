import React from 'react';
import { Box, Container, Grid } from '@mui/material';

const Section = ({ children }) => {
    return (
        <section data-aos="slide-up" className="about">
            <Container maxWidth="xxl">
                <Grid container justifyContent="center">
                    <Grid item xs={12} sm={10}>
                        <Box py={2}>
                            {children}
                        </Box>
                    </Grid>
                </Grid>
            </Container>
        </section>
    );
};

export default Section;
