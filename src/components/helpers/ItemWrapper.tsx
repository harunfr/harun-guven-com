import React from 'react';

interface Props {
  className?: string;
  children?: React.ReactNode | string;
  display?: string;
  flexDirection?: string;
  alignItems?: string;
  maxWidth?: string;
  margin?: string;
}
const ItemWrapper: React.FC<Props> = ({ className, children }) => (
  <div className={className}>{children}</div>
);

export default ItemWrapper;
