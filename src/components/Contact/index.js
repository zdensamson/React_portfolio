import React, {useState} from 'react';
import { validateEmail } from '../../utils/helpers';


function ContactForm(props) {
    const [formState, setFormState] = useState({ name: '', email: '', message: '' });

    const [errorMessage, setErrorMessage] = useState('');
    const { name, email, message } = formState;
  
    const handleSubmit = (e) => {
      e.preventDefault();
      if (!errorMessage) {
        setFormState({ [e.target.name]: e.target.value });
      }
    };
  
    const handleChange = (e) => {
      if (e.target.name === 'email') {
        const isValid = validateEmail(e.target.value);
        console.log(formState)
        if (!isValid) {
          setErrorMessage('Your email is invalid.');
        } else {
          setErrorMessage('');
        }
      } else {
        if (!e.target.value.length) {
          setErrorMessage(`${e.target.name} is required.`);
        } else {
          setErrorMessage('');
        }
      }
  
    };
  
    return (
      <section className="row justify-content-center">
        <div className="col-6">
          <h1 data-testid="h1tag">Contact me</h1>
          <form id="contact-form" onSubmit={handleSubmit}>
            <div className="form-group">
              <label htmlFor="name">Name:</label>
              <input className="form-control" type="text" name="name" defaultValue={name} onBlur={handleChange} />
            </div>
            <div className="form-group">
              <label htmlFor="email">Email address:</label>
              <input className="form-control" type="email" name="email" defaultValue={email} onBlur={handleChange} />
            </div>
            <div className="form-group">
              <label htmlFor="message">Message:</label>
              <textarea className="form-control" name="message" rows="5" defaultValue={message} onBlur={handleChange} />
            </div>
            {errorMessage && (
              <div>
                <p className="error-text">{errorMessage}</p>
              </div>
            )}
            <button data-testid="button" type="submit">Submit</button>
          </form>
        </div>
      </section>
    );
};

export default ContactForm;