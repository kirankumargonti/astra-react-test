import {FC} from 'react'

// Styles
import {
  HeroContent,
  HeroDescription,
  HeroHeading,
  HeroWrapper,
  HeroWrapperLeft,
  HeroWrapperRight,
} from './hero.style'
import {Container} from '../../../Styles/commonStyles'

// Components
import Button from '../../../Shared/Button/Button'

// Assets
import MakeWebsite from '../../../Assets/webiste-maker.svg'

const Hero: FC = () => {
  return (
    <HeroWrapper>
      <Container>
        <HeroContent>
          <HeroWrapperLeft>
            <HeroHeading>Your Idea Matters!</HeroHeading>
            <HeroDescription>
              Pulvinar enim ac tortor nulla facilisi tristique facilisi
              elementum sollicitudin eget lorem.
            </HeroDescription>
            <Button buttonName='Make a Website' />
          </HeroWrapperLeft>
          <HeroWrapperRight src={MakeWebsite} alt='website-creation' />
        </HeroContent>
      </Container>
    </HeroWrapper>
  )
}

export default Hero
