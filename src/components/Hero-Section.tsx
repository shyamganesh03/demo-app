'use client';

import React from 'react';
import { InstagramLogoIcon, LinkedInLogoIcon } from '@radix-ui/react-icons';
import { Mail, MapPin, Phone } from 'lucide-react';
import ProfileImage from '@/assets/shyamganesh.jpg';
import { Label } from '@/components/ui/label';
import Image from 'next/image';
import TextReveal from './animation/text-reveal';

function HeroSection() {
  return (
    <div className='flex w-full flex-row items-center justify-center gap-9'>
      <div className='overflow-hidden rounded-full border border-primary p-1'>
        <Image
          src={ProfileImage}
          alt={'Image-not-found'}
          objectFit='contain'
          className='h-[100px] w-[100px] rounded-full'
        />
      </div>

      <div className='flex flex-col gap-3'>
        <TextReveal>
          <Label className='text-xl text-primary'>SHYAM GANESH</Label>
        </TextReveal>
        <TextReveal>
          <div className='flex flex-row gap-2'>
            <MapPin className='h-4 w-4 cursor-pointer duration-300 hover:scale-125' />
            <Label>Bangalore</Label>
          </div>
        </TextReveal>

        <div className='flex flex-row gap-2'>
          <Phone className='h-4 w-4 cursor-pointer duration-300 hover:scale-125' />
          <Mail className='h-4 w-4 cursor-pointer duration-300 hover:scale-125' />
          <LinkedInLogoIcon className='h-4 w-4 cursor-pointer duration-300 hover:scale-125' />
          <InstagramLogoIcon className='h-4 w-4 cursor-pointer duration-300 hover:scale-125' />
        </div>
      </div>
    </div>
  );
}

export default HeroSection;
