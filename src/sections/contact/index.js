import React from 'react'
import { Box, Grid, List, ListItem, ListItemIcon, ListItemText, Typography } from '@mui/material';
import SectionTitle from '@/components/title/section-title';
import { ContactForm } from '@/components';
import contactDetails from '@/data/contact-details';

const ContactSec = () => {
    return (
        <>
            <SectionTitle whiteText="SAY" orangeText="HELLO" titleBg="CONTACT" />
            <Box mt={2}>
                <Grid container spacing={4}>
                    <Grid item xs={12} sm={4}>
                        <Box>
                            <Typography variant="h3" className="text-color" gutterBottom>DON'T BE SHY</Typography>
                            <Typography className="text-color">Feel free to get in touch with me. I am always open to discussing new projects, creative ideas or opportunities to be part of your visions.</Typography>
                            <List>
                                {contactDetails.map((item, index) => (
                                    <ListItem key={index}>
                                        <ListItemIcon>{item.icon}</ListItemIcon>
                                        <ListItemText primary={item.primary} secondary={item.secondary} />
                                    </ListItem>
                                ))}
                            </List>
                        </Box>
                    </Grid>
                    <Grid item xs={12} sm={8}>
                        <ContactForm />
                    </Grid>
                </Grid>
            </Box>
        </>
    )
}

export default ContactSec