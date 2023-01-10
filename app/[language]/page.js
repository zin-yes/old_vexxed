import HeroSection from './(sections)/hero'
import ServicesSection from './(sections)/services/services'

import { useTranslation } from '../i18n'

import styles from './page.module.css'

function getHeroContent(t)
{
    let content =
    {
        navigation:
        {
            items:
            {
                home: `${t("hero.navigation.items.home")}`,
                about: `${t("hero.navigation.items.about.content")}`,
                services: `${t("hero.navigation.items.services.content")}`,
                portfolio: `${t("hero.navigation.items.portfolio.content")}`,
                contact: `${t("hero.navigation.items.contact.content")}`,
            }
        },
        header:
        {
            content: `${t("hero.header.content")}`,
            highlight:
            {
                development: `${t("hero.header.highlight.development")}`,
                design: `${t("hero.header.highlight.design")}`,
            } 
        },
        description: `${t("hero.description")}`,
        buttons:
        {
            primary: `${t("hero.buttons.primary.content")}`,
            secondary: `${t("hero.buttons.secondary.content")}`
        }
    };

    return content;
}

function getHeroLinks(t)
{
    let links =
    {
        navigation:
        {
            items:
            {
                home: `${t("hero.navigation.items.home.link")}`,
                about: `${t("hero.navigation.items.about.link")}`,
                services: `${t("hero.navigation.items.services.link")}`,
                portfolio: `${t("hero.navigation.items.portfolio.link")}`,
                contact: `${t("hero.navigation.items.contact.link")}`,
            }
        },
        buttons:
        {
            primary: `${t("hero.buttons.primary.link")}`,
            secondary: `${t("hero.buttons.secondary.link")}`
        }
    };

    return links;
}

export default async function LandingPage({ params: { language } }) 
{
    const { t } = await useTranslation(language);

    return <main className={styles.container}>
        {
            t &&
            <HeroSection  
                content={getHeroContent(t)}
                links={getHeroLinks(t)}
            />
        }
        {
            t &&
            <ServicesSection />
        }
    </main>
}
