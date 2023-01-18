'use client'

import React, { useState } from 'react'

import Section from '../(components)/section.js'
import AnimatedTextServices from '../(components)/animated-text-about.js'
import DownArrow from '../(components)/down-arrow.js'
import SectionContainer from '../(components)/section-container.js'
import Footer from '../(sections)/footer.js'

import styles from './services.module.css'
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

const RightAlignedServicesHeader = ({ title, description, img }) =>
{
    return <div className={styles.about_header}>
            <div className={styles.about_header_text}>
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
                <p>
                {
                    description.map((item, index) =>
                    {
                        if(index !== description.length - 1)
                        {
                            return <React.Fragment key={index}>{ item }<br /><br /></React.Fragment>
                        }

                        return <React.Fragment key={index}>{ item }</React.Fragment>
                    })
                }
                </p>
            </div>
                <div className={"scroller"}>
                    <Image 
                        src={img}
                        alt={""}
                        width={1425}
                        height={180}
                    />
                </div>
        </div>
}


const LeftAlignedServicesHeader = ({ title, description }) =>
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
                <p>
                {
                    description.map((item, index) =>
                    {
                        if(index !== description.length - 1)
                        {
                            return <React.Fragment key={index}>{ item }<br /><br /></React.Fragment>
                        }

                        return <React.Fragment key={index}>{ item }</React.Fragment>
                    })
                }
                </p>
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
    const [theme, setTheme] = useState(window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches ? "dark" : "light");

    window.matchMedia('(prefers-color-scheme: dark)').addEventListener('change', event => {
        setTheme(event.matches ? "dark" : "light");
    });

    const vexxed_title = 
    {
        title: "Är VEXXED rätt för dig?",
        subtitle: "VAD VI GÖR BÄST",
        highlight: [1]
    }

    const packages=
    {
        subtitle: "VAD VI ERBJUDER",
        title: "Hos oss får ni det kompletta paketet"
    }

    const vexxed_description = ["Äger du ett litet företag eller arbetar du som soloentreprenör? Oavsett vad är vi 100% rätt val för dig!","Vi är specialiserade på att hjälpa både proffs och småföretagare som letar efter en vacker, pålitlig och användarvänlig webbplats."];

    return <Section>
            <ServicesContainer>
                <LeftAlignedServicesHeader
                    title={vexxed_title}
                    description={vexxed_description} 
                />
                <RightAlignedServicesHeader
                    title={packages}
                    description={[""]}
                    img={theme === "light" ? "/package.svg" : "/package_dark.svg"}
                />
            </ServicesContainer>
        </Section>
}
