import Header from "./Components/Header";
import Footer from "./Components/Footer";
import { BrowserRouter, Routes, Route, Outlet } from "react-router-dom";
import Home from "./Pages/Home";
import About from "./Pages/About";
import Aos from 'aos';
import { useEffect } from "react";


function App() {

  useEffect(() => {
    Aos.init({ duration: 2000 });
  
  }, [])

  function PublicLayout() {
    return (
      <>
        <Header />
        <Outlet />
        <Footer />
      </>
    )
  }


  return (
    <>
      <div className="App">
        <BrowserRouter>
          <Routes>
            <Route element={<PublicLayout />} >
              <Route path="/" element={<Home />} />
              <Route path="/about" element={<About />} />
            </Route>
          </Routes>
        </BrowserRouter>
      </div >
    </>
  );
}

export default App;
