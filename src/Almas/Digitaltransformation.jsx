import { motion } from 'motion/react';
import { 
  Brain, 
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
  HeadphonesIcon
} from 'lucide-react';

export default function App() {
  return (
    <div className="w-full font-Poppins min-h-screen bg-black relative overflow-hidden">
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
        className="relative z-10 w-full px-4 sm:px-6 md:px-8 lg:px-12 xl:px-20 2xl:px-24 py-12 sm:py-16 md:py-20 text-center"
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1, delay: 0.2 }}
      >
        <div className="w-full max-w-none xl:max-w-screen-2xl mx-auto">
          <motion.div 
            className="w-full max-w-6xl mx-auto"
            initial={{ scale: 0.9 }}
            animate={{ scale: 1 }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            {/* Logo and Brand */}
            <div className="flex items-center justify-center space-x-2 mb-6 sm:mb-8">
              <div className="w-10 h-10 sm:w-12 sm:h-12 bg-gradient-to-r from-[#6C63FF] to-[#9c88ff] rounded-lg flex items-center justify-center">
                <Brain className="w-5 h-5 sm:w-7 sm:h-7 text-white" />
              </div>
              <span className="text-white text-2xl sm:text-3xl font-bold">Opslify</span>
            </div>

            {/* Badge */}
            <div className="flex justify-center mb-4 sm:mb-6">
              <span className="inline-flex items-center border border-[#6C63FF] text-[#6C63FF] bg-[#6C63FF]/10 px-3 py-1 rounded-full text-xs sm:text-sm">
                <Sparkles className="w-3 h-3 sm:w-4 sm:h-4 mr-1" />
                AI-Powered Digital Transformation
              </span>
            </div>
            
            {/* Main Heading */}
            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl 2xl:text-8xl text-white mb-4 sm:mb-6 font-bold bg-gradient-to-r from-white via-gray-200 to-[#6C63FF] bg-clip-text text-transparent leading-tight">
              Revolutionary AI Services for Digital Excellence
            </h1>
            
            {/* Description */}
            <p className="text-gray-300 text-base sm:text-lg md:text-xl lg:text-2xl xl:text-3xl mb-6 sm:mb-8 max-w-5xl mx-auto leading-relaxed px-4 sm:px-0">
              Transform your business with cutting-edge AI solutions. We deliver intelligent automation, 
              predictive analytics, and seamless digital transformation that drives unprecedented growth and efficiency.
            </p>
            
            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center items-center px-4 sm:px-0">
              <button className="w-full sm:w-auto inline-flex items-center justify-center bg-gradient-to-r from-[#6C63FF] to-[#9c88ff] hover:from-[#5a52cc] hover:to-[#8876cc] text-white border-0 px-6 sm:px-8 py-3 rounded-lg text-sm sm:text-base font-medium transition-all duration-200 transform hover:scale-105">
                Explore Our Services
                <ArrowRight className="w-4 h-4 sm:w-5 sm:h-5 ml-2" />
              </button>
              <button className="w-full sm:w-auto inline-flex items-center justify-center border border-[#6C63FF] text-[#6C63FF] hover:bg-[#6C63FF] hover:text-white px-6 sm:px-8 py-3 rounded-lg text-sm sm:text-base font-medium transition-all duration-200 bg-transparent">
                Get Started
              </button>
            </div>
          </motion.div>
        </div>
      </motion.section>

      {/* Stats Section */}
      <motion.section 
        className="relative w-full z-10 px-4 sm:px-6 md:px-8 lg:px-12 xl:px-20 2xl:px-24 py-8 sm:py-12 md:py-16"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
      >
        <div className="w-full max-w-none xl:max-w-screen-2xl mx-auto">
          <div className="w-full max-w-7xl mx-auto">
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 sm:gap-8 lg:gap-12 xl:gap-16 place-items-center">
              {[
                { icon: TrendingUp, number: "40+", label: "AI Projects Delivered", color: "from-[#6C63FF] to-[#9c88ff]" },
                { icon: Users, number: "150+", label: "Software development experts", color: "from-[#9c88ff] to-[#6C63FF]" },
                { icon: Award, number: "99.9%", label: "System Uptime", color: "from-[#6C63FF] to-[#9c88ff]" }
              ].map((stat, index) => (
                <motion.div
                  key={index}
                  className="text-center w-full flex flex-col items-center"
                  initial={{ opacity: 0, y: 50 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.2 }}
                  viewport={{ once: true }}
                >
                  <div className={`w-12 h-12 sm:w-16 sm:h-16 lg:w-20 lg:h-20 xl:w-24 xl:h-24 bg-gradient-to-r ${stat.color} rounded-xl sm:rounded-2xl flex items-center justify-center mx-auto mb-3 sm:mb-4`}>
                    <stat.icon className="w-6 h-6 sm:w-8 sm:h-8 lg:w-10 lg:h-10 xl:w-12 xl:h-12 text-white" />
                  </div>
                  <h3 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl text-white font-bold mb-1 sm:mb-2">{stat.number}</h3>
                  <p className="text-gray-400 text-sm sm:text-base lg:text-lg xl:text-xl text-center px-2">{stat.label}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </motion.section>

      {/* Services Section */}
      <motion.section 
        id="services"
        className="relative z-10 w-full px-4 sm:px-6 md:px-8 lg:px-12 xl:px-20 2xl:px-24 py-12 sm:py-16 md:py-20"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
      >
        <div className="w-full max-w-none xl:max-w-screen-2xl mx-auto">
          {/* Section Header */}
          <motion.div 
            className="text-center mb-12 sm:mb-16 max-w-6xl mx-auto"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl 2xl:text-7xl text-white font-bold mb-4 sm:mb-6 leading-tight">
              Comprehensive AI Solutions for
              <span className="bg-gradient-to-r from-[#6C63FF] to-[#9c88ff] bg-clip-text text-transparent"> Digital Excellence</span>
            </h2>
            <p className="text-gray-400 text-base sm:text-lg lg:text-xl xl:text-2xl max-w-4xl mx-auto px-4 sm:px-0">
              Harness the power of artificial intelligence with our comprehensive suite of digital transformation services 
              designed to accelerate your business growth and operational efficiency.
            </p>
          </motion.div>

          {/* Services Grid */}
          <div className="w-full max-w-8xl mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6 sm:gap-8 lg:gap-10 place-items-center">
              {[
                {
                  icon: Brain,
                  title: "AI Strategy & Consulting",
                  description: "Comprehensive AI roadmaps and strategic planning to transform your business operations with intelligent solutions.",
                  features: ["AI Roadmap Development", "Technology Assessment", "ROI Analysis"]
                },
                {
                  icon: Cpu,
                  title: "Machine Learning Solutions",
                  description: "Custom ML models and algorithms designed to solve complex business challenges and automate decision-making.",
                  features: ["Predictive Analytics", "Pattern Recognition", "Automated Insights"]
                },
                {
                  icon: Zap,
                  title: "Process Automation",
                  description: "Intelligent automation solutions that streamline workflows and eliminate repetitive tasks across your organization.",
                  features: ["Workflow Optimization", "RPA Implementation", "Smart Integrations"]
                },
                {
                  icon: Shield,
                  title: "AI Security & Compliance",
                  description: "Advanced security frameworks and compliance solutions powered by AI to protect your digital assets.",
                  features: ["Threat Detection", "Compliance Monitoring", "Risk Assessment"]
                },
                {
                  icon: Globe,
                  title: "Cloud AI Integration",
                  description: "Seamless integration of AI capabilities into your existing cloud infrastructure for scalable solutions.",
                  features: ["Cloud Migration", "Scalable Architecture", "API Development"]
                },
                {
                  icon: Target,
                  title: "Data Analytics & Insights",
                  description: "Transform raw data into actionable insights with advanced analytics and visualization tools.",
                  features: ["Real-time Analytics", "Custom Dashboards", "Predictive Modeling"]
                }
              ].map((service, index) => (
                <motion.div
                  key={index}
                  className="w-full max-w-sm xl:max-w-md mx-auto"
                  initial={{ opacity: 0, y: 50 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  whileHover={{ y: -10 }}
                >
                  <div className="h-full bg-gray-900/50 border border-gray-700 hover:border-[#6C63FF]/50 transition-all duration-300 backdrop-blur-sm rounded-lg shadow-lg">
                    <div className="p-4 sm:p-6 lg:p-8">
                      {/* Service Icon */}
                      <div className="w-10 h-10 sm:w-12 sm:h-12 lg:w-14 lg:h-14 bg-gradient-to-r from-[#6C63FF] to-[#9c88ff] rounded-xl flex items-center justify-center mb-3 sm:mb-4">
                        <service.icon className="w-5 h-5 sm:w-6 sm:h-6 lg:w-7 lg:h-7 text-white" />
                      </div>
                      
                      {/* Service Title */}
                      <h3 className="text-white text-lg sm:text-xl lg:text-2xl font-bold mb-2 sm:mb-3">{service.title}</h3>
                      
                      {/* Service Description */}
                      <p className="text-gray-400 mb-3 sm:mb-4 leading-relaxed text-sm sm:text-base lg:text-lg">{service.description}</p>
                      
                      {/* Service Features */}
                      <div className="space-y-2 mb-4 sm:mb-6">
                        {service.features.map((feature, featureIndex) => (
                          <div key={featureIndex} className="flex items-center text-xs sm:text-sm lg:text-base text-gray-300">
                            <CheckCircle className="w-3 h-3 sm:w-4 sm:h-4 lg:w-5 lg:h-5 text-[#6C63FF] mr-2 flex-shrink-0" />
                            {feature}
                          </div>
                        ))}
                      </div>
                      
                      {/* CTA Button */}
                      <button className="w-full border border-[#6C63FF]/30 text-[#6C63FF] hover:bg-[#6C63FF] hover:text-white px-3 sm:px-4 py-2 sm:py-3 rounded-lg transition-all duration-200 bg-transparent inline-flex items-center justify-center text-sm sm:text-base lg:text-lg font-medium">
                        Get started
                        <ArrowRight className="w-3 h-3 sm:w-4 sm:h-4 lg:w-5 lg:h-5 ml-2" />
                      </button>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </motion.section>

      {/* Why Choose Opslify Section */}
      <motion.section 
        className="relative z-10 w-full px-4 sm:px-6 md:px-8 lg:px-12 xl:px-20 2xl:px-24 py-12 sm:py-16 md:py-20"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
      >
        <div className="w-full max-w-none xl:max-w-screen-2xl mx-auto">
          {/* Section Header */}
          <motion.div 
            className="text-center mb-12 sm:mb-16 max-w-6xl mx-auto"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl 2xl:text-7xl text-white font-bold mb-4 sm:mb-6 leading-tight">
              Why Choose 
              <span className="bg-gradient-to-r from-[#6C63FF] to-[#9c88ff] bg-clip-text text-transparent"> Opslify?</span>
            </h2>
            <p className="text-gray-400 text-base sm:text-lg lg:text-xl xl:text-2xl max-w-4xl mx-auto px-4 sm:px-0">
              We're not just another AI company. We're your strategic partner in digital transformation, 
              committed to delivering exceptional results that drive your business forward.
            </p>
          </motion.div>

          <div className="w-full max-w-8xl mx-auto">
            <div className="grid grid-cols-1 xl:grid-cols-2 gap-8 sm:gap-12 lg:gap-16 xl:gap-20 items-center">
              {/* Benefits List */}
              <motion.div 
                className="space-y-6 sm:space-y-8 lg:space-y-10 w-full max-w-3xl mx-auto xl:mx-0"
                initial={{ opacity: 0, x: -50 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8 }}
                viewport={{ once: true }}
              >
                {[
                  {
                    icon: Lightbulb,
                    title: "Innovation-First Approach",
                    description: "We stay ahead of the curve with cutting-edge AI technologies and methodologies, ensuring your business benefits from the latest innovations in artificial intelligence."
                  },
                  {
                    icon: Clock,
                    title: "Rapid Implementation",
                    description: "Our proven frameworks and agile methodologies enable faster deployment of AI solutions, reducing time-to-market and accelerating your digital transformation journey."
                  },
                  {
                    icon: Star,
                    title: "Proven Track Record",
                    description: "With 300+ successful AI projects and 99.9% system uptime, we have the experience and reliability to deliver exceptional results for businesses of all sizes."
                  },
                  {
                    icon: HeadphonesIcon,
                    title: "24/7 Expert Support",
                    description: "Our dedicated team of AI specialists provides round-the-clock support, ensuring your systems run smoothly and your team has the guidance they need."
                  }
                ].map((benefit, index) => (
                  <motion.div
                    key={index}
                    className="flex items-start space-x-3 sm:space-x-4 lg:space-x-6"
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: index * 0.1 }}
                    viewport={{ once: true }}
                  >
                    <div className="w-10 h-10 sm:w-12 sm:h-12 lg:w-14 lg:h-14 xl:w-16 xl:h-16 bg-gradient-to-r from-[#6C63FF] to-[#9c88ff] rounded-xl flex items-center justify-center flex-shrink-0">
                      <benefit.icon className="w-5 h-5 sm:w-6 sm:h-6 lg:w-7 lg:h-7 xl:w-8 xl:h-8 text-white" />
                    </div>
                    <div className="flex-1">
                      <h3 className="text-white text-lg sm:text-xl lg:text-2xl xl:text-3xl font-bold mb-1 sm:mb-2">{benefit.title}</h3>
                      <p className="text-gray-400 text-sm sm:text-base lg:text-lg xl:text-xl leading-relaxed">{benefit.description}</p>
                    </div>
                  </motion.div>
                ))}
              </motion.div>

              {/* Right side - Stats Cards */}
              <motion.div 
                className="relative w-full max-w-3xl mx-auto xl:mx-0"
                initial={{ opacity: 0, x: 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8, delay: 0.2 }}
                viewport={{ once: true }}
              >
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 lg:gap-8">
                  {/* Floating Stats Cards */}
                  <motion.div 
                    className="bg-gray-900/90 backdrop-blur-sm border border-[#6C63FF]/30 rounded-xl p-6 lg:p-8"
                    animate={{ y: [-5, 5, -5] }}
                    transition={{ duration: 4, repeat: Infinity }}
                  >
                    <div className="flex items-center space-x-3 lg:space-x-4 mb-4">
                      <div className="w-10 h-10 lg:w-12 lg:h-12 bg-gradient-to-r from-[#6C63FF] to-[#9c88ff] rounded-lg flex items-center justify-center">
                        <TrendingUp className="w-5 h-5 lg:w-6 lg:h-6 text-white" />
                      </div>
                      <div>
                        <p className="text-[#6C63FF] text-lg lg:text-xl font-bold">98% Success Rate</p>
                        <p className="text-gray-400 text-sm lg:text-base">Project Completion</p>
                      </div>
                    </div>
                    <div className="text-center">
                      <p className="text-white text-2xl lg:text-3xl font-bold mb-2">40+</p>
                      <p className="text-gray-400 text-sm lg:text-base">Completed Projects</p>
                    </div>
                  </motion.div>

                  <motion.div 
                    className="bg-gray-900/90 backdrop-blur-sm border border-[#6C63FF]/30 rounded-xl p-6 lg:p-8"
                    animate={{ y: [5, -5, 5] }}
                    transition={{ duration: 3, repeat: Infinity }}
                  >
                    <div className="flex items-center space-x-3 lg:space-x-4 mb-4">
                      <div className="w-10 h-10 lg:w-12 lg:h-12 bg-gradient-to-r from-[#6C63FF] to-[#9c88ff] rounded-lg flex items-center justify-center">
                        <Award className="w-5 h-5 lg:w-6 lg:h-6 text-white" />
                      </div>
                      <div>
                        <p className="text-[#6C63FF] text-lg lg:text-xl font-bold">1+ Years</p>
                        <p className="text-gray-400 text-sm lg:text-base">AI Expertise</p>
                      </div>
                    </div>
                    <div className="text-center">
                      <p className="text-white text-2xl lg:text-3xl font-bold mb-2">150+</p>
                      <p className="text-gray-400 text-sm lg:text-base">Expert Developers</p>
                    </div>
                  </motion.div>

                  <motion.div 
                    className="bg-gray-900/90 backdrop-blur-sm border border-[#6C63FF]/30 rounded-xl p-6 lg:p-8"
                    animate={{ y: [-3, 3, -3] }}
                    transition={{ duration: 5, repeat: Infinity }}
                  >
                    <div className="flex items-center space-x-3 lg:space-x-4 mb-4">
                      <div className="w-10 h-10 lg:w-12 lg:h-12 bg-gradient-to-r from-[#6C63FF] to-[#9c88ff] rounded-lg flex items-center justify-center">
                        <Users className="w-5 h-5 lg:w-6 lg:h-6 text-white" />
                      </div>
                      <div>
                        <p className="text-[#6C63FF] text-lg lg:text-xl font-bold">24/7 Support</p>
                        <p className="text-gray-400 text-sm lg:text-base">Always Available</p>
                      </div>
                    </div>
                    <div className="text-center">
                      <p className="text-white text-2xl lg:text-3xl font-bold mb-2">99.9%</p>
                      <p className="text-gray-400 text-sm lg:text-base">System Uptime</p>
                    </div>
                  </motion.div>

                  <motion.div 
                    className="bg-gray-900/90 backdrop-blur-sm border border-[#6C63FF]/30 rounded-xl p-6 lg:p-8"
                    animate={{ y: [3, -3, 3] }}
                    transition={{ duration: 6, repeat: Infinity }}
                  >
                    <div className="flex items-center space-x-3 lg:space-x-4 mb-4">
                      <div className="w-10 h-10 lg:w-12 lg:h-12 bg-gradient-to-r from-[#6C63FF] to-[#9c88ff] rounded-lg flex items-center justify-center">
                        <Globe className="w-5 h-5 lg:w-6 lg:h-6 text-white" />
                      </div>
                      <div>
                        <p className="text-[#6C63FF] text-lg lg:text-xl font-bold">Global Reach</p>
                        <p className="text-gray-400 text-sm lg:text-base">Worldwide Service</p>
                      </div>
                    </div>
                    
                  </motion.div>
                </div>
              </motion.div>
            </div>
          </div>
        </div>
      </motion.section>

      {/* CTA Section */}
      <motion.section 
        className="relative z-10 w-full px-4 sm:px-6 md:px-8 lg:px-12 xl:px-20 2xl:px-24 py-12 sm:py-16 md:py-20"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
      >
        <div className="w-full max-w-none xl:max-w-screen-2xl mx-auto">
          <div className="w-full max-w-6xl mx-auto text-center">
            <motion.div
              className="bg-gradient-to-r from-[#6C63FF]/10 to-[#9c88ff]/10 rounded-2xl sm:rounded-3xl p-6 sm:p-12 lg:p-16 xl:p-20 border border-[#6C63FF]/20 backdrop-blur-sm"
              initial={{ scale: 0.9, opacity: 0 }}
              whileInView={{ scale: 1, opacity: 1 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl text-white font-bold mb-4 sm:mb-6 leading-tight">
                Ready to Transform Your Business with AI?
              </h2>
              <p className="text-gray-400 text-base sm:text-lg lg:text-xl xl:text-2xl mb-6 sm:mb-8 max-w-4xl mx-auto px-4 sm:px-0">
                Join hundreds of forward-thinking companies that have already transformed their operations with our AI solutions.
              </p>
              
              <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center items-center px-4 sm:px-0">
                <button className="w-full sm:w-auto inline-flex items-center justify-center bg-gradient-to-r from-[#6C63FF] to-[#9c88ff] hover:from-[#5a52cc] hover:to-[#8876cc] text-white border-0 px-6 sm:px-8 lg:px-10 py-3 lg:py-4 rounded-lg text-sm sm:text-base lg:text-lg font-medium transition-all duration-200 transform hover:scale-105">
                  Start Your AI Journey
                  <ArrowRight className="w-4 h-4 sm:w-5 sm:h-5 lg:w-6 lg:h-6 ml-2" />
                </button>
            
              </div>
            </motion.div>
          </div>
        </div>
      </motion.section>

      {/* Footer */}
      <footer className="relative z-10 w-full px-4 sm:px-6 md:px-8 lg:px-12 xl:px-20 2xl:px-24 py-8 sm:py-12 border-t border-gray-800">
        <div className="w-full max-w-none xl:max-w-screen-2xl mx-auto">
          <div className="w-full max-w-6xl mx-auto">
            <div className="flex flex-col md:flex-row justify-between items-center">
              <div className="flex items-center space-x-2 mb-4 md:mb-0">
             
              </div>
              
              <div className="flex items-center space-x-4 sm:space-x-6 text-gray-400">
                <a href="#" className="hover:text-[#6C63FF] transition-colors text-sm sm:text-base">Privacy</a>
                <a href="#" className="hover:text-[#6C63FF] transition-colors text-sm sm:text-base">Terms</a>
                <a href="#" className="hover:text-[#6C63FF] transition-colors text-sm sm:text-base">Support</a>
              </div>
            </div>
            
            <div className="border-t border-gray-800 mt-6 sm:mt-8 pt-6 sm:pt-8 text-center text-gray-500">
              <p className="text-sm sm:text-base">&copy; 2025 Opslify. All rights reserved. Transforming businesses with AI excellence.</p>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}