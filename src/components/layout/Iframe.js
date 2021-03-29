import React from 'react'
import styled from 'styled-components'

import Header from 'components/layout/Header'
import IframeFooter from 'components/base/IframeFooter'

const Wrapper = styled.div``
const Content = styled.div`
  position: relative;
  max-width: 46rem;
  margin: 0 auto 2em;
  padding-bottom: 5vw;

  ${(props) => props.theme.mq.small} {
    width: auto;
    margin: 0 3vw 2em;
  }
`
export default function Iframe(props) {
  return (
    <Wrapper>
      <Content>
        <Header iframe />
        {props.children}
      </Content>
      <IframeFooter about='https://monimpacttransport.fr' />
    </Wrapper>
  )
}
