import styled from 'styled-components'
import {size} from '../../Utils/breakpoints'

export const ButtonWrapper = styled.button`
  border-style: solid;
  border: 0;
  border-color: ${(props) => props.theme.buttonColor};
  background-color: ${(props) => props.theme.buttonColor};
  font-weight: 600;
  font-size: 20px;
  font-size: 1.1rem;
  padding: 20px 40px;
  text-align: center;
  border-radius: 9999px;
  box-shadow: none;
  cursor: pointer;
  @media screen and (max-width: ${size.sm}) {
    padding: 10px 20px;
    font-size: 16px;
  }
`
