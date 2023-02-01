import Navigation from './modules/navigation'

import './global.css'

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  const items =
  [
    {
      title: "home",
      url: "/"
    },
    {
      title: "about us",
      url: "/about"
    },
    {
      title: "our work",
      url: "/work",
      menu_items: 
      [
        {
          title: "Gabbie Arts — Digital Artist",
          url: "/work/gabbie-arts"
        },
        {
          title: "Blevins & Co — Law Firm",
          url: "/work/blevins-and-co"
        },
        {
          title: "Hiker — Clothing Retailer",
          url: "/work/hiker"
        },
        {
          title: "Papa's Pizzeria — Clothing Retailer",
          url: "/work/papas-pizzeria"
        }
      ]
    },
    {
      title: "contact us",
      url: "/contact"
    }
  ];

  return (
    <html lang="en">
      <head />
      <body>
        <Navigation 
          items={items}
        />
        {children}
      </body>
    </html>
  )
}
