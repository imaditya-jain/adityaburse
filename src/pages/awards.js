import { AwardsSection, Head, Section } from '@/sections'
import React from 'react'

const Awards = () => {
    return (
        <>
            <Head
                title="Aditya Nitin Burse | Employee of the Quarter Award Recipient"
                description="Discover Aditya Nitin Burse's achievements, including the Employee of the Quarter Award. Learn about his dedication, contributions, and recognition in the field of web development."
                robots="index, follow"
                canonical="/awards/"
                keywords="Developer Awards, Employee of the Quarter,Award Winning Developer, Professional Recognition, Web Developer Achievements, Aditya Burse Awards, Aditya Burse Projects, Aditya Burse, Aditya Jain, Aditya, Jain, Burse, Aditya Nitin Burse, Aditya Nitin, Aditya Nitin Jain, Aditya Nitin Bures (Jain), Software Developer"
            />
            <Section children={<AwardsSection />} />
        </>
    )
}

export default Awards