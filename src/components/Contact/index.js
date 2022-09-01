import Loader from 'react-loaders';
import './index.scss';
import AnimatedLetters from '../AnimatedLetters';
import { useEffect, useState } from 'react';
import { useRef } from 'react';
import emailjs from '@emailjs/browser'

const Contact = () => {
    const [letterClass, setLetterClass] = useState('text-animate')
    const form  = useRef();

  useEffect(() => {
     setTimeout(() => {
     return setLetterClass('text-animate-hover')
    }, 3000)
  }, [])
  const sendEmail = (e) => {
    e.preventDefault()

    emailjs
      .sendForm('service_qwisffh', 'template_iuggtre', form.current, 'vqIbrVQoMpJNt8bIu')
      .then(
        () => {
          alert('Message successfully sent!')
          window.location.reload(false)
        },
        () => {
          alert('Failed to send the message, please try again')
        }
      )
  }

    return (
        <>
            <div className="container contact-page">
                <div className="text-zone">
                    <h1>
                        <AnimatedLetters strArray={['C', 'o', 'n', 't', 'a', 'c', 't', ' ', 'm', 'e']}
                            idx={15} letterClass ={letterClass} />


                    </h1>
                    <p>
                        I am interested in freelance opportunities - especially on ambitious
                        or large projects. However, if you have any other requests or
                        questions, don't hesitate to contact me using below form either.
                    </p>
                    <div className="contact-form">
                        <form ref={form} onSubmit ={sendEmail}>
                            <ul>
                                <li className='half'>
                                    <input type="text" name= 'name' placeholder='Name' required />
                                </li>
                                <li className='half'>
                                    <input type="email" name= 'email' placeholder='Email' required />
                                </li>
                                <li>
                                    <input type="text" placeholder='Subject' required />
                                </li>
                                <li>
                                    <textarea name="Message" placeholder='Message' required ></textarea>
                                </li>
                                <li>
                                    <input type="submit" value="SEND" className='flat-button' />
                                </li>
                            </ul>
                        </form>
                    </div>
                </div>
            </div>
            <Loader type='pacman' />
        </>
    )
}

export default Contact;
