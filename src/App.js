import styled from "styled-components";
import HomeComponent from "./modules/home";

const Container = styled.div`
  display: flex;
  flex-direction: column;
  font-family: Montserrat;
  align-items: center;
  margin: 30px 0px 10px;  // top right/left bottom
`;

const Header = styled.span`
  font-size: 25px;
  font-weight: bold;
`;
function App() {
  return (
    <Container>
      <Header>EXPENSE TRACKER</Header>
      <HomeComponent/> 
    </Container>
  );
}

export default App;
