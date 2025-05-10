import { useState } from 'react'
import './App.css'

function App() {
  return (
    <div className="App">
      <header className="navbar">
        <h1>My Website</h1>
        <button className="navbar-button">Click Me</button>
      </header>
      <main className="main-content">
        <section className="section">
          <h2>Welcome to My Website</h2>
          <p>This is a simple React SPA with a navbar and a main section.</p>
        </section>
      </main>
    </div>
  );
}

export default App;
