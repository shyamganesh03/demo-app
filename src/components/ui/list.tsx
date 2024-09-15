'use client';

import { ChevronRight } from 'lucide-react';
import React from 'react';
import { Label } from './label';

const List = ({ label }: { label: string }) => {
  return (
    <div className='flex flex-row items-center gap-2'>
      <ChevronRight className='h-4 w-4' color={'#76b852'} />
      <Label className='text-sm'>{label}</Label>
    </div>
  );
};

export default List;
