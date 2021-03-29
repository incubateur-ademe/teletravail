import React from 'react'
import styled from 'styled-components'

import ButtonOpen from './embedConfigurator/ButtonOpen'
import Themes from './embedConfigurator/Themes'
import Code from './embedConfigurator/Code'
import MagicLink from 'components/base/MagicLink'

const Wrapper = styled.div`
  position: relative;
  width: ${(props) => (props.open ? '30rem' : 0)};
  color: ${(props) => props.theme.colors.main};
  transition: all 400ms ease-out;

  ${(props) => props.theme.mq.medium} {
    display: ${(props) => (props.open ? 'block' : 'none')};
    width: auto;
    border-left: none;
    overflow: hidden;
    transition: none;
  }
`
const Content = styled.div`
  position: fixed;
  z-index: 12;
  top: 0;
  right: 0;
  width: 30rem;
  height: 100%;
  padding: 2rem;
  background-color: ${(props) => props.theme.colors.background};
  border-left: 5px solid ${(props) => props.theme.colors.main};
  overflow-y: scroll;
  overflow-x: visible;
  transform: translateX(${(props) => (props.open ? 0 : '100%')});
  transition: all 400ms ease-out;

  ${(props) => props.theme.mq.medium} {
    position: relative;
    width: auto;
    height: auto;
    transform: none;
    padding: 1rem;
    border-left: none;
    border-bottom: 2px solid ${(props) => props.theme.colors.main};
    overflow: hidden;
    transition: none;
  }
`
const ButtonClose = styled.div`
  position: absolute;
  top: 0.25em;
  right: 0.1em;
  font-size: 3em;
  font-weight: 700;
  transform: rotate(45deg);
  cursor: pointer;
  line-height: 0.5;
`
const Title = styled.h2`
  font-size: 2em;
  margin-bottom: 1rem;
`
const Subtitle = styled.h3`
  font-size: 1.3em;
  margin-bottom: 1rem;
`
const Contact = styled.p``
export default function EmbedConfigurator(props) {
  return (
    <Wrapper open={props.configuratorOpen}>
      <ButtonOpen
        open={props.configuratorOpen}
        onClick={() => props.setConfiguratorOpen((prevOpen) => !prevOpen)}
      />
      <Content open={props.configuratorOpen}>
        <ButtonClose
          onClick={() => {
            props.onClose && props.onClose()
            props.setTheme('default')
            props.setConfiguratorOpen(false)
          }}
        >
          +
        </ButtonClose>
        <Title>Intégrer ce simulateur</Title>
        <Code id={props.id} />
        <Subtitle>Options d'intégration</Subtitle>
        {props.children}
        <Themes
          themes={props.themes}
          theme={props.theme}
          setTheme={props.setTheme}
        />
        <Contact>
          Vous souhaitez aller plus loin dans l'intégration de ce calculateur ou
          des données ?{' '}
          <MagicLink to='https://datagir.ademe.fr/#contact'>
            Contactez-nous
          </MagicLink>
        </Contact>
      </Content>
    </Wrapper>
  )
}
