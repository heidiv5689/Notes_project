import { Container, Row } from 'react-bootstrap';
import Note from './Note';
import Flash from '../shared/Flash';

const NoteList = ({ notes, errors, setErrors }) => (
  <Container>
    { errors ?
        <Flash 
          variant={errors.variant}
          msg={errors.msg}
          setErrors={setErrors}
        />
        : null
      }
  
    <Row lg={4}>
      { notes.map( c => 
        <Note key={c.id} {...c} />
      )}
    </Row>
  </Container>
)

export default NoteList;