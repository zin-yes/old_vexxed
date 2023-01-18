'use client'

import { useEffect, useState } from "react";

export default function HomeBackground({ children })
{
    const [theme, setTheme] = useState("");

    useEffect(() => {
        setTheme(window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches ? "dark" : "light");

        window.matchMedia('(prefers-color-scheme: dark)').addEventListener('change', event => {
            setTheme(event.matches ? "dark" : "light");
        });
    }, [])

    return <div style={{background: theme === "light" ? "var(--purple-gradient)" : "black"}}>
        {children}
    </div>
}