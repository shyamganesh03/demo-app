'use client';

import React from 'react';
import { Label } from './ui/label';
import TextReveal from './animation/text-reveal';
import { ChevronRight } from 'lucide-react';
import { useTheme } from 'next-themes';
import List from './ui/list';

const TechStack = () => {
  const techStack = [
    'React Js',
    'React Native',
    'Next Js',
    'Nest js',
    'MongoDB',
  ];
  return (
    <div className='flex flex-col gap-4' id='tech-stack'>
      <Label className='text-xl text-primary'>Tech Stack</Label>
      <TextReveal>
        {techStack.map((techName) => {
          return <List label={techName} key={techName} />;
        })}
      </TextReveal>
    </div>
  );
};

export default TechStack;
