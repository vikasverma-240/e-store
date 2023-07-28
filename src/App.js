import './App.css';
import Header from './common/header/Header';
import { BrowserRouter, Routes, Route } from "react-router-dom";
function App() {
  return (
    <>
    <Header/>
    <BrowserRouter basename="/app">
      <Routes>
        <Route path="/" /> {/* 👈 Renders at /app/ */}
      </Routes>
    </BrowserRouter>
    </>
  );
}

export default App;
