import React, {FC, ReactNode} from 'react'
import {CiCircleCheck} from 'react-icons/ci'
import {IoBusinessOutline, IoBagOutline} from 'react-icons/io5'
import {FiEdit} from 'react-icons/fi'

// Styles
import {
  ServiceCard,
  ServiceCardIcon,
  ServiceCardImage,
  ServiceInfo,
  ServiceName,
  ServicesContent,
  ServicesWrapper,
  ServiceTitle,
} from './services.style'
import {Container, GridWrapper} from '../../../Styles/commonStyles'

// Assets
import CartImage from '../../../Assets/cart.jpeg'
import Design from '../../../Assets/like.jpg'
import WebDev from '../../../Assets/thunder.jpg'

interface service {
  id: number
  icon: ReactNode
  title: string
  description: string
}

const servicesInfo: service[] = [
  {
    id: 1,
    icon: <IoBusinessOutline />,
    title: 'Local Business',
    description: 'Lorem ipsum dolor consectetur adipiscing elit eiusmod.',
  },
  {
    id: 2,
    icon: <IoBagOutline />,
    title: 'Online Store',
    description: 'Lorem ipsum dolor consectetur adipiscing elit eiusmod.',
  },
  {
    id: 3,
    icon: <FiEdit />,
    title: 'Blogging',
    description: 'Lorem ipsum dolor consectetur adipiscing elit eiusmod.',
  },
  {
    id: 4,
    icon: <CiCircleCheck />,
    title: 'Portfolio',
    description: 'Lorem ipsum dolor consectetur adipiscing elit eiusmod.',
  },
]
const services = [
  {
    id: 1,
    image: CartImage,
    title: 'Branding Design',
    description:
      'Sem quis erat nibh id neque tincidunt molestie convallis ut nibh vel, lorem consequat ullamcorper.',
  },
  {
    id: 2,
    image: Design,
    title: 'Graphic Design',
    description:
      'Sem quis erat nibh id neque tincidunt molestie convallis ut nibh vel, lorem consequat ullamcorper.',
  },
  {
    id: 3,
    image: WebDev,
    title: 'Web Development',
    description:
      'Sem quis erat nibh id neque tincidunt molestie convallis ut nibh vel, lorem consequat ullamcorper.',
  },
]
const Services: FC = () => {
  return (
    <ServicesWrapper>
      <Container>
        <ServicesContent>
          <GridWrapper>
            {servicesInfo?.map((item) => (
              <ServiceCard key={item?.id}>
                <ServiceCardIcon>{item.icon}</ServiceCardIcon>
                <ServiceName>{item.title}</ServiceName>
                <ServiceInfo>{item.description}</ServiceInfo>
              </ServiceCard>
            ))}
          </GridWrapper>
        </ServicesContent>
        <ServicesContent>
          <ServiceTitle>Our Services</ServiceTitle>
          <GridWrapper minWidth='300px'>
            {services?.map((item) => (
              <ServiceCard key={item?.id}>
                <ServiceCardImage src={item.image} alt='service' />
                <ServiceName>{item.title}</ServiceName>
                <ServiceInfo>{item.description}</ServiceInfo>
              </ServiceCard>
            ))}
          </GridWrapper>
        </ServicesContent>
      </Container>
    </ServicesWrapper>
  )
}

export default Services
