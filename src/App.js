import { Container } from './components/styles/Layout.styled';
import data from './data';
import GlobalStyles from './components/styles/Global';
import MultipleStats from './components/MultipleStats';


function App() {
  return (
    <>
      <GlobalStyles />
      <Container>
        <MultipleStats></MultipleStats>
      </Container>
    </>
  );
}

export default App;
