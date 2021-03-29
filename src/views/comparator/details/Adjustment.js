import React, { useContext } from 'react'
import styled from 'styled-components'

import SearchContext from 'utils/SearchContext'
import Kilometers from 'components/misc/Kilometers'

const Wrapper = styled.span``
export default function Adjustment() {
  const { timing, distance, adjustment, setAdjustment } = useContext(
    SearchContext
  )

  return (
    <Wrapper>
      <br />
      {timing === 'avant' ? 'Maintenant je dois' : 'Je devrais'} faire{' '}
      <Kilometers
        value={adjustment}
        onChange={setAdjustment}
        name='adjustment'
        placeholder={('0' + Math.round(distance * 0.25)).slice(-2)}
      />{' '}
      en plus par jour pour faire les choses que je{' '}
      {timing === 'avant' ? 'faisais avant' : 'fais actuellement'} sur le chemin
      du travail.
    </Wrapper>
  )
}
