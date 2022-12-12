import React from 'react'
import { Footer } from '../../components/footer/Footer.js'
import { Header } from '../../components/header/Header.js'

import "./Home.scss"


export const Home = () => {
  return (
    <div>
        <Header/>
        <section className='container hero' >
          <div className='hero-text'>
            <h2>Authentication System</h2>
            <p>Master Authentication and Authorization using MERN Stack.</p>
            <p>Implement User Registration, Login, Password Reset, Social Login, User Permissions, Email Notifications etc.</p>
            <div className='hero-buttons--flex-start'>
              <button className='--btn--btn-danger'>
                Register
              </button>
              <button className='--btn--btn-primary'>
                Login                
              </button>
            </div>
          </div>
          <div className='hero-image'>

          </div>
        </section>
        <Footer/>
    </div>
  )
}
