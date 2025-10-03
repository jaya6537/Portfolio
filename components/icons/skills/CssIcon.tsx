import React from 'react';

const CssIcon: React.FC<React.SVGProps<SVGSVGElement>> = (props) => (
  <svg viewBox="0 0 105 120" xmlns="http://www.w3.org/2000/svg" {...props}>
    <title>CSS3</title>
    <path
      d="M10,0 L0,105 L52.5,120 L105,105 L95,0 Z"
      fill="#264DE4"
    />
    <path
      d="M52.5,10 L90,10 L87.5,35 L52.5,35 Z M52.5,50 L85,50 L82.5,80 L52.5,90 Z"
      fill="#2965F1"
    />
    <path
      d="M52.5,35 L20,35 L22.5,60 L52.5,60 Z M52.5,75 L30,75 L28,95 L52.5,101.5 Z"
      fill="#EBEBEB"
    />
    <path
      d="M52.5,35 L52.5,60 L22.5,60 L20,35 Z M52.5,75 L52.5,101.5 L28,95 L27,85 L40,85 L39.5,90 L52.5,93.5 Z"
      fill="#FFF"
    />
  </svg>
);

export default CssIcon;