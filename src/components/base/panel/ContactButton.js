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
  display: ${(props) => (props.open ? 'none' : 'block')};
  width: 2.25rem;
  height: auto;
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
          open={props.open}
          className='animate'
          x='0px'
          y='0px'
          viewBox='0 0 382.117 382.117'
        >
          <path
            d='M336.764,45.945H45.354C20.346,45.945,0,65.484,0,89.5v203.117c0,24.016,20.346,43.555,45.354,43.555h291.41
	c25.008,0,45.353-19.539,45.353-43.555V89.5C382.117,65.484,361.772,45.945,336.764,45.945z M336.764,297.72H45.354
	c-3.676,0-6.9-2.384-6.9-5.103V116.359l131.797,111.27c2.702,2.282,6.138,3.538,9.676,3.538l22.259,0.001
	c3.536,0,6.974-1.257,9.677-3.539l131.803-111.274v176.264C343.664,295.336,340.439,297.72,336.764,297.72z M191.059,192.987
	L62.87,84.397h256.378L191.059,192.987z'
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
