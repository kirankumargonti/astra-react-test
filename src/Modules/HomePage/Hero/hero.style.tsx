import styled from 'styled-components'
import {FlexWrapper, Heading, Text} from '../../../Styles/commonStyles'
import {size} from '../../../Utils/breakpoints'

export const HeroWrapper = styled.section`
  background: ${(props) => props.theme.heroBackgroundColor};
  min-height: 100vh;
  display: grid;
  place-items: center;
  color: ${(props) => props.theme.whiteColor};

  @media screen and (max-width: ${size.lg}) {
    min-height: auto;
    padding: 80px 10px;
  }
`

export const HeroWrapperLeft = styled(FlexWrapper)`
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
  @media screen and (max-width: ${size.lg}) {
    order: 1;
    align-items: center;
  }
`

export const HeroHeading = styled(Heading)`
  font-size: 3.5rem;
  @media screen and (max-width: ${size.sm}) {
    font-size: 2rem;
    text-align: center;
  }
`
export const HeroDescription = styled(Text)`
  max-width: 350px;
  @media screen and (max-width: ${size.sm}) {
    font-size: 14px;
    line-height: 1.5;
    text-align: center;
  }
`

export const HeroContent = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  @media screen and (max-width: ${size.lg}) {
    grid-template-columns: repeat(1, 1fr);
    margin: auto;
  }
`

export const HeroWrapperRight = styled.img``
