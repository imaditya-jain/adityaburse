import React from 'react'
import { Head, PortfolioSec, Section } from '@/sections'
const Portfolio = () => {
    return (
        <>
            <Head
                title="Aditya Nitin Burse's Portfolio - Web Development Projects & SEO Tools"
                description="Explore Aditya Nitin Burse's portfolio, featuring a diverse range of web development projects, from SEO tools to customized WordPress sites. See how Aditya combines frontend and backend technologies to deliver excellence in every project."
                robots="index, follow"
                canonical="/portfolio/"
                keywords="Web Development Portfolio, SEO Projects, React Projects, Next.js Projects, Web Application Development, Aditya Burse Projects, Aditya Burse, Aditya Jain, Aditya, Jain, Burse, Aditya Nitin Burse, Aditya Nitin, Aditya Nitin Jain, Aditya Nitin Bures (Jain), Software Developer"
            />
            <Section children={<PortfolioSec />} />
        </>
    )
}

export default Portfolio