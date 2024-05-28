import {useAuth0} from '@auth0/auth0-react'
import {lazy, Suspense, ReactNode} from 'react'
import {createBrowserRouter, Navigate} from 'react-router-dom'

// Components
const Header = lazy(() => import('../Shared/Header/Header'))
const Footer = lazy(() => import('../Shared/Footer/Footer'))
const HomePage = lazy(() => import('../Modules/HomePage/HomePage'))
const Admin = lazy(() => import('../Modules/Admin/Admin'))
const Profile = lazy(() => import('../Modules/Profile/Profile'))
const NotFound = lazy(() => import('../Modules/NotFound'))
const Skeleton = lazy(() => import('../Shared/Skeleton/Skeleton'))

const RequireAuth = ({children}: {children: ReactNode}) => {
  const {isAuthenticated} = useAuth0()

  if (!isAuthenticated) {
    return <Navigate to='/' />
  }

  return <>{children}</>
}

const IsAdmin = ({children}: {children: ReactNode}) => {
  const {user} = useAuth0()

  if (user?.nickname !== 'admin') {
    return <Navigate to='/' />
  }

  return <>{children}</>
}

const Layout = ({children}: {children: JSX.Element}) => (
  <>
    <Header />
    {children}
    <Footer />
  </>
)

export const router = createBrowserRouter([
  {
    path: '/',
    element: (
      <Suspense fallback={<Skeleton />}>
        <Layout>
          <HomePage />
        </Layout>
      </Suspense>
    ),
  },
  {
    path: '/profile',
    element: (
      <Suspense fallback={<Skeleton />}>
        <Layout>
          <RequireAuth>
            <Profile />
          </RequireAuth>
        </Layout>
      </Suspense>
    ),
  },
  {
    path: '/admin',
    element: (
      <Suspense fallback={<Skeleton />}>
        <Layout>
          <IsAdmin>
            <Admin />
          </IsAdmin>
        </Layout>
      </Suspense>
    ),
  },
  {
    path: '*',
    element: (
      <Suspense fallback={<div>Loading...</div>}>
        <Layout>
          <NotFound />
        </Layout>
      </Suspense>
    ),
  },
])
