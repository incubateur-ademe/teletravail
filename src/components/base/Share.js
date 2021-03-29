import React, { useContext } from 'react'
import styled from 'styled-components'

import UXContext from 'utils/UXContext'
import ButtonOpen from './share/ButtonOpen'
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
  top: 0;
  right: 0;
  width: 30rem;
  height: 100%;
  padding: 2em;
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
  position: relative;
  font-size: 2em;
  margin-bottom: 1rem;
`
const Contact = styled.p``
export default function Share() {
  const { shareOpen, setShareOpen } = useContext(UXContext)

  return (
    <Wrapper open={shareOpen}>
      <ButtonOpen
        open={shareOpen}
        onClick={() => setShareOpen((prevOpen) => !prevOpen)}
      />
      <Content open={shareOpen}>
        <ButtonClose
          onClick={() => {
            setShareOpen(false)
          }}
        >
          +
        </ButtonClose>
        <Title>Partager ce simulateur</Title>
        <Contact>
          Ici, des supers options de partage (merci d'utiliser votre
          imagination).
        </Contact>
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
