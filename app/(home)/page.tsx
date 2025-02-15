"use client"
import Stars from '@/components/Assets/Stars'
import Bounded from '@/components/Global/HOC/Bounded'
import Navbar from '@/components/Global/Navbar'
import BentoGrid from '@/components/Global/root/section1/BentoGrid'
import HeroHeadlineWithSubHeadingAndGlow from '@/components/Global/root/section1/HeroHeadlineWithSubHeadingAndGlow'
import Ratings from '@/components/Global/root/section1/Ratings'
import { ratingImages } from '@/data'

const Home = () => {
  return (
    <main>
    <Navbar/>
    <Bounded className=' relative'>
        <Ratings images={ratingImages} completedCount={125} className='left-1/2 relative -translate-x-1/2' />
        <HeroHeadlineWithSubHeadingAndGlow />
        <BentoGrid />
    </Bounded>
    </main>
  )
}

export default Home
