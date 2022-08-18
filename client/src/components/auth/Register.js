import { useState } from 'react';
import { Container, Form, Button, Row, Col } from 'react-bootstrap';
import { AuthConsumer } from '../../providers/AuthProvider';
import Flash from '../shared/Flash';
import { Inner, Input, Outer } from '../styles/Styles';
import { Link } from 'react-router-dom';
import '../styles/Styles.css';
// Import React FilePond
import { FilePond, registerPlugin } from "react-filepond";

// Import FilePond styles
import "filepond/dist/filepond.min.css";

// Import the Image EXIF Orientation and Image Preview plugins
import FilePondPluginImageExifOrientation from "filepond-plugin-image-exif-orientation";
import FilePondPluginImagePreview from "filepond-plugin-image-preview";
import "filepond-plugin-image-preview/dist/filepond-plugin-image-preview.css";


// Register the plugins
registerPlugin(FilePondPluginImageExifOrientation, FilePondPluginImagePreview);

const defaultImage = "https://d30y9cdsu7xlg0.cloudfront.net/png/15724-200.png";

const Register = ({ handleRegister, errors, setErrors }) => {
  const [file, setFile] = useState();
  const [user, setUser] = useState({ email: '', password: '', passwordConfirmation: '', first: '', last: '', image: '' })

  const handleSubmit = (e) => {
    e.preventDefault()
    if (user.password === user.passwordConfirmation) {
      handleRegister(user)
      setUser({ email: '', password: '', passwordConfirmation: '', first: '', last: '', image: '' })
    } else {
      alert('Password does not match!')
    }
  };

  const handleFileUpdate = (fileItems) => {
    if (fileItems.length !== 0) {
      setFile(fileItems);
      setUser({ ...user, image: fileItems[0].file });
    }
  };

  const handleFileRemoved = (e, file) => {
    setFile(null);
    setUser({ ...user, image: null });
  };

  return (
    <>
    <Outer className='outer'>
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
      <h3 className='mb-4'>Register</h3 >
     
      <Form.Group className="form-group mb-4">
      {/* image drag and drop */}
      <FilePond
      files={file}
      onupdatefiles={handleFileUpdate}
      onremovefile={handleFileRemoved}
      allowMultiple={false}
      name="image"
      labelIdel='Drag and Drop your files or <span class="filepond--label-action">Browse</span>'
      />

      </Form.Group>

      <Row>
      <Col>
      <Form.Group className="form-group mb-4">
   
   <Input className="form-control"
     placeholder='First Name'
     name='first'
     value={user.first}
     onChange={(e) => setUser({ ...user, first: e.target.value })}
     required
   />
   </Form.Group>

      </Col>
      <Col>
      
   <Form.Group className="form-group mb-4">

<Input className="form-control"
  placeholder='Last Name'
  name='last'
  value={user.last}
  onChange={(e) => setUser({ ...user, last: e.target.value })}
  required
/>
</Form.Group>
      </Col>

      </Row>
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

        <Form.Group className="form-group mb-4">

        <Input className="form-control"
          placeholder='Password Confirmation'
          name='passwordConfirmation'
          value={user.passwordConfirmation}
          onChange={(e) => setUser({ ...user, passwordConfirmation: e.target.value })}
          type='password'
          required
        />
        </Form.Group>

        <Button variant="primary" type="submit" className="btn btn-dark btn-lg btn-block">
          Submit
        </Button>
        <p>Have an Account? <Link to='/login'>Login</Link></p>
      </Inner>

      </Outer>
 
    </>
  )
}

const ConnectedRegister = (props) => (
  <AuthConsumer>
    { value => <Register {...props} {...value} />}
  </AuthConsumer>
)

export default ConnectedRegister;
