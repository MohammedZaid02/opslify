import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './Homepage/Navbar'





import AIProductDesign from './Almas/AIProductDesign';
import Digitaltransformation from './Almas/Digitaltransformation';
import OpslifyAIConsulting from './Almas/OpslifyAIConsulting';
import AICloudServices from './Almas/AICloudServices';
import DataVisualization from './Almas/Datavisuvalizaion';
import BigData from './Almas/BigData';
import Dashboards from './Almas/Dashboards';
import Chatbot from './Almas/Chatbot';
import MVPDevelopment from './Almas/MVPDevelopment';
import QATestingPage from './Almas/QATestingPage';
import PredictiveAnalysis from './Almas/PredictiveAnalysis';
import RestallSection from './Homepage/Restallsections';



function App() {
  return (
    <Router>
      <Routes>
        {/* Home page (you can customize this to have a combined layout) */}
        <Route
          path="/"
          element={
            <div>
              <Navbar/>
              <RestallSection/>
    
            </div>
          }
        />

        {/* AI Cloud Services page */}
        <Route path="/ai-cloud-services" element={<AICloudServices />} />
        <Route path="/AIproductDesign" element={<AIProductDesign/>} />
        <Route path="/Digitaltransformation" element={<Digitaltransformation/>} />
             <Route path="/OpslifyAIConsulting" element={<OpslifyAIConsulting/>}/>
               <Route path="/DataVisualization" element={<DataVisualization/>}/>
                 <Route path="/BigData" element={<BigData/>}/>
                   <Route path="/Dashboards" element={<Dashboards/>}/>
                    <Route path="/Chabot" element={<Chatbot/>}/>
                        <Route path="/MVPDevelopment" element={<MVPDevelopment/>}/>
                        <Route path="/QATestingPage" element={<QATestingPage/>}/>
                  <Route path="/PredictiveAnalysis" element={<PredictiveAnalysis/>}/>
               
      </Routes>
   
    </Router>
  );
}

export default App;
