import { Link, useNavigate } from 'react-router-dom';
import './Register.css';
import { useState } from 'react';
import axios from 'axios';

const Register = () => {
  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    password: '',
    number: '',
    specialRequest: '',
  });

  const [errors, setErrors] = useState({
    fullName: '',
    email: '',
    password: '',
    number: '',
    specialRequest: '',
  });

  const [submitting, setSubmitting] = useState(false);
  const navigate = useNavigate();

  const validateName = (name) => {
    const namePattern = /^[A-Za-z\s]+$/;
    return namePattern.test(name) ? '' : 'Name should contain only alphabets';
  };

  const validateEmail = (email) => {
    // Simple email regex for validation
    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailPattern.test(email) ? '' : 'Invalid email address';
  };

  const validatePassword = (password) => {
    const passwordPattern = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,16}$/;
    return passwordPattern.test(password) ? '' : 'Password must be 8-16 characters long, include at least one uppercase letter, one lowercase letter, one number, and one special character';
  };

  const validateNumber = (number) => {
    const numberPattern = /^\d{10}$/; // 10 digits
    return numberPattern.test(number) ? '' : 'Mobile number should contain exactly 10 digits';
  };

  const validateSpecialRequest = (specialRequest) => {
    const wordCount = specialRequest.trim().split(/\s+/).length;
    return wordCount >= 10 ? '' : 'Special request must contain at least 10 words';
  };

  const handleChange = (e) => {
    const { name, value } = e.target;

    // Validate field value
    let fieldError = '';
    if (name === 'fullName') {
      fieldError = validateName(value);
    } else if (name === 'email') {
      fieldError = validateEmail(value);
    } else if (name === 'password') {
      fieldError = validatePassword(value);
    } else if (name === 'number') {
      fieldError = validateNumber(value);
    } else if (name === 'specialRequest') {
      fieldError = validateSpecialRequest(value);
    }

    setFormData((prevFormData) => ({
      ...prevFormData,
      [name]: value,
    }));

    setErrors((prevErrors) => ({
      ...prevErrors,
      [name]: fieldError,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setSubmitting(true);

    // Check if there are any errors before submission
    if (Object.values(errors).some((error) => error)) {
      setSubmitting(false);
      return;
    }

    try {
      // Validate form fields
      if (!formData.fullName || !formData.email || !formData.password || !formData.number || !formData.specialRequest) {
        throw new Error('All fields are required');
      }

      // Send the form data to the server
      const response = await axios.post('http://localhost:5000/register', formData);
      console.log(response.data);
      setFormData({ fullName: '', email: '', password: '', number: '', specialRequest: '' });
      setErrors({ fullName: '', email: '', password: '', number: '', specialRequest: '' });
      alert('Registered successfully.');
      navigate('/login');
    } catch (error) {
      console.error(error);
      // setError('Internal Server Error');
    } finally {
      setSubmitting(false);
    }
  };

  return (
    <div>
      <div className='main_reg'>
        <div className='container_main'>
          <p className='txt_reg_head'>Enter Your details..</p>
          <form onSubmit={handleSubmit}>
            <div className='input_container'>
              <input
                type='text'
                placeholder='Name'
                name='fullName'
                value={formData.fullName}
                className='inp_reg_first'
                onChange={handleChange}
                maxLength={30}
              />
              {errors.fullName && <p className='error_message'>{errors.fullName}</p>}
            </div>
            <div className='input_container'>
              <input
                type='email'
                name='email'
                value={formData.email}
                placeholder='Email'
                className='inp_email_reg'
                onChange={handleChange}
                maxLength={50}
              />
              {errors.email && <p className='error_message'>{errors.email}</p>}
            </div>
            <div className='input_container'>
              <input
                type='password'
                name='password'
                value={formData.password}
                placeholder='Password'
                className='inp_email_reg'
                onChange={handleChange}
                maxLength={16}
              />
              {errors.password && <p className='error_message'>{errors.password}</p>}
            </div>
            <div className="mobile-number-container">
              <select className='drop_mob'>
                <option disabled selected hidden>
                  📞
                </option>
                <option>(+91) India</option>
              </select>
              <input
                type='tel'
                placeholder='Mobile Number'
                name='number'
                value={formData.number}
                className='inp_num_reg'
                onChange={handleChange}
                maxLength={10}
              />
              {errors.number && <p className='error_message'>{errors.number}</p>}
            </div>
            <textarea
              placeholder='Any special request, occasion or any requirements? We will do our best!!'
              name='specialRequest'
              value={formData.specialRequest}
              className='area_reg'
              onChange={handleChange}
              minLength={10}
              maxLength={50}
            ></textarea>
            {errors.specialRequest && <p className='error_message'>{errors.specialRequest}</p>}
            <br />
            <input type='checkbox' className='check_reg' />{' '}
            <label className='txt_check_reg'>
              You'd like to receive updates & special offers from Ag's
            </label>
            <button className='button_reg' disabled={submitting}>
              {submitting ? 'Signing up...' : 'Sign Up'}
            </button>
            <p className='text_foot_reg'>
              Already registered?{' '}
              <Link to='/login' target='_self' style={{ textDecoration: 'none', color: 'black' }}>
                Login
              </Link>
            </p>
          </form>
        </div>
      </div>
    </div>
  );
}

export default Register;
