import React from "react";
import Section from "../(components)/section";

import { PrimaryButton } from "../(components)/button";

import styles from './footer.module.css'
import Link from "next/link";
import Image from "next/image";

const FooterHeader = ({ title, description, primary }) =>
{
    return <div className={styles.footer_header}>
            <div className={styles.footer_header_text}>
                <h2>{ title }</h2>
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
            <FooterLinksPortrait />
            <div className={styles.button_landscape}>
                <Link href={primary.url}>
                    <PrimaryButton title={primary.title}/>
                </Link>
            </div>
        </div>
}

const FooterPortraitButtons = ({ primary }) =>
{
    return <div className={styles.button_portrait}>
            <Link href={primary.url}>
                <PrimaryButton title={primary.title}/>
            </Link>
        </div>
}

const FooterLinksPortrait = () =>
{
    return <ul className={styles.footer_links}>
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
                <Link href={"mailto:hej@vexxed.se"}>
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

const FooterLinksLandscape = () =>
{
    return <ul className={styles.footer_links_landscape}>
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
                <Link href={"mailto:hej@vexxed.se"}>
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

export default function Footer()
{
    const title = "CHATTA MED OSS!";
    const description = ["Har du en idé som du är osäker på? Eller kanske bara vill ha tips?", "Tveka då inte att ta kontakt med oss, antingen genom att boka ett möte med knappen nedan, eller ringa oss under våra öppettider."];
    const primary = { url: "https://calendly.com/vexxed-digital/conversation", title: "BOKA ETT MÖTE"};

    return <Section>
        <div className={styles.footer}>
            <div className={styles.container}>
                <FooterHeader 
                    title={title}
                    description={description}
                    primary={primary}
                />
                <FooterPortraitButtons 
                    primary={primary} 
                />
            </div>
        </div>
    </Section>
}