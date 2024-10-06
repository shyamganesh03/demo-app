'use client';

import React from 'react';
import { Label } from '../ui/label';
import TextReveal from '../animation/text-reveal';
import { ChevronRight } from 'lucide-react';
import { useTheme } from 'next-themes';
import List from '../ui/list';

const TechStack = () => {
  const techStack = [
    'React Native',
    'React Js',
    'Next Js',
    'Nest Js',
    'MongoDB',
  ];
  return (
    <div className='flex flex-col gap-2' id='tech-stack'>
      <Label className='text-xl text-primary'>Tech Stack</Label>

      {techStack.map((techName, index) => {
        return (
          <TextReveal key={index}>
            <List label={techName} key={techName} />
          </TextReveal>
        );
      })}
    </div>
  );
};

export default TechStack;
