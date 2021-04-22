import styled, { css } from 'styled-components';
import { HeadingProps } from '.';

export const Wrapper = styled.h2<HeadingProps>`
  ${({ theme, color }) => css`
    color: ${theme.colors[color!]};
  `}
`;
