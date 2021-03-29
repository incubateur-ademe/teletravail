import React, { useState } from 'react'

import UXContext from 'utils/UXContext'
import usePageView from 'hooks/usePageView'

export default function UXProvider(props) {
  usePageView('Télétravail')

  const [configuratorOpen, setConfiguratorOpen] = useState(false)
  const [shareOpen, setShareOpen] = useState(false)
  const [details, setDetails] = useState(false)

  return (
    <UXContext.Provider
      value={{
        configuratorOpen,
        setConfiguratorOpen: (value) => {
          if (value) {
            setShareOpen(false)
          }
          setConfiguratorOpen(value)
        },
        shareOpen,
        setShareOpen: (value) => {
          if (value) {
            setConfiguratorOpen(false)
          }
          setShareOpen(value)
        },
        details,
        setDetails,
      }}
    >
      {props.children}
    </UXContext.Provider>
  )
}
