import styled from 'styled-components'
import {FlexWrapper} from '../../Styles/commonStyles'
import {size} from '../../Utils/breakpoints'


export const FooterWrapper = styled.footer`
  background: ${({theme}) => theme.blackColor};
  padding: 100px 0 30px 0;
  font-size: 14px;
  svg {
    color: ${({theme}) => theme.whiteColor};
  }
  @media screen and (max-width: ${size.sm}) {
    text-align: center;
  }
`

export const FooterExternalLink = styled.a`
  color: ${({theme}) => theme.whiteColor};
  line-height: 10px;
  display: flex;
  justify-content: flex-start;
  @media screen and (max-width: ${size.sm}) {
    justify-content: center;
  }
`

export const SocialWrapper = styled(FlexWrapper)`
  margin: 50px 0 0 0;
  flex-wrap: wrap;
  @media screen and (max-width: ${size.sm}) {
    justify-content: center;
  }
`
export const SocialWrapperLeft = styled.img`
  width: 200px;
`
export const SocialWrapperRight = styled.div``

export const SocialIcon = styled.a`
  svg {
    color: ${({theme}) => theme.whiteColor};
    font-size: 26px;
  }
`
