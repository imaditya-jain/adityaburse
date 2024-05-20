import React from 'react'
import { useRouter } from 'next/router'
import { Box } from '@mui/material'
import { Home, Mail, Person, Work } from '@mui/icons-material'

const Header = () => {
    const router = useRouter()

    const navMenu = [
        { id: 'nav-1', title: 'Home', icon: <Home className="icon" />, path: "/" },
        { id: 'nav-2', title: 'About', icon: <Person className="icon" />, path: "/about" },
        { id: 'nav-3', title: 'Portfolio', icon: <Work className="icon" />, path: "/portfolio" },
        { id: 'nav-4', title: 'Contact', icon: <Mail className="icon" />, path: "/contact" },
    ]
    return (
        <>
            <header className='header'>
                <Box>
                    <ul className='icon-nav'>
                        {
                            navMenu.map((item) => (
                                <li className={`iconbox ${router.pathname === item.path ? 'active' : ''}`} key={item.id} onClick={() => router.push(item.path)}>
                                    {item.icon}
                                    <p className="navTitle d-none d-lg-block">{item.title}</p>
                                </li>
                            ))
                        }
                    </ul>
                </Box>
            </header>
        </>
    )
}

export default Header