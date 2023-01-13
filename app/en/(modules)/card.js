'use client';

import { useState } from 'react'

import Image from 'next/image'

import styles from './card.module.css'

export default function Card({ title, symbol, link_symbol })
{
    const [relativeMouseX, setRelativeMouseX] = useState(0);
    const [relativeMouseY, setRelativeMouseY] = useState(0);
    const [mouseOver, setMouseOver] = useState(false);
    const [waiting, setWaiting] = useState(true);

    const onMouseMove = (e) => 
    {
        let rect = e.currentTarget.getBoundingClientRect();

        setRelativeMouseX(e.clientX - rect.left);
        setRelativeMouseY(e.clientY - rect.top);
    };

    const wait = () =>
    {
        setWaiting(true);

        setTimeout(() => { setWaiting(false); }, 400);
    }

    return <>
        <style jsx>{`
            *
            {
                transition: ${!waiting && mouseOver ? "100ms transform" : "400ms transform"};
                --r-x: ${mouseOver ? -(relativeMouseX / 300 * 20 - 10) : 0}deg;
                --r-y: ${mouseOver ? relativeMouseY / 300 * 40 - 20 : 0}deg;
            }
      `}</style>
        <div 
            className={styles.container} 
            onMouseMove={ (e) => onMouseMove(e) }
            onMouseEnter={ () => { setMouseOver(true); wait() } }
            onMouseLeave={ () => setMouseOver(false) }
        >
            <div>
                <div>
                <Image 
                    src={symbol.url}
                    alt={symbol.alt}
                    width={25}
                    height={25}
                />
                <Image 
                    src={link_symbol.url}
                    alt={link_symbol.alt}
                    width={17}
                    height={17}
                    className={styles.link_symbol}
                />
                </div>
                <div>
                    <h4>{ title }</h4>
                </div>
            </div>
        </div>
    </>
}