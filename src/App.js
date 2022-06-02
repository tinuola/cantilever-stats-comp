import { Container } from './components/styles/Layout.styled';
import GlobalStyles from './components/styles/Global';
import MultipleStats from './components/MultipleStats';

export default function App() {
  return (
    <>
      <GlobalStyles />
      <Container>
        <MultipleStats></MultipleStats>
      </Container>
    </>
  );
}
