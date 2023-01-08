import { dir } from 'i18next'
import { SupportedLanguages } from '../i18n/settings'

import '../globals.css';

export async function generateStaticParams() 
{
    return SupportedLanguages.map((language) => ({ language }))
}

export default function RootLayout({
    children,
    params: 
    {
        language
    }
})
{
    return (
        <html lang={language} dir={ dir(language) }>
        <head />
        <body>
            { children }
        </body>
        </html>
    )
}
