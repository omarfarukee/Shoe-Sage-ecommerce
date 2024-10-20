import { useEffect } from 'react';
import MainLayout from './layout/MainLayout'
import 'aos/dist/aos.css';
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
