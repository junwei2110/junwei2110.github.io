import './App.css';
import React, { useEffect, useState, MutableRefObject, useRef } from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { animateScroll as scroll } from 'react-scroll';
import { Navbar } from './Components/Navbar';
import CoverPage from './Components/CoverPage';
import Projects from './Components/Projects';
import Connect from './Components/Connect';
import { Blog } from './Components/Blog';


function App() {

  const [windowPos, setWindowPos] = useState(0);
  const [disableScroll, setDisableScroll] = useState(true);
  const [targetPage, setTargetPage] = useState(0);
  const firstRender = useRef(true);

  useEffect(() => {
    const handleWindowPos = () => {
      setWindowPos(window.scrollY);
    };
    window.addEventListener("scroll", handleWindowPos);
    window.scrollTo({top: 0, behavior: "smooth"});
    
    return () => window.removeEventListener("scroll", handleWindowPos);
    
  }, []);

  useEffect(() => {
    navigateFromScroll();
    const pageDiff = Math.abs(window.scrollY - targetPage*window.innerHeight);
    if (!firstRender.current && pageDiff < window.innerHeight/5) {   
      setDisableScroll(false);
    } else if (firstRender.current && window.scrollY < window.innerHeight/5) {
      firstRender.current = false;
      setDisableScroll(false);
      
    }

  }, [windowPos]);

  const navigateFromScroll = () => {
    if (!disableScroll) {
      
      if (window.scrollY > window.innerHeight*(targetPage + 1/5)) {
        navigateToPage(targetPage + 1);

      } else if (window.scrollY < window.innerHeight*(targetPage - 1/5)) {
        navigateToPage(targetPage - 1);

      }
    }
  }

  const navigateToPage = (pageNo: number) => { 
    setTargetPage(pageNo);
    setDisableScroll(true);
    scroll.scrollTo(window.innerHeight*pageNo, { smooth: true, delay: 0, duration: 300 });
  };

  return (
    <BrowserRouter>
      <Navbar navigateToPage={navigateToPage} />
        <Routes>
          <Route 
          path="/"  
          element={
            <div className="App">
              <CoverPage navigateToPage={navigateToPage} />
              <Projects />
              <Connect />
            </div>
          }
          />
          <Route 
          path="/Joanne"  
          element={
            <Blog />
          }
          />
        </Routes>    
    </BrowserRouter>
  );
}



const throttle = (cb: () => void, stopRender: MutableRefObject<boolean>, finalRender: MutableRefObject<NodeJS.Timeout | null>, timeDelay: number) => {
  
  //Once the cb is triggered, check that stopRender 
  // If true, do not engage;
  // if false, trigger the cb and change stopRender to true and change needFinalRender to false and trigger a setTimeout to change stopRender back to false
  // if user tried to trigger the cb during the stopRender true period, change needFinalRender to true
  // if needFinalRender is true, trigger the cb at the end and change

  if (!stopRender.current) {

    cb();
    stopRender.current = true;
    setTimeout(() => {stopRender.current = false}, timeDelay);
  } else {
    finalRender.current && clearTimeout(finalRender.current);
    finalRender.current = setTimeout(() => {
      cb();
    }, timeDelay)
  }

}

export default App;
