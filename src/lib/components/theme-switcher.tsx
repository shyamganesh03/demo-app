'use client';

import * as React from 'react';
import { Sun } from 'lucide-react';
import { useTheme } from 'next-themes';

import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu';
import { Label } from '@/components/ui/label';
import { capitalizeFirstLetter } from '../utils';

export function ThemeSwitch() {
  const { setTheme, theme }: any = useTheme();

  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <div className='item-center flex cursor-pointer flex-row gap-4'>
          <Sun className='h-4 w-4 cursor-pointer' color={'#9795f0'} />
          <Label className='mt-2 cursor-pointer text-secondary'>
            {capitalizeFirstLetter(theme)}
          </Label>
        </div>
      </DropdownMenuTrigger>
      <DropdownMenuContent>
        <DropdownMenuItem onClick={() => setTheme('light')}>
          Light
        </DropdownMenuItem>
        <DropdownMenuItem onClick={() => setTheme('dark')}>
          Dark
        </DropdownMenuItem>
        <DropdownMenuItem onClick={() => setTheme('system')}>
          System
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  );
}
