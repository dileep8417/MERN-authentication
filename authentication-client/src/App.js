import { BrowserRouter } from 'react-router-dom';
import Navbar from './components/Navbar';
import PageContainer from './pages/PageContainer';
import './App.css';
import PageContext from './PageContext';

const App = () => {
  return (
    <BrowserRouter>
      <PageContext>
        <Navbar />
        <PageContainer />
      </PageContext>
    </BrowserRouter>
  );
}

export default App;