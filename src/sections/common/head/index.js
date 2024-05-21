import Head from 'next/head'
import React from 'react'

const index = ({ title, description, robots, canonical }) => {
    return (
        <>
            <Head>
                <title>{title}</title>
                <meta name="description" content={description} />
                <meta name="robots" content={robots} />
                <link rel="canonical" href={canonical} />
            </Head>
        </>
    )
}

export default index