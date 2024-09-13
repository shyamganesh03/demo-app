import { Label } from '@/components/ui/label';
import { ThemeSwitch } from '@/lib/components/theme-switcher';

import HeroSection from '@/components/Hero-Section';

export default function Home() {
  return (
    <div className='flex h-screen flex-1 flex-col overflow-scroll bg-background'>
      <div className='sticky top-0 flex h-[48px] w-full flex-row justify-between p-4'>
        <ThemeSwitch />
        <div className='flex flex-row gap-4'>
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
        </div>
      </div>
      <div className='flex flex-1 flex-col'>
        <HeroSection />
      </div>
    </div>
  );
}
