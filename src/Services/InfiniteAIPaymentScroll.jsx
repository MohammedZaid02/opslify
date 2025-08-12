import React from "react";
import "./InfiniteAIPaymentScroll.css";

const InfiniteAIPaymentScroll = () => {
  const contentItems = [
    "Automated Fraud Detection",
    "Real-Time Transaction Analytics",
    "Multi-Currency Support",
    "AI-Powered Reconciliation",
    "PCI DSS Compliance",
    "Intelligent Payment Routing",
    "Predictive Risk Scoring",
  ];

  return (
    <section className="w-full py-16 overflow-hidden relative bg-gradient-to-r from-[#0f0c29] via-[#302b63] to-[#6C63FF]">
      <div className="absolute inset-0 z-0 opacity-30 bg-gradient-to-r from-purple-500/20 via-pink-500/20 to-blue-500/20 pointer-events-none" />
      <div className="relative whitespace-nowrap z-10">
        <div className="animate-marquee flex space-x-6">
          {contentItems.concat(contentItems).map((item, index) => (
            <div
              key={index}
              className="flex-shrink-0 bg-white/10 backdrop-blur-md rounded-xl px-6 py-3 text-white text-sm md:text-lg font-medium shadow-md hover:scale-105 transition-transform duration-300 border border-white/20"
            >
              {item}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default InfiniteAIPaymentScroll;
