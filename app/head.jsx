export default function Head() 
{
    const title = "Webbutveckling och design gjort med kärlek i Linköping | VEXXED";
    const description = "Vi är en duo bestående av en ung och talangfull kodare samt en kreativ konstnär som är specialiserad på att skapa vackra, pålitliga och användarvänliga hemsidor. Vi är baserade i Linköping och är fokuserade på att hjälpa lokala småföretag, så tveka inte att ta kontakt med oss om du vill ta ditt företag till nästa nivå genom att stärka varumärket och onlinenärvaron.";
    const revised = "Tisdag, 2023-01-17";
    const keywords = "Linköping, webbyrå, lokala företag, småföretag, Östergötland, webbutveckling, webbdesign, design, utveckling, webbsida, webbplats, byrå, designbyrå";
    const author = "VEXXED";
    const icon_url = "/icon.svg";

    return (
        <>
                <title>{ title }</title>
                <meta content="width=device-width, initial-scale=1" name="viewport" />
                <meta name="description" content={ description } />
                <meta name="revised" content={ revised } />
                <meta name="keywords" content={ keywords } />
                <meta name="author" content={ author } />
                <link rel="icon" href={ icon_url } />
        </>
    )
}
