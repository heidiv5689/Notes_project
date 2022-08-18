import { useState } from 'react';
import { Container, Form, Button } from 'react-bootstrap';
import { AuthConsumer } from '../../providers/AuthProvider';
import Flash from '../shared/Flash';
import { Inner, Input, Outer } from '../styles/Styles';
import { Link } from 'react-router-dom';
import '../styles/Styles.css';

const Login = ({ handleLogin, errors, setErrors }) => {
  const [user, setUser] = useState({ email: '', password: '' })

  const handleSubmit = (e) => {
    e.preventDefault()
    handleLogin(user)
    setUser({ email: '', password: '' })
  }

  return (
    <>
      <Outer  className='outer'>
      { errors ?
        <Flash 
          variant={errors.variant}
          msg={errors.msg}
          setErrors={setErrors}
        />
        :
        null
      }
    
      
      <Inner onSubmit={handleSubmit} className="inner">
      <h3 className='mb-4'>Login</h3 >
        {/* <label>Email</label> */}
        <Form.Group className="form-group mb-4">
        <Input className="form-control"
          placeholder='Email'
          name='email'
          value={user.email}
          onChange={(e) => setUser({ ...user, email: e.target.value })}
          type='email'
          required
        />
         </Form.Group>
        {/* <label>Password</label> */}
        <Form.Group className="form-group mb-4">
        <Input className="form-control"
          placeholder='Password'
          name='password'
          value={user.password}
          onChange={(e) => setUser({ ...user, password: e.target.value })}
          type='password'
          required
        />
       </Form.Group>
       
          <Button variant="primary" type="submit" className="btn btn-dark btn-lg btn-block">
          Submit
        </Button>
        <p>Don't Have an Account? <Link to='/register'>Sign Up</Link></p>
      </Inner>

      </Outer>
    
    </>
  )
}

const ConnectedLogin = (props) => (
  <AuthConsumer>
    { value => <Login {...props} {...value} />}
  </AuthConsumer>
)

export default ConnectedLogin;
