'use client';

import React from 'react';
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from '@/components/ui/popover';
import { Mail } from 'lucide-react';
import { useForm } from 'react-hook-form';
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from '../ui/card';
import { Label } from '../ui/label';
import { Input } from '../ui/input';
import { Textarea } from '../ui/textArea';
import { Button } from '../ui/button';

const MailPopup = () => {
  const form = useForm();

  const errors = form.formState.errors;

  const handleSubmit = () => {};
  return (
    <Popover>
      <PopoverTrigger>
        <Mail className='h-4 w-4 cursor-pointer duration-300 hover:scale-125' />
      </PopoverTrigger>
      <PopoverContent className='p-0 lg:w-[350px]'>
        <Card>
          <CardHeader>
            <CardTitle>Mail to Author</CardTitle>
            <CardDescription>
              Please fill the following details will send mail to this website
              author.
            </CardDescription>
          </CardHeader>
          <CardContent>
            <form onSubmit={form.handleSubmit(handleSubmit)}>
              <div className='mb-4 flex flex-col space-y-1.5'>
                <Label htmlFor='subject' className='text-lg font-semibold'>
                  Subject
                </Label>
                <Input
                  {...form.register('subject', { required: true })}
                  id='subject'
                  placeholder='Enter the subject for the mail'
                  className={`${errors.subject ? 'border-destructive' : ''}`}
                />
              </div>
              <div className='mb-4 flex flex-col space-y-1.5'>
                <Label htmlFor='mailContent' className='text-lg font-semibold'>
                  Mail content
                </Label>
                <Textarea
                  {...form.register('mailContent', { required: true })}
                  id='mail-content'
                  placeholder='Enter the Mail Content'
                  className={`${errors.mailContent ? 'border-destructive' : ''}`}
                />
              </div>
              <div className='flex flex-row place-content-end'>
                <Button type='submit'>Submit</Button>
              </div>
            </form>
          </CardContent>
        </Card>
      </PopoverContent>
    </Popover>
  );
};

export default MailPopup;
