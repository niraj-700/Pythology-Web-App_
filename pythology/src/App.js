import React from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import NavBar from './components/NavBar';
import ImageBody from './components/ImageBody';
import ReportDetail from './components/ReportDetail';

function App() {
  return (
    <div>
      <NavBar />
      <ImageBody />
      <ReportDetail />
    </div>
  );
}

export default App;
