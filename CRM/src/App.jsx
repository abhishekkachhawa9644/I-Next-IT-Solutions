import React from 'react'
import Header from './components/Header'
import Sidebar from './components/Sidebar'
import MainContent from './pages/MainContent'
import './assets/fonts/icofont/icofont.min.css';
import './assets/plugins/perfect-scrollbar/perfect-scrollbar.min.css';
import './assets/plugins/apex/apexcharts.css';
import './assets/css/style.css';
import 'bootstrap/dist/css/bootstrap.min.css'
import 'bootstrap/dist/js/bootstrap.min.js'
import 'bootstrap-icons/font/bootstrap-icons.css'; 
import ApexCharts from 'apexcharts'




const App = () => {
  return (
    <div style={{
      backgroundColor:"whitesmoke"
    }}>
     
       
   <div class="offcanvas-overlay"></div>


   
   <div class="wrapper">
   <Header/>
      <div class="main-wrapper">

        <Sidebar/>
        <MainContent/>
      </div>
      </div>

      
    </div>
  )
}

export default App
