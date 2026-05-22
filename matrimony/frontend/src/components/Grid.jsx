import styled from "styled-components";
import Card from "./home/card";

const Gridcontainer = styled.div`
display:grid;
grid-template-columns: repeat(4,1fr);
gap:20px;
`;

const Grid = () =>{
return(
<Gridcontainer>
    <Card/>
    <Card/>
</Gridcontainer>
)
}

export default Grid;