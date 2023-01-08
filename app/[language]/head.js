/*
 * Page Infromation and Meta Tags:
 *     Currently Included:
 *         - Title (load dynamically)
 *         - Description (load dynamically)
 *         - Charset (research)
 *         - Viewport (research)
 *         - Author (research)
 *         - Icon (research dark and light mode)
 *     Should Include:
 *         - Thumbnail Picture
 */ 

export default function Head() 
{
    return (
        <>
            <title>VEXXED - An Agency of Web Development and Design Experts in Linköping</title>
            <meta charSet="UTF-8" />
            <meta name="keywords" content="Website, Web Development, Web Design, Web Dev, Agency, Web Agency, Web Dev Agency, Digital Agency, Digital Services, Online Presence Agency, Conversion Optimization, Website Builder, Linköping, Law Firms, Dentists, Professional, Professionals, Expert, Experts, Doctors, Clinic, Lawyer, Attorney" />
            <meta name="author" content="VEXXED" />
            <meta name="viewport" content="width=device-width, initial-scale=1.0" />
            <meta content="width=device-width, initial-scale=1" name="viewport" />
            <meta name="description" content="We are a bunch of young and talented coders and artists that specialize in web development and web design. We are based in Linköping, Östergötland, Sweden; do not hesitate to contact us if are looking for experts to strengthen your brand and your online presence." />
            <link rel="shortcut icon" href="/logo-icon-dark.svg" />
        </>
    )
}
