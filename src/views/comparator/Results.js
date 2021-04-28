import React, { useContext } from 'react'
import styled from 'styled-components'

import UXContext from 'utils/UXContext'
import SearchContext from 'utils/SearchContext'
import ModalContext from 'utils/ModalContext'
import Button from 'components/base/Button'

const Wrapper = styled.div`
  position: relative;
  display: flex;
  justify-content: flex-end;
  width: 100%;
`
const Content = styled.div`
  align-self: flex-end;
  width: 31.25rem;
  font-size: 1.5rem;
  font-weight: 700;
  line-height: 1.7;
  text-align: right;
  opacity: ${(props) => (props.visible ? 1 : 0)};
  pointer-events: ${(props) => (props.visible ? 'inherit' : 'none')};
  transition: opacity 1800ms 300ms;

  ${(props) => props.theme.mq.small} {
    width: 100%;
    margin-bottom: 3rem;
    font-size: 1rem;
  }
`
const Color = styled.span`
  color: ${(props) => props.theme.colors.main};
  cursor: pointer;
  text-decoration: ${(props) => (props.underline ? 'underline' : 'none')};
  text-underline-offset: 0.2em;
`
const Small = styled.p`
  margin: 0.2rem 0 0;
  font-size: 0.75rem;
`
const StyledButton = styled(Button)`
  position: absolute;
  top: calc(100% + 3rem);
  left: 0;
  opacity: ${(props) => (props.visible ? 1 : 0)};
  transition: opacity 1000ms ${(props) => (props.visible ? '2000ms' : '0ms')};

  ${(props) => props.theme.mq.small} {
    left: 50%;
    transform: translateX(-50%);
  }
`
export default function Results() {
  const { details, setDetails } = useContext(UXContext)

  const { timing, kgco2 } = useContext(SearchContext)

  const { setCO2E, setFootprint, setPerimeter } = useContext(ModalContext)

  return (
    <Wrapper>
      <Content visible={kgco2 || kgco2 === 0}>
        {timing === 'avant'
          ? 'Maintenant que je travaille'
          : 'Si je travaillais'}{' '}
        de chez moi, {timing === 'avant' ? `j'économise` : `j'économiserais`}{' '}
        <Color onClick={() => setCO2E(true)} underline>
          {Math.round(kgco2)} kgCO2
        </Color>
        <Color>
          <sub>e</sub>
        </Color>{' '}
        par an{' '}
        <Color onClick={() => setPerimeter(true)}>sur mes déplacements</Color>.
        Soit{' '}
        <Color onClick={() => setFootprint(true)} underline>
          {Math.round((kgco2 / 10000) * 10000) / 100}%
        </Color>{' '}
        de mon{' '}
        <Color onClick={() => setFootprint(true)}>
          empreinte carbone
          <span
            dangerouslySetInnerHTML={{
              __html: '&nbsp;',
            }}
          />
          annuelle.
        </Color>
        <Small>
          (<Color onClick={() => setPerimeter(true)}>d'autres émissions</Color>{' '}
          ont peut-être augmenté)
        </Small>
      </Content>
      {!details && (
        <StyledButton
          onClick={() => setDetails(true)}
          visible={kgco2 || kgco2 === 0}
        >
          J'affine mon résultat
        </StyledButton>
      )}
    </Wrapper>
  )
}
