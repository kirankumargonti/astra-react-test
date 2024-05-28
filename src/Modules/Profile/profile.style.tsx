import styled from 'styled-components'
import {size} from '../../Utils/breakpoints'

export const ContactWrapper = styled.section`
  margin-top: 80px;
  padding: 30px 10px;
  form {
    display: grid;
    place-items: center;
  }
  @media screen and (max-width: ${size.sm}) {
    padding: 10px;
  }
`

export const ContactForm = styled.div`
  border: 1px solid ${({theme}) => theme.borderColor};
  padding: 30px;
  max-width: 600px;
  border-radius: 10px;
  margin: auto;
  box-shadow: rgba(0, 0, 0, 0.1) 0px 1px 2px 0px;

  @media screen and (max-width: ${size.sm}) {
    padding: 20px 10px;
  }
`

export const FormField = styled.div`
  display: flex;
  align-items: flex-start;
  flex-direction: column;
  width: 100%;
  margin-bottom: 30px;
  label {
    margin-bottom: 5px;
  }
  input,
  textarea {
    border: 1px solid hsla(0, 0%, 0%, 0.1);
    border-radius: 5px;
    padding: 8px 10px;
    outline: 0;
    width: 100%;
    background-color: ${({theme}) => theme.inputColor};
    color: ${({theme}) => theme.bodyFontColor};
  }
  input:focus {
    outline: none;
  }
  div {
    color: red;
    font-size: 12px;
    margin-top: 5px;
  }
`

export const ContactTitle = styled.h1`
  text-align: center;
  margin-bottom: 20px;
`
