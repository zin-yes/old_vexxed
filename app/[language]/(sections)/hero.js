import Link from 'next/link'
import Image from 'next/image'

import styles from './hero.module.css';

export default function HeroSection({ content, links })
{
    return <div className={styles.heroContainer}>
        <div className={styles.gradientTopLeft} />
            <section className={styles.hero}>
                <navigation>
                    <Link href={"/"}>
                        <Image 
                            src={"/logo-text-dark.svg"}
                            alt={"VEXXED text-based logo for dark mode"}
                            width={175}
                            height={60}
                            quality={100}
                            loading={"eager"}
                            priority
                        />
                    </Link>
                    <Link href={"/"}>
                        <span>{ content.navigation.items.home }</span>
                    </Link>
                    <Link href={`${links.navigation.items.about}`}>
                        <span>{ content.navigation.items.about }</span>
                    </Link>
                    <Link href={`${links.navigation.items.services}`}>
                        <span>{ content.navigation.items.services }</span>
                    </Link>
                    <Link href={`${links.navigation.items.portfolio}`}>
                        <span>{ content.navigation.items.portfolio }</span>
                    </Link>
                    <Link href={`${links.navigation.items.contact}`}>
                        <span>{ content.navigation.items.contact }</span>
                    </Link>
                </navigation>
                <header>
                    <div>
                        <h1>
                            { 
                                content.header.content.split(" ").map((word) => {
                                    return word + " ";
                                })
                            }
                        </h1>
                        <p>{ content.description }</p>
                    </div>
                    <div>
                        <Link href={`${links.buttons.primary}`} target={"_blank"}>
                            <button className={styles.primaryCTA}>{ content.buttons.primary }</button>
                        </Link>
                        <Link href={`${links.buttons.secondary}`}>
                            <button className={styles.secondaryCTA}>{ content.buttons.secondary }</button>
                        </Link>
                    </div>
                </header>
                <div className={styles.indicator}>
                    <Image
                        src={"/down-arrow-dark.svg"}
                        alt={"Indicator showing that there is more content below."}
                        width={30}
                        height={20}
                        loading={"eager"}
                    />
                </div>
            </section>
            <div className={styles.gradientBottomRight} />
        </div>
}