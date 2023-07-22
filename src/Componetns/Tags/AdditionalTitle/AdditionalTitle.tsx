import React from 'react';
import classNames from 'classnames';

interface AdditionalTitleProps {
  children: React.ReactNode;
  className?: string;
}

export const AdditionalTitle: React.FC<AdditionalTitleProps> = ({ children, className }) => {
  return (
    <h3 className={classNames('text-gray-200 text-xl font-normal leading-8 tracking-wider', className)}>{children} </h3>
  );
};
