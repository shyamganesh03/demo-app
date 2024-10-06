import React from 'react';
import AccordionComponent from '../accordion';
import { Label } from '../ui/label';
import TextReveal from '../animation/text-reveal';

const Education = () => {
  const content: any = [
    {
      title: 'B.Tech in Information Technology',
      content: (
        <TextReveal>
          <Label>
            Anjalai Ammal Mahalingam Engineering College, Thiruvarur : 2019 -
            2022
          </Label>
        </TextReveal>
      ),
    },
    {
      title: 'Diploma in Electrical and Electronics Engineering (DEEE)',
      content: (
        <TextReveal>
          <Label>
            Shanmugha Polytechnic Engineering College, Thanjavur : 2016 - 2019
          </Label>
        </TextReveal>
      ),
    },
    {
      title: 'SSLC',
      content: (
        <TextReveal>
          <Label>
            Maxwell Matric Higher Secondary School, Thanjavur : 2015 - 2016
          </Label>
        </TextReveal>
      ),
    },
  ];
  return (
    <div className='flex flex-col' id='education'>
      <Label className='text-xl text-primary'>Education</Label>
      <AccordionComponent accordionItems={content} />
    </div>
  );
};

export default Education;
