import SectionContainer from './modules/section-container'

import Hero from './sections/hero'
import Experience from './sections/experience'

import styles from './page.module.css'


export default function Page()
{
  return <main className={styles.container}>
      <SectionContainer>
        <div id="home">
          <Hero />
        </div>
        <div id="experience">
          <Experience />
        </div>
      </SectionContainer>
    </main>
}