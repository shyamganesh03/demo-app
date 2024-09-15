import React from 'react';
import AccordionComponent from '../accordion';
import { Label } from '../ui/label';

const Education = () => {
  const content: any = [
    {
      title: 'B.Tech in Information Technology',
      content: (
        <div>
          <Label>
            Anjalai Ammal Mahalingam Engineering College, Thiruvarur : 2019 -
            2022
          </Label>
        </div>
      ),
    },
    {
      title: 'Diploma in Electrical and Electronics Engineering (DEEE)',
      content: (
        <div>
          <Label>
            Shanmugha Polytechnic Engineering College, Thanjavur : 2016 - 2019
          </Label>
        </div>
      ),
    },
    {
      title: 'SSLC',
      content: (
        <div>
          <Label>
            Maxwell Matric Higher Secondary School, Thanjavur : 2015 - 2016
          </Label>
        </div>
      ),
    },
  ];
  return (
    <div className='flex flex-col gap-4' id='education'>
      <Label className='text-xl text-primary'>Education</Label>
      <AccordionComponent accordionItems={content} />
    </div>
  );
};

export default Education;
