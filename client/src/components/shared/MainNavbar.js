import Navbar from 'react-bootstrap/Navbar'
import { Container, Nav } from "react-bootstrap";
import { AuthConsumer } from '../../providers/AuthProvider';
import React from 'react';
import { UserProfileNavImg } from '../styles/Styles';

const MainNavbar = ({ user, handleLogout }) => {




 const rightNavItems = () => {
    // links to show up if the user is logged in
    if (user) {
      return (
        <>
          
          <Navbar.Collapse id="responsive-navbar-nav">
            <Nav className="me-auto">
           
            </Nav>
            <Nav>
            <Nav.Link href="/notes">Notes</Nav.Link>
            </Nav> 

            <Nav>
            <Nav.Link href="/profile"> Profile</Nav.Link>
            </Nav>   

            <Navbar.Text>
            <UserProfileNavImg
              alt="Profile Image"
              src={user.image}
              width="70px"
              height="70px"
              />
          </Navbar.Text>
          

            <Nav.Link onClick={() => handleLogout() }>
              Logout
            </Nav.Link>

         
        </Navbar.Collapse>
</>
      )
    } else {
      // links to show up when they are not logged in
      return (
        <> 	<Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="me-auto">
           
            </Nav>
            
            <Nav>
            <Nav.Link href="/login">Login</Nav.Link>
            </Nav> 

            <Nav>
            <Nav.Link href="/register">Register</Nav.Link>
            </Nav> 

              

            

        </Navbar.Collapse>
        

        </>
      )
    }
  }

  return (
    <> 	 <Navbar collapseOnSelect expand="sm" variant="dark"  bg="dark" >
          <Container>

          <Navbar.Brand href="/">
          {/* <img
              src={logo}
              width="30"
              height="30"
              className="d-inline-block align-top"
              alt="Home"
            /> */}
            Notes
            
          </Navbar.Brand>
            <Navbar.Toggle aria-controls="responsive-navbar-nav" />
            
            <Navbar.Collapse id="responsive-navbar-nav">
            
            <Nav className="me-auto">
            
            </Nav>
          
            
            { rightNavItems() }
            </Navbar.Collapse>

          </Container>
         
        </Navbar>


    </>
  )
}

const ConnectedMainNavbar = (props) => (
  <AuthConsumer>
    { value => <MainNavbar {...props} {...value} /> }
  </AuthConsumer>
)

export default ConnectedMainNavbar;
