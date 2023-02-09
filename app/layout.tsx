import Navigation from './modules/navigation'

import './global.css'

export default function RootLayout({ children }: 
{
  children: React.ReactNode;
}) 
{
  return <html>
      <head />
      <body>
        <Navigation />
        { children }
      </body>
    </html>
}
