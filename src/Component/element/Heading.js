import * as React from 'react';

const Heading = ({ text, children,className }) => {
  return <h1 className={className}>{text || children}</h1>;
};

export default Heading;