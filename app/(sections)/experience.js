'use client'

import React, { useEffect, useState } from 'react'

import Section from '../(components)/section.js'
import AnimatedTextServices from '../(components)/animated-text-about.js'
import DownArrow from '../(components)/down-arrow.js'
import SectionContainer from '../(components)/section-container.js'
import Footer from './footer.js'

import styles from './experience.module.css'
import Image from 'next/image.js'

const ServicesContainer = ({ children }) =>
{
    return <div className={styles.about_container}>
            <div className={styles.about_container_spacer}>
                <div className={styles.about_spacer_top}/>
                <div className={styles.about_container_content}>{ children }</div>
                <ServicesDownArrow />
            </div>
        </div>
}

const RightAlignedServicesHeader = ({ img }) =>
{
    return <div className={styles.about_header}>
                <div className={styles.scroller}>
                    <Image 
                        src={img}
                        alt={""}
                        width={1538}
                        height={300}
                    />
                </div>
        </div>
}


const LeftAlignedServicesHeader = ({ title }) =>
{
    return <div className={styles.about_header_left_aligned}>
            <div className={styles.about_header_text_left_aligned}>
                <h4>{ title.subtitle }</h4>
                {
                    title.subtitle === undefined ?
                    <h1>{ 
                        title.title.split(" ").map((item, index) => {
                            if(title.highlight.includes(index))
                            {
                                return <AnimatedTextServices key={index}>{ item + " "}</AnimatedTextServices>
                            }
                            
                            return item + " "
                        }) 
                    }</h1>
                    :
                    <div><h1>{ title.title }</h1></div>
                }
            </div>
        </div>
}

const ServicesDownArrow = ({}) =>
{
    return <div className={styles.about_down_arrow_container}>
            <DownArrow />
        </div>
}

export default function Services()
{
    
    const [theme, setTheme] = useState("");

    useEffect(() => {
        setTheme(window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches ? "dark" : "light");

        window.matchMedia('(prefers-color-scheme: dark)').addEventListener('change', event => {
            setTheme(event.matches ? "dark" : "light");
        });
    }, [])

    const vexxed_title = 
    {
        title: "Kundupplevelse i världsklass",
        subtitle: "VEXXED PROCESSEN",
        highlight: [0]
    }

    return <Section>
            <ServicesContainer>
                <LeftAlignedServicesHeader
                    title={vexxed_title}
                    theme={theme}
                />
                <RightAlignedServicesHeader
                    img={theme === "light" ? "/experience.svg" : "/experience_dark.svg"}
                />
            </ServicesContainer>
        </Section>
}
