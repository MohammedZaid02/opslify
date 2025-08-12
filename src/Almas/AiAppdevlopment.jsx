import React from 'react';
import './AiAppDevelopment.css';
import { div } from 'framer-motion/client';

import CountUpOnView from '../CountUpOnView';
// Adjust the path based on your file structure
const AiAppdevelopment = () => {
  const projects = [
    {
      title: "Custom AI-powered websites Development",
      description: "From defining your business needs to researching and incorporating the best AI tools and techniques into your app to launching it and providing ongoing maintenance services, we undertake an end-to-end development process to deliver a fully customized AI-powered app that matches your requirements.",
      image: "https://d3lkc3n5th01x7.cloudfront.net/wp-content/uploads/2023/01/31030415/Custom-AI-powered-Mobile-App-Development.svg",
     
    },
     {
      title: "AI Consulting and Strategy Development",
      description: "Our AI experts help you comprehend the potential of AI and its implementation in your business. We also conduct an in-depth study of your goals, target audience, and existing data to design a customized AI strategy that aligns with your business requirements.",
      image: "https://d3lkc3n5th01x7.cloudfront.net/wp-content/uploads/2023/05/02040449/AI-Consulting-and-Strategy.svg",
     
    },
        {
      title: "AI Integration into Non-AI website",
      description: "By incorporating AI technologies such as computer vision or NLP, we can upgrade a non-AI app to an AI app with capabilities like offering personalized recommendations and accurate predictions. This involves identifying problems, selecting and training an AI model to address them, integrating it through API or direct integration and regularly monitoring and testing it.",
      image: "https://d3lkc3n5th01x7.cloudfront.net/wp-content/uploads/2023/05/02040526/AI-Integration.svg",
     
    },
      {
      title: "Upgrade and Maintenance",
      description: "We provide ongoing support and maintenance services to ensure your AI-powered mobile app operates effectively and meets evolving business requirements. This includes bug fixing, performance optimization, security updates, and regular feature updates.",
      image: "https://d3lkc3n5th01x7.cloudfront.net/wp-content/uploads/2023/01/31030518/Maintenance-and-upgrade.svg",
     
    },
  
  ];

  return (
    <div className="page-wrapper">
        {/* main section */}
        <section className='main-section'>
            <div className='main-content'>
                <h1 className='main-title'>AI  Web <span>Development</span></h1>
               <p className='main-description'>
                    At Opsilfy, we transform your <br />ideas and visions into powerful, intelligent applications. <br />Whether you have a detailed plan or just a spark of inspiration, our expert <br />team brings your concepts to life with cutting-edge AI technology,seamless design, <br /> and a focus  on real business value. Let’s build something extraordinary together.
                  </p>
                  <div className='image'>
               <img src={aiWebDevImg} alt="AI App Development" />
                  </div>
                  <div className='EmployeeNumber'>
  <h1 className='slideUpAnimation'>
    <CountUpOnView end={100} duration={2000} />+ <br />
    Ai Developer
  </h1>
  <h1 className='slideUpAnimation'>
    <CountUpOnView end={50} duration={2000} />+ <br />
    Ai Solutions
  </h1>
  <h1 className='slideUpAnimation'>
    <CountUpOnView end={15} duration={2000} />+ <br />
    years of experience
  </h1>
</div>
            </div>
         

        </section>
      {/* Project Showcase Section */}
      <section className="project-section">
        <h1 className="project-title">Our AI-powered Web Development Services</h1>
        <div className="project-grid">
          {projects.map((project, index) => (
            <div className='cards'>
              <div key={index} className="project-card">
            <div className='left-part'>
                 <div className="project-image-container">
                <img src={project.image} alt={project.title} className="project-image" />
              </div>
            </div>
             
                 <div className='right-part'>
                    <div className="project-content">
                     
                    <h3>{project.title}</h3>
                    <p>{project.description}</p>
                    </div>
                 </div>
              
            </div>
             </div>
            
          ))}
        </div>
      </section>    
      {/* Types of AI-powered Mobile Apps We Develop*/}
      <section className="Types">
        <h2 className="Types-title">Types of AI-powered web  We Develop</h2>
        <div className="reasons-grid">
          <div className="reason-box">
            <h3>Predictive Analytics website</h3>
            <p>By implementing statistical models, Machine Learning algorithms and data analysis techniques, we develop cutting-edge apps that can process historical data to identify patterns and predict future outcomes like customer purchasing patterns, future market trends or the likelihood of equipment failures.</p>
          </div>
          <div className="reason-box">
            <h3>AIoT-based Website Development</h3>
            <p>With AI and IoT development expertise, our developers can build systems that utilize both technologies to assemble and analyze data and make decisions independently. AIoT applications can drive data analysis, track and predict in-store customer behavior and reload stock automatically.</p>
          </div>
          <div className="reason-box">
            <h3>Virtual Assistants and ChatBots</h3>
            <p>Leverage our AI expertise to integrate ML and NLP-powered virtual assistants and ChatBots, like virtual shopping assistants, into your application that enables personalized customer interaction. The ChatBots and virtual assistants we develop can automate internal processes, improve customer support, and offer customized services, boosting customer engagement.</p>
          </div>
        </div>
      </section>
      {
      // business benfits of ai 
      
      }
      <section className='techStack'>
        <div className='techTitle'>
          <h1>Our AI Development Technology Stack</h1>
        </div>
        <div className='Cards'>
          <h2>DL Frameworks</h2>
          <div className='libraysAndModules' >
            
             <div className='moveCards'>
           <img src="https://d3lkc3n5th01x7.cloudfront.net/wp-content/uploads/2023/04/20031016/Group-1-1.svg" alt="" />
         
          </div>
            <div className='moveCards'>
            <img src="https://d3lkc3n5th01x7.cloudfront.net/wp-content/uploads/2023/04/20031016/Mask-Group-1-1.svg" alt="" />
          </div>
            <div className='moveCards'>
            <img src="https://d3lkc3n5th01x7.cloudfront.net/wp-content/uploads/2023/04/20031017/Mask-Group-4.svg" alt="" />
          </div>
            <div className='moveCards'>
            <img src="https://d3lkc3n5th01x7.cloudfront.net/wp-content/uploads/2023/04/20031019/Group-4.svg" alt="" />
          </div>
            <div className='moveCards'>
            <img src="https://d3lkc3n5th01x7.cloudfront.net/wp-content/uploads/2023/04/20031019/Mask-Group-2.svg" alt="" />
          </div>
            <div className='moveCards'>
            <img src="https://d3lkc3n5th01x7.cloudfront.net/wp-content/uploads/2023/05/12001657/Keras-2.svg" alt="" />
          </div>
         
          </div>
          <h2>Modules/Toolkits</h2>
          <div className='libraysAndModules' >
            
             <div className='moveCards'>
           <img src="https://d3lkc3n5th01x7.cloudfront.net/wp-content/uploads/2023/04/20031350/Group-6-1.svg" alt="" />
         
          </div>
            <div className='moveCards'>
            <img src="https://d3lkc3n5th01x7.cloudfront.net/wp-content/uploads/2023/04/20031350/Mask-Group-5.svg" alt="" />
          </div>
            <div className='moveCards'>
            <img src="https://d3lkc3n5th01x7.cloudfront.net/wp-content/uploads/2023/04/20031351/Group-11.svg" alt="" />
          </div>
           
         
          </div>
          <h2>Libraries</h2>
          <div className='libraysAndModules' >
            
             <div className='moveCards'>
           <img src="https://d3lkc3n5th01x7.cloudfront.net/wp-content/uploads/2023/04/20031532/Group-5.svg" alt="" />
         
          </div>
            <div className='moveCards'>
            <img src="https://d3lkc3n5th01x7.cloudfront.net/wp-content/uploads/2023/04/20031533/Group-3.svg" alt="" />
          </div>
            <div className='moveCards'>
            <img src="https://d3lkc3n5th01x7.cloudfront.net/wp-content/uploads/2023/04/20031533/Group-2.svg" alt="" />
          </div>
            <div className='moveCards'>
            <img src="https://d3lkc3n5th01x7.cloudfront.net/wp-content/uploads/2023/04/20031608/Group-10.svg" alt="" />
          </div>
            <div className='moveCards'>
            <img src="https://d3lkc3n5th01x7.cloudfront.net/wp-content/uploads/2023/04/20031609/Group-9.svg" alt="" />
          </div>
            <div className='moveCards'>
            <img src="https://d3lkc3n5th01x7.cloudfront.net/wp-content/uploads/2023/04/20031610/Group-8.svg" alt="" />
          </div>
         
          </div>
         
        </div>
      </section>

      {/* Contact Section */}
      <section className="contact-section">
        <h1 className="contact-title">Ready? <span>Let's Talk</span></h1>
        <a href="/contact" className="cta-button">Book Discovery Call</a>
      </section>
    </div>
  );
};

export default AiAppdevelopment;
