'use client'

import React, { useEffect, useState } from 'react'

import Section from '../(components)/section.js'
import AnimatedTextAbout from '../(components)/animated-text-about.js'
import DownArrow from '../(components)/down-arrow.js'
import SectionContainer from '../(components)/section-container.js'
import Footer from '../(sections)/footer.js'

import styles from './page.module.css'

const AboutContainer = ({ children, background }) =>
{
    return <div className={styles.about_container} style={{background: background}}>
            <div className={styles.about_container_spacer}>
                <div className={styles.about_spacer_top}/>
                <div className={styles.about_container_content}>{ children }</div>
                <AboutDownArrow />
            </div>
        </div>
}

const AboutVexxedIllustration = () =>
{
    return <div className={styles.about_illustration_container}>
            <div className={styles.about_illustration}></div>
        </div>
}

const AboutZinIllustration = () =>
{
    return <div className={styles.about_illustration_container} style={{background: "#6911D2"}}>
            <div className={styles.about_illustration_zin}></div>
        </div>
}

const AboutIdaIllustration = () =>
{
    return <div className={styles.about_illustration_container}  style={{background: "#E98A33"}}>
            <div className={styles.about_illustration_ida}></div>
        </div>
}

const RightAlignedAboutHeader = ({ title, description }) =>
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
                                return <AnimatedTextAbout key={index}>{ item + " "}</AnimatedTextAbout>
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


const LeftAlignedAboutHeader = ({ title, description }) =>
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
                                return <AnimatedTextAbout key={index}>{ item + " "}</AnimatedTextAbout>
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

const AboutDownArrow = ({}) =>
{
    return <div className={styles.about_down_arrow_container}>
            <DownArrow />
        </div>
}

export default function About()
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
        title: "Vi är VEXXED",
        highlight: [2]
    }
    const vexxed_description = ["Vi är en duo bestående av en ung och talangfull kodare samt en kreativ konstnär som är specialiserad på att skapa vackra, pålitliga och användarvänliga hemsidor.", "Vi är baserade i Linköping och är fokuserade på att hjälpa lokala småföretag, så tveka inte att ta kontakt med oss om du vill ta ditt företag till nästa nivå genom att stärka varumärket och onlinenärvaron."];

    const zin_title =
    {
        title: "zin",
        subtitle: "KODAREN",
        highlight: []
    }
    let zin_description = ["Tja! Jag heter Hazhir men mina vänner kallar mig zin. Jag ansvarar för att skriva all kod som gör att webbplatserna fungerar som de borde.","Jag upptäckte programmering och de oändliga möjligheter det skapar först när jag var 10 år och har fascinerats av det sedan dess."];

    const ida_title =
    {
        title: "Ida",
        subtitle: "DESIGNAREN",
        highlight: []
    }
    let ida_description = ["Hejsan, jag är ida! Jag är konstnären här i stan och skapar målningarna häromkring. Jag siktar på att skapa visuellt tilltalande konst, men aldrig utan spår av personlighet.","Målat har jag gjort så länge jag kan minnas -  digitalt i fem år och professionellt i tre. Att måla betyder allt för mig och att göra det åt andra ger mig syfte."];

    return <main style={{background: theme === "dark" ? "none" : "var(--pink-gradient)"}}>
            <SectionContainer>
                <Section>
                    <AboutContainer background={theme === "dark" ? "var(--dark-purple-gradient)": "none"}>
                        <AboutVexxedIllustration />
                        <RightAlignedAboutHeader 
                            title={vexxed_title}
                            description={vexxed_description} 
                        />
                    </AboutContainer>
                </Section>
                <Section>
                    <AboutContainer  background={theme === "dark" ? "black": "none"}>
                        <LeftAlignedAboutHeader
                            title={zin_title}
                            description={zin_description} 
                        />
                        <AboutZinIllustration />
                    </AboutContainer>
                </Section>
                <Section>
                    <AboutContainer  background={theme === "dark" ? "black": "none"}>
                        <AboutIdaIllustration />
                        <RightAlignedAboutHeader
                            title={ida_title}
                            description={ida_description} 
                        />
                    </AboutContainer>
                </Section>
                <Footer />
            </SectionContainer>
        </main>
}
