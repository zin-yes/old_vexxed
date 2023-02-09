import styles from './navigation.module.css'

export interface LinkType
{
  url: string,
  target: string
};

export interface SubMenuItemType
{
  title: string,
  category: string,
  link: LinkType
};

export interface ItemType
{
  title: string,
  link: LinkType,
  submenu: SubMenuItemType[]
};

export function Logo({ link }:
{
  link: LinkType    
})
{
  return <div className={styles.logo_container}>
      <a
        href={link.url} 
        target={link.target}
      >
        <span className={styles.logo}>VEXXED</span>
      </a>
    </div>
}

export function Items({ items }:
{
  items: ItemType[]
})
{
  return <div className={styles.items}>
      {
        items.map((item, index) => 
        {
          return <Item 
              key={index} 
              title={item.title} 
              link={item.link} 
              submenu={item.submenu}
            />
        })      
      }
    </div>  
}

export function Item({ title, link, submenu }: 
{
  title: string,
  link: LinkType,
  submenu: SubMenuItemType[]      
})
{
  return <div className={styles.item}>
      <div className={styles.item_title}>
        <a href={link.url} target={link.target}>
          <span>{ title }</span>
        </a>
      </div>
      {
        submenu.length !== 0 ?
          <div className={styles.item_arrow}>
            <svg width="11" height="7" viewBox="0 0 11 7" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M1 1.25L5.5 5.75L10 1.25" stroke="#342B3D"/>
            </svg>
          </div>
        : ""
      }
    </div>
}

export default function Module({ }:
{
    
})
{
  const logo_link =
  {
    url: "#home",
    target: ""
  };
  
  const items =
  [
    {
      title: "home",
      link:
      {
        url: "#home",
        target: ""
      },
      submenu: []
    },
    {
      title: "about us",
      link:
      {
        url: "#about",
        target: ""
      },
      submenu: []
    },
    {
      title: "our work",
      link:
      {
        url: "#work",
        target: ""
      },
      submenu: []
    },
    {
      title: "our process",
      link:
      {
        url: "#process",
        target: ""
      },
      submenu: []
    } 
  ];

  return <div className={styles.container}>
      <nav>
        <Logo link={logo_link} />
        <Items items={items} />
      </nav>
    </div>
}