import * as React from 'react';
import { Link } from 'react-router-dom';

export const wrapLink = (to: string) => (props: any) => {
  return <Link to={to} {...props} />;
};
