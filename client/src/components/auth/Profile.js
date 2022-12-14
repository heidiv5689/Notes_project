import { useState,  useEffect } from 'react';
import { AuthConsumer } from '../../providers/AuthProvider';
import { Form, Button, Image, Container, Row, Col, Card } from 'react-bootstrap';

// Import React FilePond
import { FilePond, registerPlugin } from "react-filepond";

// Import FilePond styles
import "filepond/dist/filepond.min.css";

// Import the Image EXIF Orientation and Image Preview plugins
import FilePondPluginImageExifOrientation from "filepond-plugin-image-exif-orientation";
import FilePondPluginImagePreview from "filepond-plugin-image-preview";
import "filepond-plugin-image-preview/dist/filepond-plugin-image-preview.css";
import { Outer } from '../styles/Styles';

// Register the plugins
registerPlugin(FilePondPluginImageExifOrientation, FilePondPluginImagePreview);

const defaultImage = 'https://d30y9cdsu7xlg0.cloudfront.net/png/15724-200.png';

const Profile = ({ user, updateUser }) => {
  const [editing, setEdit] = useState(false)
  const [formUser, setUser] = useState({ first: '', last: '', image: '' })
  const [file, setFile] = useState()

  useEffect( () => {
    const { first, last, image } = user
    setUser({ first, last })
  }, [])

  const profileView = () => {
    const { first, last, email, image } = user 
    return(
      <>
      
      <Outer>
        <Card>
        <Card.Header>Profile</Card.Header>
        <Card.Body>
        <Col md='4'>
          <Image thumbnail src={image || defaultImage} />
        </Col>
        <Col md='8'>
          <h1>Name: {first} {last}</h1>
          <h1>Email: {email}</h1>
        </Col>
        <Button onClick={() => setEdit(!editing)}>
        { editing ? 'Cancel' : 'Edit'}
      </Button>
        </Card.Body>
        </Card>
        </Outer>
      </>
    ) 
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    updateUser(user.id, formUser)
    setEdit(false)
    setUser({ ...formUser, image: null })
  }

  const handleFileUpdate = (fileItems) => {
    if (fileItems.length !== 0) {
      setFile(fileItems)
      setUser({ ...formUser, image: fileItems[0].file })
    }
  }

  const handleFileRemoved = (e, file) => {
    setFile(null)
    setUser({ ...formUser, image: null })
  }

  const editView = () => {
    
    return (
      <Outer>
      <Card>
      <Card.Header> Edit Profile </Card.Header>
        <Card.Body>
      <Form onSubmit={handleSubmit}>
        <Col md='4'>
          {/* image drag and drop */}
          <FilePond 
            files={file}
            onupdatefiles={handleFileUpdate}
            onremovefile={handleFileRemoved}
            allowMultiple={false}
            name='image'
            labelIdel='Drag and Drop your files or <span class="filepond--label-action">Browse</span>'
          />
        </Col>
        <Col md='8'>
          <Form.Group className="mb-3">
            <Form.Label>First Name</Form.Label>
            <Form.Control 
              name='first'
              value={formUser.first}
              onChange={(e) => setUser({ ...formUser, first: e.target.value })} 
              required
            />
          </Form.Group>
          <Form.Group className="mb-3">
            <Form.Label>Last Name</Form.Label>
            <Form.Control 
              name='last'
              value={formUser.last}
              onChange={(e) => setUser({ ...formUser, last: e.target.value })}
              required 
            />
          </Form.Group>
        </Col>
        <Button variant="primary" type="submit">
          Submit
        </Button>
        <Button onClick={() => setEdit(!editing)}>
        { editing ? 'Cancel' : 'Edit'}
      </Button>
      </Form>
      </Card.Body>
      </Card>
      </Outer>
    )
  }

  return (
    <Container>
      {/* <h1>Profile</h1> */}
     
         
        { editing ? editView() : profileView() }
        
   

      <Row> 


      </Row>
      <br/>
      <Row>
      
     
      {/* <Form onSubmit={handleSubmit} className="form-control">
      <h1>Edit Profile</h1>
         <Col md='4'>
        
           <FilePond 
            files={file}
            onupdatefiles={handleFileUpdate}
            onremovefile={handleFileRemoved}
            allowMultiple={false}
            name='image'
            labelIdel='Drag and Drop your files or <span class="filepond--label-action">Browse</span>'
          />
        </Col>
        <Col md='8'>
          <Form.Group className="mb-3">
            <Form.Label>First Name</Form.Label>
            <Form.Control 
              name='first'
              value={formUser.first}
              onChange={(e) => setUser({ ...formUser, first: e.target.value })} 
              required
            />
          </Form.Group>
          <Form.Group className="mb-3">
            <Form.Label>Last Name</Form.Label>
            <Form.Control 
              name='last'
              value={formUser.last}
              onChange={(e) => setUser({ ...formUser, last: e.target.value })}
              required 
            />
          </Form.Group>
        </Col>
        <Button variant="primary" type="submit">
          Submit
        </Button>
      </Form> */}

      </Row>
    </Container>
    
  )
}

const ConnectedProfile = (props) => (
  <AuthConsumer>
    { value => <Profile {...props} {...value} /> }
  </AuthConsumer>
)

export default ConnectedProfile;
