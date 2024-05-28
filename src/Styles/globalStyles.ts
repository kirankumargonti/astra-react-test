import {createGlobalStyle, DefaultTheme} from 'styled-components'

interface Props {
  theme: DefaultTheme
}
export const GlobalStyle = createGlobalStyle<Props>`
  *, *::before, *::after {
  box-sizing: border-box;
}
* {
  margin: 0;
  padding: 0;
}
body {
  line-height: 1.5;
  -webkit-font-smoothing: antialiased;
  font-family: 'Inter',sans-serif;
  color: ${({theme}) => theme.bodyFontColor};
  background-color: ${({theme}) => theme.bodyBackgroundColor};
}
img, picture, video, canvas, svg {
  display: block;
  max-width: 100%;
}
input, button, textarea, select {
  font: inherit;
}
p, h1, h2, h3, h4, h5, h6 {
  overflow-wrap: break-word;
}
#root, #__next {
  isolation: isolate;
}
a{
  text-decoration: none;
  color: ${({theme}) => theme.whiteColor};
}

`
