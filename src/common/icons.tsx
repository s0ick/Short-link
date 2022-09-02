import React, {FC} from 'react';

import {IconProps} from './types';

export const CopyIcon: FC<IconProps> = ({color = '#000000', size = 32}) => {
  return (
    <svg
      width={size}
      height={size}
      viewBox={'0 0 32 32'}
      preserveAspectRatio={'xMidYMid meet'}
    >

      <g transform={'translate(0.000000,32.000000) scale(0.100000,-0.100000)'} fill={color} stroke={'none'}>
        <path
          d={'M95 310 c-8 -12 24 -19 105 -22 l65 -3 3 -107 c1 -61 7 -108 12 -108 15 0 13 223 -2 238 -15 15 -174 17 -183 2z'}/>
        <path
          d={'M44 256 c-17 -13 -19 -27 -19 -119 0 -134 2 -137 109 -137 50 0 87 5 94 12 8 8 12 50 12 125 0 101 -2 113 -19 123 -30 15 -154 13 -177 -4z m174 -116 c3 -111 -3 -120 -81 -120 -82 0 -87 6 -87 114 0 51 3 96 7 100 4 4 41 5 83 4 l75 -3 3 -95z'}/>
      </g>
    </svg>
  );
}
