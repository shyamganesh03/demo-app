import { ThemeSwitch } from '@/lib/components/theme-switcher';
import HeroSection from '@/components/sections/Hero-Section';
import OverView from '@/components/sections/Over-View';
import TechStack from '@/components/sections/Tech-stack';
import Education from '@/components/sections/Education';
import Career from '@/components/sections/Career';
import Project from '@/components/sections/Project';

const Home = () => {
  return (
    <div className='flex h-screen flex-1 flex-col overflow-scroll bg-background'>
      <div className='sticky top-0 z-40 flex w-full flex-row items-center justify-between border-b bg-card px-8 py-4 dark:bg-card-foreground'>
        <ThemeSwitch />
      </div>
      <div className='my-10 flex flex-1 flex-col gap-4 p-4'>
        <HeroSection />
        <OverView />
        <TechStack />
        <Education />
        <Career />
        <Project />
      </div>
    </div>
  );
};

export default Home;
