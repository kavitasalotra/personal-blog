import * as React from 'react';

const Button = ({ text, children, }) => {
  return <button className="button is-normal is-responsive is-hovered p-5 border-radius-none px-6">{text || children}</button>;
};

export default Button;
