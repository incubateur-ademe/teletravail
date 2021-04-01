import React from 'react'
import styled, { keyframes } from 'styled-components'
import ReactTooltip from 'react-tooltip'

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
const Wrapper = styled.button`
  position: fixed;
  top: 50%;
  right: 0;
  transform: translate(
    ${(props) => (props.open ? '-30rem' : '0')},
    calc(100% + 1rem)
  );
  padding: 0.7rem 0.9rem;
  background-color: ${(props) => props.theme.colors.main};
  border: 5px solid ${(props) => props.theme.colors.main};
  border-right: none;
  border-radius: 2rem 0 0 2rem;
  transition: all 400ms ease-out;
  overflow: hidden;
  cursor: pointer;

  &:hover,
  &:focus {
    outline: none;
    .animate {
      animation: ${hover} 600ms;
    }
  }

  ${(props) => props.theme.mq.medium} {
    display: none;
  }
`
const Mail = styled.svg`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  display: block;
  width: 2.25rem;
  height: auto;
  opacity: ${(props) => (props.open ? 0 : 1)};
  transition: all 300ms ease-out;

  path {
    fill: ${(props) => props.theme.colors.second};
  }
`
const Arrow = styled.svg`
  display: block;
  width: 2rem;
  height: auto;
  opacity: ${(props) => (props.open ? 1 : 0)};
  transition: opacity 300ms ease-out;

  path {
    fill: ${(props) => props.theme.colors.second};
  }
`
export default function ContactButton(props) {
  return (
    <>
      <Wrapper open={props.open} onClick={props.onClick} data-tip={'Contact'}>
        <Mail
          className='animate'
          open={props.open}
          x='0px'
          y='0px'
          viewBox='0 0 512 512'
        >
          <path
            d='M467,61H45C20.218,61,0,81.196,0,106v300c0,24.72,20.128,45,45,45h422c24.72,0,45-20.128,45-45V106
			C512,81.28,491.872,61,467,61z M460.786,91L256.954,294.833L51.359,91H460.786z M30,399.788V112.069l144.479,143.24L30,399.788z
			 M51.213,421l144.57-144.57l50.657,50.222c5.864,5.814,15.327,5.795,21.167-0.046L317,277.213L460.787,421H51.213z M482,399.787
			L338.213,256L482,112.212V399.787z'
          />
        </Mail>
        <Arrow
          open={props.open}
          x='0px'
          y='0px'
          width='46.02px'
          height='46.02px'
          viewBox='0 0 46.02 46.02'
        >
          <path d='M14.757,46.02c-1.412,0-2.825-0.521-3.929-1.569c-2.282-2.17-2.373-5.78-0.204-8.063l12.758-13.418L10.637,9.645    C8.46,7.37,8.54,3.76,10.816,1.582c2.277-2.178,5.886-2.097,8.063,0.179l16.505,17.253c2.104,2.2,2.108,5.665,0.013,7.872    L18.893,44.247C17.77,45.424,16.267,46.02,14.757,46.02z' />
        </Arrow>
      </Wrapper>
      <ReactTooltip delayShow={600} place='left' />
    </>
  )
}
