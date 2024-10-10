'use client';

import React, { useEffect, useRef } from 'react';
import { motion, useAnimation, HTMLMotionProps } from 'framer-motion';

interface RevealProps extends HTMLMotionProps<'span'> {
  children: React.ReactNode;
  width?: 'fit-content' | '100%';
}

const Reveal: React.FC<RevealProps> = ({
  children,
  width = 'fit-content',
  ...props
}) => {
  const ref = useRef(null);
  const mainControls = useAnimation();

  useEffect(() => {
    mainControls.start('visible');
  }, []);

  return (
    <span
      ref={ref}
      style={{
        position: 'relative',
        display: 'inline-flex',
        width: width,
        overflow: 'hidden',
      }}
    >
      <motion.span
        variants={{
          hidden: { opacity: 0, y: 75 },
          visible: { opacity: 1, y: 0 },
        }}
        initial='hidden'
        animate={mainControls}
        transition={{ duration: 0.5, delay: 0.25 }}
        {...props}
      >
        {children}
      </motion.span>
    </span>
  );
};

export default Reveal;
