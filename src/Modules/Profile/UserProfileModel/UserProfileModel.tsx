import React from 'react'
import {RxCross2} from 'react-icons/rx'

// Styles
import {
  UserProfilesContainer,
  BannerSection,
  ProfileImage,
  BannerImage,
  CloseButton,
  UserProfilesWrapper,
  ModalTitle,
  ProfileSection,
  ProfileSectionInfo,
} from './userProfileModel.style'

// Components
import {Container} from '../../../Styles/commonStyles'

interface FormValues {
  name: string
  email: string
  address: string
  dob: Date
  bio: string
  profileImage?: File
  bannerImage?: File
}

interface UserProfileModelProps {
  setShowModal: React.Dispatch<React.SetStateAction<boolean>>
  userData: FormValues
}

const UserProfileModel: React.FC<UserProfileModelProps> = ({
  setShowModal,
  userData,
}) => {
  const {name, email, address, dob, bio, profileImage, bannerImage} = userData
  const formattedDob = new Date(dob).toDateString()
  return (
    <UserProfilesContainer>
      <Container>
        <UserProfilesWrapper>
          <CloseButton onClick={() => setShowModal(false)}>
            <RxCross2 />
          </CloseButton>
          <ModalTitle>User Details</ModalTitle>
          <BannerSection>
            <BannerImage
              src={bannerImage ? URL.createObjectURL(bannerImage || '') : ''}
              alt='Banner'
            />
            <ProfileImage
              src={profileImage ? URL.createObjectURL(profileImage) : ''}
              alt='Profile'
            />
          </BannerSection>
          <ProfileSection>
            <ProfileSectionInfo>
              <strong>Name:</strong> {name}
            </ProfileSectionInfo>
            <ProfileSectionInfo>
              <strong>Email:</strong> {email}
            </ProfileSectionInfo>
            <ProfileSectionInfo>
              <strong>Address:</strong> {address}
            </ProfileSectionInfo>
            <ProfileSectionInfo>
              <strong>Date of Birth:</strong> {formattedDob}
            </ProfileSectionInfo>
            <ProfileSectionInfo>
              <strong>Bio:</strong> {bio}
            </ProfileSectionInfo>
          </ProfileSection>
        </UserProfilesWrapper>
      </Container>
    </UserProfilesContainer>
  )
}

export default UserProfileModel
