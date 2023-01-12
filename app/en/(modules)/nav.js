import styles from 'nav.module.css'

export default function Nav()
{
    return <nav>
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
                    { item.name }
                </Link>
            })
        }
    </nav>
}