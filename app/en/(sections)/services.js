import Card from '../(modules)/card'

import styles from './services.module.css'

import en_US from '../en_US.json'

export default function ServicesSection()
{
    return <div className={styles.container} id="services_section">
        <header>
            <h3>{ en_US.sections.services.header.subtitle }</h3>
            <h1>{ en_US.sections.services.header.title }</h1>
        </header>
        <div className={styles.cards}>
            {
                en_US.sections.services.cards.map((item, index) =>
                {
                    return <Card 
                        title={item.title} 
                        symbol={item.symbol} 
                        link_symbol={item.link_symbol} 
                        key={index} 
                    />
                })
            }
        </div>
    </div>
}