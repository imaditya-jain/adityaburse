import { useEffect } from 'react';
import { Box } from '@mui/material';
import { ToastContainer } from 'react-toastify';
import { Provider } from 'react-redux';
import { ThemeSwitcher } from '@/components';
import { Header } from '@/components';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'react-toastify/dist/ReactToastify.css';
import 'aos/dist/aos.css';
import '@/styles/globals.css';
import store from '@/app/store';
import AOS from 'aos';

export default function App({ Component, pageProps }) {

  useEffect(() => {
    import('bootstrap/dist/js/bootstrap.bundle');
  }, []);

  useEffect(() => {
    AOS.init({
      duration: 800, // default duration of animations
      once: false, // Allows the animations to happen every time the element comes into view
    });
  }, []);

  return (
    <Provider store={store}>
      <Header />
      <Component {...pageProps} />
      <ThemeSwitcher />
      <Box className="spacer d-block d-lg-none" />
      <ToastContainer />
    </Provider>
  );
}
