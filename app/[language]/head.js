/*
 * Page Infromation and Meta Tags:
 *     Currently Included:
 *         - Icon (research dark and light mode)
 *     Should Include:
 *         - Thumbnail Picture
 */

import { useTranslation } from '../i18n'

export default async function Head({ params: { language } }) 
{
    const { t } = await useTranslation(language);

    return (
        <>
            <title>{ t("page.title") }</title>
            <meta charSet="UTF-8" />
            <meta name="keywords" content={`${t("page.keywords")}`} />
            <meta name="author" content={`${t("page.author")}`} />
            <meta name="viewport" content="width=device-width, initial-scale=1.0" />
            <meta content="width=device-width, initial-scale=1" name="viewport" />
            <meta name="description" content={`${t("page.description")}`} />
            <link rel="shortcut icon" href="/logo-icon-dark.svg" />
        </>
    )
}
