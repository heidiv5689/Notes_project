import { Routes, Route } from 'react-router-dom';
import Home from './components/shared/Home';
import Nomatch from './components/shared/Nomatch';
import MainNavbar from './components/shared/MainNavbar';
import Login from './components/auth/Login';
import Register from './components/auth/Register';
import FetchUser from './components/auth/FetchUser';
import ProtectedRoute from './components/auth/ProtectedRoute';
import Profile from './components/auth/Profile';

import Notes from './components/notes/Notes';
import NoteForm from './components/notes/NoteForm';
import Footer from './components/shared/Footer';
import './App.css';
const App = () => (
  <>
   <div className="App">
   <header className="App-header">
    <MainNavbar />
    <FetchUser>
      <Routes>
        <Route path='/' element={<Home/>} />
        <Route path='/login' element={<Login />} />
        
        <Route path='/' element={<ProtectedRoute />}>
        <Route path='/profile' element={<Profile />} />
        <Route path='/notes' element={<Notes />} />
        <Route path='/:id/updateNote' element={<NoteForm />} />
          
        </Route>
       
        <Route path='/register' element={<Register />} />
        <Route path='/*' element={<Nomatch />} />
      </Routes>
   
    </FetchUser>
    <Footer/>
    </header>
    </div>
  </>
)

export default App;

