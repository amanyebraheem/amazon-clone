

import React from 'react';
import { twMerge } from 'tailwind-merge';

interface Props {
  children: React.ReactNode;
  className?: string;
}

const Container = ({ children, className }: Props) => {
  return (
    <div className={twMerge("px-4 lg:px-0", className)}>
      {children}
    </div>
  );
};

export default Container;

