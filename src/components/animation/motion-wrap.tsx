'use client';
import React, { ReactNode } from 'react';
import { motion, MotionProps } from 'framer-motion';
import { cn } from '@/lib/utils';

type MotionWrapProps = {
  children: ReactNode;
  className?: string;
  id?: string;
  whileInView?: { y?: number[]; opacity: number[]; x?: number[] };
} & MotionProps;

const MotionWrap: React.FC<MotionWrapProps> = ({
  children,
  className,
  whileInView = { x: [100, 50, 0], opacity: [0, 0, 1] },
  ...props
}) => {
  return (
    <motion.section
      whileInView={whileInView}
      transition={{ duration: 0.5 }}
      className={cn(className)}
      {...props}
    >
      {children}
    </motion.section>
  );
};

export default MotionWrap;
