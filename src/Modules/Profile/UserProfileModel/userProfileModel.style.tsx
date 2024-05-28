import styled from 'styled-components'
import {size} from '../../../Utils/breakpoints'

export const UserProfilesContainer = styled.section`
  position: fixed;
  top: 0;
  left: 0;
  background-color: #000000da;
  width: 100%;
  height: 100%;
`

export const BannerSection = styled.div`
  box-shadow: rgba(0, 0, 0, 0.1) 0px 1px 2px 0px;
  position: relative;
  border-radius: 33px;
  background-color: #777777;
  height: 250px;
  padding: 5px;
`

export const ProfileImage = styled.img`
  max-width: 100%;
  height: auto;
  border-radius: 5px;
  position: absolute;
  bottom: -75px;
  background-color: ${({theme}) => theme.bodyBackgroundColor};
  padding: 10px;
  left: 20px;
  width: 150px;
  height: 150px;
  border-radius: 50%;
  box-shadow: rgba(0, 0, 0, 0.16) 0px 3px 6px, rgba(0, 0, 0, 0.23) 0px 3px 6px;
`

export const BannerImage = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
  border-radius: 33px;
  overflow: hidden;
`

export const CloseButton = styled.div`
  position: absolute;
  top: -10px;
  right: -10px;
  background: transparent;
  border: none;
  font-size: 1.5rem;
  cursor: pointer;
  background-color: ${({theme}) => theme.bodyBackgroundColor};
  border: 1px solid ${({theme}) => theme.borderColor};

  border-radius: 50%;
  padding: 4px;
  box-shadow: rgba(0, 0, 0, 0.1) 0px 1px 2px 0px;
  @media screen and (max-width: ${size.lg}) {
    top: 20px;
    right: 20px;
  }
`
export const UserProfilesWrapper = styled.div`
  position: absolute;
  background-color: ${({theme}) => theme.bodyBackgroundColor};
  padding: 30px 30px;
  border-radius: 33px;
  top: 40%;
  left: 50%;
  width: 992px;
  transform: translate(-50%, -50%);
  border: 1px solid ${({theme}) => theme.borderColor};
  @media screen and (max-width: ${size.lg}) {
    top: 50%;
    width: 100%;
  }
`

export const ModalTitle = styled.h1`
  text-align: center;
  margin-bottom: 20px;
  color: ${({theme}) => theme.bodyFontColor};
`

export const ProfileSection = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 10px;
  margin-top: 80px;
  @media screen and (max-width: ${size.lg}) {
    grid-template-columns: 1fr;
  }
`

export const ProfileSectionInfo = styled.p`
  margin: 0;
  color: ${({theme}) => theme.bodyFontColor};
`
