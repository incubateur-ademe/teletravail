import React, { useState, useEffect, useContext } from 'react'
import styled from 'styled-components'
import { useLocation } from 'react-router-dom'

import UXContext from 'utils/UXContext'
import ContactPrompt from 'components/base/ContactPrompt'
import Select from 'components/misc/Select'
import Panel from 'components/base/Panel'
import Link from './share/Link'
import Mail from './share/Mail'
import Facebook from './share/Facebook'
import Twitter from './share/Twitter'
import Linkedin from './share/Linkedin'
import Whatsapp from './share/Whatsapp'

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
    <Panel
      open={shareOpen}
      toggleClose={() => setShareOpen((prevOpen) => !prevOpen)}
      index={1}
    >
      <h2>
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
      </h2>
      <ShareButtons>
        <Mail title={title} message={message} url={url} />
        <Facebook title={title} message={message} url={url} />
        <Twitter title={title} message={message} url={url} />
        <Linkedin title={title} message={message} url={url} />
        <Whatsapp title={title} message={message} url={url} />
      </ShareButtons>
      <Link url={url} />
      <ContactPrompt />
    </Panel>
  )
}
