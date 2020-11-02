import React from 'react';

const Svg = ({hexArr}) => {
        <svg width="35" height="35">
        <rect
          x="0"
          y="0"
          width="35"
          height="35"
          opacity="0.5"
          fill={hexArr}
        />
      </svg>
  };

export default Svg;