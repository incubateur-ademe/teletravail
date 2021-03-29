import React, { useState, useEffect, useContext } from 'react'
import {
  useQueryParam,
  StringParam,
  NumberParam,
  withDefault,
} from 'use-query-params'

import SearchContext from 'utils/SearchContext'
import TransportationContext from 'utils/TransportationContext'

export default function SearchProvider(props) {
  const { transportations } = useContext(TransportationContext)
  const [timing, setTiming] = useQueryParam(
    'timing',
    withDefault(StringParam, 'avant')
  )

  const [distance, setDistance] = useQueryParam('distance', NumberParam)

  const [transportation, setTransportation] = useQueryParam(
    'transportation',
    NumberParam
  )

  const [days, setDays] = useQueryParam('days', withDefault(NumberParam, 5))

  const [holidays, setHolidays] = useQueryParam(
    'weeks',
    withDefault(NumberParam, 5)
  )

  const [adjustment, setAdjustment] = useQueryParam(
    'adjustment',
    withDefault(NumberParam, 0)
  )

  const [kgco2, setKgco2] = useState(null)

  useEffect(() => {
    if (transportations && distance && transportation) {
      const selectedTransportation = transportations.find(
        (transportationObject) => transportationObject.id === transportation
      )
      if (selectedTransportation) {
        setKgco2(
          (selectedTransportation.values[0].value *
            (distance - adjustment || 0) *
            days *
            (52 - holidays - 1)) /
            1000
        )
      }
    } else {
      setKgco2(null)
    }
  }, [transportations, distance, days, holidays, transportation, adjustment])

  return (
    <SearchContext.Provider
      value={{
        timing,
        setTiming,
        distance,
        setDistance,
        days,
        setDays,
        holidays,
        setHolidays,
        transportation,
        setTransportation,
        adjustment,
        setAdjustment,
        kgco2,
      }}
    >
      {props.children}
    </SearchContext.Provider>
  )
}
