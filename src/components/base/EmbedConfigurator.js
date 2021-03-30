import React, { useContext } from 'react'
import styled from 'styled-components'

import StyleContext from 'utils/StyleContext'
import UXContext from 'utils/UXContext'
import ButtonOpen from './embedConfigurator/ButtonOpen'
import Themes from './embedConfigurator/Themes'
import Code from './embedConfigurator/Code'
import MagicLink from 'components/base/MagicLink'
import ContactPrompt from 'components/base/ContactPrompt'
import Select from 'components/misc/Select'

const Wrapper = styled.div`
  position: relative;
  width: ${(props) => (props.open ? '30rem' : 0)};
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
  const { themes, theme, setTheme } = useContext(StyleContext)
  const {
    configuratorOpen,
    setConfiguratorOpen,
    typeShare,
    setTypeShare,
  } = useContext(UXContext)

  return (
    <Wrapper open={configuratorOpen}>
      <ButtonOpen
        open={configuratorOpen}
        onClick={() => {
          setTheme('default')
          setConfiguratorOpen((prevOpen) => !prevOpen)
        }}
      />
      <Content open={configuratorOpen}>
        <ButtonClose
          onClick={() => {
            setTheme('default')
            setConfiguratorOpen(false)
          }}
        >
          +
        </ButtonClose>
        <Title>
          Intégrer{' '}
          <Select
            fancy
            value={typeShare}
            onChange={setTypeShare}
            options={[
              { value: 'simulator', label: `ce simulateur` },
              { value: 'result', label: `mon résultat` },
            ]}
          />
        </Title>
        <Code id={props.id} typeShare={typeShare} />
        <Subtitle>Options d'intégration</Subtitle>
        {props.children}
        <Themes themes={themes} theme={theme} setTheme={setTheme} />
        <ContactPrompt configurator />
      </Content>
    </Wrapper>
  )
}
