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
            quote:
              'Grâce à ce simulateur Datagir, retrouvez l’impact positif du télétravail sur l’environnement et évaluez vos économies de CO2 💸🌍',
          },
          result: {
            quote: `Découvrez les émissions de CO2 que j’ai évitées grâce au télétravail ! Grâce à ce simulateur Datagir, j’ai pu évaluer les émissions évitées lorsque que je me déplace moins pour aller travailler et voici le résultat ! 🌍 Et dans votre cas à combien arrivez-vous ?`,
          },
        },
        twitter: {
          simulator: {
            title:
              'Grâce à ce simulateur @_datagir, retrouvez l’impact positif du télétravail sur l’environnement et évaluez vos économies de CO2 💸🌍',
          },
          result: {
            title: `Découvrez les émissions de CO2 que j’ai évitées grâce au télétravail ! Grâce à ce simulateur @_datagir, j’ai pu évaluer les émissions évitées lorsque que je me déplace moins pour aller travailler et voici le résultat ! 🌍 Et dans votre cas à combien arrivez-vous ?`,
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
            title:
              'Grâce à ce simulateur Datagir, retrouvez l’impact positif du télétravail sur l’environnement et évaluez vos économies de CO2 💸🌍',
          },
          result: {
            title: `Découvrez les émissions de CO2 que j’ai évitées grâce au télétravail ! Grâce à ce simulateur Datagir, j’ai pu évaluer les émissions évitées lorsque que je me déplace moins pour aller travailler et voici le résultat ! 🌍 Et dans votre cas à combien arrivez-vous ?`,
          },
        },
      }}
    />
  )
}
