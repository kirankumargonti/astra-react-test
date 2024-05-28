import styled from 'styled-components'
import {media} from '../Utils/mediaQueries'
import {size} from '../Utils/breakpoints'

interface FlexWrapperProps {
  displayValue?: string
  alignItemsValue?: string
  justifyContentValue?: string
  flexWrapValue?: string
  gapValue?: string
}

export const Container = styled.div`
  width: 100%;
  margin-right: auto;
  margin-left: auto;
  padding-right: 15px;
  padding-left: 15px;

  ${media.sm`
    max-width: 576px;
    padding-right: 15px;
    padding-left: 15px;
  `};

  ${media.md`
    max-width: 720px;
    padding-right: 15px;
    padding-left: 15px;
  `};

  ${media.lg`
    max-width: 960px;
    padding-right: 15px;
    padding-left: 15px;
  `};

  ${media.xl`
    max-width: 1140px;
    padding-right: 15px;
    padding-left: 15px;
  `};
`

export const GridWrapper = styled.div<{minWidth?: string}>`
  display: grid;
  grid-template-columns: repeat(
    auto-fill,
    minmax(${(props) => props.minWidth || '200px'}, 1fr)
  );
  gap: 2rem;
`
export const FlexWrapper = styled.div<FlexWrapperProps>`
  display: flex;
  align-items: ${(props) => props.alignItemsValue || 'center'};
  justify-content: ${(props) => props.justifyContentValue || 'space-between'};
  flex-wrap: ${(props) => props.flexWrapValue || 'nowrap'};
  gap: ${(props) => props.gapValue || '2rem'};
`

export const Switcher = styled.div`
  cursor: pointer;
`

export const Heading = styled.h1`
  font-size: 2.6rem;
  font-weight: 600;
  @media screen and (max-width: ${size.sm}) {
    font-size: 1rem;
    text-align: center;
  }
`

export const Text = styled.p`
  font-size: 16px;
  line-height: 1.8;
  font-weight: 600;
`

export const CommonComponentWrapper = styled.div`
  min-height: 70vh;
  display: flex;
  align-items: center;
  justify-content: center;
  font-weight: 600;
  font-size: 2rem;
  @media screen and (max-width: ${size.md}) {
    min-height: 30vh;
  }
`
