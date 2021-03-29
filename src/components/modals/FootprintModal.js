import React, { useContext } from 'react'
import styled from 'styled-components'

import ModalContext from 'utils/ModalContext'

import Modal from 'components/base/Modal'
import MagicLink from 'components/base/MagicLink'
import Button from 'components/base/Button'

const Title = styled.h2``
const Text = styled.p``
export default function FootprintModal() {
  const { footprint, setFootprint } = useContext(ModalContext)

  return (
    <Modal open={footprint} setOpen={setFootprint}>
      <Title>Empreinte Carbonne annuelle</Title>
      <Text>
        Aujourd'hui, un·e français·e en émet en moyenne 10 tonnes des gaz à
        effet de serre (GES) par an (
        <MagicLink to='https://www.statistiques.developpement-durable.gouv.fr/estimation-de-lempreinte-carbone-de-1995-2019'>
          source
        </MagicLink>
        ).
      </Text>
      <Text>
        La cible à atteindre pour
        <MagicLink
          to={
            'https://datagir.ademe.fr/blog/budget-empreinte-carbone-c-est-quoi/'
          }
        >
          {' '}
          respecter l'accord de Paris
        </MagicLink>{' '}
        est d'environ 2 tonnes de GES par an et par personne, avec un premier
        palier de réduction de -40% de GES d'ici 2030 (l'Europe parle de -55%).
      </Text>
      <Text>
        Si vous souhaitez aller plus loin dans votre démarche, vous pouvez
        calculer votre empreinte carbonne grace à notre simulateur{' '}
        <MagicLink to={'https://nosgestesclimat.fr/'}>
          Nos Gestes Climat
        </MagicLink>
        .
      </Text>
      <Button to={`https://nosgestesclimat.fr/`}>Voir Nos Gestes Climat</Button>
    </Modal>
  )
}
