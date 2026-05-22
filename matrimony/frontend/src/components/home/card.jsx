
import Getblogs from '../blogs/getblogs'
import styled from "styled-components"

const Container = styled.div`
max-width:400px;
margin:auto;
background-color:#4ec1d8;
`

const Text = styled.h1`
color:blue;
font-size:30px;
`

const Text1 = styled.p`
color:red;
font-size:20px;
`;


const Card=()=> {
  return (
    <Container>
      <Getblogs/>
    </Container>
  )
}

export default Card
