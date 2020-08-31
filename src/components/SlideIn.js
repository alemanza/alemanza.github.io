import styled, { keyframes } from 'styled-components'

const slide = keyframes`
  to {
    transform: translateY(0);
    opacity: 1;
  }
`

export const SlideIn = styled.div`
    opacity: 0;
    transform: translateY(180px);
    animation: ${slide} 1s forwards;
    ${({ delay }) => delay || 'animation-delay: 0s'};
`
