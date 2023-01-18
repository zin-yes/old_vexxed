import SectionContainer from './(components)/section-container.js'

import HeroSection from './(sections)/hero.js'
import FooterSection from './(sections)/footer.js'
import ServicesSection from './(sections)/services.js'
import ExperienceSection from './(sections)/experience.js'
import Animate from './animate.js'
import HomeBackground from './(components)/home-background.js'

export default function Home() 
{
    return (
        <main>
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
