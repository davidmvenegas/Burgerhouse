import React, {useRef} from 'react'
import emailjs from 'emailjs-com'

function Contact() {
    const formRef = useRef()

    const sendEmail = (e) => {
        e.preventDefault();
        emailjs.sendForm('service_t3xhogn', 'template_sba59bc', formRef.current, 'user_Wr18txCeJipUS6ENtKUc0')
        .then((result) => {
            console.log(result.text);
        }, (error) => {
            console.log(error.text);
        })
        e.target.reset()
        alert('Your message has been successfully sent!')
    }

    return (
        <div id='contact'>
            <h1>HAVE A QUESTION?</h1>
            <form ref={formRef} onSubmit={sendEmail}>
                <input type="text" placeholder='Full Name' name='from_name' required />
                <input type="text" placeholder='Type Your E-Mail' name='from_email' required />
                <textarea placeholder='Write here...' name='message' required></textarea>
                <input type="submit" value="SEND" />
            </form>
        </div>
    )
}

export default Contact
