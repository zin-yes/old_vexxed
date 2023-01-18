'use client'

import { useState } from "react";

export default function HomeBackground({ children })
{
    const [theme, setTheme] = useState(window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches ? "dark" : "light");

    window.matchMedia('(prefers-color-scheme: dark)').addEventListener('change', event => {
        setTheme(event.matches ? "dark" : "light");
    });

    return <div style={{background: theme === "light" ? "var(--purple-gradient)" : "black"}}>
        {children}
    </div>
}