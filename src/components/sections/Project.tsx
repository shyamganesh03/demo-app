import { Label } from '@radix-ui/react-label';
import React from 'react';
import List from '../ui/list';
import AccordionComponent from '../accordion';
import TextReveal from '../animation/text-reveal';

const Project = () => {
  const edvanza = [
    ' Developed screens and integrated functionalities.',
    'Implemented global search with infinite scroll.',
    'Tested and ensured compatibility across Android and iOS platforms.',
  ];
  const edvanzaMarketing = [
    'Developing a static screen with responsiveness.',
    'Implementing Animation using framer-motion.',
  ];

  const apphero = [
    'Developing screens and functionalities.',
    'Integrating sentry for error monitoring system.',
    'Developing API’s on Nest js with AWS Dynamodb.',
    'Developing OAP form on react and pdf generator for submitted OAP using nest js with pdfmake.',
  ];
  const campus = [
    'Developing and integrating typeBot open source chat bot with astro website.',
    'Developing API for scraping and Injecting data into mangoDB.',
    'Implementing the creative ideas for the improvisation of the project and ensuring and maintaining the SEO for the website is proper.',
  ];
  const collegeSite = [
    'Built responsive screens using React and Astro.js.',
    'Integrated Storyblok CMS content with the website.',
    'Maintained website performance above 80 for both mobile and desktop.',
  ];

  const izzo = [
    'Leading the project and ensuring the closure of project on time.',
    'Integrating map feature with custom theme.',
    'Integrating firebase crash analytics and google analytics.',
  ];

  const content: any = [
    {
      title: 'Edvanza Mobile Application',
      content: (
        <TextReveal>
          <Label className='opacity-50'>
            React Native, AWS Lambda | January 2022 – May 2023
          </Label>
          <div className='mt-4'>
            {edvanza.map((workItem) => {
              return <List label={workItem} />;
            })}
          </div>
        </TextReveal>
      ),
    },
    {
      title: 'Edvanza Marketing Site',
      content: (
        <TextReveal>
          <Label className='opacity-50'>Edvanza Marketing Site</Label>
          <div className='mt-4'>
            {edvanzaMarketing.map((workItem) => {
              return <List label={workItem} />;
            })}
          </div>
        </TextReveal>
      ),
    },
    {
      title: 'App Hero',
      content: (
        <TextReveal>
          <Label className='opacity-50'>
            React-Native, React Js, Nest JS and AWS | June 2023 - Dec 2023
          </Label>
          <div className='mt-4'>
            {apphero.map((workItem) => {
              return <List label={workItem} />;
            })}
          </div>
        </TextReveal>
      ),
    },
    {
      title: 'Campus',
      content: (
        <TextReveal>
          <Label className='opacity-50'>
            Astro js, Nest js | Jan 2024 - April 2024
          </Label>
          <div className='mt-4'>
            {campus.map((workItem) => {
              return <List label={workItem} />;
            })}
          </div>
        </TextReveal>
      ),
    },
    {
      title: 'Anjalai Ammal Mahalingam Engineering College Website',
      content: (
        <TextReveal>
          <Label className='opacity-50'>
            Astro with React, Tailwind CSS, and Storyblok | May 2024 - June 2024
          </Label>
          <div className='mt-4'>
            {collegeSite.map((workItem) => {
              return <List label={workItem} />;
            })}
          </div>
        </TextReveal>
      ),
    },
    {
      title: 'Izzo App',
      content: (
        <TextReveal>
          <Label className='opacity-50'>
            React-Native and Firebase | June 2024 - July 2024
          </Label>
          <div className='mt-4'>
            {izzo.map((workItem) => {
              return <List label={workItem} />;
            })}
          </div>
        </TextReveal>
      ),
    },
  ];
  return (
    <div className='flex flex-col' id='project'>
      <Label className='text-xl text-primary'>Projects</Label>
      <AccordionComponent accordionItems={content} />
    </div>
  );
};

export default Project;
