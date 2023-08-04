import './App.css';
import Header from './common/header/Header';
import { Route, Routes } from 'react-router-dom';

function App() {
  return (
    <>
    <Header/>
    
      <Routes>
        <Route path='/'></Route>
      </Routes>
    </>
  );
}

export default App;
