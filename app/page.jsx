import SectionContainer from './(components)/section-container.js'

import HeroSection from './(sections)/hero.js'

export default function Home() {
    return (
        <main>
            <SectionContainer>
                <HeroSection />
                <HeroSection />
            </SectionContainer>
        </main>
    )
}
