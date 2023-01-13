import Image from 'next/image'
import Link from 'next/link'

import DownArrow from '../(modules)/down-arrow'

import styles from './hero.module.css'

import en_US from '../en_US.json'

export default function HeroSection()
{
    return <div className={styles.container}>
        <div>
            <div className={styles.nav_spacer} />
            <header>
                <div>
                    <h1>
                        { 
                            en_US.sections.hero.header.title.split(" ").map((item, index) => 
                            {
                                if (!en_US.sections.hero.header.highlights.includes(index))
                                    return item + " ";
                                
                                return <span key={index}>
                                        { item + " "}
                                    </span>
                            }) 
                        }
                    </h1>
                    <p>{ en_US.sections.hero.header.description }</p>
                    <div className={styles.buttons}>
                        <Link href={en_US.sections.hero.buttons.primary.url}>
                            <button className={styles.primary_button}>
                                { en_US.sections.hero.buttons.primary.name }
                            </button>
                        </Link>
                        <Link href={en_US.sections.hero.buttons.secondary.url}>
                            <button className={styles.secondary_button}>
                                { en_US.sections.hero.buttons.secondary.name }
                            </button>
                        </Link>
                    </div>
                </div>
                <div>
                    <Image
                        alt={en_US.sections.hero.header.illustration.alt}
                        src={en_US.sections.hero.header.illustration.url}
                        width={800}
                        height={580}
                    />
                </div>
            </header>
            <DownArrow to={"#services_section"} />
        </div>
    </div>
}