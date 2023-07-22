import React from 'react';
import classNames from 'classnames';

interface SubtitleProps {
  children: React.ReactNode;
  className?: string;

}

export const Subtitle: React.FC<SubtitleProps> = ({ children, className }) => {
  return (
    <h2 className={classNames('text-white text-5xl font-semibold leading-[72px] tracking-[(-1px)]', className)}>{children} </h2>
  );
};
