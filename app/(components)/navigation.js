'use client'

import Link from 'next/link'

import styles from './navigation.module.css'

import { useScroll, motion, useMotionValueEvent } from 'framer-motion'
import { useState } from 'react';
import NavigationMenu from './navigation-menu';

export default function Navigation({ items }) 
{
    const [current_scroll_y, setCurrentScrollY] = useState(0);
    const [revealed, setRevealed] = useState(false);

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
    })

    return <div className={styles.root}>
            <motion.div
                className={styles.container}
                animate={current_scroll_y > 0 ? "shrink": "grow"}
                initial={"grow"}
                variants={variants}
            >
                <div className={styles.container_content}>
                    <Link href={"/"}>
                        <div className={styles.logo} />
                    </Link>
                    <div className={styles.items}>
                        {
                            items.map((item, index) => {
                                return <Link
                                    key={index}
                                    href={item.url}
                                >
                                    <div className={styles.item}>{item.name}</div>
                                </Link>
                            })
                        }
                    </div>
                </div>
                <div className={styles.hamburger} onClick={() => {setRevealed(!revealed)}}/>
            </motion.div>
            <NavigationMenu revealed={revealed} setRevealed={setRevealed}/>
        </div>
}