'use client'

import { motion } from 'framer-motion'

import styles from './navigation-menu.module.css'

import Link from 'next/link';
import Image from 'next/image';
import { PrimaryButton, SecondaryButton } from './button';
import { usePathname } from 'next/navigation';

const ContactInfo = () =>
{
    return <ul className={styles.contact_info}>
            <li>
                <Image
                    src={"/email.svg"}
                    alt={"E-post"}
                    width={30}
                    height={30}
                />
                <Link href={"mailto:hej@vexxed.se"}>
                    <span className="link">hej@vexxed.se</span>
                </Link>
            </li>
            <li>
                <Image 
                    src={"/location_pin.svg"}
                    alt={"Plats"}
                    width={30}
                    height={30}
                />
                <Link href={"https://www.google.com/maps/place/Link%C3%B6ping"} target={"_blank"}>
                    <span className="link">Linköping</span>
                </Link>
            </li>
            <li>
                <Image 
                    src={"/phone.svg"}
                    alt={"Telefonnummer"}
                    width={30}
                    height={30}
                />
                <Link href={"tel:0728431137"}>
                    <span className="link">072-84 311 37</span>
                </Link>
            </li>
            <li>
                <Image 
                    src={"/clock.svg"}
                    alt={"Öppettider"}
                    width={30}
                    height={30}
                />
                <Link href={""}>
                    <span className="link">10.00 - 18.00</span>
                </Link>
            </li>
        </ul>
}

const Buttons = () =>
{
    return <div className={styles.buttons}>
            <div>
                <Link href={"https://calendly.com/vexxed-digital/conversation"} target={"_blank"}>
                    <PrimaryButton title={"BOKA ETT MÖTE"}/>
                </Link>
            </div>
            <div>
                <Link href={"mailto:prototyp@vexxed.se"}>
                    <SecondaryButton title={"GRATIS DESIGNPROTOTYP"}/>
                </Link>
            </div>
        </div>
}

export default function NavigationMenu({ revealed, setRevealed })
{
    const pathname = usePathname();
    
    const variants =
    {
        open:
        {
            x: "0",
            width: "100vw",
            transition:
            {
                type: "easeInOut",
                duration: 0.6
            }
        },
        closed:
        {
            x: "100vw",
            width: "0",
            transition:
            {
                type: "easeInOut",
                duration: 0.6
            }
        }
    };


    return <>
            <div>
                <motion.div
                    className={styles.container}
                    animate={revealed ? "open" : "closed"}
                    variants={variants}
                    initial={"closed"}
                    >
                    <Link href={"/"}>
                        <div className={styles.logo_container}>
                            <div className={styles.logo} />
                        </div>
                    </Link>
                    <div className={styles.hamburger} onClick={() => {setRevealed(!revealed)}}/>
                    <div>
                        <ul className={styles.page_links}>
                            <li>
                                <Image 
                                    src={"/home.svg"}
                                    alt={"Hem"}
                                    width={30}
                                    height={30}
                                />
                                <Link href={"/"}>
                                    <span className={pathname === "/" ? "link_active" : "link"} onClick={() => {setRevealed(false)}}>hem</span>
                                </Link>
                            </li>
                            <li>
                                <Image 
                                    src={"/info.svg"}
                                    alt={"Om oss"}
                                    width={30}
                                    height={30}
                                />
                                <Link href={"/om-oss"}>
                                    <span className={pathname === "/om-oss" ? "link_active" : "link"} onClick={() => {setRevealed(false)}}>om oss</span>
                                </Link>
                            </li>
                        </ul>
                    </div>
                    <ContactInfo />
                    <Buttons />
                </motion.div>
            </div>
        </>
}