import Navigation from './(components)/navigation'
import './globals.css'


export default function RootLayout({ children }) {
  const nav_items =
  [
    {
      name: "hem",
      url: "/"
    },
    {
      name: "om oss",
      url: "/om-oss"
    }
  ];
  

  return (
    <html lang="sv">
      <head />
      <body>
          <Navigation items={nav_items}/>
          { children }
      </body>
    </html>
  )
}
