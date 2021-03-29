import React, { useState } from 'react'
import styled, { keyframes } from 'styled-components'

const flash = keyframes`
  from,
  75%,
  87.5%,
  to {
    opacity: 1;
  }

  81.25%,
  93.75% {
    opacity: 0;
  }
`
const Wrapper = styled.span``
const Input = styled.input`
  width: ${(props) => (props.value && props.width > 2 ? '1.8em' : '1.2em')};
  height: 1.3em;
  vertical-align: text-bottom;
  padding: 0;
  font-size: inherit;
  font-weight: inherit;
  font-family: 'Fira Code', monospace;
  line-height: inherit;
  color: ${(props) => props.theme.colors.main};
  text-align: left;
  background-color: transparent;
  border: none;
  box-shadow: 0px 0.1875rem 0px 0px
    ${(props) => (props.value ? 'transparent' : props.theme.colors.main)};
  transition: box-shadow 300ms ease-out;
  animation: ${(props) => (props.pristine ? flash : 'none')} 4s infinite;

  &::placeholder {
    color: ${(props) => props.theme.colors.main};
    opacity: 0.7;
  }
  &:focus {
    outline: none;
    box-shadow: 0px 0.25rem 0px 0px ${(props) => props.theme.colors.main};
  }
`
const Underline = styled.label`
  color: ${(props) => props.theme.colors.main};
  cursor: pointer;
`
export default function Distance(props) {
  const [pristine, setPristine] = useState(
    props.value || props.value === 0 ? false : true
  )
  return (
    <Wrapper>
      <Input
        type='text'
        inputMode='numeric'
        pattern='[0-9]*'
        max='999'
        id={props.name}
        width={String(props.value).length}
        placeholder={props.value === 0 ? '00' : props.placeholder}
        value={props.value}
        onChange={(e) => {
          props.onChange(e.target.value)
        }}
        onFocus={() => setPristine(false)}
        pristine={pristine}
      />
      <Underline htmlFor={props.name}> km</Underline>
    </Wrapper>
  )
}
