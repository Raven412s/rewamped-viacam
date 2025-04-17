"use client";

import MarqueeText from '@/components/Global/Animated/MarqueeText';
import Bounded from '@/components/Global/HOC/Bounded';
import Navbar from '@/components/Global/Navbar';
import BentoGrid from '@/components/Global/root/section1/BentoGrid';
import HeroHeadlineWithSubHeadingAndGlow from '@/components/Global/root/section1/HeroHeadlineWithSubHeadingAndGlow';
import HeroHeading from '@/components/Global/root/section2/HeroHeading';
import Production from '@/components/Global/root/section2/Production';
import BusinessComplete from '@/components/Global/root/section3/BusinessComplete';
import HeroHeading2 from '@/components/Global/root/section3/HeroHeading2';
import { services } from '@/data';

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
        <Production/>
        <Bounded>
            {/* Business Related */}
            <HeroHeading2/>
        </Bounded>
        <BusinessComplete/>
    </main>
  );
};

export default Home;
