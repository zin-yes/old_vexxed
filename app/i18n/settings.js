export const FallbackLanguage = 'en'
export const SupportedLanguages = [FallbackLanguage, 'se']
export const defaultNS = 'translation'

export function getOptions(lng = FallbackLanguage, ns = defaultNS) 
{
    return {
        supportedLngs: SupportedLanguages,
        FallbackLanguage,
        lng,
        fallbackNS: defaultNS,
        defaultNS,
        ns
    }
}