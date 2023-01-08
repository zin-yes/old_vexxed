import { NextResponse } from 'next/server'
import acceptLanguage from 'accept-language'
import { FallbackLanguage, SupportedLanguages } from './app/i18n/settings'

acceptLanguage.languages(SupportedLanguages);

export const config =
{
    matcher: '/:langauge*'
};

const cookieName = 'i18next';

export function middleware(request)
{
    let language;

    if (request.cookies.has(cookieName)) 
        language = acceptLanguage.get(request.cookies.get(cookieName).value);

    if (!language) 
        language = acceptLanguage.get(request.headers.get('Accept-Language'));

    if (!language) 
        language = FallbackLanguage;

    if (request.nextUrl.pathname === '/') 
        return NextResponse.redirect(new URL(`/${language}`, request.url));

    if (request.headers.has('referer')) 
    {
        const refererUrl = new URL(request.headers.get('referer'));

        const languageInReferer = SupportedLanguages.find((language) => { 
            refererUrl.pathname.startsWith(`/${language}`);
        });

        const response = NextResponse.next();

        if (languageInReferer) 
        {
            response.cookies.set(cookieName, languageInReferer);
        }

        return response;
    }

    return NextResponse.next();
}