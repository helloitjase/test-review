import React, { useState } from 'react';
import './App.css';
import Header from './Header.js';
import Form from './Form.js';
import Preview from './Preview.js';

function App() {
  const [review, writeReview] = useState('');
  const [size, setSize] = useState(0);
  return (
    <div className="app">
      <Header />

      <main className="app-main">
        <section className="app-left">
          <Form size={size} setSize={setSize} review={review} write={writeReview} />
        </section>
        <section className="app-right">
          <Preview size={size} review={review} />
        </section>
      </main>
    </div>
  );
}

export default App;
