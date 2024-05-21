import React, { useEffect, useState } from 'react'
import { Box, Button, Grid, TextField } from '@mui/material';
import { useDispatch, useSelector } from 'react-redux';
import { setMessage, setError } from '@/slices/contactSlice';
import { toast } from 'react-toastify';
import { sendContactForm } from '@/features/sendmail';

const ContactForm = () => {
    const [formData, setFormData] = useState({ name: '', email: '', subject: '', message: '', });
    const dispatch = useDispatch();
    const { message, error } = useSelector((state) => state.contact);

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value });
    }

    const handleSubmit = async (e) => {
        e.preventDefault();
        dispatch(sendContactForm(formData));
    }

    useEffect(() => {
        if (!error && message) {
            toast.success(message);
            setFormData({ name: '', email: '', subject: '', message: '', });
        } else if (error && message) {
            toast.error(message);
        }
    }, [error, message]);


    const fields = [
        { type: 'text', label: 'Name', name: 'name', xs: 12, sm: 6 },
        { type: 'email', label: 'Email', name: 'email', xs: 12, sm: 6 },
        { type: 'text', label: 'Subject', name: 'subject', xs: 12 },
        { type: 'text', label: 'Message', name: 'message', xs: 12, multiline: true, rows: 4 },
    ];
    return (
        <>
            <Box component="form" onSubmit={handleSubmit}>
                <Grid container spacing={4}>
                    {fields.map((field, index) => (
                        <Grid item xs={field.xs} sm={field.sm || 12} key={index}>
                            <TextField
                                type={field.type}
                                variant="outlined"
                                label={field.label}
                                name={field.name}
                                fullWidth
                                required
                                multiline={field.multiline || false}
                                rows={field.rows || 1}
                                value={formData[field.name]}
                                onChange={handleChange}
                            />
                        </Grid>
                    ))}
                    <Grid item xs={12}>
                        <Button className="primary-button" type="submit">
                            Send Message
                        </Button>
                    </Grid>
                </Grid>
            </Box>
        </>
    )
}

export default ContactForm