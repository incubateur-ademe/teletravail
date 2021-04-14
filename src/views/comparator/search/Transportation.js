import React, { useContext } from 'react'
import styled from 'styled-components'

import SearchContext from 'utils/SearchContext'
import TransportationContext from 'utils/TransportationContext'
import Select from 'components/misc/Select'

const Wrapper = styled.span`
  opacity: ${(props) => (props.visible ? 1 : 0)};
  transition: opacity 1000ms ${(props) => (props.visible ? '300ms' : '0ms')};
`
export default function Transportation() {
  const { transportations } = useContext(TransportationContext)
  const { distance, transportation, setTransportation } = useContext(
    SearchContext
  )

  return (
    <Wrapper visible={distance}>
      <br />
      {[7, 8, 25, 26].includes(transportation) ? 'à' : 'en'}{' '}
      <Select
        value={transportation}
        onChange={setTransportation}
        options={[{ value: '', label: '', disabled: true }]
          .concat(
            [...transportations]
              .filter((transportation) => transportation.default)
              .map((transportation) => ({
                value: transportation.id,
                label: transportation.label.fr,
              }))
          )
          .concat({
            value: 'separator',
            label: '──────────',
            disabled: true,
          })
          .concat(
            [...transportations]
              .sort((a, b) =>
                a.label.fr.normalize('NFD') > b.label.fr.normalize('NFD')
                  ? 1
                  : -1
              )
              .map((transportation) => ({
                value: transportation.id,
                label: transportation.label.fr,
              }))
          )}
      />
    </Wrapper>
  )
}
