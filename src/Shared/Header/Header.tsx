import {Link} from 'react-router-dom'
import {RxCross2} from 'react-icons/rx'
import {FC, useState} from 'react'
import {HiBars3CenterLeft} from 'react-icons/hi2'

// Styles
import {
  HeaderWrapper,
  HeaderLeft,
  HeaderRight,
  HeaderLogo,
  IconWrapper,
  MobileNav,
  HeaderLogoutOut,
  HeaderLogin,
} from './header.style'
import {Container, FlexWrapper} from '../../Styles/commonStyles'

// Assets
import Logo from '../../Assets/logo.png'

// Redux slice
import ThemeSwitcher from '../ThemeSwitcher'

// Hooks
import useAuth from '../../Hooks/useAuth'
import useNavItems from '../../Hooks/useNavItems'
import useWindowSize from '../../Hooks/useWindowSize'

const Header: FC = () => {
  const {isAuthenticated, handleLogin, handleLogout, isLoading} = useAuth()
  const navItems = useNavItems()
  const {width} = useWindowSize()
  const [isToggle, setIsToggle] = useState(false)

  const handleToggle = () => {
    setIsToggle((prev) => !prev)
  }

  return (
    <HeaderWrapper>
      <Container>
        <FlexWrapper>
          <HeaderLeft>
            <Link to='/'>
              <HeaderLogo src={Logo} alt='Logo' />
            </Link>
          </HeaderLeft>
          <HeaderRight>
            <FlexWrapper>
              {width > 768 && (
                <FlexWrapper>
                  {navItems?.map((item) =>
                    item?.showNavItem ? (
                      <Link key={item.id} to={item.path}>
                        {item.name}
                      </Link>
                    ) : null
                  )}
                  {!isLoading && !isAuthenticated ? (
                    <HeaderLogin onClick={handleLogin}>Login</HeaderLogin>
                  ) : (
                    !isLoading && (
                      <HeaderLogoutOut onClick={handleLogout}>
                        Logout
                      </HeaderLogoutOut>
                    )
                  )}
                </FlexWrapper>
              )}
              <FlexWrapper>
                <ThemeSwitcher />
                {width < 768 && !isToggle ? (
                  <IconWrapper onClick={handleToggle}>
                    <HiBars3CenterLeft />
                  </IconWrapper>
                ) : (
                  width < 768 && (
                    <IconWrapper onClick={handleToggle}>
                      <RxCross2 />
                    </IconWrapper>
                  )
                )}
              </FlexWrapper>
            </FlexWrapper>
            {width < 786 && (
              <MobileNav isVisible={isToggle}>
                {navItems?.map((item) =>
                  item?.showNavItem ? (
                    <Link onClick={handleToggle} key={item.id} to={item.path}>
                      {item.name}
                    </Link>
                  ) : null
                )}
                {!isLoading && !isAuthenticated ? (
                  <HeaderLogin onClick={handleLogin}>Login</HeaderLogin>
                ) : (
                  !isLoading && (
                    <HeaderLogoutOut onClick={handleLogout}>
                      Logout
                    </HeaderLogoutOut>
                  )
                )}
              </MobileNav>
            )}
          </HeaderRight>
        </FlexWrapper>
      </Container>
    </HeaderWrapper>
  )
}

export default Header
