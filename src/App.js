import {BrowserRouter, Routes, Route} from 'react-router-dom';
import { Home } from './views/Home';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/:id" element={<Home/>}/>
        <Route path="*" element={"404"}/>
      </Routes>
    </BrowserRouter>

  );
}

export default App;