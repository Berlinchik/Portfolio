import { useEffect, useState } from 'react'
import Loader from 'react-loaders'
import emailjs from '@emailjs/browser'
import { Report } from 'notiflix/build/notiflix-report-aio'
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet'
import { Formik, Form, Field, ErrorMessage } from 'formik'
import * as yup from 'yup'
import AnimatedLetters from '../AnimatedLetters/AnimatedLetters'
import './Contact.scss'

const Contact = () => {
  const [letterClass, setLetterClass] = useState('text-animate')
  const validationSchema = yup
    .object({
      name: yup.string().required().min(2),
      email: yup.string().required(),
      subject: yup.string().required().min(3),
      message: yup.string().required().min(5),
    })
    .required()

  const initialValues = {
    name: '',
    email: '',
    subject: '',
    message: '',
  }

  useEffect(() => {
    setTimeout(() => {
      setLetterClass('text-animate-hover')
    }, 3000)
  }, [])

  const sendEmail = (values, { resetForm }) => {
    emailjs
      .send('service_po1pria', 'template_soztqyj', values, 'Hk4W8A10pHvVPV8A4')
      .then(
        () => {
          Report.success(
            'Message has been successfully sent',
            '"Do not try to become a person of success but try to become a person of value." <br/><br/>- Albert Einstein',
            'Okay'
          )
          resetForm()
        },
        () => {
          Report.failure(
            'Failed to send the message',
            '"Failure is simply the opportunity to begin again, this time more intelligently." <br/><br/>- Henry Ford',
            'Okay'
          )
        }
      )
  }

  const renderError = (message) => {
    const capitalizedMessage = message[0].toUpperCase() + message.slice(1)
    return <span className="error"> Oops! {capitalizedMessage}</span>
  }

  return (
    <>
      <div className="container contact-page">
        <div className="text-zone">
          <h1>
            <AnimatedLetters
              letterClass={letterClass}
              strArray={['C', 'o', 'n', 't', 'a', 'c', 't', ' ', 'm', 'e']}
              idx={15}
            />
          </h1>
          <p>
            I'm open to a wide range of opportunities, including both full-time
            positions and freelance projects. If you have any questions or
            proposals, or if you'd like to discuss potential collaborations,
            please don't hesitate to get in touch with me using the contact form
            provided below. I'm always eager to explore new possibilities and
            connect with individuals and organizations in the industry."
          </p>
          <div className="contact-form">
            <Formik
              initialValues={initialValues}
              onSubmit={sendEmail}
              validationSchema={validationSchema}
            >
              <Form autoComplete="off">
                <ul>
                  <li className="half">
                    <Field
                      type="text"
                      name="name"
                      placeholder="Name"
                      required
                      autoComplete="new-password"
                      className="inputHover"
                    />
                    <ErrorMessage name="name" render={renderError} />
                  </li>
                  <li className="half">
                    <Field
                      type="email"
                      name="email"
                      placeholder="Email"
                      required
                      className="inputHover"
                    />
                    <ErrorMessage name="email" render={renderError} />
                  </li>
                  <li>
                    <Field
                      placeholder="Subject"
                      type="text"
                      name="subject"
                      required
                      className="inputHover"
                    />
                    <ErrorMessage name="subject" render={renderError} />
                  </li>
                  <li>
                    <Field
                      as="textarea"
                      placeholder="Message"
                      name="message"
                      required
                      className="inputHover"
                    />
                    <ErrorMessage name="message" render={renderError} />
                  </li>
                  <li className="mobile-btn">
                    <Field type="submit" className="flat-button" value="SEND" />
                  </li>
                </ul>
              </Form>
            </Formik>
          </div>
        </div>
        <div className="map-wrap">
          <div className="info-map">
            Davyd Artemenko,
            <br />
            USA,
            <br />
            96 Bay Road, 02151 <br />
            Revere <br />
            <span>davydartemenko@gmail.com</span>
          </div>
          <MapContainer center={[42.42114, -70.98853]} zoom={13}>
            <TileLayer url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png" />
            <Marker position={[42.42114, -70.98853]}>
              <Popup>Davyd lives here, come over for a cup of coffe :)</Popup>
            </Marker>
          </MapContainer>
        </div>
      </div>
      <Loader type="pacman" />
    </>
  )
}

export default Contact
