import en_US from './en_US.json'

export default async function Head() 
{
    return (
        <>
            <title>{en_US.page.title}</title>
            <meta content="width=device-width, initial-scale=1" name="viewport" />
            <meta name="description" content={en_US.page.description} />
            <meta name="revised" content={en_US.page.revised} />
            <meta name="keywords" content={en_US.page.keywords} />
            <meta name="author" content={en_US.page.author} />
            <link rel="icon" href={en_US.page.icon_url} />
        </>
    )
}
