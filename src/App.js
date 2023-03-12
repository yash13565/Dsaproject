import './App.css';
import { BrowserRouter,Routes,Route } from 'react-router-dom';
import Home from './Components/Home/Home';
import { Favorite } from '@mui/icons-material';
function App() {
  return (
    <div className="App">
      <BrowserRouter>
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/' element={<Favorite/>}/>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
