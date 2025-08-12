import React from 'react';
import { motion } from 'framer-motion';
import MagicBento from '../components/Magicbento';
import { GlareCard } from '../components/Glarecard';
import { Parallax } from 'react-scroll-parallax';
import Threads from '../components/vertexshader';
  import { FaShieldAlt, FaExchangeAlt, FaChartLine } from "react-icons/fa";

const fadeUp = {
  hidden: { opacity: 0, y: 50 },
  visible: (i = 1) => ({
    opacity: 1,
    y: 0,
    transition: { delay: i * 0.2, duration: 0.6, ease: 'easeOut' },
  }),
};

const AIPaymentSoftware = () => {
  return (
    
      <div className="font-serif w-screen min-h-screen  bg-gradient-to-br from-black via-[#1f003f] to-[#6C63FF]  text-white overflow-hidden">

        {/* Hero Section with Background */}
        <div className="w-full bg-black text-white">
      {/* Hero Section with Threads and Content */}
     <div style={{ width: '100%', height: '600px', position: 'relative' }}>
        <Threads amplitude={1} distance={0} enableMouseInteraction={true} />

        <div className="absolute inset-0 z-10 flex flex-col items-center justify-center">
          <motion.h1
            className="text-4xl md:text-6xl font-extrabold text-[#B7A6FF] leading-tight drop-shadow-lg font-serif"
            initial="hidden"
            whileInView="visible"
            variants={fadeUp}
          >
            Transforming Payments with AI Precision
          </motion.h1>
          <motion.p
            className="mt-4 text-lg md:text-xl text-gray-200 max-w-3xl font-serif"
            initial="hidden"
            whileInView="visible"
            variants={fadeUp}
            custom={1}
          >
            Opslify’s AI-Powered Payment Software empowers businesses to process payments faster,
            smarter, and more securely — driven by real-time intelligence.
          </motion.p>
        </div>
      </div>

      {/* Optional smooth transition */}
      <div className="h-20 bg-gradient-to-b from-transparent to-[#1f003f]"></div>

        {/* Pelican-Inspired Section */}
     

{/* Enhanced Feature Section */}
<section className="w-full py-20 px-4 md:px-16 bg-black">
  <div className="text-center mb-12 max-w-3xl mx-auto">
    <h2 className="text-4xl md:text-5xl font-extrabold text-white mb-4 tracking-tight">
      Powerful AI-Powered Payment Features
    </h2>
    <p className="text-gray-300 text-lg leading-relaxed">
      Opslify’s intelligent systems streamline your payment operations with real-time fraud protection, smart reconciliation, and personalized insights — all powered by AI.
    </p>
  </div>

  <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8">
    {/* Card 1 */}
    <div className="bg-gradient-to-br from-[#6C63FF] to-[#3D2C8D] border border-violet-500 rounded-2xl p-8 shadow-lg hover:scale-105 transition-transform duration-300">
      <div className="flex items-center mb-5">
        <FaShieldAlt className="text-white text-3xl mr-3" />
        <h3 className="text-white text-xl font-semibold">Instant Fraud Detection</h3>
      </div>
      <p className="text-gray-200 leading-relaxed">
        Detects fraudulent transactions in real time using AI pattern recognition and anomaly detection.
      </p>
    </div>

    {/* Card 2 */}
    <div className="bg-gradient-to-br from-[#6C63FF] to-[#3D2C8D] border border-violet-500 rounded-2xl p-8 shadow-lg hover:scale-105 transition-transform duration-300">
      <div className="flex items-center mb-5">
        <FaExchangeAlt className="text-white text-3xl mr-3" />
        <h3 className="text-white text-xl font-semibold">Automated Reconciliation</h3>
      </div>
      <p className="text-gray-200 leading-relaxed">
        Matches payments with invoices automatically, minimizing manual effort and errors.
      </p>
    </div>

    {/* Card 3 */}
    <div className="bg-gradient-to-br from-[#6C63FF] to-[#3D2C8D] border border-violet-500 rounded-2xl p-8 shadow-lg hover:scale-105 transition-transform duration-300">
      <div className="flex items-center mb-5">
        <FaChartLine className="text-white text-3xl mr-3" />
        <h3 className="text-white text-xl font-semibold">Personalized Insights</h3>
      </div>
      <p className="text-gray-200 leading-relaxed">
        Get smart, actionable insights that optimize customer payment behavior and retention.
      </p>
    </div>
  </div>
</section>

        {/* AI Payment Services Section */}
        <div className="w-full px-6 md:px-20 py-20  text-center space-y-14 relative overflow-hidden">
          {/* Gradient Overlay Background Blurs */}
          <div className="absolute inset-0 pointer-events-none z-0">
            <div className="absolute top-0 left-1/2 w-[400px] h-[400px] bg-purple-600 opacity-20 rounded-full blur-3xl -translate-x-1/2" />
            <div className="absolute bottom-0 right-0 w-[300px] h-[300px] bg-indigo-500 opacity-20 rounded-full blur-2xl" />
          </div>

          {/* Heading + Paragraph */}
          <motion.div
            initial="hidden"
            whileInView="visible"
            variants={fadeUp}
            className="relative z-10"
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-4 font-serif bg-gradient-to-r from-white via-[#9a8cff] to-white text-transparent bg-clip-text">
              AI Payment Services
            </h2>
            <p className=" font-serif text- text-white/80 max-w-3xl mx-auto">
              Opslify’s AI-driven services ensure compliance, reduce fraud risk, and increase
              transaction speed with minimal human intervention.
            </p>
          </motion.div>

          {/* Cards Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 justify-items-center relative z-10">
            {[{
              title: "Automated Compliance",
              desc: "AI ensures all transactions adhere to global financial regulations in real-time.",
            }, {
              title: "Intelligent Fraud Detection",
              desc: "Advanced models detect anomalies and prevent fraudulent activities instantly.",
            }, {
              title: "Multi-Currency Support",
              desc: "Seamlessly process payments in various currencies with AI-powered FX insights.",
            }].map((card, index) => (
              <motion.div
                key={index}
                className="bg-white/10 border border-white/20 backdrop-blur-xl p-6 rounded-2xl shadow-xl w-full max-w-sm text-left transition-transform hover:scale-105 duration-300 hover:shadow-purple-500/30"
                initial="hidden"
                whileInView="visible"
                variants={fadeUp}
                custom={index + 1}
              >
                <h3 className="text-2xl font-semibold mb-3 text-white">{card.title}</h3>
                <p className="text-white/70">{card.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Why Opslify Section */}
        <section className="w-full text-white py-24 relative overflow-hidden">
  <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center px-6 md:px-10 gap-14 md:gap-24">
    <motion.div
      className="flex-1 space-y-6"
      initial="hidden"
      whileInView="visible"
      variants={fadeUp}
    >
      <p className="text-[#9d8dff] font-serif tracking-widest text-sm md:text-base">
        Why Opslify AI Payment
      </p>
      <h2 className="text-4xl md:text-5xl font-extrabold leading-tight tracking-tight font-[Inter] drop-shadow-[0_2px_10px_rgba(108,99,255,0.6)]">
        Empowering Secure & Efficient AI-Powered Payment Solutions
      </h2>
      <p className="text-gray-300 text-lg md:text-xl max-w-2xl">
        Unlock the power of intelligent automation in payment processing — ensuring security,
        scalability, and seamless transactions tailored to your business needs.
      </p>
      <button className="flex items-center px-6 py-3 bg-gradient-to-r from-[#6C63FF] to-[#9d8dff] text-white rounded-full shadow-lg hover:scale-105 transition-transform duration-300">
        Get Started
        <span className="ml-2 bg-white p-2 rounded-full">
          ➜
        </span>
      </button>
    </motion.div>

    <motion.div
      className="flex-1 flex flex-col items-start md:items-end text-right space-y-3"
      initial="hidden"
      whileInView="visible"
      variants={fadeUp}
      custom={2}
    >
      <span className="text-7xl md:text-8xl font-extrabold text-[#B7A6FF] drop-shadow-[0_0_20px_rgba(108,99,255,0.4)]">
        2B+
      </span>
      <p className="text-gray-300 text-lg md:text-xl max-w-sm">
        Transactions securely processed with Opslify’s AI Payment Engine.
      </p>
    </motion.div>
  </div>

  {/* Soft background glow */}
  <div className="absolute top-0 left-0 w-full h-full pointer-events-none z-0">
    <div className="absolute w-[400px] h-[400px] bg-[#6C63FF] opacity-30 blur-[200px] top-10 left-10 rounded-full"></div>
    <div className="absolute w-[300px] h-[300px] bg-[#ffffff1a] opacity-20 blur-[160px] bottom-10 right-10 rounded-full"></div>
  </div>
</section>

      </div>
    </div>
  );
};

export default AIPaymentSoftware;
