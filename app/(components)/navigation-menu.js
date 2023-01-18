'use client'

import { motion } from 'framer-motion'

import styles from './navigation-menu.module.css'

import { useState } from 'react'
import Link from 'next/link';

export default function NavigationMenu({ revealed, setRevealed })
{
    const variants =
    {
        open:
        {
            x: "0",
            width: "100vw",
            transition:
            {
                type: "easeInOut",
                duration: 1
            }
        },
        closed:
        {
            x: "100vw",
            width: "0",
            transition:
            {
                type: "easeInOut",
                duration: 1
            }
        }
    };

    return <>
            <div>
                <motion.div
                    className={styles.container}
                    animate={revealed ? "open" : "closed"}
                    variants={variants}
                    initial={"closed"}
                    >
                    <Link href={"/"}>
                        <div className={styles.logo_container}>
                            <div className={styles.logo} />
                        </div>
                    </Link>
                    <div className={styles.hamburger} onClick={() => {setRevealed(!revealed)}}/>
                </motion.div>
            </div>
        </>
}