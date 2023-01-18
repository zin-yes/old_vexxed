'use client'

import { AnimatePresence, motion } from "framer-motion";
import { useEffect, useState } from "react";

export default function Animate({ children })
{
    const [outerWidth, setOuterWidth] = useState(0);

    useEffect(() => {
        setOuterWidth(window.outerWidth);
    }, [])

    return <AnimatePresence mode={"wait"}>
            <motion.div
                initial={{
                    opacity: 0,
                    x: -outerWidth/10
                }}
                animate={{
                    opacity: 1,
                    x: 0
                }}
                exit={{
                }}
                transition={{
                    type: "easeInOut",
                    duration: 0.3
                }}
            >
                { children }
            </motion.div>
        </AnimatePresence>
}