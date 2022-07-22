import logo from './logo.svg';
// import './App.css';
import MainRout from './Pages/MainRout';
import { Container } from '@chakra-ui/layout';

function App() {
  return (
    <div className="App">
    <Container minWidth={"6xl"} >
    <MainRout />
    </Container>
    </div>
  );
}

export default App;
