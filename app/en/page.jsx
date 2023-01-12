import styles from './page.module.css'

import HeroSection from './(sections)/hero'

export default function LandingPage() 
{
    return <main className={styles.container}>
            <HeroSection />
        </main>
}
