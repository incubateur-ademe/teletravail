import React, { useContext } from 'react'
import styled from 'styled-components'

import ModalContext from 'utils/ModalContext'

import Modal from 'components/base/Modal'
import MagicLink from 'components/base/MagicLink'

const Title = styled.h2``
const Text = styled.p``
export default function FootprintModal() {
  const { footprint, setFootprint } = useContext(ModalContext)

  return (
    <Modal open={footprint} setOpen={setFootprint}>
      <Title>Empreinte Carbonne Annuelle</Title>
      <Text>Aujourd'hui, un français en émet en moyenne 12 tonnes par an.</Text>
      <Text>
        Si vous souhaitez aller plus loin dans votre démarche, vous pouvez
        calculer votre empreinte sur le climat grace à notre simulateur{' '}
        <MagicLink to={'https://nosgestesclimat.fr/'}>
          Nos Gestes Climat
        </MagicLink>
      </Text>
    </Modal>
  )
}
