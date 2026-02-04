import React from 'react';
import Layout from './components/layout/Layout';
import Hero from './components/sections/Hero';
import About from './components/sections/About';
import Founder from './components/sections/Founder';
import Ecosystem from './components/sections/Ecosystem';
import Legal from './components/sections/Legal';

function App() {
  return (
    <Layout>
      <Hero />
      <About />
      <Legal />
      <Founder />
      <Ecosystem />
    </Layout>
  );
}

export default App;
