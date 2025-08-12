import { motion } from "motion/react";
import { 
  BarChart3, 
  Zap, 
  Shield, 
  TrendingUp, 
  Users, 
  Award,
  ArrowRight,
  CheckCircle,
  Sparkles,
  Target,
  Globe,
  Cpu,
  Clock,
  Star,
  Lightbulb,
  Headphones,
  Brain,
  Activity,
  Database,
  Link,
  Monitor
} from 'lucide-react';

const services = [
  {
    title: "Predictive Analytics",
    icon: BarChart3,
    description: "Leverage AI to forecast trends, customer behavior, and business outcomes with advanced machine learning algorithms.",
    features: ["Advanced Forecasting", "Behavioral Analysis", "Risk Prediction"]
  },
  {
    title: "Real-Time Data Streaming",
    icon: Activity,
    description: "Process streaming data for real-time decision-making and personalization across your entire infrastructure.",
    features: ["Live Data Processing", "Real-time Insights", "Instant Analytics"]
  },
  {
    title: "Cloud Security AI",
    icon: Shield,
    description: "Protect cloud environments with intelligent threat detection and automated response systems.",
    features: ["Threat Detection", "Auto Response", "Security Monitoring"]
  },
  {
    title: "Machine Learning Operations",
    icon: Cpu,
    description: "Streamline ML model deployment, monitoring, and management with automated MLOps pipelines.",
    features: ["Model Deployment", "Performance Monitoring", "Automated Scaling"]
  },
  {
    title: "AI-Powered Automation",
    icon: Zap,
    description: "Intelligent automation solutions that adapt and optimize workflows based on real-time conditions.",
    features: ["Smart Workflows", "Dynamic Optimization", "Adaptive Processing"]
  },
  {
    title: "Data Analytics Platform",
    icon: Target,
    description: "Comprehensive analytics platform with AI-driven insights and predictive capabilities.",
    features: ["Custom Dashboards", "Predictive Modeling", "Advanced Visualization"]
  },
];

const fadeUp = {
  hidden: { opacity: 0, y: 40 },
  visible: (i = 1) => ({
    opacity: 1,
    y: 0,
    transition: { delay: i * 0.2, duration: 0.6 },
  }),
};

