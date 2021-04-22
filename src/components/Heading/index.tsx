import React from 'react';
import * as S from './styled';

export type HeadingProps = {
  children: React.ReactNode;
  color?: 'white' | 'black';
};
const Heading = ({ children, color = 'black' }: HeadingProps) => (
  <S.Wrapper color={color}>{children}</S.Wrapper>
);

export default Heading;
