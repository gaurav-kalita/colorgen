import React from 'react';

const Svg = ({item}) => {
       return(
        <svg width="35" height="35">
        <rect
          x="0"
          y="0"
          width="35"
          height="35"
          opacity="0.5"
          fill={item}
        />
      </svg>
       )
  };

export default Svg;