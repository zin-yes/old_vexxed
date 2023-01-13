import './globals.css'

import SmoothScroll from './en/(components)/smooth-scroll'

export default function RootLayout({ children }) 
{
    return (
        <html lang="en" dir="ltr">
            <head />
            <body>
                <SmoothScroll>
                    {children}
                </SmoothScroll>
            </body>
        </html>
    )
}
