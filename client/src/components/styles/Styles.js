import styled from 'styled-components';
import { Form, Container } from 'react-bootstrap';




export const Outer  = styled(Container)`
position: relative;
width: 100%;
height: 100%;
margin-top: 5%;
padding-bottom: 20%;
padding-left: 10%;
padding-right: 10%;

`

export const Inner  = styled(Form)`
width: 100%;
height: 100%;
  background: #ffffff;
  box-shadow: 0px 14px 80px rgba(34, 35, 58, 0.2);
  padding: 40px 55px 45px 55px;
  border-radius: 15px;
  transition: all .3s;

`
export const Input  = styled.input`


:focus {
  border-color: #167bff;
box-shadow: none;
}
`



export const ContainerPadding  = styled(Container)`

position: relative;
margin-top: 5%;
padding-bottom: 20%;
padding-left: 10%;
padding-right: 10%;
`

export const Box = styled.div`
  padding: 80px 60px;
  position: relative;
  bottom: 0;
  width: 100%;
  
   
  @media (max-width: 1000px) {
    padding: 70px 30px;
  }
`;
   
export const Containerr = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    max-width: 1000px;
    margin: 0 auto;
    /* background: red; */
`
   

   
export const Row = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, 
                         minmax(185px, 1fr));
  grid-gap: 20px;
   

`;
   
export const FooterLink = styled.a`
  color: #fff;
  margin-bottom: 20px;
  font-size: 18px;
  text-decoration: none;
   
  &:hover {
      color: blue;
      transition: 200ms ease-in;
  }
`;
   
export const Heading = styled.p`
  font-size: 24px;
  color: #fff;
  margin-bottom: 40px;
  font-weight: bold;
`
export const UserProfileNavImg  = styled.img`
border-radius:50%
`