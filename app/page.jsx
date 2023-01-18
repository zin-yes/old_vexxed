import SectionContainer from './(components)/section-container.js'

import HeroSection from './(sections)/hero.js'
import FooterSection from './(sections)/footer.js'
import ServicesSection from './(sections)/services.js'
import ExperienceSection from './(sections)/experience.js'
import HomeBackground from './(components)/home-background.js'
import Navigation from './(components)/navigation.js'

export default function Home() 
{
    const nav_items =
    [
        {
            name: "hem",
            url: "/"
        },
        {
            name: "om oss",
            url: "/om-oss"
        }
    ];

    return (<main>
            <Navigation items={nav_items}/>
            <SectionContainer>
                <HeroSection />
                <HomeBackground>
                    <ServicesSection />
                    <ExperienceSection />
                </HomeBackground>
                <FooterSection />
            </SectionContainer>
        </main>
    )
}
