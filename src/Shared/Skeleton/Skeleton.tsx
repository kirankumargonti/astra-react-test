import React from 'react'
import styled, {keyframes} from 'styled-components'
import {Container} from '../../Styles/commonStyles'

const Skeleton: React.FC = () => {
  return (
    <Container>
      <SkeletonWrapper />
      <SkeletonWrapper />
      <SkeletonWrapper />
    </Container>
  )
}

export default Skeleton

const skeletonLoading = keyframes`
  0% {
    background-color: hsl(200, 20%, 80%);
  }
  100% {
    background-color: hsl(200, 20%, 95%);
  }
`

const SkeletonWrapper = styled.div`
  width: 100%;
  height: 200px;
  margin-bottom: 0.5rem;
  border-radius: 0.25rem;
  background-color: hsl(200, 20%, 80%);
  animation: ${skeletonLoading} 1s linear infinite alternate;
`
