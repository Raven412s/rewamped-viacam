"use client"
import MarqueeText from '@/components/Global/Animated/MarqueeText'
import Bounded from '@/components/Global/HOC/Bounded'
import Navbar from '@/components/Global/Navbar'
import BentoGrid from '@/components/Global/root/section1/BentoGrid'
import HeroHeadlineWithSubHeadingAndGlow from '@/components/Global/root/section1/HeroHeadlineWithSubHeadingAndGlow'
import Ratings from '@/components/Global/root/section1/Ratings'
import { ratingImages, services } from '@/data'

const Home = () => {
  return (
    <main>
    <Navbar/>
    <Bounded className=' relative'>
        <Ratings images={ratingImages} completedCount={125} className='left-1/2 relative -translate-x-1/2' />
        <HeroHeadlineWithSubHeadingAndGlow />
        <BentoGrid />
        <div className="space-y-8 py-20">
        <p className='text-xs text-center text-muted-foreground' >Empowering Your Vision with Expert Solutions <br/> From Legal & Business Services to Creative Productions & Branding!</p>
        <MarqueeText textArray={services} className='font-display'/>
        </div>
        
    </Bounded>
    </main>
  )
}

export default Home
