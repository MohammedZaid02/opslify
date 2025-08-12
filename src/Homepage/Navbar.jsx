import React, { useState } from "react";
import Dropdown from "./Dropdown";
import "./Navbar.css";

export default function Navbar() {
  const [openDropdown, setOpenDropdown] = useState(null);

  // Dropdown items for each menu
  const services = [
    { label: "AI web App Development", href: "#mobile" },
    { label: "AI Software Development", href: "#cloud" },
     { label: "AI Design", href: "#cloud" },
      { label: "AI  Development", href: "#cloud" },
       { label: "AI Custom CRM", href: "#cloud" },
        { label: "AI Payment Software", href: "#cloud" },
         { label: "AI Cloud Services", href: "/ai-cloud-services" },
           { label: "IT consulting", href: "/OpslifyAIConsulting" },
             { label: "Idea and product design", href: "/AIproductDesign" },
               { label: "Digital Transformation", href: "/Digitaltransformation" },

  ];

  const aiAutomation = [
    { label: "Chatbot", href: "/Chatbot" },
    { label: "Automation with AI", href: "/AutomationWithAI" },
    { label: "Predictive Analytics", href: "/PredictiveAnalysis" },
  ];

  const engineering = [
    
    { label: "MVP development", href: "/MVPDevelopment" },
    { label: "QA & Testing", href: "/QATestingPage" },
  ];

  const dataAnalytics = [
    { label: "Data Visualization", href: "/DataVisualization" },
    { label: "Dashboards", href: "/dashboards" },
    { label: "Big Data", href: "/BigData" },
  ];

  const gamification = [
   { label: "Gamification engine", href: "#Gamification engine" },
  ];

  const whyUs = [
    { label: "Our Mission", href: "#mission" },
    { label: "Our Values", href: "#values" },
    { label: "Client Success", href: "#clients" },
  ];

  const contact = [
    { label: "Contact Form", href: "#form" },
    { label: "Support", href: "#support" },
    { label: "Schedule a Call", href: "#call" },
  ];

  return (
    <nav className="navbar">
      <div className="navbar-container">
        <div className="navbar-logo">Opsilfy</div>

        <ul className="navbar-links">
          {[
            { title: "Services", items: services },
            { title: "AI Automation", items: aiAutomation },
            { title: "Engineering", items: engineering },
            { title: "Data Analytics", items: dataAnalytics },
            { title: "Gamification", items: gamification },
            { title: "Why Us", items: whyUs },
            { title: "Contact", items: contact },
          ].map(({ title, items }) => (
            <li
              key={title}
              onMouseEnter={() => setOpenDropdown(title)}
              onMouseLeave={() => setOpenDropdown(null)}
              style={{ position: "relative" }}
            >
              <a href={`#${title.toLowerCase().replace(/\s/g, "")}`}>{title}</a>
              {openDropdown === title && <Dropdown items={items} />}
            </li>
          ))}
        </ul>
      </div>
    </nav>

    
  );
}
