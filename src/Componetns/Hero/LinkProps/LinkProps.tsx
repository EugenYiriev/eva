import React from 'react';
import classNames from 'classnames';
import styles from '../style.module.scss';

interface LinkProps {
  link: string;
  title: string;
}
export const LinkProps: React.FC<LinkProps> = ({ link, title }) => {
  return (
    <a href={link} className={classNames('flex mr-5 w-[336px] text-white text-2xl font-semibold py-3 px-6 justify-center rounded-[30px] tracking-[-1px]', styles.heroButton)}>
      {title}
    </a>
  );
};

