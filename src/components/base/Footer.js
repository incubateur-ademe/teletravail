import React from 'react'
import styled from 'styled-components'

import ademe from './footer/ademe.jpg'
import repufrancaise from './footer/repufrancaise.jpg'

import MagicLink from 'components/base/MagicLink'
import ThemeToggle from 'components/base/ThemeToggle'
import Emoji from 'components/base/Emoji'
import ContactPrompt from 'components/base/ContactPrompt'
import Logo from './footer/Logo'
import Contact from './footer/Contact'

const Wrapper = styled.div`
  position: relative;
  background-color: ${(props) =>
    props.theme.colors[props.background || 'second']};
  transition: all 600ms;
`
const Content = styled.div`
  max-width: ${(props) => props.width || '37rem'};
  margin: 0 auto;
  padding: 2rem 1rem 1rem;
`
const Section = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  margin-bottom: 1rem;

  p,
  h2 {
    color: ${(props) => props.theme.colors[props.color || 'text']};
  }

  h2 {
    font-size: 1.75rem;
  }
`
const CenterSection = styled(Section)`
  align-items: center;
`
const Text = styled.p``
const Title = styled.h2``
const LogosWrapper = styled.div`
  display: flex;
  justify-content: center;
`
const Logos = styled(MagicLink)`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  text-decoration: none;
  background-color: white;
`
const Institution = styled.img`
  display: block;
  height: 5.625em;
`

export default function Footer(props) {
  return (
    <Wrapper background={props.background} id='about'>
      <Content>
        <CenterSection>
          <ThemeToggle mobile />
        </CenterSection>
        <Section>
          <Title>D'ou viennent ces données ?</Title>
          <Text>
            Ce simulateur réutilise les données de la{' '}
            <MagicLink to='https://www.bilans-ges.ademe.fr/fr/accueil/contenu/index/page/presentation/siGras/0'>
              Base Carbone
            </MagicLink>
            . Il s’agit d’une{' '}
            <strong>base de données publique de facteurs d'émissions</strong>,
            nécessaires à la réalisation d’un bilan d’émissions de gaz à effet
            de serre (GES) et plus généralement tout exercice de comptabilité
            carbone.
          </Text>
          <Text>
            <strong>Équivalent CO₂ par personne en France.</strong>
          </Text>
          <Text>
            <Emoji>⚠️</Emoji>{' '}
            <strong>
              Sont inclus les émissions directes, et la production et
              distribution de carburant et d'électricité
            </strong>
            .
          </Text>
          <Text>
            <Emoji>⚠️</Emoji> <strong>La construction des véhicules</strong>{' '}
            (voiture, vélo, batterie, train, avion...){' '}
            <strong>et des infrastructures</strong> (routes, rails,
            aéroports...) <strong>n'est pas incluse.</strong>
          </Text>
          <Text>
            <Emoji>⚠️</Emoji>{' '}
            <strong>
              Ne sont pas non plus inclus tous les effets rebonds possibles
            </strong>{' '}
            (consommation d'électricité du foyer, achat de matériel pour le
            télétravail, etc...).
          </Text>
          <Text>
            Si vous souhaitez aller plus loin dans votre démarche, vous pouvez{' '}
            <strong>
              calculer votre empreinte sur le climat grace à notre simulateur{' '}
              <MagicLink to={'https://nosgestesclimat.fr/'}>
                Nos Gestes Climat
              </MagicLink>
            </strong>
            .
          </Text>
        </Section>
        <ContactPrompt />
        <Section>
          <Title>Nous contacter</Title>
          <Text>
            Vous souhaitez nous contacter pour{' '}
            <strong>
              obtenir de l'aide sur l'intégration des données ou des simulateurs
            </strong>{' '}
            ? Ou alors pour{' '}
            <strong>
              nous signaler un bug, nous faire une suggestion ou donner votre
              avis sur ce simulateur
            </strong>{' '}
            ? Utilisez le formulaire ci‑dessous :
          </Text>
          <Contact />
        </Section>
        <Section>
          <Title>Qui sommes-nous ?</Title>
          <Text>
            <MagicLink to='https://datagir.ademe.fr/'>
              <strong>Datagir</strong>
            </MagicLink>{' '}
            est un <strong>service public gratuit</strong>, porté par l’
            <MagicLink to='https://www.ademe.fr/'>ADEME</MagicLink> et
            l’incubateur de la DINUM{' '}
            <MagicLink to='https://beta.gouv.fr/'>beta.gouv.fr</MagicLink>.
          </Text>
          <Text>
            Notre mission est de{' '}
            <strong>
              diffuser les informations et données environnementales en
              open-data de l’ADEME
            </strong>{' '}
            pour encourager l’amélioration continue et l’innovation. Pour cela,{' '}
            <strong>
              nous accompagnons toutes les applications & services dans leur
              démarche responsable
            </strong>{' '}
            par l'appropriation et l’intégration de ces données afin d’apporter
            l’information au plus près des citoyens.
          </Text>
        </Section>
      </Content>
      <LogosWrapper>
        <Logos to='https://datagir.ademe.fr/'>
          <Institution src={repufrancaise} alt='République Française' />
          <Institution src={ademe} alt='ADEME' />
          <Logo />
        </Logos>
      </LogosWrapper>
    </Wrapper>
  )
}
