import React, { useContext } from 'react'
import styled from 'styled-components'

import SearchContext from 'utils/SearchContext'
import UXContext from 'utils/UXContext'

import Button from 'components/base/Button'

const Wrapper = styled.div`
  display: flex;
  justify-content: space-between;
  opacity: ${(props) => (props.visible ? 1 : 0)};
  transition: opacity 1000ms ${(props) => (props.visible ? '3000ms' : '0ms')};

  ${(props) => props.theme.mq.small} {
    flex-direction: column;
    align-items: center;

    > button {
      margin-bottom: 1.5rem;
    }
  }
`
export default function ButtonsMore() {
  const { kgco2 } = useContext(SearchContext)
  const { setConfiguratorOpen, setShareOpen, setTypeShare } = useContext(
    UXContext
  )

  return (
    <Wrapper visible={kgco2 || kgco2 === 0}>
      <Button
        onClick={() => {
          window.scrollTo({
            top: 0,
            left: 0,
            behavior: 'smooth',
          })
          setShareOpen(true)
          setTypeShare('result')
        }}
      >
        Je partage mon résultat
      </Button>
      <Button
        onClick={() => {
          window.scrollTo({
            top: 0,
            left: 0,
            behavior: 'smooth',
          })
          setConfiguratorOpen(true)
        }}
      >
        J'intègre ce simulateur à mon site
      </Button>
    </Wrapper>
  )
}
