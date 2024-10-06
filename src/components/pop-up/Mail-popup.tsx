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
import sendMailTemplate from '@/template/sendMailTemplate';

const MailPopup = () => {
  const form = useForm();

  const errors = form.formState.errors;

  const handleSubmit = async (data: any) => {
    let mailData = { ...data };
    const { senderName, message, designation } = mailData;
    const template = sendMailTemplate
      ?.replaceAll('{senderName}', senderName)
      ?.replaceAll('{message}', message)
      ?.replaceAll('{designation}', designation);

    mailData = { ...mailData, template };

    const apiEndpoint = `${window.location.origin}/api/mail`;
    const mailResponse: any = await fetch(apiEndpoint, {
      method: 'post',
      body: JSON.stringify(mailData),
    });
    const finalResponse = await JSON.parse(mailResponse || '{}');

    console.log({ finalResponse });
  };

  return (
    <Popover>
      <PopoverTrigger>
        <Mail className='h-4 w-4 cursor-pointer duration-300 hover:scale-125' />
      </PopoverTrigger>
      <PopoverContent className='-mt-36 p-0 lg:-mt-20 lg:w-[450px]'>
        <Card>
          <CardHeader>
            <CardTitle>Mail to Author</CardTitle>
            <CardDescription>
              Please fill the following details will send mail to this website
              author.
            </CardDescription>
          </CardHeader>
          <CardContent>
            <form className='mb-8 grid grid-cols-2 gap-4'>
              <div className='mb-4 flex flex-col space-y-1.5'>
                <Label htmlFor='fullName' className='text-lg font-semibold'>
                  Full Name
                </Label>
                <Input
                  {...form.register('fullName', { required: true })}
                  id='fullName'
                  placeholder='Enter your Full Name'
                  className={`${errors.fullName ? 'border-destructive' : ''}`}
                />
              </div>
              <div className='mb-4 flex flex-col space-y-1.5'>
                <Label htmlFor='fullName' className='text-lg font-semibold'>
                  Email
                </Label>
                <Input
                  {...form.register('email', {
                    required: true,
                    pattern: {
                      value: /^[\w-.]+@([\w-]+\.)+[\w-]{2,4}$/g,
                      message: 'Enter a valid email address',
                    },
                  })}
                  id='email'
                  placeholder='Enter your Email'
                  className={`${errors.email ? 'border-destructive' : ''}`}
                />
              </div>
              <div className='mb-4 flex flex-col space-y-1.5'>
                <Label htmlFor='fullName' className='text-lg font-semibold'>
                  Designation
                </Label>
                <Input
                  {...form.register('designation', { required: true })}
                  id='designation'
                  placeholder='Enter your Designation'
                  className={`${errors.designation ? 'border-destructive' : ''}`}
                />
              </div>
              <div className='mb-4 flex flex-col space-y-1.5'>
                <Label htmlFor='subject' className='text-lg font-semibold'>
                  Subject
                </Label>
                <Input
                  {...form.register('subject', { required: true })}
                  id='subject'
                  placeholder='Enter the subject'
                  className={`${errors.subject ? 'border-destructive' : ''}`}
                />
              </div>
              <div className='mb-4 flex flex-col space-y-1.5'>
                <Label htmlFor='message' className='text-lg font-semibold'>
                  Mail content
                </Label>
                <Textarea
                  {...form.register('message', { required: true })}
                  id='message'
                  placeholder='Enter the message'
                  className={`${errors.message ? 'border-destructive' : ''}`}
                />
              </div>
            </form>
            <div className='flex w-full flex-row place-content-end'>
              <Button
                onClick={() => form.handleSubmit(handleSubmit)()}
                className='bg-primary font-semibold'
              >
                Submit
              </Button>
            </div>
          </CardContent>
        </Card>
      </PopoverContent>
    </Popover>
  );
};

export default MailPopup;
