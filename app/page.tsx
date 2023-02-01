import HeroModule from './sections/hero'

export default function Home() 
{
  return <main>
      <HeroModule
        title={"High-quality web development and design in Linköping"} 
        description={"We help professionals, solo entrepreneurs, and small businesses to reach new heights and make their mark online."}
        highlight={["development", "design"]}
      />
    </main>
}
