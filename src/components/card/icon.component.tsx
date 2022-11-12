import React, { FC } from 'react';
import { IconProps } from './icon.types';


const Icon: FC<IconProps> = ({ code }) => {
  return (
    <div className={`icon icon-${code}`}>
    </div>
  );
};

export default Icon;
