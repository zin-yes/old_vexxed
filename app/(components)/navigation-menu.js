'use client'

import { motion } from 'framer-motion'

import styles from './navigation-menu.module.css'

export default function NavigationMenu({ revealed })
{
    const variants =
    {
        open:
        {
            x: "0",
            width: "100vw",
            height: "100vh",
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

    return <motion.div
            className={styles.container}
            animate={revealed ? "open" : "closed"}
            variants={variants}
            initial={"closed"}
        >
            
        </motion.div>
}