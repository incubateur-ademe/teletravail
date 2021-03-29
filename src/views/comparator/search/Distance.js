import React, { useContext } from 'react'
import styled from 'styled-components'

import SearchContext from 'utils/SearchContext'
import Kilometers from 'components/misc/Kilometers'

const Wrapper = styled.span``
export default function Distance() {
  const { timing, distance, setDistance } = useContext(SearchContext)

  return (
    <Wrapper>
      je {timing === 'avant' ? 'parcourais' : 'parcours'}
      <br />
      <Kilometers
        value={distance}
        onChange={setDistance}
        name='distance'
      />{' '}
      aller-retour chaque jour{' '}
    </Wrapper>
  )
}
