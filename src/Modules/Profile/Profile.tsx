import React, {useState} from 'react'
import {Formik, Field, Form, ErrorMessage} from 'formik'
import * as Yup from 'yup'

// Styles
import {
  ContactForm,
  ContactTitle,
  ContactWrapper,
  FormField,
} from './profile.style'
import {Container} from '../../Styles/commonStyles'

// Components
import Button from '../../Shared/Button/Button'
import UserProfileModel from './UserProfileModel/UserProfileModel'

interface FormValues {
  name: string
  email: string
  address: string
  dob: Date
  bio: string
  profileImage: File | undefined
  bannerImage: File | undefined
}

const validationSchema = Yup.object().shape({
  name: Yup.string().required('Name is required'),
  email: Yup.string().email('Invalid email').required('Email is required'),
  address: Yup.string()
    .required('Address is required')
    .max(300, 'Address cannot exceed 300 characters'),
  dob: Yup.date().required('Date of Birth is required'),
  bio: Yup.string()
    .required('Bio is required')
    .max(300, 'Bio cannot exceed 300 characters'),
  profileImage: Yup.mixed()
    .test('fileFormat', 'Only JPEG and PNG files are allowed', (value) => {
      if (value) {
        const supportedFormats = ['image/jpeg', 'image/png']
        return value instanceof File && supportedFormats.includes(value.type)
      }
      return false
    })
    .required('Profile Image is required'),
  bannerImage: Yup.mixed()
    .test('fileFormat', 'Only JPEG and PNG files are allowed', (value) => {
      if (value) {
        const supportedFormats = ['image/jpeg', 'image/png']
        return value instanceof File && supportedFormats.includes(value.type)
      }
      return false
    })
    .required('Banner Image is required'),
})

const CustomFileInput = ({field, form, ...props}: any) => {
  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.currentTarget.files
      ? event.currentTarget.files[0]
      : undefined
    form.setFieldValue(field.name, file)
  }

  return <input type='file' onChange={handleChange} {...props} />
}

const ContactUs: React.FC = () => {
  const [userData, setUserData] = useState<FormValues | undefined>(undefined)
  const [showModal, setShowModal] = useState<boolean>(true)

  // Initial values
  const initialValues: FormValues = {
    name: '',
    email: '',
    address: '',
    dob: new Date(),
    bio: '',
    profileImage: undefined,
    bannerImage: undefined,
  }

  // Handle form submission
  const handleSubmit = (values: FormValues, actions: any) => {
    setUserData(values)
    setShowModal(true)
  }

  return (
    <ContactWrapper>
      <Container>
        <ContactTitle>Contact Us</ContactTitle>
        <ContactForm>
          <Formik
            initialValues={initialValues}
            validationSchema={validationSchema}
            onSubmit={handleSubmit}
          >
            {() => (
              <Form>
                <FormField>
                  <label htmlFor='name'>Name:</label>
                  <Field name='name' type='text' />
                  <ErrorMessage name='name' component='div' />
                </FormField>

                <FormField>
                  <label htmlFor='email'>Email:</label>
                  <Field name='email' type='email' />
                  <ErrorMessage name='email' component='div' />
                </FormField>
                <FormField>
                  <label htmlFor='address'>Address:</label>
                  <Field name='address' type='text' as='textarea' rows={4} />
                  <ErrorMessage name='address' component='div' />
                </FormField>
                <FormField>
                  <label htmlFor='dob'>Date of Birth:</label>
                  <Field name='dob' type='date' />
                  <ErrorMessage name='dob' component='div' />
                </FormField>
                <FormField>
                  <label htmlFor='bio'>Bio:</label>
                  <Field name='bio' type='textarea' as='textarea' rows={4} />
                  <ErrorMessage name='bio' component='div' />
                </FormField>
                <FormField>
                  <label htmlFor='profileImage'>Profile Image:</label>
                  <Field name='profileImage' component={CustomFileInput} />
                  <ErrorMessage name='profileImage' component='div' />
                </FormField>

                <FormField>
                  <label htmlFor='bannerImage'>Banner Image:</label>
                  <Field name='bannerImage' component={CustomFileInput} />
                  <ErrorMessage name='bannerImage' component='div' />
                </FormField>

                <Button type='submit' buttonName='Submit' />
              </Form>
            )}
          </Formik>
        </ContactForm>
        {showModal && userData && (
          <UserProfileModel setShowModal={setShowModal} userData={userData} />
        )}
      </Container>
    </ContactWrapper>
  )
}

export default ContactUs
