import { PortfolioCard } from '@/components'
import SectionTitle from '@/components/title/section-title'
import awards from '@/data/awards'
import { Box, Card, Grid } from '@mui/material'
import React from 'react'

const AwardsSection = () => {
    return (
        <>
            <SectionTitle orangeText="AWARDS" whiteText="MY" titleBg="Awards" />
            <Box mt={2}>
                <Grid container spacing={4}>
                    {
                        awards.map(item => <Grid item xs={12} sm={6} md={4}>
                            <PortfolioCard title={item.title} img={item.img} />
                        </Grid>)
                    }
                </Grid>
            </Box>
        </>
    )
}

export default AwardsSection