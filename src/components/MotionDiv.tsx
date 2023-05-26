import React, { ReactNode, useEffect } from 'react';
import { Variants, motion, useAnimation } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

// --------------------------------------------------------------------------

interface IProps {
  children: ReactNode;
  variants: Variants;
}

// --------------------------------------------------------------------------

export default function MotionDiv({ children, variants }: IProps) {
  const controls = useAnimation();
  const { ref, inView } = useInView();

  useEffect(() => {
    if (inView) {
      controls.start('visible');
    }
    if (!inView) {
      controls.start('hidden');
    }
  }, [controls, inView]);

  return (
    <motion.div ref={ref} initial="hidden" animate={controls} variants={variants}>
      {children}
    </motion.div>
  );
}