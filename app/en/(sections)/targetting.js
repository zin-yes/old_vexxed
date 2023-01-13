import React from 'react'

import styles from './targetting.module.css'

import en_US from '../en_US.json'

export default function TargettingSection()
{
    return <div className={styles.container}>
        <header>
            <h3>{ en_US.sections.targetting.header.subtitle }</h3>
            <h1>
                { 
                    en_US.sections.targetting.header.title.split(" ").map((item, index) =>
                    {
                        if(en_US.sections.targetting.header.highlights.includes(index))
                            return <span>{ item + " " }</span>

                        return <>{ item + " " }</>
                    })
                }
            </h1>
            { 
                en_US.sections.targetting.header.description.map((item, index) =>
                {
                    return <React.Fragment key={index}><p>{ item }</p><br /></React.Fragment>
                }) 
            }
        </header>
    </div>
}