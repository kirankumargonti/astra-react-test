import styled from 'styled-components'
import {Heading, Text} from '../../../Styles/commonStyles'
import {size} from '../../../Utils/breakpoints'

export const ServicesWrapper = styled.section`
  padding: 200px 0;
  @media screen and (max-width: ${size.sm}) {
    padding: 100px 0;
  }
`
export const ServiceTitle = styled(Heading)`
  margin: 100px 0 40px 0;
  @media screen and (max-width: ${size.sm}) {
    font-size: 1.8rem;
    text-align: center;
  }
`
export const ServicesContent = styled.div`
  width: 100%;
`
export const ServiceCard = styled.div`
  @media screen and (max-width: ${size.sm}) {
    display: flex;
    align-items: center;
    flex-direction: column;
    justify-content: center;
    text-align: center;
  }
`
export const ServiceCardIcon = styled.div`
  color: ${({theme}) => theme.brandColor};
  svg {
    font-size: 35px;
    color: ${({theme}) => theme.brandColor};
  }
`
export const ServiceCardImage = styled.img`
  aspect-ratio: 16/1;
  height: 500px;
  object-fit: cover;
  @media screen and (max-width: ${size.sm}) {
    height: 400px;
  }
`
export const ServiceName = styled.h1`
  margin-top: 16px;
  font-size: 20px;
  font-weight: 600;
  line-height: 1.3;
`
export const ServiceInfo = styled(Text)`
  color: ${({theme}) => theme.textColor};
  font-weight: 400;
  margin-top: 16px;
`
