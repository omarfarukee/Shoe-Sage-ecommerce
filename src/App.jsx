import { useEffect } from 'react';
import MainLayout from './layout/MainLayout'
import 'aos/dist/aos.css';
import AOS from 'aos';
import Lenis from 'lenis';
import { Toaster } from 'react-hot-toast';
function App() {

  useEffect(() => {
    // Initialize AOS
    AOS.init();

    // Check if the device is desktop based on screen width
    const isDesktop = window.innerWidth > 768; // Adjust the breakpoint as needed

    let lenis = null;

    if (isDesktop) {
      // Initialize Lenis only for desktop
      lenis = new Lenis({
        smooth: true,
        direction: "vertical",
        gestureHandling: true,
      });

      // Animation frame loop
      function raf(time) {
        lenis.raf(time);
        requestAnimationFrame(raf);
      }
      requestAnimationFrame(raf);
    }

    // Return cleanup function for component unmount
    return () => {
      if (lenis) {
        lenis.destroy(); // Clean up Lenis instance
      }
    };
  }, []);
  return (
  <>
    <MainLayout/>
    <Toaster position="bottom-left"
        reverseOrder={false} />
  
  </>
  )
}

export default App
