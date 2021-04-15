import React, { useContext } from 'react'
import styled, { keyframes } from 'styled-components'

import UXContext from 'utils/UXContext'
import Toggle from './panel/Toggle'

const hover = keyframes`
  from {
    transform: translate(-50%, -50%);
    opacity: 1;
  }
  50% {
    transform: translate(200%, -50%);
    opacity: 0;
  }
  50.1% {
    transform: translate(-200%, -50%);
    opacity: 0;
  }
  to {
    transform: translate(-50%, -50%);
    opacity: 1;
  }
`
const StyledWrapper = styled(Toggle)`
  transform: translate(
    ${(props) => (props.open ? '-30rem' : '0')},
    calc(100% + 3rem)
  );

  &:hover,
  &:focus {
    .animate {
      animation: ${hover} 600ms;
    }
  }
`
const Mail = styled.svg`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  display: ${(props) => (props.open ? 'none' : 'block')};
  width: 2.25rem;
  height: auto;
  transition: all 300ms ease-out;

  path {
    fill: ${(props) => props.theme.colors.second};
  }
`
export default function InstallButton(props) {
  const { installPrompt } = useContext(UXContext)

  return (
    installPrompt && (
      <StyledWrapper
        open={props.open}
        onClick={() => installPrompt.prompt()}
        tooltip={'Intaller ce simulateur'}
      ></StyledWrapper>
    )
  )
}
