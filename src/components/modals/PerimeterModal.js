import React, { useContext } from 'react'
import styled from 'styled-components'

import ModalContext from 'utils/ModalContext'
import Modal from 'components/base/Modal'
import MagicLink from 'components/base/MagicLink'
import Button from 'components/base/Button'
import Emoji from 'components/base/Emoji'

const Title = styled.h2``
const Text = styled.p``
export default function PerimeterModal() {
  const { perimeter, setPerimeter } = useContext(ModalContext)
  return (
    <Modal open={perimeter} setOpen={setPerimeter}>
      <Title>Périmètre du simulateur</Title>
      <Text>
        Ce simulateur n'inclus dans son calcul que les émissions directes des
        modes de transports, et la production et distribution de carburant et
        d'électricité (pour ces modes de transport).
      </Text>
      <Text>
        <Emoji>⚠️</Emoji> <strong>La construction des véhicules</strong>{' '}
        (voiture, vélo, batterie, train, avion...){' '}
        <strong>et des infrastructures</strong> (routes, rails, aéroports...){' '}
        <strong>n'est pas incluse.</strong>
      </Text>
      <Text>
        <Emoji>⚠️</Emoji>{' '}
        <strong>
          Ne sont pas non plus inclus tous les{' '}
          <MagicLink to='https://librairie.ademe.fr/mobilite-et-transport/3776-caracterisation-des-effets-rebond-induits-par-le-teletravail.html'>
            effets rebonds
          </MagicLink>{' '}
          possibles
        </strong>{' '}
        (consommation d'électricité du foyer, achat de matériel pour le
        télétravail, etc...).{' '}
        <strong>Ces emissions ont peut être augmenté par ailleurs</strong>.
      </Text>
      <Text>
        Si vous souhaitez avoir une idée plus précise de votre impact, vous
        pouvez{' '}
        <strong>
          calculer votre empreinte sur le climat grace à notre simulateur{' '}
          <MagicLink to={'https://nosgestesclimat.fr/'}>
            Nos Gestes Climat
          </MagicLink>
        </strong>
        .
      </Text>
      <Button to={`https://nosgestesclimat.fr/`}>Voir Nos Gestes Climat</Button>
    </Modal>
  )
}
