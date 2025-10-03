import React from 'react';

const SqliteIcon: React.FC<React.SVGProps<SVGSVGElement>> = (props) => (
  <svg viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg" {...props}>
    <title>SQLite</title>
    <path
      fill="#003B57"
      d="M2.2,21.8 L21.8,21.8 L21.8,2.2 L2.2,2.2 L2.2,21.8 Z M0,24 L24,24 L24,0 L0,0 L0,24 Z"
    />
    <path fill="#FFFFFF" d="M4.8,4.8 L4.8,19.2 L19.2,19.2 L19.2,4.8 L4.8,4.8 Z" />
    <path
      fill="#003B57"
      d="M8,18 L8,6 L16.8,12 L8,18 Z M10.4,12 L8.8,10.4 L8.8,13.6 L10.4,12 Z"
    />
  </svg>
);

export default SqliteIcon;