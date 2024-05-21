import React from 'react'
import { useRouter } from 'next/router';
import { Card, CardContent, CardMedia, Paper, Typography } from '@mui/material';

const PortfolioCard = ({ link, title, excerpt, employer, img }) => {
    const router = useRouter()
    return (
        <>
            <Card component={Paper} key={title} sx={{ height: "100%", cursor: "pointer" }} className='portfolio-card cardEffect shadow-sm' onClick={() => router.push(link)}>
                <CardMedia component="img" image={img} className='img-fluid' />
                <CardContent>
                    <Typography variant="h5" className="text-color">{title}</Typography>
                    <Typography className="text-orange" gutterBottom>{employer}</Typography>
                    <Typography className="text-color">{excerpt}</Typography>
                </CardContent>
            </Card>
        </>
    )
}

export default PortfolioCard