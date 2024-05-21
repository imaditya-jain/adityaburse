import React, { useEffect, useState } from "react";
import { Fab } from "@mui/material";
import { DarkModeOutlined, LightModeOutlined } from "@mui/icons-material";

const ThemeSwitcher = () => {
    const [dark, setDark] = useState(true);

    useEffect(() => {
        const savedTheme = localStorage.getItem("theme");
        if (savedTheme) {
            setDark(savedTheme === "dark");
        }
    }, []);

    useEffect(() => {
        document.body.className = dark ? "dark" : "light";
        localStorage.setItem("theme", dark ? "dark" : "light");
    }, [dark]);

    return (
        <>
            <Fab size="small" onClick={() => setDark(!dark)} className="theme-switcher">
                {dark ? <LightModeOutlined className="text-white" /> : <DarkModeOutlined />}
            </Fab>
        </>
    )
}

export default ThemeSwitcher