import { ContactSec, Head, Section } from '@/sections'
import React from 'react'

const Contact = () => {
    return (
        <>
            <Head
                title="Contact Aditya Nitin Burse - Web Application Developer"
                description="Get in touch with Aditya Nitin Burse, an expert in React, Next.js, and full stack development. Let's discuss your project needs and how we can create outstanding digital experiences together. Connect now!"
                robots="index, follow"
                canonical="/contact/"
                keywords="Contact Aditya Burse, Hire Web Developer, Freelance Developer Contact, Get in Touch, Aditya Burse Email, Aditya Burse Phone, Aditya Burse Awards, Aditya Burse Projects, Aditya Burse, Aditya Jain, Aditya, Jain, Burse, Aditya Nitin Burse, Aditya Nitin, Aditya Nitin Jain, Aditya Nitin Bures (Jain), Software Developer"
            />
            <Section children={<ContactSec />} />
        </>
    )
}

export default Contact