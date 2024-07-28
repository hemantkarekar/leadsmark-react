import { useEffect } from "react";
import Footer from "../Footer";
import Navbar from "../Partials/Navbar";
import Sidebar from "../Partials/Sidebar";
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

export default Home;
