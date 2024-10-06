import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '@/components/ui/accordion';
import { ReactNode } from 'react';

interface AccordionComponentProps {
  accordionItems: { title: string; content: ReactNode | string }[];
}

const AccordionComponent = ({ accordionItems }: AccordionComponentProps) => {
  return (
    <Accordion type='single' collapsible className='w-full'>
      {accordionItems?.map((accordionItem) => {
        return (
          <AccordionItem value={accordionItem.title} className='border-primary'>
            <AccordionTrigger className='text-left hover:no-underline'>
              {accordionItem.title}
            </AccordionTrigger>
            <AccordionContent>{accordionItem.content}</AccordionContent>
          </AccordionItem>
        );
      })}
    </Accordion>
  );
};

export default AccordionComponent;
