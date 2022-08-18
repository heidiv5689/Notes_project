import { useState } from 'react';
import { Container, Row, Col, Card, Modal, Button, Image } from 'react-bootstrap';
import { NoteConsumer } from '../../providers/NoteProvider';
import { Link } from 'react-router-dom';

const Note = ({id, subject, body, deleteNote }) => {
  const [show, setShow] = useState(false)

  return (
    <Col>
      <Card style={{ width: '8rem' }}>
        
        <Card.Body>
          <Card.Title>{subject}</Card.Title>
          <Button variant="primary" onClick={() => setShow(true)}>Show</Button>
        </Card.Body>
      </Card>

      <Modal show={show} onHide={() => setShow(false)}>
        <Modal.Header closeButton>
        </Modal.Header>
        <Modal.Body>
          <Container>
            <Row>
              <Col>
                <h1>Note</h1>
                <h4>Name:{subject} </h4>
                <p>body:{body} </p>
                <Link 
                  to={`/${id}/updateNote`}
                  state={{
                    id, 
                    subject,
                    body,
                    
                  }}
                >
                  <Button>Edit</Button>
                </Link>
                <Button
                  onClick={() => deleteNote(id)}
                >
                  Delete
                </Button>
                
              </Col>
              <Col>
                
              </Col>
            </Row>
          </Container>
        </Modal.Body>
      </Modal>
    </Col>
  )
}

const ConnectedNote = (props) => (
  <NoteConsumer>
    { value => <Note {...props} {...value} />}
  </NoteConsumer>
)

export default ConnectedNote;