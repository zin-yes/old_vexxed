'use client'

import React, { useRef, useState, useCallback, useLayoutEffect } from "react"
import ResizeObserver from "resize-observer-polyfill"
import {
    useScroll,
    useTransform,
    useSpring,
    motion
} from "framer-motion"

import styles from './smooth-scroll.module.css'

const SmoothScroll = ({ children }) => {
    const scrollRef = useRef(null)

    const [pageHeight, setPageHeight] = useState(0)

    const resizePageHeight = useCallback(entries => {
        for (let entry of entries) {
            setPageHeight(entry.contentRect.height)
        }
    }, [])

    useLayoutEffect(() => {
        const resizeObserver = new ResizeObserver(entries =>
            resizePageHeight(entries)
        )
        scrollRef && resizeObserver.observe(scrollRef.current)
        return () => resizeObserver.disconnect()
    }, [scrollRef, resizePageHeight])

    const { scrollY } = useScroll() 
    const transform = useTransform(scrollY, [0, pageHeight], [0, -pageHeight])
    const physics = { damping: 15, mass: 1, stiffness: 55 } 
    const spring = useSpring(transform, physics) 

    return (
        <>
            <motion.div
                ref={scrollRef}
                style={{ y: spring }} 
                className={styles.container}
            >
                {children}
            </motion.div>
            <div style={{ height: pageHeight }} />
        </>
    )
}

export default SmoothScroll
