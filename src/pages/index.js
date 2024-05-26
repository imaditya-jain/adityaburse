import React from 'react'
import { useRouter } from 'next/router'
import { Head } from '@/sections'
import { ArrowForward, HorizontalRule } from '@mui/icons-material'
import { Box, Button, Container, Grid, Typography } from '@mui/material'

const index = () => {
  const router = useRouter()
  return (
    <>
      <Head
        title="Aditya Nitin Burse - Expert React & Next.js Developer | Full Stack Developer"
        description="Welcome to the portfolio of Aditya Nitin Burse, an award-winning React and Next.js developer. Explore captivating, responsive websites and web applications that stand out in the digital landscape. Let's bring your digital vision to life!"
        robots="index, follow"
        canonical="/"
        keywords="Full Stack Developer, React Developer, Next.js Specialist, Web Development, SEO Expert, JavaScript Developer, Freelance Web Developer, Aditya Burse, Aditya Jain, Aditya, Jain, Burse, Aditya Nitin Burse, Aditya Nitin, Aditya Nitin Jain, Aditya Nitin Bures (Jain), Software Developer"
      />
      <Box className="color-block d-none d-lg-block"></Box>
      <Container maxWidth="xxl" id="home-banner" data-aos="slide-down">
        <Grid container spacing={2} alignItems={"center"}>
          <Grid item xs={12} md={4} lg={3} className='d-none d-lg-block home-banner-bg'></Grid>
          <Grid item xs={12} md={7} >
            <Box p={2} className="d-flex justify-content-center d-lg-none">
              <img src="/images/new-avatar.png" className='img-fluid banner-mob-image' alt="Aditya Nitin Burse (Jain)" title="Aditya Nitin Burse (Jain)" />
            </Box>
            <Box className="d-flex flex-column align-items-center align-items-lg-end">
              <Typography variant='h1' className='text-color mb-4 text-center text-sm-right'><span className='text-orange'>.I'm Aditya Burse (Jain) <HorizontalRule /></span><br />Full Stack Developer</Typography>
              <Typography className='text-color mb-4 text-center text-sm-right'>Crafting captivating websites and web applications<br /> with expertise in React, Next.js, and SEO.<br /> Let's bring your digital vision to life!</Typography>
              <Button className='primary-button' onClick={() => router.push('/about')}>More About Me <ArrowForward className='ms-2' /></Button>
            </Box>
          </Grid>
        </Grid>
      </Container>
    </>
  )
}

export default index