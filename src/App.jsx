import { Controls } from './components/Controls';
import { Header } from './components/Header';
import { Main } from './components/Main';

function App() {
  return (
    <>
    <Header />
    <Main>
      {/* импорт чилдренов добавляется автоматически */}
      <Controls/>
    </Main>
      
    </>
  );
}

export default App;
