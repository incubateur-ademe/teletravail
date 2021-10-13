import React from 'react'

import Share from 'components/layout/Share'

export default function ShareWrapper(props) {
  return (
    <Share
      small={props.small}
      messages={{
        mail: {
          simulator: {
            subject: `Découvrez et intégrez le simulateur de l'ADEME Télétravail-Mon Impact Transport !`,
            body: `Bonjour,

Vous souhaitez sensibiliser votre communauté ou collaborateurs sur les bénéfices du télétravail pour l’environnement ?

Évaluez facilement les économies de CO2 réalisées grâce à au simulateur Télétravail-Mon Impact Transport !

Découvrez le ici : `,
          },
          result: {
            subject: `Découvre mon résultat sur le simulateur de l'ADEME Télétravail-Mon Impact Transport`,
            body: `Bonjour,

Voici un résultat de recherche sur le site Télétravail-Mon Impact Transport que je voulais partager avec toi : `,
          },
        },
        facebook: {
          simulator: {
            quote: 'Évaluez vos économies de CO2 grâce au Télétravail 💸🌍',
          },
          result: {
            quote: `Découvrez les émissions de CO2 que j’ai évitées grâce au télétravail ! `,
          },
        },
        twitter: {
          simulator: {
            title: 'Évaluez vos économies de CO2 grâce au Télétravail 💸🌍',
          },
          result: {
            title: `Découvrez les émissions de CO2 que j’ai évitées grâce au télétravail ! `,
          },
        },
        linkedin: {
          simulator: {
            source: 'Teletravail - Mon Impact Transport',
          },
          result: {
            source: `Teletravail - Mon Impact Transport`,
          },
        },
        whatsapp: {
          simulator: {
            title: 'Évaluez vos économies de CO2 grâce au Télétravail 💸🌍',
          },
          result: {
            title: `Découvrez les émissions de CO2 que j’ai évitées grâce au télétravail ! `,
          },
        },
      }}
    />
  )
}
