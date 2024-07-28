import { useEffect } from "react";
import Footer from "../../Layouts/Footer";
import Navbar from "../../Layouts/Header/Navbar";
import Sidebar from "../../Layouts/Header/Sidebar";
function Home() {
    useEffect(()=>{
        document.title = 'Dashboard'
    }, []);
  return (
    <>
      <div className="main-wrapper">
        <Sidebar/>
        <div className="page-wrapper">
            <Navbar/>
            <div className="page-content"></div>
          {/* <?php $this->load->view('components/theme/partials/_navbar'); ?> */}
          <Footer/>
        </div>
      </div>
    </>
  );
}

function HomeLoader() {
  return (
    <>
    <p>Loading Dashboard!!</p>
    </>
  )
}

export {Home, HomeLoader};
