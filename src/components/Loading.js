// @flow
import React from 'react';
import type { Node } from 'react';

type Props = {
  content: Node,
};

const LoadingComponent = (props: Props) => {
  return props.content ? props.content : <div>Loading...</div>;
};

export default LoadingComponent;
