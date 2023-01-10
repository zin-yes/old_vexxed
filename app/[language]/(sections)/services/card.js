'use client';

import { useState } from 'react'

import Image from 'next/image'

import styles from './card.module.css'

export default function Card({ title, icon })
{
    const [relativeMouseX, setRelativeMouseX] = useState(0);
    const [relativeMouseY, setRelativeMouseY] = useState(0);
    const [mouseOver, setMouseOver] = useState(false);

    const onMouseMove = (e) => 
    {
        let rect = e.currentTarget.getBoundingClientRect();
        
        setRelativeMouseX(e.clientX - rect.left);
        setRelativeMouseY(e.clientY - rect.top);
    };

    return <>
        <style jsx>{`
            *
            {
                transition: ${mouseOver ? "0 transform" : "2s transform"};
                --m-x: ${relativeMouseX / 300 * 100}%; 
                --m-y: ${relativeMouseY / 300 * 100}%; 

                --r-x: ${mouseOver ? -(relativeMouseX / 300 * 20 - 10) : 0}deg;
                --r-y: ${mouseOver ? relativeMouseY / 300 * 40 - 20 : 0}deg;
                --bg-x: ${(relativeMouseX / 300 * 30 - 60) + 90}%;
                --bg-y: ${(relativeMouseY / 300 * 30 - 55) + 90}%;
            }
      `}</style>
        <div 
            className={styles.container} 
            onMouseMove={ (e) => onMouseMove(e) }
            onMouseEnter={ () => setMouseOver(true) }
            onMouseLeave={ () => setMouseOver(false) }
        >
            <div>
            </div>
        </div>
    </>
}