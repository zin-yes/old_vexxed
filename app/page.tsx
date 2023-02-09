import SectionContainer from './modules/section-container'

import Hero from './sections/hero'
//import About from './sections/about'

import styles from './page.module.css'


export default function Page()
{
  return <main className={styles.container}>
      <SectionContainer>
        <div id="hero">
          <Hero />
        </div>
      </SectionContainer>
    </main>
}