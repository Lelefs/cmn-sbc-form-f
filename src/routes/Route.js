import React from 'react';
import { Route as ReactDOMRoute } from 'react-router-dom';

export default ({ isPrivate = false, component, ...rest }) => {
  return <ReactDOMRoute {...rest} render={component} />;
};
