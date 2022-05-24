import React, {useState, useEffect, Fragment} from 'react';
import './App.css';
import {css} from '@emotion/react'
import PropagateLoader from 'react-spinners/PropagateLoader'
import Navbar from './components/Navbar';
import Header from './components/Header';
import Products from './components/Products'
import About from './components/About';
import Contact from './components/Contact'

function App() {
  const [loading, setLoading] = useState(false)

  const override = css`
  display: block;
  border-color: red;
  margin-top: 20%;
  `;

  useEffect(() => {
    setLoading(true)
    setTimeout(() => {
      setLoading(false)
    }, 2500)
  }, [])

  return (
    <div className='App'>
      {
        loading ? <PropagateLoader color={'#3d2514'} Loading={loading} css={override} size={40}/> 
        :
        <Fragment>
          <Navbar/>
          <Header/>
          <Products/>
          <About/>
          <Contact/>
        </Fragment>
      }
    </div>
  );
}

export default App;
