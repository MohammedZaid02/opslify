import React from "react";
import { motion } from "motion/react";
import { 
  Rocket, 
  Settings, 
  Lightbulb, 
  Bot,
  Brain,
  Zap,
  Target,
  Sparkles,
  ArrowRight,
  CheckCircle,
  Star,
  Users,
  Award,
  TrendingUp,
  Cpu,
  Globe,
  Shield,
  Code,
  Database,
  Cloud
} from 'lucide-react';

const fadeInUp = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" }
  }
};

const staggerContainer = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
      delayChildren: 0.2,
    },
  },
};

const scaleIn = {
  hidden: { scale: 0, opacity: 0 },
  visible: {
    scale: 1,
    opacity: 1,
    transition: { type: "spring", duration: 0.6 }
  }
};

const slideInLeft = {
  hidden: { x: -100, opacity: 0 },
  visible: {
    x: 0,
    opacity: 1,
    transition: { type: "spring", duration: 0.8 }
  }
};

const slideInRight = {
  hidden: { x: 100, opacity: 0 },
  visible: {
    x: 0,
    opacity: 1,
    transition: { type: "spring", duration: 0.8 }
  }
};

const highlights = [
  {
    icon: Rocket,
    title: "Rapid Prototyping",
    description: "Validate ideas fast with interactive AI prototypes crafted with precision and cutting-edge technology.",
    gradient: "from-orange-500 to-red-500"
  },
  {
    icon: Settings,
    title: "Scalable Architecture",
    description: "Built with modular, scalable, and cloud-native AI-first technologies for enterprise-grade solutions.",
    gradient: "from-blue-500 to-cyan-500"
  },
  {
    icon: Lightbulb,
    title: "Human-Centered UX",
    description: "Deliver intuitive experiences for end-users powered by explainable AI and intelligent interfaces.",
    gradient: "from-yellow-500 to-orange-500"
  },
  {
    icon: Brain,
    title: "AI Strategy Consulting",
    description: "Comprehensive AI roadmaps and strategic planning to transform your business operations.",
    gradient: "from-purple-500 to-pink-500"
  },
  {
    icon: Zap,
    title: "Process Automation",
    description: "Intelligent automation solutions that streamline workflows and eliminate repetitive tasks.",
    gradient: "from-green-500 to-emerald-500"
  },
  {
    icon: Target,
    title: "Data-Driven Insights",
    description: "Transform raw data into actionable insights with advanced analytics and machine learning.",
    gradient: "from-indigo-500 to-purple-500"
  }
];

