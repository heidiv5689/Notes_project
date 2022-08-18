import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

export const NoteContext = React.createContext() 

export const NoteConsumer = NoteContext.Consumer;

const NoteProvider = ({ children }) => {
  const [notes, setNotes] = useState([])
  const [errors, setErrors] = useState(null)

  const navigate = useNavigate()

  const getAllNotes = () => {
    axios.get('/api/notes')
      .then( res => setNotes(res.data) )
      .catch( err => {
        console.log(err)
        setErrors({
          variant: 'danger',
          msg: err.response.statusText
        })
      })
  }

  const addNote = (note) => {
    axios.post('/api/notes', { note })
      .then( res => setNotes([...notes, res.data ]))
      .catch( err => {
        console.log(err)
        let field = Object.keys(err.response.data.errors)[0]
        let errMsg = Object.values(err.response.data.errors)[0]
        setErrors({
          variant: 'danger',
          msg: `${field} ${errMsg}`
        })
      })
  }

  const updateNote = (id, note) => {
    axios.put(`/api/notes/${id}`, { note })
      .then( res => {
        const newUpdateNotes = notes.map( c => {
          if (c.id === id) {
            return res.data
          }
          return c
        })
        setNotes(newUpdateNotes)
        navigate('/notes')
      })
      .catch( err => {
        console.log(err)
        let field = Object.keys(err.response.data.errors)[0]
        let errMsg = Object.values(err.response.data.errors)[0]
        setErrors({
          variant: 'danger',
          msg: `${field} ${errMsg}`
        })
      })
  }

  const deleteNote = (id) => {
    axios.delete(`/api/notes/${id}`)
      .then( res => {
        setNotes(notes.filter( c => c.id !== id ))
        navigate('/notes')
      })
      .catch( err => {
        console.log(err)
        setErrors({
          variant: 'danger',
          msg: err.response.statusText
        })
      })
  }

  return (
    <NoteContext.Provider value={{
      notes, 
      errors, 
      setErrors,
      getAllNotes,
      addNote,
      updateNote,
      deleteNote,
    }}>
      { children }
    </NoteContext.Provider>
  )
}

export default NoteProvider;