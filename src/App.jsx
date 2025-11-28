import React from 'react'
import AppRoutes from './routes/AppRoutes'
import Navbar from './components/Navbar'
import Footer from './components/Footer'

export default function App() {
  return (
    <div className="app-root">
      <Navbar />
      <main className="container">
        <AppRoutes />
      </main>
      <Footer />
    </div>
  )
}