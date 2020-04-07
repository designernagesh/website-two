import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom'
import Home from './components/Home'
import About from './components/About'
import Products from './components/Products'
import Gallery from './components/Gallery'
import Contact from './components/Contact'
import Header from './components/Header'
import Footer from './components/Footer'
import 'bootstrap/dist/css/bootstrap.min.css'
import './Responsee.css'
import './App.css'

function App() {
  return (
    <>
    <BrowserRouter>
    <div className="App">
      <Header />
      <Switch>    
        <Route path="/" component={ Home } exact />
        <Route path="/About" component={About} />
        <Route path="/Products" component={Products} />
        <Route path="/Gallery" component={Gallery} />
        <Route path="/Contact" component={Contact} />
      </Switch>
      <Footer />
    </div>
    </BrowserRouter>
    </>
  );
}

export default App;
