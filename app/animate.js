'use client'

import { AnimatePresence, motion } from "framer-motion";

export default function Animate({ children })
{
    return <AnimatePresence mode={"wait"}>
            <motion.div
                initial={{
                    opacity: 0,
                    x: -window.outerWidth/10
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