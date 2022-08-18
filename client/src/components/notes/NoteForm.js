import { useState, useEffect } from 'react';
import { Form, Button, Container, Row, Col } from 'react-bootstrap';
import Flash from '../shared/Flash';
import { useParams, useLocation } from 'react-router-dom';
import { NoteConsumer } from '../../providers/NoteProvider';
import { Outer } from '../styles/Styles';

const NoteForm = ({  subject, body, addNote, errors, setErrors, updateNote }) => {
  const [note, setNote] = useState({ subject: '', body: '' })
  
  const { id } = useParams()
  const location = useLocation()
  // const { subject, body } = location.state

  useEffect( () => {
    if (id) {
      setNote({ subject, body })
    }
  }, [])

  const handleSubmit = (e) => {
    e.preventDefault()
    if (id) {
      updateNote(id, note)
    } else {
      addNote(note)
    }
    setNote({ subject: '', body: '' })
  }

  return(
    <>
      
      { errors ?
        <Flash 
          variant={errors.variant}
          msg={errors.msg}
          setErrors={setErrors}
        />
        : null
      }

      
      <Outer>
  <h1>{ id ? "Edit" : "Create" } Note</h1>
      <Form onSubmit={handleSubmit} className="inner" >
        <Container>
          <Row>
            <Col>
              <Form.Group className="mb-3">
                <Form.Label> Name</Form.Label>
                <Form.Control
                  name='name'
                  value={note.subject}
                  onChange={(e) => setNote({ ...note,  subject: e.target.value })}
                  required
                />
              </Form.Group>
            </Col>
            <Col>
              
              <Form.Group className="mb-3">
                <Form.Label>body</Form.Label>
                <Form.Control
                  name='body'
                  value={note.body}
                  onChange={(e) => setNote({ ...note, body: e.target.value })}
                  required
                />
              </Form.Group>
            </Col>
          </Row>
          <Row>
            <Col>
          
            </Col>
          </Row>
          
          <Button variant="primary" type="submit">
            Submit
          </Button>
        </Container>
      </Form>

      </Outer>
    </>
  )
}

const ConnectedNoteForm = (props) => (
  <NoteConsumer>
    { value => <NoteForm {...props} {...value} /> }
  </NoteConsumer>
)

export default ConnectedNoteForm;