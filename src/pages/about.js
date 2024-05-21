import React from 'react';
import { Head, Section, Education, Experience, Info, Skills } from '@/sections';


const About = () => {

    const sections = [{ id: "about-section-1", children: <Info /> }, { id: "about-section-2", children: <Skills /> }, { id: "about-section-3", children: <Experience /> }, { id: "about-section-4", children: <Education /> }];

    return (
        <>
            <Head
                title="About Aditya Nitin Burse - Full Stack Developer & SEO Specialist"
                description="Discover the journey and expertise of Aditya Nitin Burse, a passionate developer specializing in React, Next.js, Node.js, and more. Learn about his experience, skills, and dedication to crafting innovative web solutions and seamless user experiences."
                robots="index, follow"
                canonical="/about"
            />
            {
                sections.map((section) => (
                    <Section key={section.id} id={section.id}>
                        {section.children}
                    </Section>
                ))
            }
        </>
    );
};

export default About;