const AICloudServices = () => {
  return (
    <div className="w-full min-h-screen bg-black relative overflow-hidden">
      {/* Enhanced Animated Background */}
      <div className="fixed inset-0 w-full h-full bg-gradient-to-br from-black via-[#1a1a2e] to-[#16213e] z-0">
        <div className="absolute inset-0 w-full h-full bg-[radial-gradient(circle_at_30%_20%,_#7C73FF_0%,_transparent_50%)] opacity-30"></div>
        <div className="absolute inset-0 w-full h-full bg-[radial-gradient(circle_at_70%_80%,_#7C73FF_0%,_transparent_50%)] opacity-25"></div>
        <div className="absolute inset-0 w-full h-full bg-[radial-gradient(circle_at_50%_50%,_#AC98FF_0%,_transparent_70%)] opacity-15"></div>

        {/* Enhanced animated particles */}
        {[...Array(80)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-1 h-1 bg-[#7C73FF] rounded-full opacity-60"
            initial={{
              x: Math.random() * (typeof window !== "undefined" ? window.innerWidth : 1200),
              y: Math.random() * (typeof window !== "undefined" ? window.innerHeight : 800),
              scale: 0,
            }}
            animate={{
              y: [null, Math.random() * (typeof window !== "undefined" ? window.innerHeight : 800)],
              x: [null, Math.random() * (typeof window !== "undefined" ? window.innerWidth : 1200)],
              scale: [0, Math.random() * 2 + 0.5, 0],
              opacity: [0, 1, 0],
            }}
            transition={{
              duration: Math.random() * 4 + 3,
              repeat: Infinity,
              delay: Math.random() * 3,
            }}
          />
        ))}

        {/* Floating geometric shapes */}
        {[...Array(12)].map((_, i) => (
          <motion.div
            key={`shape-${i}`}
            className="absolute w-16 h-16 sm:w-20 sm:h-20 border border-[#7C73FF]/30 rounded-lg"
            initial={{
              x: Math.random() * (typeof window !== "undefined" ? window.innerWidth : 1200),
              y: Math.random() * (typeof window !== "undefined" ? window.innerHeight : 800),
              rotate: 0,
            }}
            animate={{
              y: [null, Math.random() * 200 - 100],
              x: [null, Math.random() * 200 - 100],
              rotate: [0, 360],
            }}
            transition={{
              duration: Math.random() * 25 + 15,
              repeat: Infinity,
              ease: "linear",
            }}
          />
        ))}
      </div>

      {/* Enhanced Hero Section */}
      <section className="w-full text-white py-16 sm:py-20 md:py-24 lg:py-28 px-4 sm:px-6 md:px-8 lg:px-12 xl:px-16 2xl:px-20 3xl:px-24 relative z-10">
        <motion.div
          initial="hidden"
          whileInView="visible"
          variants={fadeUp}
          viewport={{ once: true }}
          className="w-full max-w-none mx-auto space-y-6 sm:space-y-8 md:space-y-10 text-center"
        >
          {/* Logo and Brand */}
          <motion.div 
            className="flex items-center justify-center space-x-3 mb-6 sm:mb-8"
            initial={{ scale: 0.8, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ duration: 0.8 }}
          >
            <div className="w-10 h-10 sm:w-12 sm:h-12 md:w-14 md:h-14 bg-gradient-to-r from-[#7C73FF] to-[#AC98FF] rounded-xl flex items-center justify-center">
              <Brain className="w-5 h-5 sm:w-7 sm:h-7 md:w-8 md:h-8 text-white" />
            </div>
            <span className="text-white text-2xl sm:text-3xl md:text-4xl">Opslify</span>
          </motion.div>

          <motion.div 
            className="text-xs sm:text-sm text-white/60 mb-4"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
          >
            <span className="inline-flex items-center border border-[#7C73FF] text-[#7C73FF] bg-[#7C73FF]/20 px-3 sm:px-4 py-1 sm:py-2 rounded-full">
              <Sparkles className="w-3 h-3 sm:w-4 sm:h-4 mr-2" />
              Scalable AI Cloud Infrastructure
            </span>
          </motion.div>

          <motion.h1 
            className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl 2xl:text-8xl 3xl:text-9xl bg-gradient-to-r from-white via-gray-200 to-[#AC98FF] bg-clip-text text-transparent leading-tight max-w-none mx-auto"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5 }}
          >
            Powering the Future with AI-Driven Cloud Services
          </motion.h1>

          <motion.p 
            className="text-white/90 text-base sm:text-lg md:text-xl lg:text-2xl xl:text-3xl 2xl:text-4xl leading-relaxed max-w-none lg:max-w-7xl xl:max-w-none mx-auto px-2 sm:px-4 md:px-8 lg:px-12 xl:px-16"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.7 }}
          >
            Opslify provides a secure, scalable, and intelligent cloud platform optimized for AI-driven workloads and data analytics. Transform your infrastructure with autonomous operations and next-generation automation.
          </motion.p>

          <motion.div 
            className="flex flex-col sm:flex-row gap-3 sm:gap-4 md:gap-6 justify-center items-center pt-4 sm:pt-6 max-w-none mx-auto"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.9 }}
          >
            <button className="w-full sm:w-auto inline-flex items-center justify-center bg-gradient-to-r from-[#7C73FF] to-[#AC98FF] hover:from-[#6A5AE6] hover:to-[#9A85E6] text-white border-0 px-6 sm:px-8 md:px-10 lg:px-12 py-3 sm:py-4 rounded-xl text-sm sm:text-base md:text-lg transition-all duration-300 transform hover:scale-105 hover:shadow-xl hover:shadow-[#7C73FF]/30">
              Get Started
              <ArrowRight className="w-4 h-4 sm:w-5 sm:h-5 ml-2" />
            </button>
          </motion.div>
        </motion.div>
      </section>

      {/* Enhanced Services Cards */}
      <section className="w-full py-16 sm:py-20 md:py-24 lg:py-28 px-4 sm:px-6 md:px-8 lg:px-12 xl:px-16 2xl:px-20 3xl:px-24 relative z-10">
        <motion.div 
          className="text-center mb-12 sm:mb-16 md:mb-20 max-w-none mx-auto"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl 2xl:text-7xl text-white mb-4 sm:mb-6">
            Next-Gen <span className="bg-gradient-to-r from-[#7C73FF] to-[#AC98FF] bg-clip-text text-transparent">AI Services</span>
          </h2>
          <p className="text-gray-400 text-base sm:text-lg md:text-xl lg:text-2xl max-w-none lg:max-w-5xl xl:max-w-none mx-auto px-4 sm:px-8">
            Revolutionize your operations with intelligent cloud solutions powered by cutting-edge AI technology
          </p>
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 2xl:grid-cols-3 gap-6 sm:gap-8 md:gap-10 lg:gap-12 xl:gap-16 max-w-none mx-auto">
          {services.map((service, index) => (
            <motion.div
              key={index}
              className="group bg-white/10 border border-white/20 p-6 sm:p-8 md:p-10 lg:p-12 rounded-2xl shadow-xl hover:shadow-2xl hover:shadow-[#7C73FF]/30 transition-all duration-500 backdrop-blur-md space-y-4 sm:space-y-6 hover:border-[#7C73FF]/60 hover:bg-white/15"
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={fadeUp}
              custom={index + 1}
              whileHover={{ y: -10, scale: 1.02 }}
            >
              <motion.div 
                className="w-14 h-14 sm:w-16 sm:h-16 md:w-18 md:h-18 lg:w-20 lg:h-20 bg-gradient-to-r from-[#7C73FF] to-[#AC98FF] rounded-2xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300"
                whileHover={{ rotate: 360 }}
                transition={{ duration: 0.6 }}
              >
                <service.icon className="w-6 h-6 sm:w-8 sm:h-8 md:w-9 md:h-9 lg:w-10 lg:h-10 text-white" />
              </motion.div>
              
              <h3 className="text-lg sm:text-xl md:text-2xl lg:text-3xl text-white group-hover:text-[#AC98FF] transition-colors">
                {service.title}
              </h3>
              
              <p className="text-white/80 text-sm sm:text-base md:text-lg lg:text-xl leading-relaxed">
                {service.description}
              </p>
              
              <div className="space-y-2 sm:space-y-3">
                {service.features.map((feature, featureIndex) => (
                  <div key={featureIndex} className="flex items-center text-xs sm:text-sm md:text-base lg:text-lg text-gray-300">
                    <CheckCircle className="w-3 h-3 sm:w-4 sm:h-4 md:w-5 md:h-5 text-[#7C73FF] mr-2 sm:mr-3 flex-shrink-0" />
                    {feature}
                  </div>
                ))}
              </div>
              
              <button className="inline-flex items-center text-[#7C73FF] hover:text-[#AC98FF] group-hover:translate-x-2 transition-transform duration-300 text-sm sm:text-base md:text-lg">
                Learn More
                <ArrowRight className="w-3 h-3 sm:w-4 sm:h-4 md:w-5 md:h-5 ml-2" />
              </button>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Enhanced Comparison Section */}
      <section className="w-full py-16 sm:py-20 md:py-24 lg:py-28 px-4 sm:px-6 md:px-8 lg:px-12 xl:px-16 2xl:px-20 3xl:px-24 text-white relative z-10">
        <div className="text-center max-w-none mx-auto mb-16 sm:mb-20 md:mb-24">
          <motion.div 
            className="text-xs sm:text-sm uppercase tracking-wide text-white/70 mb-4 sm:mb-6"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
          >
            Transformation Comparison
          </motion.div>
          
          <motion.h2 
            className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl 2xl:text-8xl mb-4 sm:mb-6 md:mb-8"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            AI Cloud vs <span className="bg-gradient-to-r from-[#7C73FF] to-[#AC98FF] bg-clip-text text-transparent">Traditional Ops</span>
          </motion.h2>
          
          <motion.p 
            className="text-white/90 text-base sm:text-lg md:text-xl lg:text-2xl max-w-none lg:max-w-5xl xl:max-w-none mx-auto px-4 sm:px-8"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
          >
            See how Opslify AI Cloud transforms traditional cloud infrastructure with intelligent automation and predictive capabilities.
          </motion.p>
        </div>

        <div className="space-y-12 sm:space-y-16 md:space-y-20 lg:space-y-24 max-w-none mx-auto">
          {[
            {
              left: { label: "Manual Scaling", description: "Requires manual intervention to handle load spikes and resource allocation." },
              right: { label: "AI Auto-Scaling", description: "Intelligently scales based on real-time demand prediction and usage patterns." },
              center: "Scalability",
              icon: TrendingUp,
            },
            {
              left: { label: "Basic Monitoring", description: "Limited to alerts and static thresholds with reactive responses." },
              right: { label: "Smart Monitoring", description: "Proactive anomaly detection with automated optimization and self-healing." },
              center: "Monitoring",
              icon: Monitor,
            },
            {
              left: { label: "Human Decisions", description: "Operations depend on human input, schedules, and manual processes." },
              right: { label: "Autonomous Ops", description: "AI makes real-time decisions and executes actions instantly and efficiently." },
              center: "Automation",
              icon: Cpu,
            },
          ].map((item, index) => (
            <motion.div
              key={index}
              className="flex flex-col xl:flex-row items-center justify-center xl:justify-between gap-6 sm:gap-8 md:gap-12 lg:gap-16 xl:gap-20 2xl:gap-24"
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: index * 0.2 }}
              viewport={{ once: true }}
            >
              {/* Left Card - Traditional */}
              <motion.div
                className="relative bg-gradient-to-br from-gray-800/60 to-gray-900/60 text-white text-center rounded-2xl w-full max-w-sm lg:max-w-md xl:max-w-lg h-40 sm:h-48 md:h-56 lg:h-64 flex flex-col justify-center p-4 sm:p-6 md:p-8 shadow-xl border border-gray-700/50 backdrop-blur-sm"
                whileHover={{ scale: 1.05, y: -5 }}
                transition={{ duration: 0.3 }}
              >
                <div className="text-xs sm:text-sm text-red-400 uppercase mb-2">Traditional</div>
                <div className="text-base sm:text-lg md:text-xl lg:text-2xl mb-2 sm:mb-3">{item.left.label}</div>
                <p className="text-xs sm:text-sm md:text-base lg:text-lg text-white/70 leading-relaxed">{item.left.description}</p>
                <div className="absolute top-2 right-2 text-red-400/40">
                  <Clock className="w-4 h-4 sm:w-5 sm:h-5" />
                </div>
              </motion.div>

              {/* Center Circle */}
              <motion.div
                className="relative w-20 h-20 sm:w-24 sm:h-24 md:w-28 md:h-28 lg:w-32 lg:h-32 rounded-full border-2 border-[#7C73FF]/40 flex flex-col items-center justify-center text-center backdrop-blur-md bg-[#7C73FF]/20 text-white shadow-lg"
                initial={{ scale: 0.8, opacity: 0 }}
                whileInView={{ scale: 1, opacity: 1 }}
                transition={{ duration: 0.5, delay: index * 0.3 }}
                viewport={{ once: true }}
                whileHover={{ scale: 1.1, rotate: 180 }}
              >
                <item.icon className="w-5 h-5 sm:w-6 sm:h-6 md:w-7 md:h-7 lg:w-8 lg:h-8 text-[#7C73FF] mb-1" />
                <span className="text-xs sm:text-sm md:text-base">{item.center}</span>
              </motion.div>

              {/* Right Card - AI Cloud */}
              <motion.div
                className="relative bg-gradient-to-br from-[#7C73FF]/30 to-[#AC98FF]/30 text-white text-center rounded-2xl w-full max-w-sm lg:max-w-md xl:max-w-lg h-40 sm:h-48 md:h-56 lg:h-64 flex flex-col justify-center p-4 sm:p-6 md:p-8 shadow-xl border border-[#7C73FF]/40 backdrop-blur-sm"
                whileHover={{ scale: 1.05, y: -5 }}
                transition={{ duration: 0.3 }}
              >
                <div className="text-xs sm:text-sm text-[#AC98FF] uppercase mb-2">AI Cloud</div>
                <div className="text-base sm:text-lg md:text-xl lg:text-2xl mb-2 sm:mb-3">{item.right.label}</div>
                <p className="text-xs sm:text-sm md:text-base lg:text-lg text-white/70 leading-relaxed">{item.right.description}</p>
                <div className="absolute top-2 right-2 text-[#7C73FF]/60">
                  <Zap className="w-4 h-4 sm:w-5 sm:h-5" />
                </div>
              </motion.div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Enhanced Feature Highlight Section */}
      <section className="relative w-full py-16 sm:py-20 md:py-24 lg:py-28 px-4 sm:px-6 md:px-8 lg:px-12 xl:px-16 2xl:px-20 3xl:px-24 z-10 flex justify-center items-center">
        <motion.div 
          className="relative bg-gradient-to-br from-[#7C73FF]/20 to-[#AC98FF]/20 rounded-3xl p-8 sm:p-12 md:p-16 lg:p-20 xl:p-24 backdrop-blur-xl border border-[#7C73FF]/30 max-w-none mx-auto text-center"
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            viewport={{ once: true }}
          >
            <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl 2xl:text-7xl text-white mb-6 sm:mb-8 bg-gradient-to-r from-white to-[#AC98FF] bg-clip-text text-transparent">
              AI Cloud, Redefined
            </h2>
            <p className="max-w-none lg:max-w-4xl xl:max-w-none mx-auto text-base sm:text-lg md:text-xl lg:text-2xl xl:text-3xl text-gray-300 mb-8 sm:mb-12 md:mb-16 leading-relaxed px-4 sm:px-8">
              Experience the next-generation cloud platform powered by intelligent automation, 
              real-time data adaptation, and autonomous decision-making capabilities.
            </p>
          </motion.div>

          <motion.div 
            className="bg-gradient-to-br from-gray-900/80 to-gray-800/90 backdrop-blur-md rounded-3xl p-6 sm:p-8 md:p-10 lg:p-12 shadow-2xl w-full max-w-sm sm:max-w-md md:max-w-lg lg:max-w-xl mx-auto border border-[#7C73FF]/30"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4 }}
            viewport={{ once: true }}
            whileHover={{ scale: 1.05 }}
          >
            <div className="flex items-center justify-center mb-4 sm:mb-6">
              <div className="w-10 h-10 sm:w-12 sm:h-12 md:w-14 md:h-14 lg:w-16 lg:h-16 bg-gradient-to-r from-[#7C73FF] to-[#AC98FF] rounded-xl flex items-center justify-center">
                <Shield className="w-5 h-5 sm:w-6 sm:h-6 md:w-7 md:h-7 lg:w-8 lg:h-8 text-white" />
              </div>
            </div>
            <p className="uppercase text-xs sm:text-sm md:text-base text-gray-400 mb-2 sm:mb-3">AI Power Uptime</p>
            <div className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl text-green-400 mb-3 sm:mb-4 md:mb-6">99.99%</div>
            <p className="text-gray-300 text-sm sm:text-base md:text-lg lg:text-xl leading-relaxed">
              Maximum uptime powered by adaptive neural routing and intelligent failover systems.
            </p>
          </motion.div>

          {/* Floating elements */}
          <motion.div 
            className="absolute -top-4 -left-4 w-16 h-16 sm:w-20 sm:h-20 md:w-24 md:h-24 bg-[#7C73FF]/30 rounded-full blur-xl"
            animate={{ scale: [1, 1.2, 1], opacity: [0.3, 0.6, 0.3] }}
            transition={{ duration: 4, repeat: Infinity }}
          />
          <motion.div 
            className="absolute -bottom-4 -right-4 w-20 h-20 sm:w-24 sm:h-24 md:w-28 md:h-28 bg-[#AC98FF]/30 rounded-full blur-xl"
            animate={{ scale: [1.2, 1, 1.2], opacity: [0.6, 0.3, 0.6] }}
            transition={{ duration: 5, repeat: Infinity }}
          />
        </motion.div>
      </section>

      {/* Enhanced CTA Section */}
      <section className="text-white py-16 sm:py-20 md:py-24 lg:py-28 px-4 sm:px-6 md:px-8 lg:px-12 xl:px-16 2xl:px-20 3xl:px-24 relative z-10">
        <motion.div 
          className="text-center max-w-none mx-auto space-y-6 sm:space-y-8 md:space-y-10"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl 2xl:text-8xl leading-tight tracking-wide bg-gradient-to-r from-white via-gray-200 to-[#AC98FF] bg-clip-text text-transparent">
            Ready to Transform Your Business with AI?
          </h1>
          <p className="text-base sm:text-lg md:text-xl lg:text-2xl xl:text-3xl text-gray-300 max-w-none lg:max-w-5xl xl:max-w-none mx-auto leading-relaxed px-4 sm:px-8">
            Join thousands of companies already using Opslify to revolutionize their operations and scale their AI infrastructure to unprecedented levels.
          </p>
          
          <motion.div 
            className="flex flex-col sm:flex-row justify-center gap-4 sm:gap-6 md:gap-8 pt-4 sm:pt-6 md:pt-8 max-w-none mx-auto"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
            viewport={{ once: true }}
          >
            <motion.button 
              className="w-full sm:w-auto relative inline-flex items-center justify-center px-8 sm:px-10 md:px-12 lg:px-16 py-3 sm:py-4 md:py-5 overflow-hidden text-white rounded-full group bg-gradient-to-r from-[#7C73FF] to-[#AC98FF] shadow-xl hover:shadow-2xl hover:shadow-[#7C73FF]/30 transition-all duration-300"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <span className="absolute inset-0 w-full h-full bg-white opacity-10 rounded-full blur-sm group-hover:opacity-20 transition-opacity duration-300"></span>
              <span className="relative z-10 flex items-center text-sm sm:text-base md:text-lg lg:text-xl">
                Get Started
                <ArrowRight className="w-4 h-4 sm:w-5 sm:h-5 md:w-6 md:h-6 ml-2" />
              </span>
            </motion.button>
            
            <motion.button 
              className="w-full sm:w-auto relative inline-flex items-center justify-center px-8 sm:px-10 md:px-12 lg:px-16 py-3 sm:py-4 md:py-5 overflow-hidden text-white rounded-full group border-2 border-[#7C73FF] hover:bg-[#7C73FF] transition-all duration-300"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <span className="relative z-10 flex items-center text-sm sm:text-base md:text-lg lg:text-xl">
                Get Demo
                <ArrowRight className="w-4 h-4 sm:w-5 sm:h-5 md:w-6 md:h-6 ml-2" />
              </span>
            </motion.button>
          </motion.div>
        </motion.div>

        <motion.div 
          className="mt-16 sm:mt-20 md:mt-24 text-center text-gray-400"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ delay: 0.5 }}
          viewport={{ once: true }}
        >
          <p className="text-sm sm:text-base md:text-lg mb-4 sm:mb-6">A trusted AI solutions provider to the world's leading enterprises and innovative startups</p>
          <div className="flex items-center justify-center space-x-2 sm:space-x-3">
            <div className="w-6 h-6 sm:w-8 sm:h-8 md:w-10 md:h-10 bg-gradient-to-r from-[#7C73FF] to-[#AC98FF] rounded-lg flex items-center justify-center">
              <Brain className="w-3 h-3 sm:w-5 sm:h-5 md:w-6 md:h-6 text-white" />
            </div>
            <span className="text-white text-lg sm:text-xl md:text-2xl lg:text-3xl">Opslify</span>
          </div>
        </motion.div>
      </section>
    </div>
  );
};

export default AICloudServices;