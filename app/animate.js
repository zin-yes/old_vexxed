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
                    x: "-10vw"
                }}
                animate={{
                    opacity: 1,
                    x: 0
                }}
                exit={{
                    opacity: 0,
                    x: "-10vw"
                }}
                transition={{
                    type: "easeInOut",
                    duration: 0.3,
                    delay: 0.5
                }}
            >
                { children }
            </motion.div>
        </AnimatePresence>
}