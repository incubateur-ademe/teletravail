import React from 'react'

import Share from 'components/layout/Share'

export default function ShareWrapper(props) {
  return (
    <Share
      small={props.small}
      title={process.env.REACT_APP_NAME}
      message={process.env.REACT_APP_DESCRIPTION}
    />
  )
}
