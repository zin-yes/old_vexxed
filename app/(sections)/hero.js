import Link from 'next/link'

import Section from '../(components)/section.js'
import { PrimaryButton, SecondaryButton } from '../(components)/button.js'
import HighlightedText from '../(components)/highlighted-text.js'
import DownArrow from '../(components)/down-arrow.js'

import styles from './hero.module.css'

const HeroContainer = ({ children }) =>
{
    return <div className={styles.hero_container}>
            <div className={styles.hero_container_spacer}>
                <div className={styles.hero_spacer_top}/>
                <div className={styles.hero_container_content}>{ children }</div>
                <div className={styles.hero_spacer_bottom}/>
            </div>
        </div>
}

const HeroIllustration = () =>
{
    return <div className={styles.hero_illustration_container}>
            <div className={styles.hero_illustration}></div>
        </div>
}

const HeroHeader = ({ title, description, primary, secondary }) =>
{
    return <div className={styles.hero_header}>
            <div className={styles.hero_header_text}>
                <h1>
                    {
                        title.text.split(" ").map((item, index) =>
                        {
                            if(title.highlight.includes(index))
                                return <HighlightedText key={index}>{ item + " " }</HighlightedText>

                            return item + " ";
                        })
                    }
                </h1>
                <p>{ description }</p>
            </div>
            <HeroButtonsLandscape
                primary={primary}
                secondary={secondary}
            />
        </div>
}

const HeroButtonsLandscape = ({ primary, secondary }) =>
{
    return <div className={styles.hero_buttons_landscape}>
            <Link href={primary.url} target={"_blank"}>
                <div className={styles.hero_primary_button_container}>
                    <PrimaryButton title={primary.title} />
                </div>
            </Link>
            <Link href={secondary.url}>
                <div className={styles.hero_secondary_button_container}>
                    <SecondaryButton title={secondary.title} />
                </div>
            </Link>
        </div>
}

const HeroButtonsPortrait = ({ primary, secondary }) =>
{
    return <div className={styles.hero_buttons_portrait}>
            <Link href={primary.url} target={"_blank"}>
                <div className={styles.hero_primary_button_container}>
                    <PrimaryButton title={primary.title} />
                </div>
            </Link>
            <Link href={secondary.url}>
                <div className={styles.hero_secondary_button_container}>
                    <SecondaryButton title={secondary.title} />
                </div>
            </Link>
        </div>
}

const HeroDownArrow = ({}) =>
{
    return <div className={styles.hero_down_arrow_container}>
    <div className={styles.hero_spacer_bottom}/>
            <DownArrow />
        </div>
}

export default function Hero()
{
    const title = 
    {
        text: "Högkvalitativ webbutveckling och design i Linköping",
        highlight: [ 1, 3 ]
    };
    const description = "Vi hjälper små lokala företag att skapa ett starkt varumärke och nå nya höjder online med vackra, pålitliga och användarvänliga webbplatser.";
    const primary = { url: "https://calendly.com/vexxed-digital/conversation", title: "BOKA ETT MÖTE"};
    const secondary = { url: "mailto:prototyp@vexxed.se", title: "GRATIS DESIGNPROTOTYP" };

    return <Section>
            <HeroContainer>
                <HeroHeader 
                    title={title}
                    description={description} 
                    primary={primary} 
                    secondary={secondary}
                />
                <HeroIllustration />
                <HeroButtonsPortrait
                    primary={primary} 
                    secondary={secondary}
                />
            </HeroContainer>
        </Section>
}
