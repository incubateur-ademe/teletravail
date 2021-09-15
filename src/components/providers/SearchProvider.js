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

  const [distance, setDistance] = useQueryParam('distance', StringParam)

  const [transportation, setTransportation] = useQueryParam(
    'transportation',
    NumberParam
  )

  const [days, setDays] = useQueryParam('days', withDefault(NumberParam, 5))

  const [holidays, setHolidays] = useQueryParam(
    'weeks',
    withDefault(NumberParam, 5)
  )

  const [adjustment, setAdjustment] = useQueryParam('adjustment', StringParam)

  const [kgco2, setKgco2] = useState(null)
  const [totalTime, setTotalTime] = useState(null)

  const [time, setTime] = useQueryParam('temps', NumberParam)

  useEffect(() => {
    if (transportations && transportation && distance) {
      const selectedTransportation = transportations.find(
        (transportationObject) => transportationObject.id === transportation
      )
      if (selectedTransportation) {
        setTime(Math.round((60 / selectedTransportation.speed) * distance))
      }
    }
  }, [transportations, transportation, distance, setTime])
  useEffect(() => {
    if (transportations && distance && transportation && time) {
      const selectedTransportation = transportations.find(
        (transportationObject) => transportationObject.id === transportation
      )
      if (selectedTransportation) {
        console.log(selectedTransportation)
        const finalAdjustment =
          adjustment || adjustment === 0 ? adjustment : distance * 0.25
        setKgco2(
          (selectedTransportation.values[0].value *
            (distance - finalAdjustment) *
            days *
            (52 - holidays - 1)) /
            1000
        )
        setTotalTime(Math.round((time / 60) * days * (52 - holidays - 1)))
      }
    } else {
      setKgco2(null)
      setTotalTime(null)
    }
  }, [
    transportations,
    distance,
    time,
    days,
    holidays,
    transportation,
    adjustment,
  ])

  return (
    <SearchContext.Provider
      value={{
        timing,
        setTiming,
        distance,
        setDistance,
        time,
        setTime,
        days,
        setDays,
        holidays,
        setHolidays,
        transportation,
        setTransportation,
        adjustment,
        setAdjustment,
        kgco2,
        totalTime,
      }}
    >
      {props.children}
    </SearchContext.Provider>
  )
}
