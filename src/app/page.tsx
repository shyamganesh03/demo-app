import { Label } from '@/components/ui/label';
import { ThemeSwitch } from '@/lib/components/theme-switcher';
import HeroSection from '@/components/sections/Hero-Section';
import MotionWrap from '@/components/animation/motion-wrap';
import OverView from '@/components/sections/Over-View';
import TechStack from '@/components/sections/TechStack';
import Education from '@/components/sections/Education';
import Career from '@/components/sections/Career';

const Home = () => {
  return (
    <div className='flex h-screen flex-1 flex-col overflow-scroll bg-background'>
      <div className='sticky top-0 z-40 flex w-full flex-row items-center justify-between border-b border-border bg-gray-200 p-4 shadow-sm dark:border-secondary dark:bg-secondary'>
        <ThemeSwitch />
        <MotionWrap className='flex flex-row gap-4'>
          <Label className='cursor-pointer text-lg transition-all duration-200 hover:text-ring'>
            Project
          </Label>
          <Label className='cursor-pointer text-lg transition-all duration-200 hover:text-ring'>
            About
          </Label>
          <Label className='cursor-pointer text-lg transition-all duration-200 hover:text-ring'>
            Carrier
          </Label>
          <Label className='cursor-pointer text-lg transition-all duration-200 hover:text-ring'>
            Contact
          </Label>
        </MotionWrap>
      </div>
      <div className='flex flex-1 flex-col gap-4 p-4'>
        <HeroSection />
        <OverView />
        <TechStack />
        <Education />
        <Career />
      </div>
    </div>
  );
};

export default Home;
