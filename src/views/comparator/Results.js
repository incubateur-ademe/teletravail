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
  margin-bottom: 5rem;
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
    text-align: center;
  }
`
const Color = styled.span`
  color: ${(props) => props.theme.colors.main};
  cursor: pointer;
`
const StyledButton = styled(Button)`
  position: absolute;
  top: 100%;
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

  const { setCO2E, setFootprint } = useContext(ModalContext)

  return (
    <Wrapper>
      <Content visible={kgco2 || kgco2 === 0}>
        {timing === 'avant'
          ? 'Maintenant que je travaille'
          : 'Si je travaillais'}{' '}
        de chez moi, {timing === 'avant' ? `j'économise` : `j'économiserais`}{' '}
        <Color onClick={() => setCO2E(true)}>
          {Math.round(kgco2)} kgCO2<sub>e</sub>
        </Color>{' '}
        par an.
        <br />
        Soit{' '}
        <Color onClick={() => setFootprint(true)}>
          {Math.round((kgco2 / 12000) * 10000) / 100}%
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
