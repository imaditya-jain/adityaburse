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
            />
            <Section children={<AwardsSection />} />
        </>
    )
}

export default Awards