import React from 'react'
import styled from 'styled-components'

import Button from 'components/base/Button'

const Wrapper = styled.div`
  max-width: 37rem;
  margin: 0 auto;
  padding: 2rem 1rem 0;
`
const Content = styled.div`
  position: relative;
`
const Strong = styled.p`
  font-size: 1.45rem;
  font-weight: 700;

  ${(props) => props.theme.mq.small} {
    margin-left: 0;
  }
`
const Text = styled.p``
const ButtonWrapper = styled.div`
  display: flex;
  justify-content: center;
  margin: 2rem 0;
`
export default function Learning() {
  return (
    <Wrapper id='informations'>
      <Content>
        <Strong>
          "Hors confinement", le secteur des transports est le 1er secteur
          émetteur de GES.
        </Strong>
        <Text>
          Jusqu’à peu, se déplacer faisait partie intégrante de notre vie
          sociale et professionnelle. À tel point que tout notre environnement
          est structuré autour des transports. Tout invite au voyage, qu’il soit
          court ou long. Mais comment révolutionner nos trajets ?
        </Text>
        <ButtonWrapper>
          <Button
            to={
              'https://multimedia.ademe.fr/infographies/infographie-la-mobilite-ademe/'
            }
          >
            En savoir plus
          </Button>
        </ButtonWrapper>
        <Text>
          Si vous souhaitez aller plus loin dans votre démarche, vous pouvez
          calculer votre empreinte sur le climat grace à notre simulateur{' '}
          <a
            href={'https://nosgestesclimat.fr/'}
            target='_blank'
            rel='noopener noreferrer'
          >
            Nos Gestes Climat
          </a>
        </Text>
        <ButtonWrapper>
          <Button to={'https://nosgestesclimat.fr/'}>
            Je calcule mon empreinte carbone
          </Button>
        </ButtonWrapper>
      </Content>
    </Wrapper>
  )
}
