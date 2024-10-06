import React from 'react';
import AccordionComponent from '../accordion';
import { Label } from '../ui/label';
import List from '../ui/list';
import TextReveal from '../animation/text-reveal';

const Career = () => {
  const workInfo = [
    '2.9+ years of experience in front-end (React, React Native, Next Js) and back-end development (Nest.js, MongoDB, AWS Lambda).',
    'Developed web and mobile applications focusing on code reusability and maintainability.',
    'Created APIs using Nest.js and integrated them with AWS services.',
    'Developed a chatbot using TypeBot and integrated it with the front-end.',
    'Designed and implemented an AWS Grafana dashboard to monitor APIs',
    'Built web-scraping APIs using Puppeteer and integrated data into MongoDB.',
    'Created prompts and APIs to retrieve data from open-source AI tools like ChatGPT and Gemini.',
    'Led a React Native project, ensuring bug-free delivery and project closure.',
  ];
  const content: any = [
    {
      title: 'Incresco Technology Solutions Private Limited, Bangalore',
      content: (
        <TextReveal>
          <Label className='opacity-50'>
            Software Engineer | Jan 2022 - Present
          </Label>
          <div className='mt-4'>
            {workInfo.map((workItem, index) => {
              return <List label={workItem} key={`career-${index}`} />;
            })}
          </div>
        </TextReveal>
      ),
    },
  ];
  return (
    <div className='flex flex-col' id='career'>
      <Label className='text-xl text-primary'>Career</Label>
      <AccordionComponent accordionItems={content} />
    </div>
  );
};

export default Career;
