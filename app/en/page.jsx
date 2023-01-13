import styles from './page.module.css'

import HeroSection from './(sections)/hero'
import ServicesSection from './(sections)/services'
import TargettingSection from './(sections)/targetting'

import FadeInWhenVisible from './(components)/fade-in-when-visible'

export default function LandingPage() 
{
    return <main className={styles.container}>
            <FadeInWhenVisible>
                <HeroSection />
            </FadeInWhenVisible>
            <div className={styles.secondary_background}>
                <FadeInWhenVisible>
                    <ServicesSection />
                </FadeInWhenVisible>
                <FadeInWhenVisible>
                    <TargettingSection />
                </FadeInWhenVisible>
            </div>
        </main>
}
