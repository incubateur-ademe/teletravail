import React, { useState, useEffect } from 'react'

import TransportationContext from 'utils/TransportationContext'

export default function TransportationProvider(props) {
  const [transportations, setTransportations] = useState([])
  useEffect(() => {
    fetch('/data/transportations.json')
      .then((res) => res.json())
      .then(setTransportations)
  }, [])

  return (
    <TransportationContext.Provider
      value={{
        transportations,
      }}
    >
      {props.children}
    </TransportationContext.Provider>
  )
}
