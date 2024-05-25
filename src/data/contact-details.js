import { Mail, Phone, Room } from '@mui/icons-material';
import Link from 'next/link';

const contactDetails = [
    {
        icon: <Room className='icon text-orange' />,
        primary: <strong className='text-color'>ADDRESS</strong>,
        secondary: <span className='text-color'>Nandanwan Main Road, Nandanwan, Nagpur - 440009</span>,
    },
    {
        icon: <Mail className='icon text-orange' />,
        primary: <strong className='text-color'>EMAIL</strong>,
        secondary: <Link className='text-color' href="mailto:adityaburse.success@gmail.com">adityaburse.success@gmail.com</Link>,
    },
    {
        icon: <Phone className='icon text-orange' />,
        primary: <strong className='text-color'>PHONE</strong>,
        secondary: <Link className='text-color' href="tel:8275551565">+91 827 555 1565</Link>,
    },
];

export default contactDetails