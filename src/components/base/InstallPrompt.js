import React, { useState, useEffect } from 'react'
import styled from 'styled-components'

import Button from 'components/base/Button'

const Wrapper = styled.div`
  position: fixed;
  bottom: 1rem;
  right: 1rem;

  ${(props) => props.theme.mq.small} {
    display: none;
  }
`
export default function InstallPrompt() {
  const [deferredPrompt, setDeferredPrompt] = useState(null)
  useEffect(() => {
    window.addEventListener('beforeinstallprompt', (e) => {
      setDeferredPrompt(e)
      console.log(`'beforeinstallprompt' event was fired.`)
    })
  }, [])

  console.log(deferredPrompt)

  return (
    <Wrapper>
      {deferredPrompt && (
        <Button onClick={() => deferredPrompt.prompt()}>Installer l'app</Button>
      )}
    </Wrapper>
  )
}
