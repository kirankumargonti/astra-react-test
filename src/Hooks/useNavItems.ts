import {useAuth0} from '@auth0/auth0-react'

interface NavItem {
  id: number
  name: string
  path: string
  showNavItem: boolean
}

const useNavItems = (): NavItem[] => {
  const {isAuthenticated, user} = useAuth0()
  console.log({user})

  return [
    {
      id: 1,
      name: 'Home',
      path: '/',
      showNavItem: true,
    },
    {
      id: 2,
      name: 'Profile',
      path: '/Profile',
      showNavItem: isAuthenticated,
    },
    {
      id: 3,
      name: 'Admin',
      path: '/admin',
      showNavItem: user?.nickname === 'admin' ? true : false,
    },
  ]
}

export default useNavItems
