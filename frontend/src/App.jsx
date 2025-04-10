import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import PostList from './components/PostList';
import Footer from './components/Footer';
import PostDetail from './components/PostDetail';
import ErrorBoundary from './components/ErrorBoundary';
import backgroundImage from './assets/images/2.png';
import './styles/App.css';

function App() {
  return (
    <BrowserRouter>
      <div className="App" style={{ backgroundImage: `url(${backgroundImage})` }}>
        <Navbar />
        <main>
          <ErrorBoundary>
            <Routes>
              <Route path="/" element={<PostList />} />
              <Route path="/post/:id" element={<PostDetail />} />
              <Route path="*" element={<div>404 Not Found</div>} />
            </Routes>
          </ErrorBoundary>
        </main>
        <Footer />
      </div>
    </BrowserRouter>
  );
}

export default App;