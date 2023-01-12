import Image from 'next/image'
import Link from 'next/link'

import DownArrow from '../(modules)/down-arrow'

import styles from './hero.module.css'

import en_US from '../en_US.json'

export default function HeroSection()
{
    return <div className={styles.container}>
        <div className={styles.nav_spacer} />
        <header>
            <h1>{ 
                en_US.sections.hero.header.title.split(" ").map((item, index) => 
                {
                    if (!en_US.sections.hero.header.highlights.includes(index))
                        return item;
                    
                    return <span key={index}>
                            { item }
                        </span>
                }) 
            }</h1>
            <p>{ en_US.sections.hero.header.description }</p>
            <Image
                alt={en_US.sections.hero.header.illustration.alt}
                src={en_US.sections.hero.header.illustration.url}
                width={750}
                height={520}
            />
        </header>
        <DownArrow />
    </div>
}