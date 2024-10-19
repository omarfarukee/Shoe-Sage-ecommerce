import { useEffect } from 'react';
import './App.css'
import MainLayout from './layout/MainLayout'
import AOS from 'aos';
function App() {

  useEffect(() => {
    AOS.init();
  })

  return (
  <>
    <MainLayout/>
  </>
  )
}

export default App
