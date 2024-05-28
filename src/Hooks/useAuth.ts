import {useAuth0} from '@auth0/auth0-react'

const useAuth = () => {
  const {logout, isAuthenticated, loginWithPopup, isLoading, user} = useAuth0()

  const handleLogin = () => {
    loginWithPopup()
  }

  const handleLogout = () => {
    logout({
      logoutParams: {returnTo: window.location.origin},
    })
  }

  return {isAuthenticated, handleLogin, handleLogout, isLoading, user}
}

export default useAuth
