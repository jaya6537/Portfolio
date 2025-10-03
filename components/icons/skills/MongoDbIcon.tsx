import React from 'react';

const MongoDbIcon: React.FC<React.SVGProps<SVGSVGElement>> = (props) => (
  <svg viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" {...props}>
    <title>MongoDB</title>
    <path
      d="M12.78,22.58C5.2,21.32,1.18,14,3.34,7.24a1,1,0,0,1,1-.58,1,1,0,0,1,.8.42,11.23,11.23,0,0,0,14.62,4.82,1,1,0,0,1,1.26.23,1,1,0,0,1,.2,1A12,12,0,0,1,12.78,22.58Z"
      fill="#43A144"
    />
    <path
      d="M12.43,1.42A12,12,0,0,1,21,19.67a1,1,0,0,1-.2,1,1,1,0,0,1-1.26-.23A11.23,11.23,0,0,0,4.89,15.6a1,1,0,0,1-.8-.42,1,1,0,0,1-.22-1C5.2,7.6,9.32,2.83,12.43,1.42Z"
      fill="#8DBE45"
    />
  </svg>
);

export default MongoDbIcon;