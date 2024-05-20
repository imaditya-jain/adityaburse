import { ThemeSwitcher } from "@/components";
import { Header } from "@/components";
import 'bootstrap/dist/css/bootstrap.min.css';
import "@/styles/globals.css";
import { useEffect } from "react";

export default function App({ Component, pageProps }) {

  useEffect(() => {
    import('bootstrap/dist/js/bootstrap.bundle')
  }, [])

  return (<>
    <Header />
    <Component {...pageProps} />
    <ThemeSwitcher />
  </>);
}
