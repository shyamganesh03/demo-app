'use client';

import React from 'react';
import { Label } from '../ui/label';
import TextReveal from '../animation/text-reveal';

const OverView = () => {
  return (
    <div className='flex flex-col gap-2' id='over-view'>
      <Label className='text-xl text-primary'>Over View</Label>
      <TextReveal>
        <Label className='text-sm'>
          Motivated and technically adept software engineer seeking a position
          at a reputable organization. Aiming to leverage my skills in front-end
          and back-end development to contribute to organizational success while
          staying updated on the latest trends in IT.
        </Label>
      </TextReveal>
    </div>
  );
};

export default OverView;
