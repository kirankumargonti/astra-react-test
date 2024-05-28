import {FC, ReactNode} from 'react'
import './footer.style'
import {
  FooterExternalLink,
  FooterWrapper,
  SocialIcon,
  SocialWrapper,
  SocialWrapperLeft,
  SocialWrapperRight,
} from './footer.style'
import {Container, FlexWrapper, GridWrapper} from '../../Styles/commonStyles'
import {
  FaFacebook,
  FaInstagram,
  FaTwitter,
  FaLinkedin,
  FaYoutube,
} from 'react-icons/fa'

import {Link} from 'react-router-dom'
import {GoArrowUpRight} from 'react-icons/go'
import {IconType} from 'react-icons'

import Wordpress from '../../Assets/wordpress.png'

interface Link {
  id: number
  linkName: string
  hasExternalLink: boolean
}

interface SocialLink {
  id: number
  icon: ReactNode
  link: string
}

const socialLinks: SocialLink[] = [
  {
    id: 1,
    icon: <FaFacebook />,
    link: 'https://www.facebook.com',
  },
  {
    id: 2,
    icon: <FaInstagram />,
    link: 'https://www.instagram.com',
  },
  {
    id: 3,
    icon: <FaTwitter />,
    link: 'https://x.com',
  },
  {
    id: 4,
    icon: <FaLinkedin />,
    link: 'https://www.linkedin.com',
  },
  {
    id: 5,
    icon: <FaYoutube />,
    link: 'https://www.youtube.com',
  },
]

const links: Link[] = [
  {id: 1, linkName: 'About', hasExternalLink: false},
  {id: 2, linkName: 'Showcase', hasExternalLink: false},
  {id: 3, linkName: 'News', hasExternalLink: false},
  {id: 4, linkName: 'Themes', hasExternalLink: false},
  {id: 5, linkName: 'Hosting', hasExternalLink: false},
  {id: 6, linkName: 'Plugins', hasExternalLink: false},
  {id: 7, linkName: 'Privacy', hasExternalLink: false},
  {id: 8, linkName: 'Patterns', hasExternalLink: false},
  {id: 9, linkName: 'Learn', hasExternalLink: false},
  {id: 10, linkName: 'Documentation', hasExternalLink: false},
  {id: 11, linkName: 'Developers', hasExternalLink: false},
  {id: 12, linkName: 'WordPress.tv', hasExternalLink: true},
  {id: 13, linkName: 'Get Involved', hasExternalLink: false},
  {id: 14, linkName: 'Events', hasExternalLink: false},
  {id: 15, linkName: 'Donate', hasExternalLink: true},
  {id: 16, linkName: 'Swag Store', hasExternalLink: true},
  {id: 17, linkName: 'WordPress.com', hasExternalLink: true},
  {id: 18, linkName: 'Matt', hasExternalLink: true},
  {id: 19, linkName: 'bbPress', hasExternalLink: true},
  {id: 20, linkName: 'BuddyPress', hasExternalLink: true},
]

const Footer: FC = () => {
  return (
    <FooterWrapper>
      <Container>
        <GridWrapper minWidth='160px'>
          {links?.map((item) =>
            !item.hasExternalLink ? (
              <Link key={item.id} to=''>
                {item.linkName}
              </Link>
            ) : (
              <FooterExternalLink
                key={item.id}
                href=''
                target='_blank'
                rel='noopener noreferrer'
              >
                {item.linkName}
                <GoArrowUpRight />
              </FooterExternalLink>
            )
          )}
        </GridWrapper>
        <SocialWrapper>
          <SocialWrapperLeft src={Wordpress} alt='wordpress' />
          <FlexWrapper>
            {socialLinks?.map((item) => (
              <SocialIcon
                href={item.link}
                target='_blank'
                rel='noopener noreferrer'
                key={item.id}
              >
                {item.icon}
              </SocialIcon>
            ))}
          </FlexWrapper>
        </SocialWrapper>
      </Container>
    </FooterWrapper>
  )
}

export default Footer
