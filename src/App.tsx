import {FC} from 'react'
import {Provider} from 'react-redux'
import {Auth0Provider} from '@auth0/auth0-react'

import {store} from './Redux/store'

import ThemeWrapper from './Config/ThemeWrapper'
// Hoc
import ErrorBoundary from './HOC/ErrorBoundary'

const App: FC = () => {
  return (
    <Auth0Provider
      domain={process.env.REACT_APP_DOMAIN_ID as string}
      clientId={process.env.REACT_APP_CLIENT_ID as string}
      authorizationParams={{
        redirect_uri: process.env.REACT_APP_CALLBACK_URL as string,
      }}
    >
      <ErrorBoundary>
        <Provider store={store}>
          <ThemeWrapper />
        </Provider>
      </ErrorBoundary>
    </Auth0Provider>
  )
}

export default App
