import React from 'react'
import UrlShortener from '../components/UrlShortener/UrlShortener'

const Home = () => {
    const style = {
        backgroundColor: '#f5f7fa',
        minHeight: '100vh',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center'
    }
  return (
    <div style={style}>
        <UrlShortener/>
    </div>
  )
}

export default Home