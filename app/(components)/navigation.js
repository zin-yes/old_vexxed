'use client'

import Link from 'next/link'

import styles from './navigation.module.css'

import { useScroll, motion, useMotionValueEvent } from 'framer-motion'
import { useState } from 'react';
import NavigationMenu from './navigation-menu';
import { usePathname } from 'next/navigation';

export default function Navigation({ items }) 
{
    const pathname = usePathname();
    const [current_scroll_y, setCurrentScrollY] = useState(0);
    const [revealed, setRevealed] = useState(false);
    const [theme, setTheme] = useState(window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches ? "dark" : "light");

    window.matchMedia('(prefers-color-scheme: dark)').addEventListener('change', event => {
        setTheme(event.matches ? "dark" : "light");
    });

    const variants =
    {
        shrink:
        {
            height: "50%",
            transition:
            {
                duration: 0.2
            }
        },
        grow:
        {
            height: "100%",
            transition:
            {
                duration: 0.6
            }
        }
    };

    const { scrollY } = useScroll();

    useMotionValueEvent(scrollY, "change", (latest) => {
        setCurrentScrollY(latest);
    });

    return <div className={styles.root}>
            <motion.div
                className={styles.container}
                animate={current_scroll_y > 0 ? "shrink": "grow"}
                initial={"grow"}
                variants={variants}
            >
                <div className={styles.container_content}>
                    <Link href={"/"}>
                        <div 
                            className={styles.logo}  
                            style={{filter: (theme !== "dark" ? (
                                pathname === "/" && (current_scroll_y > window.innerHeight - 50) &&
                                (current_scroll_y < window.innerHeight * 3)
                            ) ? "invert()" : "" : "")}}
                        />
                    </Link>
                    <div className={styles.items} 
                             style={{filter: (theme !== "dark" ? (
                                pathname === "/" &&
                                (current_scroll_y > window.innerHeight - 50) &&
                                (current_scroll_y < window.innerHeight * 3)
                            ) ? "invert()" : "" : "")}}>
                        {
                            items.map((item, index) => {
                                return <Link
                                    key={index}
                                    href={item.url}
                                >
                                    <div className={styles.item} style={{textDecoration: pathname === item.url ? "underline" : "", fontWeight: pathname === item.url ? "600" : "300"}}>{item.name}</div>
                                </Link>
                            })
                        }
                    </div>
                </div>
                <div className={styles.hamburger} 
                            style={{filter: (theme !== "dark" ? (
                                pathname === "/" &&
                                (current_scroll_y > window.innerHeight - 50) &&
                                (current_scroll_y < window.innerHeight * 3)
                            ) ? "invert()" : "" : "")}} onClick={() => {setRevealed(!revealed)}}/>
            </motion.div>
            <NavigationMenu revealed={revealed} setRevealed={setRevealed}/>
        </div>
}