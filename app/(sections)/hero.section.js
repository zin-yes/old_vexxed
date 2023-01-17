import Image from 'next/image'

import SectionVerticalSplit from '../(components)/section-vsplit.js'
import { PrimaryButton, SecondaryButton } from '../(components)/button.js'

import Section from '../(components)/section.js'

const HeroOrganizer = ({ children }) =>
{
    return <div>{ children }</div>
}

export default function Hero()
{
    const title = "Högkvalitativ webbutveckling och design i Linköping";
    const highlight = [ 1, 3 ];
    const description = "Vi hjälper små lokala företag att skapa ett starkt varumärke och nå nya höjder online med vackra, pålitliga och användarvänliga webbplatser.";
    const primary = { url: "", title: "BOKA ETT MÖTE"};
    const secondary = { url: "", title: "GRATIS DESIGNPROTOTYP" };

    return <Section>
            <HeroOrganizer>
                <div>
	            <h1>
                    {
                        title.split(" ").map((item, index) =>
                        {
                            if(highlight.includes(index))
                                return <span key={index} className={"highlight"}>{ item + " " }</span>

                            return item + " ";
                        })
                    }
                    </h1>
                    <p>{ description }</p>
                    <PrimaryButton title={primary.title} href={primary.url} />
                    <SecondaryButton title={secondary.title} href={secondary.url}/>
                </div>
                <div>
                    <Image
                        alt={"An illustration of a webpage using translucent layers to represent the different design building blocks of the page."}
                        src={"/illustration-desktop.svg"}
                        width={800}
                        height={640}
                    />
                </div>
            </HeroOrganizer>
        </Section>
}
