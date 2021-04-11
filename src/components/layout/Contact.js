import React, { useState, useContext } from 'react'
import styled from 'styled-components'
import { useMutation } from 'react-query'
import axios from 'axios'

import UXContext from 'utils/UXContext'
import Panel from 'components/base/Panel'
import Button from 'components/base/Button'
import TextInput from 'components/base/TextInput'
import TextArea from 'components/base/TextArea'
import Select from 'components/base/Select'

const Form = styled.form`
  width: 100%;
  margin-bottom: 3rem;
`
const ButtonWrapper = styled.div`
  display: flex;
  justify-content: center;
`
const Warning = styled.p``
const Alert = styled.p`
  margin-top: 1rem;
  text-align: center;
`

export default function Contact() {
  const { contactOpen, setContactOpen } = useContext(UXContext)

  const [user, setUser] = useState({
    nom: '',
    email: '',
    objet: '',
    message: '',
  })

  const [empty, setEmpty] = useState(false)

  const mutation = useMutation((formData) => {
    return axios.post('/', formData)
  })

  return (
    <Panel
      open={contactOpen}
      toggleClose={() => {
        setContactOpen((prevOpen) => !prevOpen)
      }}
      index={2}
    >
      <h2>Nous contacter</h2>
      <Form
        id='contact'
        method='post'
        data-netlify='true'
        name='contact'
        onSubmit={(e) => {
          e.preventDefault()
          if (!user.nom || !user.email || !user.objet || !user.message) {
            mutation.reset()
            setEmpty(true)
          } else {
            setEmpty(false)
            const formData = new URLSearchParams()
            formData.append(
              'form-name',
              ['integration', 'datagir', 'autre'].includes(user.objet)
                ? 'contact'
                : 'bug'
            )
            Object.keys(user).map((key) => formData.append(key, user[key]))
            mutation.mutate(formData)
          }
        }}
      >
        <TextInput
          name={'nom'}
          value={user.nom}
          error={empty && !user.nom}
          label={'Votre nom'}
          onChange={({ name, value }) =>
            setUser((prevUser) => ({ ...prevUser, [name]: value }))
          }
          required
        />
        <TextInput
          type='email'
          name={'email'}
          error={empty && !user.email}
          value={user.email}
          label={'Votre email'}
          onChange={({ name, value }) =>
            setUser((prevUser) => ({ ...prevUser, [name]: value }))
          }
        />
        <Select
          name={'objet'}
          value={user.objet}
          label={'Votre sujet'}
          onChange={({ name, value }) =>
            setUser((prevUser) => ({ ...prevUser, [name]: value }))
          }
        >
          <option value={null} disabled></option>
          <option value='integration'>
            Je souhaite obtenir de l'aide pour intégrer le simulateur
          </option>
          <option value='datagir'>
            Je souhaite en savoir plus sur Datagir
          </option>
          <option value='transport manquant'>
            Il manque un mode de transport
          </option>
          <option value='imprecision'>Le calcul n'est pas assez précis</option>
          <option value='bug'>J'ai trouvé un bug</option>
          <option value='amelioration'>
            Je souhaite proposer une amélioration
          </option>
          <option value='autre'>Autre</option>
        </Select>
        {user.objet && (
          <Warning>
            {user.objet === 'transport manquant'
              ? `Ce simulateur n'est qu'une illustration des différences entre les principaux modes de transport et n'a pas pour objectif d'être exhaustif.`
              : ''}
            {user.objet === 'imprecision'
              ? `Ce simulateur propose un calcul simplifié afin de donner une idée d'ordre de grandeur. Réalisez votre bilan carbone sur Nos Gestes Climat afin d'obtenir un résultat plus précis.`
              : ''}
          </Warning>
        )}
        <TextArea
          name={'message'}
          value={user.message}
          error={empty && !user.message}
          label={'Votre message'}
          onChange={({ name, value }) =>
            setUser((prevUser) => ({ ...prevUser, [name]: value }))
          }
        />
        <ButtonWrapper>
          <Button submit disabled={mutation.isLoading}>
            Envoyer mon message
          </Button>
        </ButtonWrapper>
        {empty && <Alert>Merci de remplir tous les champs</Alert>}
        {mutation.isError && (
          <Alert>
            Quelque chose n'a pas fonctionné :(
            <br />({mutation.error.message})
          </Alert>
        )}
        {mutation.isSuccess && (
          <Alert>
            Merci !<br />
            Nous avons bien reçu votre message
          </Alert>
        )}
      </Form>
    </Panel>
  )
}
