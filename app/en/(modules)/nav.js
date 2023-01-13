'use client'

import Image from 'next/image'
import Link from 'next/link'

import React, { useEffect, useState } from 'react'

import en_US from '../en_US.json'

import styles from './navigation.module.css'

export default function Nav()
{

    return <div className={styles.container}>
        <nav>
            <Image 
                alt={en_US.sections.nav.logo.alt}
                src={en_US.sections.nav.logo.url}
                width={175}
                height={60}
            />
            {
                en_US.sections.nav.items.map((item, index) =>
                {
                    return <Link href={item.url} key={index}>
                        <span>
                        { item.name }
                        </span>
                    </Link>
                })
            }
        </nav>
    </div>
}