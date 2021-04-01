import React, { useContext } from 'react'
import styled from 'styled-components'

import UXContext from 'utils/UXContext'
import MagicLink from 'components/base/MagicLink'

const Text = styled.p``
const Title = styled.h3``
const StyledLink = styled.button`
  display: inline;
  margin: 0;
  padding: 0;
  color: ${(props) => props.theme.colors.main};
  text-decoration: underline;
  background: transparent;
  border: none;
  cursor: pointer;
`
export default function ContactPrompt(props) {
  const { setConfiguratorOpen } = useContext(UXContext)

  return (
    <>
      {!props.configurator && (
        <>
          <Title>
            Comment intégrer ces données à mon site ou application ?
          </Title>
          <Text>
            <strong>
              Vous souhaitez afficher ce simulateur sur votre site ?
            </strong>
            <br />
            Personnalisez le et intégrez le facilement grace à{' '}
            <StyledLink
              onClick={() => {
                window.scrollTo({
                  top: 0,
                  left: 0,
                  behavior: 'smooth',
                })
                setConfiguratorOpen(true)
              }}
            >
              notre configurateur
            </StyledLink>
            .
          </Text>
        </>
      )}
      <Text>
        <strong>Vous souhaitez réutiliser les données brutes ?</strong>
        <br />
        Contactez nous à{' '}
        <MagicLink to='mailto:datagir@ademe.fr'>
          datagir@ademe.fr
        </MagicLink>{' '}
        pour bénéficier de notre expertise et accompagnement.
      </Text>
      <Text>
        <strong>Vous souhaitez réutiliser le code du simulateur ?</strong>
        <br />
        Ce simulateur est développé de manière ouverte (open source). L’ensemble
        du code est{' '}
        <MagicLink to='https://github.com/datagir/monimpacttransport'>
          disponible librement
        </MagicLink>
        .
      </Text>
    </>
  )
}
