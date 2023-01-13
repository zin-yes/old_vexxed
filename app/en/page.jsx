import styles from './page.module.css'

import Nav from './(modules)/nav'

import HeroSection from './(sections)/hero'
import ServicesSection from './(sections)/services'

export default function LandingPage() 
{
    return <main className={styles.container}>
            <Nav />
            <HeroSection />
            <ServicesSection />
        </main>
}
