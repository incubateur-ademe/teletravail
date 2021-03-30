import React, { useState, useEffect, useContext } from 'react'
import styled from 'styled-components'
import { useLocation } from 'react-router-dom'

import UXContext from 'utils/UXContext'
import ContactPrompt from 'components/base/ContactPrompt'
import Select from 'components/misc/Select'
import ButtonOpen from './share/ButtonOpen'
import Link from './share/Link'
import Mail from './share/Mail'
import Facebook from './share/Facebook'
import Twitter from './share/Twitter'
import Linkedin from './share/Linkedin'
import Whatsapp from './share/Whatsapp'

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
  margin-bottom: 3.5rem;
`
const ShareButtons = styled.div`
  display: flex;
  justify-content: space-around;
  margin-bottom: 2rem;

  ${(props) => props.theme.mq.small} {
    justify-content: space-between;
  }

  svg {
    width: 3.5rem;
    height: auto;

    ${(props) => props.theme.mq.small} {
      width: 3rem;
    }

    path {
      fill: ${(props) => props.theme.colors.main};
    }
  }
`
const Contact = styled.p``
export default function Share() {
  const { shareOpen, setShareOpen, typeShare, setTypeShare } = useContext(
    UXContext
  )

  let location = useLocation()
  const [url, setUrl] = useState(`${window.location.origin}/${location.search}`)
  useEffect(() => {
    setUrl(
      `${window.location.origin}/${
        typeShare === 'result' ? location.search : ''
      }`
    )
  }, [location.search, typeShare])

  const title = 'Télétravail - Mon Impact Transport'

  const message =
    'Vous êtes en télétravail ou vous souhaitez vous y mettre ? Calculez facilement l’impact sur le climat !'

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
        <Title>
          Partager{' '}
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
        <ShareButtons>
          <Mail title={title} message={message} url={url} />
          <Facebook title={title} message={message} url={url} />
          <Twitter title={title} message={message} url={url} />
          <Linkedin title={title} message={message} url={url} />
          <Whatsapp title={title} message={message} url={url} />
        </ShareButtons>
        <Link url={url} />
        <ContactPrompt />
      </Content>
    </Wrapper>
  )
}
