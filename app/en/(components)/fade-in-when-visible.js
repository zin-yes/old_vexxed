'use client'

import React, { useEffect } from "react"
import { useInView } from "react-intersection-observer"
import { motion, useAnimation } from "framer-motion"

const fade_variants = 
{
    offscreen: 
    {
        y: 50,
        opacity: 0
    },
    onscreen: 
    {
        y: 0,
        opacity: 1,
        transition: 
        {
            delay: .6,
            duration: 1,
            ease: "easeInOut"
        }
    }
};

export default function FadeInWhenVisible({ children }) 
{
    const controls = useAnimation();
    const [ref, inView] = useInView();
  
    useEffect(() => {
      if (inView) {
        controls.start("visible");
      }
    }, [controls, inView]);
  
    return (
      <motion.div
        ref={ref}
        animate={controls}
        initial={"offscreen"}
        whileInView={"onscreen"}
        variants={fade_variants}
        viewport={{ once: true }}
      >
        {children}
      </motion.div>
    );
}