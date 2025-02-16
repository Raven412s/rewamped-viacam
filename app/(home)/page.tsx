"use client";

import MarqueeText from '@/components/Global/Animated/MarqueeText';
import Branding from '@/components/Global/Custom/Sections/Branding';
import TabbedOrScrollingUI from '@/components/Global/Custom/TabbedOrScrollUI';
import Bounded from '@/components/Global/HOC/Bounded';
import Navbar from '@/components/Global/Navbar';
import BentoGrid from '@/components/Global/root/section1/BentoGrid';
import HeroHeadlineWithSubHeadingAndGlow from '@/components/Global/root/section1/HeroHeadlineWithSubHeadingAndGlow';
import Ratings from '@/components/Global/root/section1/Ratings';
import HeroHeading from '@/components/Global/root/section2/HeroHeading';
import Production from '@/components/Global/root/section2/Production';
import { ratingImages, services } from '@/data';

const Home = () => {
  return (
    <main>
      <Navbar />
      <Bounded className="relative">
        {/*Hero*/}
        {/* <Ratings
          images={ratingImages}
          completedCount={125}
          className="left-1/2 relative -translate-x-1/2"
        /> */}
        <HeroHeadlineWithSubHeadingAndGlow />
        <BentoGrid />
        <div className="space-y-8 py-20">
          <p className="text-xs text-center text-muted-foreground">
            Empowering Your Vision with Expert Solutions <br />
            From Legal & Business Services to Creative Productions & Branding!
          </p>
          <MarqueeText textArray={services} className="font-display" />
        </div>
        {/*Production*/}
        <HeroHeading/>
      </Bounded>
       {/* <Branding/> */}
        <TabbedOrScrollingUI/>
        <Production/>
    </main>
  );
};

export default Home;
