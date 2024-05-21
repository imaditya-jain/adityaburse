import React from 'react'
import { Head, PortfolioSec, Section } from '@/sections'
const Portfolio = () => {
    return (
        <>
            <Head
                title="Aditya Nitin Burse's Portfolio - Web Development Projects & SEO Tools"
                description="Explore Aditya Nitin Burse's portfolio, featuring a diverse range of web development projects, from SEO tools to customized WordPress sites. See how Aditya combines frontend and backend technologies to deliver excellence in every project."
                robots="index, follow"
                canonical="/portfolio"
            />
            <Section children={<PortfolioSec />} />
        </>
    )
}

export default Portfolio