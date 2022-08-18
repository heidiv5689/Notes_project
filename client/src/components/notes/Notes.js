import { useEffect, useState } from 'react';
import NoteList from './NoteList';
import NoteForm from './NoteForm';
import { Button, Container, Modal, Card } from 'react-bootstrap';

import { NoteConsumer } from '../../providers/NoteProvider';
import { Outer, ContainerPadding } from '../styles/Styles';
import backgrd from '../styles/backgrd.png';
const Notes = ({ notes, getAllNotes, errors, setErrors, addNote }) => {
  const [adding, setAdd] = useState(false)

  useEffect( () => {
    getAllNotes()
  }, [])

  return (
    <>

    <div className='d-flex h-100' style={{backgroundImage: `url(${backgrd})`}}>
    

    <ContainerPadding>
    <Container>
    <Card>
      <Card.Header>Notes</Card.Header>
      <Card.Body>
        <Card.Title>Notes</Card.Title>
        <Card.Text>
          Create notes, edit notes, delete notes.
        </Card.Text>

      </Card.Body>
    </Card>
    </Container>
    
    <Outer>
    <Card>
    <Card.Header>My Notes
    <Button onClick={() => setAdd(true)}>+</Button>
    </Card.Header>
    <Card.Body>
      
      <Modal show={adding} onHide={() => setAdd(false)}>
        <Modal.Header closeButton>
        </Modal.Header>
        <Modal.Body>
        <NoteForm 
            addNote={addNote} 
            errors={errors} 
            setErrors={setErrors} 
          />
        </Modal.Body>
      </Modal>
         
      
      <NoteList 
        notes={notes}
        errors={errors} 
        setErrors={setErrors} 
      />
      </Card.Body>
      </Card>
    </Outer>
    </ContainerPadding>
    </div>
    </>
  )
}

const ConnectedNotes = (props) => (
  <NoteConsumer>
    { value => <Notes {...props} {...value} />}
  </NoteConsumer>
)

export default ConnectedNotes;

