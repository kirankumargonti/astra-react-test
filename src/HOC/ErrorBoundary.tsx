import React, {Component} from 'react'
import {CommonComponentWrapper, Container} from '../Styles/commonStyles'

interface ErrorBoundaryProps {
  children: React.ReactNode
}

interface ErrorBoundaryState {
  hasError: boolean
}

class ErrorBoundary extends Component<ErrorBoundaryProps, ErrorBoundaryState> {
  constructor(props: ErrorBoundaryProps) {
    super(props)
    this.state = {hasError: false}
  }

  static getDerivedStateFromError(_: any): Partial<ErrorBoundaryState> {
    return {hasError: true}
  }

  componentDidCatch(error: any, info: any) {
    console.error('Uncaught error:', error, info)
  }

  render() {
    if (this.state.hasError) {
      // You can render any custom fallback UI
      return (
        <CommonComponentWrapper>
          <Container>Something went wrong.</Container>
        </CommonComponentWrapper>
      )
    }

    return this.props.children
  }
}

export default ErrorBoundary
