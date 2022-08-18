import { Row } from 'react-bootstrap';
import { Box, FooterLink, Heading, Containerr} from '../styles/Styles';
const Footer = () => (


  <>




		<Box className="bg-dark">
      <h3 className="m-0 text-center text-white" style={{ color: "white", textAlign: "center", marginTop: "-50px" }}>
        Notes &copy; Your Notes 2022
      </h3>
      <Containerr >
        <Row>
   
  
       
            <Heading>Contact Us</Heading>
            <FooterLink href="#">Twitter</FooterLink>
            <FooterLink href="#">Youtube</FooterLink>
            <FooterLink href="#">Linkedin</FooterLink>
            <FooterLink href="#">Facebook</FooterLink>
        
        </Row>
      </Containerr>
    </Box>
  
  </>
) 
export default Footer;