const AIProductDesign = () => {
  return (
    <div className="w-full min-h-screen bg-black text-white relative overflow-hidden">
      {/* Animated Background */}
      <div className="fixed inset-0 w-full h-full bg-gradient-to-br from-black via-[#1a1a2e] to-[#16213e] z-0">
        <div className="absolute inset-0 w-full h-full bg-[radial-gradient(circle_at_30%_20%,_#6C63FF_0%,_transparent_50%)] opacity-20"></div>
        <div className="absolute inset-0 w-full h-full bg-[radial-gradient(circle_at_70%_80%,_#6C63FF_0%,_transparent_50%)] opacity-15"></div>
        
        {/* Animated particles */}
        {[...Array(30)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-1 h-1 bg-[#6C63FF] rounded-full opacity-30"
            initial={{ 
              x: Math.random() * (typeof window !== 'undefined' ? window.innerWidth : 1200), 
              y: Math.random() * (typeof window !== 'undefined' ? window.innerHeight : 800),
              scale: 0 
            }}
            animate={{ 
              y: [null, Math.random() * (typeof window !== 'undefined' ? window.innerHeight : 800)],
              scale: [0, 1, 0],
              opacity: [0, 0.6, 0]
            }}
            transition={{ 
              duration: Math.random() * 3 + 2,
              repeat: Infinity,
              delay: Math.random() * 2
            }}
          />
        ))}
      </div>

      {/* Hero Section */}
      <motion.section 
        className="relative h-screen flex items-center justify-center text-center px-4 sm:px-6 md:px-8 lg:px-12 xl:px-16 2xl:px-20 3xl:px-24 overflow-hidden z-10"
      >
        {/* Logo and Brand */}
        <motion.div 
          className="absolute top-6 sm:top-8 md:top-12 left-4 sm:left-6 md:left-8 lg:left-12 xl:left-16 2xl:left-20 flex items-center space-x-2 sm:space-x-3 z-20"
          initial={{ opacity: 0, x: -50, scale: 0.8 }}
          animate={{ opacity: 1, x: 0, scale: 1 }}
          transition={{ duration: 1, type: "spring" }}
        >
          <motion.div 
            className="w-8 h-8 sm:w-10 sm:h-10 md:w-12 md:h-12 bg-gradient-to-r from-[#6C63FF] to-[#9c88ff] rounded-xl flex items-center justify-center"
            whileHover={{ scale: 1.1, rotate: 360 }}
            transition={{ duration: 0.6 }}
          >
            <Brain className="w-4 h-4 sm:w-5 sm:h-5 md:w-7 md:h-7 text-white" />
          </motion.div>
          <span className="text-white text-lg sm:text-xl md:text-2xl lg:text-3xl font-bold">Opslify</span>
        </motion.div>

        <motion.div 
          className="relative z-10 flex flex-col items-center justify-center max-w-none mx-auto"
          variants={staggerContainer}
          initial="hidden"
          animate="visible"
        >
          <motion.div 
            className="flex justify-center mb-4 sm:mb-6"
            variants={scaleIn}
          >
            <motion.span 
              className="inline-flex items-center border border-[#6C63FF] text-[#6C63FF] bg-[#6C63FF]/20 px-3 sm:px-4 py-1 sm:py-2 rounded-full text-xs sm:text-sm backdrop-blur-sm"
              whileHover={{ scale: 1.05, boxShadow: "0 0 20px rgba(108, 99, 255, 0.5)" }}
              animate={{
                boxShadow: [
                  "0 0 0px rgba(108, 99, 255, 0)",
                  "0 0 10px rgba(108, 99, 255, 0.3)",
                  "0 0 0px rgba(108, 99, 255, 0)"
                ]
              }}
              transition={{ duration: 2, repeat: Infinity }}
            >
              <Sparkles className="w-3 h-3 sm:w-4 sm:h-4 mr-2" />
              AI Product Design Excellence
            </motion.span>
          </motion.div>

          <motion.h1 
            className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl 2xl:text-8xl 3xl:text-9xl font-bold text-white leading-tight drop-shadow-lg mb-4 sm:mb-6 bg-gradient-to-r from-white via-gray-200 to-[#6C63FF] bg-clip-text text-transparent max-w-none"
            variants={fadeInUp}
            whileHover={{ scale: 1.02 }}
            transition={{ duration: 0.3 }}
          >
            Transforming Ideas into Intelligent Products
          </motion.h1>

          <motion.p 
            className="mt-4 sm:mt-6 text-base sm:text-lg md:text-xl lg:text-2xl xl:text-3xl text-gray-300 max-w-none lg:max-w-4xl xl:max-w-none mx-auto leading-relaxed px-4 sm:px-8"
            variants={fadeInUp}
          >
            Opslify designs cutting-edge AI products, tailored to solve real-world challenges with scalable intelligence and innovative solutions.
          </motion.p>

          <motion.div
            className="mt-8 sm:mt-10 md:mt-12 flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center items-center"
            variants={staggerContainer}
          >
            <motion.button 
              className="w-full sm:w-auto px-6 sm:px-8 md:px-10 lg:px-12 py-3 sm:py-4 bg-gradient-to-r from-[#6C63FF] to-[#9c88ff] text-white rounded-full text-sm sm:text-base md:text-lg font-medium shadow-lg transition-all duration-300"
              variants={scaleIn}
              whileHover={{ 
                scale: 1.05, 
                boxShadow: "0 20px 40px rgba(108, 99, 255, 0.3)",
                background: "linear-gradient(135deg, #5A52CC, #8876CC)"
              }}
              whileTap={{ scale: 0.95 }}
            >
              <span className="flex items-center justify-center">
                Get Started
                <motion.div
                  animate={{ x: [0, 5, 0] }}
                  transition={{ duration: 1.5, repeat: Infinity }}
                >
                  <ArrowRight className="w-4 h-4 sm:w-5 sm:h-5 ml-2" />
                </motion.div>
              </span>
            </motion.button>

          </motion.div>
        </motion.div>

        {/* Enhanced floating elements */}
        <motion.div 
          className="absolute top-1/4 left-1/4 w-16 h-16 sm:w-20 sm:h-20 md:w-24 md:h-24 bg-[#6C63FF]/20 rounded-full blur-xl"
          animate={{ 
            scale: [1, 1.3, 1], 
            opacity: [0.3, 0.7, 0.3],
            rotate: [0, 180, 360] 
          }}
          transition={{ duration: 6, repeat: Infinity }}
        />
        <motion.div 
          className="absolute bottom-1/4 right-1/4 w-20 h-20 sm:w-24 sm:h-24 md:w-28 md:h-28 bg-[#9c88ff]/20 rounded-full blur-xl"
          animate={{ 
            scale: [1.2, 1, 1.2], 
            opacity: [0.6, 0.3, 0.6],
            rotate: [360, 180, 0] 
          }}
          transition={{ duration: 8, repeat: Infinity }}
        />
      </motion.section>

      {/* AI Innovation Journey Section */}
      <section className="py-16 sm:py-20 md:py-24 lg:py-28 px-4 sm:px-6 md:px-8 lg:px-12 xl:px-16 2xl:px-20 3xl:px-24 relative z-10">
        <div className="w-full max-w-none mx-auto">
          <div className="grid grid-cols-1 xl:grid-cols-2 gap-8 sm:gap-12 md:gap-16 lg:gap-20 xl:gap-24 items-center">
            {/* Content */}
            <motion.div 
              className="text-left max-w-none mx-auto xl:mx-0"
              variants={slideInLeft}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
            >
              <motion.div 
                className="flex justify-start mb-4 sm:mb-6"
                variants={scaleIn}
              >
                <motion.span 
                  className="inline-flex items-center text-[#6C63FF] bg-[#6C63FF]/10 px-3 sm:px-4 py-1 sm:py-2 rounded-full text-xs sm:text-sm font-medium border border-[#6C63FF]/30 backdrop-blur-sm"
                  whileHover={{ scale: 1.05, backgroundColor: "#6C63FF", color: "#FFFFFF" }}
                >
                  <Bot className="w-3 h-3 sm:w-4 sm:h-4 mr-2" />
                  Innovation Process
                </motion.span>
              </motion.div>

              <motion.h2 
                className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold mb-4 sm:mb-6 text-white bg-gradient-to-r from-white to-[#6C63FF] bg-clip-text text-transparent"
                variants={fadeInUp}
              >
                AI Innovation Journey
              </motion.h2>

              <motion.p 
                className="text-gray-400 text-base sm:text-lg md:text-xl lg:text-2xl mb-6 sm:mb-8 leading-relaxed"
                variants={fadeInUp}
              >
                At Opslify, we harness the power of artificial intelligence to revolutionize industries. From conceptualization to execution, 
                our experts design scalable, data-driven solutions tailored to meet market demands. With a focus on machine learning models 
                and advanced analytics, we ensure optimal performance and user satisfaction.
              </motion.p>

              <motion.div 
                className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6"
                variants={staggerContainer}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
              >
                {[
                  { icon: TrendingUp, label: "98% Success Rate", desc: "Project completion", color: "from-green-500 to-emerald-600" },
                  { icon: Users, label: "100+ Clients", desc: "Worldwide", color: "from-blue-500 to-cyan-600" },
                  { icon: Award, label: "50+ Awards", desc: "Industry recognition", color: "from-yellow-500 to-orange-600" },
                  { icon: Star, label: "5-Star Rating", desc: "Client satisfaction", color: "from-purple-500 to-pink-600" }
                ].map((stat, index) => (
                  <motion.div
                    key={index}
                    className="bg-[#6C63FF]/10 border border-[#6C63FF]/20 p-4 sm:p-6 rounded-xl backdrop-blur-sm group"
                    variants={scaleIn}
                    whileHover={{ 
                      scale: 1.05, 
                      backgroundColor: "#6C63FF20",
                      boxShadow: "0 10px 30px rgba(108, 99, 255, 0.2)" 
                    }}
                    transition={{ type: "spring", stiffness: 300 }}
                  >
                    <div className="flex items-center space-x-3">
                      <motion.div 
                        className={`w-8 h-8 sm:w-10 sm:h-10 bg-gradient-to-r ${stat.color} rounded-lg flex items-center justify-center`}
                        whileHover={{ rotate: 360, scale: 1.1 }}
                        transition={{ duration: 0.6 }}
                      >
                        <stat.icon className="w-4 h-4 sm:w-5 sm:h-5 text-white" />
                      </motion.div>
                      <div>
                        <p className="text-[#6C63FF] font-bold text-sm sm:text-base group-hover:text-white transition-colors">
                          {stat.label}
                        </p>
                        <p className="text-gray-400 text-xs sm:text-sm group-hover:text-gray-300 transition-colors">
                          {stat.desc}
                        </p>
                      </div>
                    </div>
                  </motion.div>
                ))}
              </motion.div>
            </motion.div>

            {/* Visual Element */}
            <motion.div 
              className="relative max-w-none mx-auto xl:mx-0"
              variants={slideInRight}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
            >
              <motion.div 
                className="w-full h-64 sm:h-80 md:h-96 lg:h-[500px] xl:h-[600px] bg-gradient-to-br from-[#6C63FF]/20 to-[#9c88ff]/20 rounded-3xl border border-[#6C63FF]/30 backdrop-blur-sm flex items-center justify-center relative overflow-hidden"
                whileHover={{ scale: 1.02, boxShadow: "0 20px 60px rgba(108, 99, 255, 0.2)" }}
                transition={{ duration: 0.4 }}
              >
                <div className="text-center z-10">
                  <motion.div 
                    className="w-16 h-16 sm:w-20 sm:h-20 md:w-24 md:h-24 bg-gradient-to-r from-[#6C63FF] to-[#9c88ff] rounded-2xl flex items-center justify-center mx-auto mb-4 sm:mb-6"
                    animate={{ 
                      scale: [1, 1.1, 1],
                      rotate: [0, 5, -5, 0] 
                    }}
                    transition={{ duration: 4, repeat: Infinity }}
                  >
                    <Brain className="w-8 h-8 sm:w-10 sm:h-10 md:w-12 md:h-12 text-white" />
                  </motion.div>
                  <h3 className="text-white text-lg sm:text-xl md:text-2xl lg:text-3xl font-bold mb-2 sm:mb-4">
                    AI Innovation Hub
                  </h3>
                  <p className="text-gray-400 text-sm sm:text-base md:text-lg">
                    Where ideas transform into intelligent solutions
                  </p>
                </div>

                {/* Animated background elements */}
                <motion.div 
                  className="absolute top-4 right-4 w-12 h-12 sm:w-16 sm:h-16 md:w-20 md:h-20 bg-[#6C63FF]/30 rounded-full"
                  animate={{ 
                    scale: [1, 1.2, 1], 
                    rotate: [0, 360],
                    opacity: [0.3, 0.6, 0.3] 
                  }}
                  transition={{ duration: 10, repeat: Infinity }}
                />
                <motion.div 
                  className="absolute bottom-6 left-6 w-10 h-10 sm:w-12 sm:h-12 md:w-16 md:h-16 bg-[#9c88ff]/30 rounded-full"
                  animate={{ 
                    scale: [1.2, 1, 1.2], 
                    rotate: [360, 0],
                    opacity: [0.6, 0.3, 0.6] 
                  }}
                  transition={{ duration: 8, repeat: Infinity }}
                />
                
                {/* Floating icons */}
                {[Code, Database, Cloud].map((Icon, index) => (
                  <motion.div
                    key={index}
                    className="absolute w-8 h-8 text-[#6C63FF]/50"
                    initial={{ 
                      x: Math.random() * 200,
                      y: Math.random() * 200,
                      opacity: 0
                    }}
                    animate={{
                      x: Math.random() * 300,
                      y: Math.random() * 300,
                      opacity: [0, 0.5, 0],
                      scale: [0.8, 1.2, 0.8]
                    }}
                    transition={{
                      duration: 6 + index * 2,
                      repeat: Infinity,
                      delay: index * 2
                    }}
                  >
                    <Icon className="w-full h-full" />
                  </motion.div>
                ))}
              </motion.div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Highlights Section */}
      <section className="py-16 sm:py-20 md:py-24 lg:py-28 px-4 sm:px-6 md:px-8 lg:px-12 xl:px-16 2xl:px-20 3xl:px-24 relative z-10">
        <motion.div 
          className="text-center mb-12 sm:mb-16 md:mb-20 max-w-none mx-auto"
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          <motion.h2 
            className="text-3xl sm:text-4xl md:text-4xl lg:text-4xl xl:text-4xl 2xl:text-6xl font-bold mb-4 sm:mb-6 text-white bg-gradient-to-r from-white to-[#6C63FF] bg-clip-text text-transparent"
            variants={fadeInUp}
          >
            Highlights of Our AI Product Design
          </motion.h2>
          <motion.p 
            className="text-gray-400 text-base sm:text-lg md:text-xl lg:text-2xl max-w-none lg:max-w-4xl xl:max-w-none mx-auto px-4 sm:px-8"
            variants={fadeInUp}
          >
            From ideation to deployment, we create user-centric AI solutions that scale and transform businesses worldwide.
          </motion.p>
        </motion.div>

        <motion.div 
          className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 gap-6 sm:gap-8 md:gap-10 lg:gap-12 max-w-none mx-auto"
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          {highlights.map((highlight, index) => (
            <motion.div 
              key={index}
              className="group bg-[#1a1a2e]/60 border border-gray-700/50 hover:border-[#6C63FF]/50 p-6 sm:p-8 md:p-10 rounded-2xl shadow-xl backdrop-blur-sm transition-all duration-500 relative overflow-hidden"
              variants={scaleIn}
              whileHover={{ 
                y: -15, 
                scale: 1.03,
                boxShadow: "0 25px 50px rgba(108, 99, 255, 0.15)" 
              }}
              transition={{ type: "spring", stiffness: 300 }}
            >
              {/* Animated background gradient */}
              <motion.div
                className={`absolute inset-0 bg-gradient-to-br ${highlight.gradient} opacity-0 group-hover:opacity-10 transition-opacity duration-500`}
                initial={{ scale: 0 }}
                whileHover={{ scale: 1 }}
                transition={{ duration: 0.6 }}
              />

              <motion.div 
                className="w-12 h-12 sm:w-14 sm:h-14 md:w-16 md:h-16 bg-gradient-to-r from-[#6C63FF] to-[#9c88ff] rounded-2xl flex items-center justify-center mb-4 sm:mb-6 relative z-10"
                whileHover={{ 
                  rotate: 360, 
                  scale: 1.15,
                  boxShadow: "0 0 20px rgba(108, 99, 255, 0.5)" 
                }}
                transition={{ duration: 0.8, type: "spring" }}
              >
                <highlight.icon className="w-6 h-6 sm:w-7 sm:h-7 md:w-8 md:h-8 text-white" />
              </motion.div>

              <h3 className="text-lg sm:text-xl md:text-2xl font-bold text-white mb-2 sm:mb-3 group-hover:text-[#6C63FF] transition-colors duration-300 relative z-10">
                {highlight.title}
              </h3>
              
              <p className="text-gray-400 text-sm sm:text-base md:text-lg leading-relaxed mb-4 sm:mb-6 relative z-10 group-hover:text-gray-300 transition-colors duration-300">
                {highlight.description}
              </p>

              <motion.button 
                className="inline-flex items-center text-[#6C63FF] hover:text-[#9c88ff] font-medium transition-all duration-300 text-sm sm:text-base relative z-10"
                whileHover={{ x: 5 }}
              >
                Get started
                <motion.div
                  animate={{ x: [0, 3, 0] }}
                  transition={{ duration: 1.5, repeat: Infinity }}
                >
                  <ArrowRight className="w-4 h-4 ml-2" />
                </motion.div>
              </motion.button>

              {/* Floating particles in card */}
              {[...Array(3)].map((_, particleIndex) => (
                <motion.div
                  key={particleIndex}
                  className="absolute w-1 h-1 bg-[#6C63FF]/50 rounded-full"
                  animate={{
                    x: [0, Math.random() * 100, 0],
                    y: [0, Math.random() * 100, 0],
                    opacity: [0, 0.8, 0],
                    scale: [0, 1, 0]
                  }}
                  transition={{
                    duration: 4 + particleIndex,
                    repeat: Infinity,
                    delay: particleIndex * 1.5
                  }}
                  style={{
                    left: `${Math.random() * 100}%`,
                    top: `${Math.random() * 100}%`
                  }}
                />
              ))}
            </motion.div>
          ))}
        </motion.div>
      </section>

      {/* AI Solutions Overview Section */}
      <section className="min-h-screen flex flex-col justify-center items-center text-center text-white px-4 sm:px-6 md:px-8 lg:px-12 xl:px-16 2xl:px-20 3xl:px-24 py-16 sm:py-20 md:py-24 relative z-10">
        <motion.div
          className="max-w-none mx-auto"
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          {/* Visual Element */}
          <motion.div 
            className="w-full max-w-sm sm:max-w-md md:max-w-lg lg:max-w-xl xl:max-w-2xl h-48 sm:h-64 md:h-80 lg:h-96 bg-gradient-to-br from-[#6C63FF]/20 to-[#9c88ff]/20 rounded-3xl border border-[#6C63FF]/30 backdrop-blur-sm flex items-center justify-center mb-6 sm:mb-8 md:mb-10 mx-auto relative overflow-hidden"
            variants={scaleIn}
            whileHover={{ 
              scale: 1.05, 
              rotateY: 5,
              boxShadow: "0 30px 80px rgba(108, 99, 255, 0.2)" 
            }}
            transition={{ duration: 0.6, type: "spring" }}
          >
            <div className="text-center z-10">
              <motion.div 
                className="w-16 h-16 sm:w-20 sm:h-20 md:w-24 md:h-24 bg-gradient-to-r from-[#6C63FF] to-[#9c88ff] rounded-2xl flex items-center justify-center mx-auto mb-4"
                animate={{
                  rotate: [0, 360],
                  scale: [1, 1.1, 1]
                }}
                transition={{ duration: 6, repeat: Infinity }}
              >
                <Cpu className="w-8 h-8 sm:w-10 sm:h-10 md:w-12 md:h-12 text-white" />
              </motion.div>
              <h3 className="text-white text-lg sm:text-xl md:text-2xl font-bold mb-2">AI Concept Visualization</h3>
              <p className="text-gray-400 text-sm sm:text-base">Transforming ideas into reality</p>
            </div>

            {/* Enhanced floating elements */}
            <motion.div 
              className="absolute top-4 right-4 w-8 h-8 sm:w-12 sm:h-12 bg-[#6C63FF]/40 rounded-full"
              animate={{ 
                scale: [1, 1.4, 1], 
                opacity: [0.5, 1, 0.5],
                rotate: [0, 180, 360] 
              }}
              transition={{ duration: 4, repeat: Infinity }}
            />
            <motion.div 
              className="absolute bottom-4 left-4 w-6 h-6 sm:w-10 sm:h-10 bg-[#9c88ff]/40 rounded-full"
              animate={{ 
                scale: [1.2, 1, 1.2], 
                opacity: [0.8, 0.3, 0.8],
                rotate: [360, 180, 0] 
              }}
              transition={{ duration: 5, repeat: Infinity }}
            />
          </motion.div>

          <motion.span 
            className="text-[#6C63FF] mb-2 sm:mb-4 uppercase tracking-wide text-xs sm:text-sm font-medium inline-block"
            variants={fadeInUp}
          >
            Overview
          </motion.span>

          <motion.h1 
            className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold mb-4 sm:mb-6 md:mb-8 bg-gradient-to-r from-white to-[#6C63FF] bg-clip-text text-transparent"
            variants={fadeInUp}
          >
            Crafting Cutting-Edge AI Solutions
          </motion.h1>

          <motion.p 
            className="text-gray-400 max-w-none lg:max-w-4xl xl:max-w-none mx-auto mb-6 sm:mb-8 md:mb-10 text-base sm:text-lg md:text-xl lg:text-2xl leading-relaxed px-4 sm:px-8"
            variants={fadeInUp}
          >
            At Opslify, we transform innovative ideas into AI-driven products. Our expertise in machine learning, data analytics, 
            and scalable architecture allows us to deliver cutting-edge solutions tailored to your business needs. From concept 
            validation to product deployment, we ensure a seamless journey toward innovation and success.
          </motion.p>

          <motion.div 
            className="flex flex-col sm:flex-row gap-4 sm:gap-6 justify-center items-center"
            variants={staggerContainer}
          >
            <motion.button 
              className="w-full sm:w-auto inline-flex items-center justify-center bg-gradient-to-r from-[#6C63FF] to-[#9c88ff] hover:from-[#5a52cc] hover:to-[#8876cc] text-white border-0 px-6 sm:px-8 md:px-10 py-3 sm:py-4 rounded-xl text-sm sm:text-base md:text-lg font-medium transition-all duration-300"
              variants={scaleIn}
              whileHover={{ 
                scale: 1.05, 
                boxShadow: "0 20px 40px rgba(108, 99, 255, 0.3)",
                y: -3 
              }}
              whileTap={{ scale: 0.95 }}
            >
              Start Your Project
              <ArrowRight className="w-4 h-4 sm:w-5 sm:h-5 ml-2" />
            </motion.button>
            
          
          </motion.div>
        </motion.div>
      </section>

      {/* Enhanced CTA Section */}
      <section className="py-16 sm:py-20 md:py-24 lg:py-28 px-4 sm:px-6 md:px-8 lg:px-12 xl:px-16 2xl:px-20 3xl:px-24 text-white relative z-10">
        <div className="w-full max-w-none mx-auto">
          <div className="grid grid-cols-1 xl:grid-cols-2 gap-8 sm:gap-12 md:gap-16 lg:gap-20 xl:gap-24 items-center">
            <motion.div
              className="flex flex-col items-start space-y-4 sm:space-y-6 md:space-y-8 max-w-none mx-auto xl:mx-0"
              variants={slideInLeft}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
            >
              <motion.div 
                className="w-12 h-12 sm:w-16 sm:h-16 md:w-20 md:h-20 lg:w-24 lg:h-24 bg-gradient-to-r from-[#6C63FF] to-[#9c88ff] rounded-2xl flex items-center justify-center relative overflow-hidden"
                whileHover={{ 
                  scale: 1.1, 
                  rotate: 360,
                  boxShadow: "0 0 40px rgba(108, 99, 255, 0.6)" 
                }}
                transition={{ duration: 0.8 }}
              >
                <Bot className="w-6 h-6 sm:w-8 sm:h-8 md:w-10 md:h-10 lg:w-12 lg:h-12 text-white z-10" />
                
                {/* Animated background */}
                <motion.div
                  className="absolute inset-0 bg-gradient-to-r from-[#9c88ff] to-[#6C63FF] opacity-0"
                  whileHover={{ opacity: 1 }}
                  transition={{ duration: 0.3 }}
                />
              </motion.div>

              <motion.h2 
                className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-bold bg-gradient-to-r from-white to-[#6C63FF] bg-clip-text text-transparent"
                variants={fadeInUp}
              >
                Ready to Design Your Next AI Product?
              </motion.h2>

              <motion.p 
                className="text-gray-400 text-base sm:text-lg md:text-xl lg:text-2xl max-w-none lg:max-w-2xl leading-relaxed"
                variants={fadeInUp}
              >
                Let Opslify's expert team transform your vision into an intelligent, scalable solution that drives innovation and growth.
              </motion.p>

              <motion.button
                className="px-8 sm:px-10 md:px-12 py-3 sm:py-4 md:py-5 text-sm sm:text-base md:text-lg lg:text-xl font-medium bg-gradient-to-r from-[#6C63FF] to-[#9c88ff] rounded-full text-white shadow-xl transition-all duration-300"
                variants={scaleIn}
                whileHover={{ 
                  scale: 1.05, 
                  boxShadow: "0 25px 50px rgba(108, 99, 255, 0.4)",
                  y: -3 
                }}
                whileTap={{ scale: 0.95 }}
              >
                <span className="flex items-center">
                  Get Started
                  <ArrowRight className="w-4 h-4 sm:w-5 sm:h-5 ml-2" />
                </span>
              </motion.button>
            </motion.div>

            <motion.div
              className="flex flex-col items-start space-y-4 sm:space-y-6 md:space-y-8 max-w-none mx-auto xl:mx-0"
              variants={slideInRight}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
            >
              <motion.div 
                className="w-12 h-12 sm:w-16 sm:h-16 md:w-20 md:h-20 lg:w-24 lg:h-24 bg-gradient-to-r from-[#9c88ff] to-[#6C63FF] rounded-2xl flex items-center justify-center"
                whileHover={{ 
                  scale: 1.1, 
                  rotate: -360,
                  boxShadow: "0 0 40px rgba(156, 136, 255, 0.6)" 
                }}
                transition={{ duration: 0.8 }}
              >
                <Lightbulb className="w-6 h-6 sm:w-8 sm:h-8 md:w-10 md:h-10 lg:w-12 lg:h-12 text-white" />
              </motion.div>

              <motion.h2 
                className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-white"
                variants={fadeInUp}
              >
                Innovative AI Solutions
              </motion.h2>

              <motion.p 
                className="text-gray-400 text-base sm:text-lg md:text-xl lg:text-2xl max-w-none lg:max-w-2xl leading-relaxed"
                variants={fadeInUp}
              >
                Our team specializes in creating advanced AI products that drive efficiency, innovation, and sustainable growth for businesses worldwide.
              </motion.p>

              <motion.div 
                className="grid grid-cols-2 gap-4 sm:gap-6 w-full max-w-md"
                variants={staggerContainer}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
              >
                {[
                  { icon: Globe, label: "Global Reach", color: "from-blue-500 to-cyan-600" },
                  { icon: Shield, label: "Secure Solutions", color: "from-green-500 to-emerald-600" },
                  { icon: Zap, label: "Fast Deployment", color: "from-yellow-500 to-orange-600" },
                  { icon: Star, label: "Premium Quality", color: "from-purple-500 to-pink-600" }
                ].map((item, index) => (
                  <motion.div
                    key={index}
                    className="bg-[#6C63FF]/10 border border-[#6C63FF]/20 p-3 sm:p-4 rounded-xl backdrop-blur-sm text-center group"
                    variants={scaleIn}
                    whileHover={{ 
                      scale: 1.05, 
                      backgroundColor: "#6C63FF20",
                      boxShadow: "0 10px 20px rgba(108, 99, 255, 0.2)" 
                    }}
                  >
                    <motion.div
                      whileHover={{ rotate: 360, scale: 1.2 }}
                      transition={{ duration: 0.6 }}
                    >
                      <item.icon className="w-5 h-5 sm:w-6 sm:h-6 text-[#6C63FF] mx-auto mb-2 group-hover:text-white transition-colors" />
                    </motion.div>
                    <p className="text-white text-xs sm:text-sm font-medium group-hover:text-gray-100 transition-colors">
                      {item.label}
                    </p>
                  </motion.div>
                ))}
              </motion.div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <motion.footer 
        className="relative z-10 w-full px-4 sm:px-6 md:px-8 lg:px-12 xl:px-16 2xl:px-20 3xl:px-24 py-8 sm:py-12 border-t border-gray-800"
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
      >
        <div className="w-full max-w-none mx-auto">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <motion.div 
              className="flex items-center space-x-2 sm:space-x-3 mb-4 md:mb-0"
              whileHover={{ scale: 1.05 }}
            >
              <motion.div 
                className="w-6 h-6 sm:w-8 sm:h-8 bg-gradient-to-r from-[#6C63FF] to-[#9c88ff] rounded-lg flex items-center justify-center"
                whileHover={{ rotate: 360 }}
                transition={{ duration: 0.6 }}
              >
                <Brain className="w-3 h-3 sm:w-5 sm:h-5 text-white" />
              </motion.div>
         
            </motion.div>
            
            <div className="flex items-center space-x-4 sm:space-x-6 text-gray-400">
              {["Privacy", "Terms", "Support"].map((link, index) => (
                <motion.a 
                  key={link}
                  href="#" 
                  className="hover:text-[#6C63FF] transition-colors text-sm sm:text-base"
                  whileHover={{ scale: 1.1, color: "#6C63FF" }}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.1 }}
                >
                  {link}
                </motion.a>
              ))}
            </div>
          </div>
          
          <motion.div 
            className="border-t border-gray-800 mt-6 sm:mt-8 pt-6 sm:pt-8 text-center text-gray-500"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.5 }}
          >
            <p className="text-sm sm:text-base">
              &copy; 2025 Opslify. All rights reserved. Transforming ideas into intelligent products.
            </p>
          </motion.div>
        </div>
      </motion.footer>
    </div>
  );
};

export default AIProductDesign;