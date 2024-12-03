import { Link, useNavigate } from 'react-router-dom';
import './Login.css';
import axios from 'axios';
import { useState } from 'react';

const Login = () => {
  const [formData, setFormData] = useState({
    email: '',
    password: '',
  });

  const [errors, setErrors] = useState({
    email: '',
    password: '',
  });

  const [submitting, setSubmitting] = useState(false);
  const navigate = useNavigate();

  const validateEmail = (email) => {
    if (email.length > 30) {
      return 'Email cannot exceed 30 characters';
    }
    return '';
  };

  const validatePassword = (password) => {
    const passwordPattern = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,16}$/;
    if (!passwordPattern.test(password)) {
      return 'Password must be 8-16 characters long, include at least one uppercase letter, one lowercase letter, one number, and one special character';
    }
    return '';
  };

  const handleChange = (e) => {
    const { name, value } = e.target;

    // Validate field value
    let fieldError = '';
    if (name === 'email') {
      fieldError = validateEmail(value);
    } else if (name === 'password') {
      fieldError = validatePassword(value);
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
    if (errors.email || errors.password) {
      setSubmitting(false);
      return;
    }

    try {
      // Send the form data to the server
      const response = await axios.post('http://localhost:5000/login', formData);

      // Check if login was successful
      if (response.data === 'Successfully logged in') {
        setFormData({ email: '', password: '' });
        alert('Login successfully.');
        navigate('/');
      } else {
        alert('Invalid credentials');
      }
    } catch (error) {
      console.error(error);
      alert('Internal Server Error');
    } finally {
      setSubmitting(false);
    }
  };

  return (
    <div>
      <div className="main_login">
        <div className='container_login'>
          <p className='heading_log'>Log In</p>
          <form onSubmit={handleSubmit}>
            <div className='input_container'>
              <input
                type='email'
                placeholder='Email'
                name='email'
                value={formData.email}
                onChange={handleChange}
                className='inp_log'
                required
                maxLength={50}
              />
              {errors.email && <p className='error_message1'>{errors.email}</p>}
            </div>
            <div className='input_container'>
              <input
                type='password'
                placeholder='Password'
                name='password'
                value={formData.password}
                onChange={handleChange}
                className='inp_log'
                required
                maxLength={16}
              />
              {errors.password && <p className='error_message1'>{errors.password}</p>}
            </div>
            <input type='checkbox' className='check_log' /> <label className='txt_rem'>Remember me</label> <label className='txt_for'>Forgot Password?</label><br />
            <button className='butt_log' disabled={submitting}>
              {submitting ? 'Logging in...' : 'Login'}
            </button>
          </form>
          <p className='txt_sign'>
            Don't have an account? <Link to='/register' style={{ textDecoration: 'none', color: 'black' }}>Sign Up</Link>
          </p>
        </div>
      </div>
    </div>
  );
}

export default Login;