import { motion } from 'motion/react';
import { useState, useEffect } from 'react';
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
  HeadphonesIcon,
  BarChart3,
  Database,
  Code,
  Gamepad2,
  Trophy,
  Mail,
  Phone,
  MapPin,
  Send,
  Calendar,
  Quote
} from 'lucide-react';

export default function App() {
  const [countdown, setCountdown] = useState({
    years: 0,
    months: 0,
    days: 0,
    hours: 0
  });

  const [contactForm, setContactForm] = useState({
    name: '',
    email: '',
    message: ''
  });

  // Countdown timer effect
  useEffect(() => {
    const targetDate = new Date('2020-01-01').getTime();
    
    const updateCountdown = () => {
      const now = new Date().getTime();
      const difference = now - targetDate;
      
      const years = Math.floor(difference / (1000 * 60 * 60 * 24 * 365));
      const months = Math.floor((difference % (1000 * 60 * 60 * 24 * 365)) / (1000 * 60 * 60 * 24 * 30));
      const days = Math.floor((difference % (1000 * 60 * 60 * 24 * 30)) / (1000 * 60 * 60 * 24));
      const hours = Math.floor((difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
      
      setCountdown({ years, months, days, hours });
    };

    updateCountdown();
    const interval = setInterval(updateCountdown, 1000 * 60 * 60); // Update every hour
    
    return () => clearInterval(interval);
  }, []);

  const handleContactSubmit = (e) => {
    e.preventDefault();
    console.log('Contact form submitted:', contactForm);
    // Handle form submission here
    setContactForm({ name: '', email: '', message: '' });
  };

  return (
    <div className="w-full m1-150 min-h-screen bg-black relative overflow-hidden">
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

      {/* Navigation */}
      <nav className="fixed top-0 w-full z-50 bg-black/80 backdrop-blur-sm border-b border-gray-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center py-4">
            <div className="flex items-center space-x-2">
              <div className="w-8 h-8 bg-gradient-to-r from-[#6C63FF] to-[#9c88ff] rounded-lg flex items-center justify-center">
                <Brain className="w-5 h-5 text-white" />
              </div>
              <span className="text-white text-xl font-bold">Opslify</span>
            </div>
            
            <div className="hidden md:flex space-x-8">
              {['Services', 'Automation', 'Analytics', 'About', 'Contact'].map((item) => (
                <a key={item} href={`#${item.toLowerCase()}`} className="text-gray-300 hover:text-[#6C63FF] transition-colors">
                  {item}
                </a>
              ))}
            </div>

            <button className="bg-gradient-to-r from-[#6C63FF] to-[#9c88ff] text-white px-6 py-2 rounded-lg hover:opacity-90 transition-opacity">
              Get Started
            </button>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <motion.section 
        id="hero"
        className="relative z-10 w-full min-h-screen flex items-center justify-center text-center px-4 sm:px-6 lg:px-8 xl:px-12 py-20 pt-32"
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1, delay: 0.2 }}
      >
        <div className="w-full max-w-7xl mx-auto flex flex-col items-center justify-center">
          <motion.div 
            className="w-full max-w-6xl mx-auto flex flex-col items-center justify-center"
            initial={{ scale: 0.9 }}
            animate={{ scale: 1 }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            <div className="flex justify-center mb-6">
              <span className="inline-flex items-center border border-[#6C63FF] text-[#6C63FF] bg-[#6C63FF]/10 px-4 py-2 rounded-full text-sm backdrop-blur-sm">
                <Sparkles className="w-4 h-4 mr-2" />
                AI-Powered Digital Transformation
              </span>
            </div>
            
            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl 2xl:text-8xl text-white mb-6 font-bold bg-gradient-to-r from-white via-gray-200 to-[#6C63FF] bg-clip-text text-transparent text-center leading-tight">
              AI-Powered Solutions <br className="hidden sm:block" />
              For The Future
            </h1>
            
            <p className="text-gray-300 text-base sm:text-lg md:text-xl lg:text-2xl mb-8 max-w-5xl mx-auto leading-relaxed text-center px-4">
              We help businesses build intelligent, scalable, and modern applications using AI & automation
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center w-full max-w-lg mx-auto">
              <motion.button 
                className="w-full sm:w-auto inline-flex items-center justify-center bg-gradient-to-r from-[#6C63FF] to-[#9c88ff] hover:from-[#5a52cc] hover:to-[#8876cc] text-white border-0 px-8 py-3 rounded-lg text-base font-medium transition-all duration-200"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                Explore Our Services
                <ArrowRight className="w-5 h-5 ml-2" />
              </motion.button>
              <motion.button 
                className="w-full sm:w-auto inline-flex items-center justify-center border border-[#6C63FF] text-[#6C63FF] hover:bg-[#6C63FF] hover:text-white px-8 py-3 rounded-lg text-base font-medium transition-all duration-200 bg-transparent"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                Watch Demo
              </motion.button>
            </div>
          </motion.div>

          {/* Hero Stats */}
          <motion.div 
            className="mt-20 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 lg:gap-12 max-w-4xl mx-auto w-full"
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 1 }}
          >
            {[
              { icon: TrendingUp, number: "40+", label: "AI Projects Delivered" },
              { icon: Users, number: "100+", label: "Global Clients Served" },
              { icon: Award, number: "99.9%", label: "System Uptime" }
            ].map((stat, index) => (
              <motion.div
                key={index}
                className="text-center flex flex-col items-center justify-center"
                whileHover={{ scale: 1.05 }}
                transition={{ type: "spring", stiffness: 300 }}
              >
                <div className="w-16 h-16 bg-gradient-to-r from-[#6C63FF] to-[#9c88ff] rounded-2xl flex items-center justify-center mx-auto mb-4">
                  <stat.icon className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-2xl sm:text-3xl md:text-4xl text-white font-bold mb-2">{stat.number}</h3>
                <p className="text-gray-400 text-center">{stat.label}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </motion.section>

      {/* AI Services Section */}
      <motion.section 
        id="services"
        className="relative z-10 w-full px-4 sm:px-6 lg:px-8 xl:px-12 py-16 sm:py-20"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
      >
        <div className="w-full max-w-7xl mx-auto">
          <motion.div 
            className="text-center mb-16 max-w-6xl mx-auto"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl text-white font-bold mb-6 text-center">
              Comprehensive AI Solutions for
              <span className="bg-gradient-to-r from-[#6C63FF] to-[#9c88ff] bg-clip-text text-transparent"> Digital Excellence</span>
            </h2>
            <p className="text-gray-400 text-base sm:text-lg lg:text-xl max-w-4xl mx-auto text-center">
              Harness the power of artificial intelligence with our comprehensive suite of digital transformation services 
              designed to accelerate your business growth and operational efficiency.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8 place-items-center">
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
                className="w-full max-w-sm mx-auto"
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                whileHover={{ y: -10, scale: 1.02 }}
              >
                <div className="h-full bg-gray-900/50 border border-gray-700 hover:border-[#6C63FF]/50 transition-all duration-300 backdrop-blur-sm rounded-lg shadow-lg group">
                  <div className="p-6 text-center">
                    <motion.div 
                      className="w-12 h-12 bg-gradient-to-r from-[#6C63FF] to-[#9c88ff] rounded-xl flex items-center justify-center mb-4 mx-auto"
                      whileHover={{ rotate: 360, scale: 1.1 }}
                      transition={{ duration: 0.6 }}
                    >
                      <service.icon className="w-6 h-6 text-white" />
                    </motion.div>
                    
                    <h3 className="text-white text-lg sm:text-xl font-bold mb-3 text-center group-hover:text-[#6C63FF] transition-colors">
                      {service.title}
                    </h3>
                    <p className="text-gray-400 mb-4 leading-relaxed text-center text-sm sm:text-base group-hover:text-gray-300 transition-colors">
                      {service.description}
                    </p>
                    
                    <div className="space-y-2 mb-6">
                      {service.features.map((feature, featureIndex) => (
                        <div key={featureIndex} className="flex items-center justify-center text-xs sm:text-sm text-gray-300">
                          <CheckCircle className="w-4 h-4 text-[#6C63FF] mr-2 flex-shrink-0" />
                          <span className="text-center">{feature}</span>
                        </div>
                      ))}
                    </div>
                    
                    <motion.button 
                      className="w-full border border-[#6C63FF]/30 text-[#6C63FF] hover:bg-[#6C63FF] hover:text-white px-4 py-2 rounded-lg transition-all duration-200 bg-transparent inline-flex items-center justify-center text-sm sm:text-base font-medium"
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                    >
                      Learn More
                      <ArrowRight className="w-4 h-4 ml-2" />
                    </motion.button>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </motion.section>

      {/* AI Automation Section */}
      <motion.section 
        id="automation"
        className="relative z-10 w-full px-4 sm:px-6 lg:px-8 xl:px-12 py-16 sm:py-20"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
      >
        <div className="w-full max-w-7xl mx-auto">
          <motion.div 
            className="text-center mb-16"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl text-white font-bold mb-6 text-center">
              <span className="bg-gradient-to-r from-[#6C63FF] to-[#9c88ff] bg-clip-text text-transparent">AI Automation</span> Solutions
            </h2>
            <p className="text-gray-400 text-base sm:text-lg lg:text-xl max-w-4xl mx-auto text-center">
              Streamline your operations with intelligent automation that works 24/7 to optimize your business processes.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <motion.div
              className="flex flex-col items-center lg:items-start text-center lg:text-left"
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <div className="space-y-8 max-w-md lg:max-w-none mx-auto lg:mx-0">
                {[
                  {
                    icon: Zap,
                    title: "Workflow Automation",
                    description: "Automate repetitive tasks and streamline complex workflows with AI-powered solutions."
                  },
                  {
                    icon: Code,
                    title: "Smart Integrations",
                    description: "Connect all your systems with intelligent APIs and seamless data synchronization."
                  },
                  {
                    icon: Database,
                    title: "Data Processing",
                    description: "Process massive datasets automatically with machine learning algorithms."
                  }
                ].map((feature, index) => (
                  <motion.div
                    key={index}
                    className="flex flex-col lg:flex-row items-center lg:items-start space-y-4 lg:space-y-0 lg:space-x-4 text-center lg:text-left"
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: index * 0.2 }}
                    viewport={{ once: true }}
                  >
                    <motion.div 
                      className="w-12 h-12 bg-gradient-to-r from-[#6C63FF] to-[#9c88ff] rounded-xl flex items-center justify-center flex-shrink-0"
                      whileHover={{ rotate: 360, scale: 1.1 }}
                      transition={{ duration: 0.6 }}
                    >
                      <feature.icon className="w-6 h-6 text-white" />
                    </motion.div>
                    <div>
                      <h3 className="text-white text-xl font-bold mb-2">{feature.title}</h3>
                      <p className="text-gray-400 leading-relaxed">{feature.description}</p>
                    </div>
                  </motion.div>
                ))}
              </div>
            </motion.div>

            <motion.div
              className="relative flex justify-center"
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              viewport={{ once: true }}
            >
              <div className="bg-gradient-to-br from-[#6C63FF]/20 to-[#9c88ff]/20 rounded-3xl border border-[#6C63FF]/30 p-8 backdrop-blur-sm max-w-md mx-auto">
                <div className="text-center">
                  <motion.div
                    className="w-20 h-20 bg-gradient-to-r from-[#6C63FF] to-[#9c88ff] rounded-2xl flex items-center justify-center mx-auto mb-6"
                    animate={{ rotate: [0, 360] }}
                    transition={{ duration: 10, repeat: Infinity, ease: "linear" }}
                  >
                    <Cpu className="w-10 h-10 text-white" />
                  </motion.div>
                  <h3 className="text-white text-2xl font-bold mb-4">Automation Dashboard</h3>
                  <p className="text-gray-400 mb-6">Monitor and control all your automated processes in real-time</p>
                  
                  <div className="grid grid-cols-2 gap-4">
                    {[
                      { label: "Tasks Automated", value: "10,000+" },
                      { label: "Time Saved", value: "500hrs" },
                      { label: "Accuracy Rate", value: "99.8%" },
                      { label: "Cost Reduction", value: "45%" }
                    ].map((stat, index) => (
                      <motion.div
                        key={index}
                        className="bg-black/20 rounded-lg p-3 text-center"
                        whileHover={{ scale: 1.05 }}
                        transition={{ type: "spring", stiffness: 300 }}
                      >
                        <div className="text-[#6C63FF] font-bold text-lg">{stat.value}</div>
                        <div className="text-gray-400 text-sm">{stat.label}</div>
                      </motion.div>
                    ))}
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </motion.section>

      {/* Data Analytics Engineering Section */}
      <motion.section 
        id="analytics"
        className="relative z-10 w-full px-4 sm:px-6 lg:px-8 xl:px-12 py-16 sm:py-20"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
      >
        <div className="w-full max-w-7xl mx-auto">
          <motion.div 
            className="text-center mb-16"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl text-white font-bold mb-6 text-center">
              Data Analytics &
              <span className="bg-gradient-to-r from-[#6C63FF] to-[#9c88ff] bg-clip-text text-transparent"> Engineering</span>
            </h2>
            <p className="text-gray-400 text-base sm:text-lg lg:text-xl max-w-4xl mx-auto text-center">
              Transform raw data into actionable insights with our advanced analytics and engineering solutions.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-12 place-items-center">
            {[
              { icon: BarChart3, title: "Real-time Analytics", value: "Live Data" },
              { icon: Database, title: "Data Pipeline", value: "Automated" },
              { icon: Target, title: "Accuracy Rate", value: "99.9%" },
              { icon: TrendingUp, title: "Performance", value: "+250%" }
            ].map((metric, index) => (
              <motion.div
                key={index}
                className="bg-gray-900/50 border border-gray-700 rounded-lg p-6 text-center w-full max-w-xs"
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                whileHover={{ y: -10, scale: 1.05 }}
              >
                <motion.div
                  className="w-12 h-12 bg-gradient-to-r from-[#6C63FF] to-[#9c88ff] rounded-xl flex items-center justify-center mx-auto mb-4"
                  whileHover={{ rotate: 360 }}
                  transition={{ duration: 0.6 }}
                >
                  <metric.icon className="w-6 h-6 text-white" />
                </motion.div>
                <h3 className="text-white font-bold mb-2">{metric.title}</h3>
                <p className="text-[#6C63FF] text-lg font-bold">{metric.value}</p>
              </motion.div>
            ))}
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 place-items-center">
            {[
              {
                title: "Data Collection",
                description: "Gather data from multiple sources including APIs, databases, and real-time streams.",
                features: ["Multi-source Integration", "Real-time Streaming", "Data Validation"]
              },
              {
                title: "Processing & Analysis",
                description: "Advanced algorithms and machine learning models to process and analyze your data.",
                features: ["ML Processing", "Pattern Recognition", "Predictive Modeling"]
              },
              {
                title: "Insights & Reporting",
                description: "Beautiful dashboards and automated reports to help you make data-driven decisions.",
                features: ["Interactive Dashboards", "Automated Reports", "Custom Visualizations"]
              }
            ].map((stage, index) => (
              <motion.div
                key={index}
                className="bg-gradient-to-br from-gray-900/50 to-gray-800/30 border border-gray-700 rounded-lg p-6 text-center w-full max-w-sm"
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.2 }}
                viewport={{ once: true }}
                whileHover={{ scale: 1.02, borderColor: "#6C63FF" }}
              >
                <h3 className="text-white text-xl font-bold mb-4 text-center">{stage.title}</h3>
                <p className="text-gray-400 mb-6 text-center">{stage.description}</p>
                <ul className="space-y-2">
                  {stage.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-center justify-center text-sm text-gray-300">
                      <CheckCircle className="w-4 h-4 text-[#6C63FF] mr-2 flex-shrink-0" />
                      <span className="text-center">{feature}</span>
                    </li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </div>
        </div>
      </motion.section>

      {/* Gamification Section */}
      <motion.section 
        id="gamification"
        className="relative z-10 w-full px-4 sm:px-6 lg:px-8 xl:px-12 py-16 sm:py-20"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
      >
        <div className="w-full max-w-7xl mx-auto">
          <motion.div 
            className="text-center mb-16"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl text-white font-bold mb-6 text-center">
              <span className="bg-gradient-to-r from-[#6C63FF] to-[#9c88ff] bg-clip-text text-transparent">Gamification</span> Solutions
            </h2>
            <p className="text-gray-400 text-base sm:text-lg lg:text-xl max-w-4xl mx-auto text-center">
              Boost engagement and motivation with AI-powered gamification that transforms user experiences.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <motion.div
              className="flex justify-center"
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <div className="bg-gradient-to-br from-[#6C63FF]/20 to-[#9c88ff]/20 rounded-3xl border border-[#6C63FF]/30 p-8 backdrop-blur-sm max-w-md mx-auto">
                <div className="text-center mb-8">
                  <motion.div
                    className="w-20 h-20 bg-gradient-to-r from-[#6C63FF] to-[#9c88ff] rounded-2xl flex items-center justify-center mx-auto mb-6"
                    animate={{ 
                      scale: [1, 1.1, 1],
                      rotate: [0, 5, -5, 0]
                    }}
                    transition={{ duration: 3, repeat: Infinity }}
                  >
                    <Gamepad2 className="w-10 h-10 text-white" />
                  </motion.div>
                  <h3 className="text-white text-2xl font-bold mb-4">Engagement Dashboard</h3>
                </div>

                <div className="grid grid-cols-2 gap-4">
                  {[
                    { icon: Trophy, label: "Achievements", value: "1,250" },
                    { icon: Star, label: "Points Earned", value: "50K+" },
                    { icon: Users, label: "Active Players", value: "10K+" },
                    { icon: TrendingUp, label: "Engagement", value: "+180%" }
                  ].map((stat, index) => (
                    <motion.div
                      key={index}
                      className="bg-black/20 rounded-lg p-4 text-center"
                      whileHover={{ scale: 1.05 }}
                      transition={{ type: "spring", stiffness: 300 }}
                    >
                      <stat.icon className="w-6 h-6 text-[#6C63FF] mx-auto mb-2" />
                      <div className="text-white font-bold">{stat.value}</div>
                      <div className="text-gray-400 text-sm">{stat.label}</div>
                    </motion.div>
                  ))}
                </div>
              </div>
            </motion.div>

            <motion.div
              className="flex flex-col items-center lg:items-start text-center lg:text-left"
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              viewport={{ once: true }}
            >
              <div className="space-y-8 max-w-md lg:max-w-none mx-auto lg:mx-0">
                {[
                  {
                    icon: Trophy,
                    title: "Achievement Systems",
                    description: "Create compelling reward systems that motivate users to reach their goals."
                  },
                  {
                    icon: Star,
                    title: "Point & Rewards",
                    description: "Implement sophisticated point systems with meaningful rewards and recognition."
                  },
                  {
                    icon: Target,
                    title: "Progress Tracking",
                    description: "Visual progress indicators that keep users engaged and motivated."
                  },
                  {
                    icon: Users,
                    title: "Social Features",
                    description: "Leaderboards and social challenges that foster healthy competition."
                  }
                ].map((feature, index) => (
                  <motion.div
                    key={index}
                    className="flex flex-col lg:flex-row items-center lg:items-start space-y-4 lg:space-y-0 lg:space-x-4 text-center lg:text-left"
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: index * 0.2 }}
                    viewport={{ once: true }}
                  >
                    <motion.div 
                      className="w-12 h-12 bg-gradient-to-r from-[#6C63FF] to-[#9c88ff] rounded-xl flex items-center justify-center flex-shrink-0"
                      whileHover={{ rotate: 360, scale: 1.1 }}
                      transition={{ duration: 0.6 }}
                    >
                      <feature.icon className="w-6 h-6 text-white" />
                    </motion.div>
                    <div>
                      <h3 className="text-white text-xl font-bold mb-2">{feature.title}</h3>
                      <p className="text-gray-400 leading-relaxed">{feature.description}</p>
                    </div>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          </div>
        </div>
      </motion.section>

      {/* Years Countdown Section */}
      <motion.section 
        id="countdown"
        className="relative z-10 w-full px-4 sm:px-6 lg:px-8 xl:px-12 py-16 sm:py-20"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
      >
        <div className="w-full max-w-7xl mx-auto">
          <motion.div 
            className="text-center mb-16"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl text-white font-bold mb-6 text-center">
              <span className="bg-gradient-to-r from-[#6C63FF] to-[#9c88ff] bg-clip-text text-transparent">Years</span> of Excellence
            </h2>
            <p className="text-gray-400 text-base sm:text-lg lg:text-xl max-w-4xl mx-auto text-center">
              Celebrating our journey in transforming businesses with AI since 2020.
            </p>
          </motion.div>

          <div className="bg-gradient-to-br from-[#6C63FF]/10 to-[#9c88ff]/10 rounded-3xl border border-[#6C63FF]/20 p-8 sm:p-12 backdrop-blur-sm max-w-6xl mx-auto">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
              {[
                { value: countdown.years, label: "Years", icon: Calendar },
                { value: countdown.months, label: "Months", icon: Clock },
                { value: countdown.days, label: "Days", icon: TrendingUp },
                { value: countdown.hours, label: "Hours", icon: Zap }
              ].map((item, index) => (
                <motion.div
                  key={index}
                  className="flex flex-col items-center"
                  initial={{ opacity: 0, scale: 0 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  whileHover={{ scale: 1.1 }}
                >
                  <motion.div
                    className="w-16 h-16 bg-gradient-to-r from-[#6C63FF] to-[#9c88ff] rounded-2xl flex items-center justify-center mb-4"
                    animate={{ 
                      rotate: [0, 360],
                      scale: [1, 1.05, 1]
                    }}
                    transition={{ 
                      rotate: { duration: 10, repeat: Infinity, ease: "linear" },
                      scale: { duration: 2, repeat: Infinity }
                    }}
                  >
                    <item.icon className="w-8 h-8 text-white" />
                  </motion.div>
                  <motion.div 
                    className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-2"
                    animate={{ scale: [1, 1.05, 1] }}
                    transition={{ duration: 2, repeat: Infinity, delay: index * 0.2 }}
                  >
                    {item.value}
                  </motion.div>
                  <div className="text-gray-400 text-lg">{item.label}</div>
                </motion.div>
              ))}
            </div>

            <motion.div 
              className="text-center mt-12"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.5 }}
              viewport={{ once: true }}
            >
              <h3 className="text-xl sm:text-2xl md:text-3xl text-white font-bold mb-4">
                Continuously Growing Since 2020
              </h3>
              <p className="text-gray-400 max-w-2xl mx-auto">
                From a small startup to a leading AI solutions provider, we've been consistently delivering 
                innovative solutions that transform businesses across the globe.
              </p>
            </motion.div>
          </div>
        </div>
      </motion.section>

      {/* Why Choose Us Section */}
      <motion.section 
        id="why-us"
        className="relative z-10 w-full px-4 sm:px-6 lg:px-8 xl:px-12 py-16 sm:py-20"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
      >
        <div className="w-full max-w-7xl mx-auto">
          <motion.div 
            className="text-center mb-16"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl text-white font-bold mb-6 text-center">
              Why Choose 
              <span className="bg-gradient-to-r from-[#6C63FF] to-[#9c88ff] bg-clip-text text-transparent"> Opslify?</span>
            </h2>
            <p className="text-gray-400 text-base sm:text-lg lg:text-xl max-w-4xl mx-auto text-center">
              We're not just another AI company. We're your strategic partner in digital transformation, 
              committed to delivering exceptional results that drive your business forward.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <motion.div 
              className="flex flex-col items-center lg:items-start text-center lg:text-left"
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <div className="space-y-8 max-w-md lg:max-w-none mx-auto lg:mx-0">
                {[
                  {
                    icon: Lightbulb,
                    title: "Innovation-First Approach",
                    description: "We stay ahead of the curve with cutting-edge AI technologies and methodologies, ensuring your business benefits from the latest innovations."
                  },
                  {
                    icon: Clock,
                    title: "Rapid Implementation",
                    description: "Our proven frameworks and agile methodologies enable faster deployment of AI solutions, reducing time-to-market significantly."
                  },
                  {
                    icon: Star,
                    title: "Proven Track Record",
                    description: "With 40+ successful AI projects and 99.9% system uptime, we have the experience and reliability to deliver exceptional results."
                  },
                  {
                    icon: HeadphonesIcon,
                    title: "24/7 Expert Support",
                    description: "Our dedicated team of AI specialists provides round-the-clock support, ensuring your systems run smoothly at all times."
                  }
                ].map((benefit, index) => (
                  <motion.div
                    key={index}
                    className="flex flex-col lg:flex-row items-center lg:items-start space-y-4 lg:space-y-0 lg:space-x-4 text-center lg:text-left"
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: index * 0.1 }}
                    viewport={{ once: true }}
                  >
                    <motion.div 
                      className="w-12 h-12 bg-gradient-to-r from-[#6C63FF] to-[#9c88ff] rounded-xl flex items-center justify-center flex-shrink-0"
                      whileHover={{ rotate: 360, scale: 1.1 }}
                      transition={{ duration: 0.6 }}
                    >
                      <benefit.icon className="w-6 h-6 text-white" />
                    </motion.div>
                    <div>
                      <h3 className="text-white text-xl font-bold mb-2">{benefit.title}</h3>
                      <p className="text-gray-400 leading-relaxed">{benefit.description}</p>
                    </div>
                  </motion.div>
                ))}
              </div>
            </motion.div>

            <motion.div 
              className="relative flex justify-center"
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              viewport={{ once: true }}
            >
              <div className="bg-gradient-to-br from-gray-900/50 to-gray-800/30 rounded-2xl border border-gray-700 p-8 relative overflow-hidden max-w-md">
                <div className="text-center">
                  <h3 className="text-white text-2xl font-bold mb-8">Our Impact</h3>
                  
                  <div className="grid grid-cols-2 gap-6">
                    {[
                      { label: "Success Rate", value: "98%", icon: TrendingUp },
                      { label: "Client Retention", value: "95%", icon: Users },
                      { label: "AI Expertise", value: "5+ Years", icon: Award },
                      { label: "Global Reach", value: "50+ Countries", icon: Globe }
                    ].map((stat, index) => (
                      <motion.div
                        key={index}
                        className="text-center"
                        whileHover={{ scale: 1.1 }}
                        transition={{ type: "spring", stiffness: 300 }}
                      >
                        <motion.div
                          className="w-12 h-12 bg-gradient-to-r from-[#6C63FF] to-[#9c88ff] rounded-xl flex items-center justify-center mx-auto mb-2"
                          animate={{ rotate: [0, 360] }}
                          transition={{ duration: 8, repeat: Infinity, ease: "linear", delay: index * 0.5 }}
                        >
                          <stat.icon className="w-6 h-6 text-white" />
                        </motion.div>
                        <div className="text-[#6C63FF] text-xl font-bold">{stat.value}</div>
                        <div className="text-gray-400 text-sm">{stat.label}</div>
                      </motion.div>
                    ))}
                  </div>
                </div>

                {/* Floating elements */}
                <motion.div 
                  className="absolute top-4 right-4 w-16 h-16 bg-[#6C63FF]/10 rounded-full"
                  animate={{ scale: [1, 1.2, 1], opacity: [0.3, 0.6, 0.3] }}
                  transition={{ duration: 4, repeat: Infinity }}
                />
                <motion.div 
                  className="absolute bottom-4 left-4 w-12 h-12 bg-[#9c88ff]/10 rounded-full"
                  animate={{ scale: [1.2, 1, 1.2], opacity: [0.6, 0.3, 0.6] }}
                  transition={{ duration: 3, repeat: Infinity }}
                />
              </div>
            </motion.div>
          </div>
        </div>
      </motion.section>

      {/* Client Reviews Section */}
      <motion.section 
        id="reviews"
        className="relative z-10 w-full px-4 sm:px-6 lg:px-8 xl:px-12 py-16 sm:py-20"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
      >
        <div className="w-full max-w-7xl mx-auto">
          <motion.div 
            className="text-center mb-16"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl text-white font-bold mb-6 text-center">
              What Our 
              <span className="bg-gradient-to-r from-[#6C63FF] to-[#9c88ff] bg-clip-text text-transparent">Clients Say</span>
            </h2>
            <p className="text-gray-400 text-base sm:text-lg lg:text-xl max-w-4xl mx-auto text-center">
              Don't just take our word for it. Here's what our clients have to say about their experience with Opslify.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8 place-items-center">
            {[
              {
                name: "Sarah Johnson",
                position: "CEO, TechCorp",
                content: "Opslify transformed our business operations with their AI solutions. We've seen a 300% increase in efficiency and our customers are happier than ever.",
                rating: 5,
                avatar: "SJ"
              },
              {
                name: "Michael Chen",
                position: "CTO, DataFlow",
                content: "The team at Opslify delivered beyond our expectations. Their AI automation saved us countless hours and reduced operational costs by 45%.",
                rating: 5,
                avatar: "MC"
              },
              {
                name: "Emily Rodriguez",
                position: "VP Operations, InnovateLabs",
                content: "Working with Opslify was a game-changer. Their data analytics platform gave us insights we never knew existed. Highly recommended!",
                rating: 5,
                avatar: "ER"
              },
              {
                name: "David Thompson",
                position: "Founder, SmartSolutions",
                content: "The AI strategy consulting from Opslify helped us identify new opportunities and optimize our processes. Outstanding service and results.",
                rating: 5,
                avatar: "DT"
              },
              {
                name: "Lisa Wang",
                position: "Director, CloudTech",
                content: "Opslify's gamification solutions increased our user engagement by 250%. Their team understands how to make technology work for people.",
                rating: 5,
                avatar: "LW"
              },
              {
                name: "Robert Kim",
                position: "COO, FutureSoft",
                content: "The cloud AI integration was seamless and powerful. Opslify's expertise in AI and their commitment to excellence is unmatched.",
                rating: 5,
                avatar: "RK"
              }
            ].map((review, index) => (
              <motion.div
                key={index}
                className="bg-gray-900/50 border border-gray-700 rounded-lg p-6 backdrop-blur-sm w-full max-w-sm"
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                whileHover={{ y: -10, borderColor: "#6C63FF" }}
              >
                <div className="flex items-center mb-4">
                  <div className="w-12 h-12 bg-gradient-to-r from-[#6C63FF] to-[#9c88ff] rounded-full flex items-center justify-center text-white font-bold mr-4">
                    {review.avatar}
                  </div>
                  <div>
                    <h3 className="text-white font-bold">{review.name}</h3>
                    <p className="text-gray-400 text-sm">{review.position}</p>
                  </div>
                </div>

                <div className="flex items-center justify-center mb-4">
                  {[...Array(review.rating)].map((_, i) => (
                    <Star key={i} className="w-4 h-4 text-yellow-400 fill-current" />
                  ))}
                </div>

                <div className="relative">
                  <Quote className="absolute -top-2 -left-2 w-8 h-8 text-[#6C63FF]/30" />
                  <p className="text-gray-300 leading-relaxed pl-6 text-center">{review.content}</p>
                </div>
              </motion.div>
            ))}
          </div>

          <motion.div 
            className="text-center mt-12"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.5 }}
            viewport={{ once: true }}
          >
            <div className="bg-gradient-to-r from-[#6C63FF]/10 to-[#9c88ff]/10 rounded-2xl border border-[#6C63FF]/20 p-8 backdrop-blur-sm max-w-2xl mx-auto">
              <h3 className="text-white text-2xl font-bold mb-4">Join Our Success Stories</h3>
              <p className="text-gray-400 mb-6">Ready to transform your business with AI?</p>
              <motion.button 
                className="bg-gradient-to-r from-[#6C63FF] to-[#9c88ff] text-white px-8 py-3 rounded-lg hover:opacity-90 transition-opacity"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                Start Your Journey
              </motion.button>
            </div>
          </motion.div>
        </div>
      </motion.section>

      {/* Contact Section */}
      <motion.section 
        id="contact"
        className="relative z-10 w-full px-4 sm:px-6 lg:px-8 xl:px-12 py-16 sm:py-20"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
      >
        <div className="w-full max-w-7xl mx-auto">
          <motion.div 
            className="text-center mb-16"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl text-white font-bold mb-6 text-center">
              Get in 
              <span className="bg-gradient-to-r from-[#6C63FF] to-[#9c88ff] bg-clip-text text-transparent"> Touch</span>
            </h2>
            <p className="text-gray-400 text-base sm:text-lg lg:text-xl max-w-4xl mx-auto text-center">
              Ready to transform your business with AI? Let's discuss how we can help you achieve your goals.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 max-w-6xl mx-auto">
            <motion.div
              className="flex flex-col items-center lg:items-start text-center lg:text-left"
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <div className="space-y-8 w-full max-w-md lg:max-w-none">
                <div>
                  <h3 className="text-white text-2xl font-bold mb-6 text-center lg:text-left">Contact Information</h3>
                  
                  <div className="space-y-6">
                    {[
                      { icon: Mail, title: "Email", value: "hello@opslify.com", href: "mailto:hello@opslify.com" },
                      { icon: Phone, title: "Phone", value: "+1 (555) 123-4567", href: "tel:+15551234567" },
                      { icon: MapPin, title: "Address", value: "123 AI Street, Tech City, TC 12345", href: "#" }
                    ].map((contact, index) => (
                      <motion.a
                        key={index}
                        href={contact.href}
                        className="flex flex-col lg:flex-row items-center lg:items-start space-y-2 lg:space-y-0 lg:space-x-4 p-4 bg-gray-900/50 border border-gray-700 rounded-lg hover:border-[#6C63FF]/50 transition-all duration-300 group text-center lg:text-left"
                        whileHover={{ x: 10 }}
                      >
                        <div className="w-12 h-12 bg-gradient-to-r from-[#6C63FF] to-[#9c88ff] rounded-xl flex items-center justify-center group-hover:scale-110 transition-transform">
                          <contact.icon className="w-6 h-6 text-white" />
                        </div>
                        <div>
                          <h4 className="text-white font-semibold">{contact.title}</h4>
                          <p className="text-gray-400">{contact.value}</p>
                        </div>
                      </motion.a>
                    ))}
                  </div>
                </div>

                <div>
                  <h3 className="text-white text-xl font-bold mb-4 text-center lg:text-left">Office Hours</h3>
                  <div className="bg-gray-900/50 border border-gray-700 rounded-lg p-6">
                    <div className="space-y-2 text-gray-300">
                      <div className="flex justify-between">
                        <span>Monday - Friday</span>
                        <span>9:00 AM - 6:00 PM</span>
                      </div>
                      <div className="flex justify-between">
                        <span>Saturday</span>
                        <span>10:00 AM - 4:00 PM</span>
                      </div>
                      <div className="flex justify-between">
                        <span>Sunday</span>
                        <span>Closed</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              viewport={{ once: true }}
            >
              <div className="bg-gray-900/50 border border-gray-700 rounded-lg p-8 backdrop-blur-sm w-full max-w-md lg:max-w-none mx-auto">
                <h3 className="text-white text-2xl font-bold mb-6 text-center">Send Us a Message</h3>
                
                <form onSubmit={handleContactSubmit} className="space-y-6">
                  <motion.div
                    whileFocus={{ scale: 1.02 }}
                  >
                    <label className="block text-gray-300 mb-2">Name</label>
                    <input
                      type="text"
                      value={contactForm.name}
                      onChange={(e) => setContactForm({...contactForm, name: e.target.value})}
                      className="w-full bg-gray-800 border border-gray-600 rounded-lg px-4 py-3 text-white focus:border-[#6C63FF] focus:outline-none transition-colors"
                      placeholder="Your Name"
                      required
                    />
                  </motion.div>

                  <motion.div
                    whileFocus={{ scale: 1.02 }}
                  >
                    <label className="block text-gray-300 mb-2">Email</label>
                    <input
                      type="email"
                      value={contactForm.email}
                      onChange={(e) => setContactForm({...contactForm, email: e.target.value})}
                      className="w-full bg-gray-800 border border-gray-600 rounded-lg px-4 py-3 text-white focus:border-[#6C63FF] focus:outline-none transition-colors"
                      placeholder="your@email.com"
                      required
                    />
                  </motion.div>

                  <motion.div
                    whileFocus={{ scale: 1.02 }}
                  >
                    <label className="block text-gray-300 mb-2">Message</label>
                    <textarea
                      value={contactForm.message}
                      onChange={(e) => setContactForm({...contactForm, message: e.target.value})}
                      rows="5"
                      className="w-full bg-gray-800 border border-gray-600 rounded-lg px-4 py-3 text-white focus:border-[#6C63FF] focus:outline-none transition-colors resize-none"
                      placeholder="Tell us about your project..."
                      required
                    ></textarea>
                  </motion.div>

                  <motion.button
                    type="submit"
                    className="w-full bg-gradient-to-r from-[#6C63FF] to-[#9c88ff] text-white px-8 py-3 rounded-lg hover:opacity-90 transition-opacity flex items-center justify-center"
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                  >
                    Send Message
                    <Send className="w-5 h-5 ml-2" />
                  </motion.button>
                </form>
              </div>
            </motion.div>
          </div>
        </div>
      </motion.section>

      {/* Privacy Policy Section */}
      <motion.section 
        id="privacy"
        className="relative z-10 w-full px-4 sm:px-6 lg:px-8 xl:px-12 py-16 sm:py-20"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
      >
        <div className="w-full max-w-5xl mx-auto">
          <motion.div 
            className="text-center mb-16"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl text-white font-bold mb-6 text-center">
              Privacy 
              <span className="bg-gradient-to-r from-[#6C63FF] to-[#9c88ff] bg-clip-text text-transparent"> Policy</span>
            </h2>
            <p className="text-gray-400 text-base sm:text-lg max-w-3xl mx-auto text-center">
              Your privacy is important to us. This policy explains how we collect, use, and protect your information.
            </p>
          </motion.div>

          <motion.div 
            className="bg-gray-900/50 border border-gray-700 rounded-lg p-8 backdrop-blur-sm space-y-8"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <div>
              <h3 className="text-white text-xl font-bold mb-4">Information We Collect</h3>
              <p className="text-gray-300 leading-relaxed">
                We collect information you provide directly to us, such as when you create an account, 
                use our services, or contact us for support. This may include your name, email address, 
                and other contact information.
              </p>
            </div>

            <div>
              <h3 className="text-white text-xl font-bold mb-4">How We Use Your Information</h3>
              <p className="text-gray-300 leading-relaxed mb-4">
                We use the information we collect to:
              </p>
              <ul className="text-gray-300 space-y-2">
                <li className="flex items-center">
                  <CheckCircle className="w-4 h-4 text-[#6C63FF] mr-2 flex-shrink-0" />
                  Provide, maintain, and improve our services
                </li>
                <li className="flex items-center">
                  <CheckCircle className="w-4 h-4 text-[#6C63FF] mr-2 flex-shrink-0" />
                  Process transactions and send related information
                </li>
                <li className="flex items-center">
                  <CheckCircle className="w-4 h-4 text-[#6C63FF] mr-2 flex-shrink-0" />
                  Send technical notices and support messages
                </li>
                <li className="flex items-center">
                  <CheckCircle className="w-4 h-4 text-[#6C63FF] mr-2 flex-shrink-0" />
                  Communicate with you about products and services
                </li>
              </ul>
            </div>

            <div>
              <h3 className="text-white text-xl font-bold mb-4">Data Security</h3>
              <p className="text-gray-300 leading-relaxed">
                We implement appropriate technical and organizational measures to protect your personal 
                information against unauthorized access, alteration, disclosure, or destruction.
              </p>
            </div>

            <div>
              <h3 className="text-white text-xl font-bold mb-4">Contact Us</h3>
              <p className="text-gray-300 leading-relaxed">
                If you have any questions about this Privacy Policy, please contact us at 
                <a href="mailto:privacy@opslify.com" className="text-[#6C63FF] hover:underline ml-1">
                  privacy@opslify.com
                </a>
              </p>
            </div>

            <div className="border-t border-gray-700 pt-6">
              <p className="text-gray-400 text-sm">
                Last updated: January 2025. This policy may be updated from time to time.
              </p>
            </div>
          </motion.div>
        </div>
      </motion.section>

      {/* Footer */}
      <footer className="relative z-10 w-full px-4 sm:px-6 lg:px-8 xl:px-12 py-12 border-t border-gray-800">
        <div className="w-full max-w-7xl mx-auto">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 mb-8 text-center lg:text-left">
            <div className="flex flex-col items-center lg:items-start">
              <div className="flex items-center space-x-2 mb-4">
                <div className="w-8 h-8 bg-gradient-to-r from-[#6C63FF] to-[#9c88ff] rounded-lg flex items-center justify-center">
                  <Brain className="w-5 h-5 text-white" />
                </div>
                <span className="text-white text-xl font-bold">Opslify</span>
              </div>
              <p className="text-gray-400 mb-4 text-center lg:text-left">
                Transforming businesses with cutting-edge AI solutions and digital transformation services.
              </p>
              <div className="flex space-x-4 justify-center lg:justify-start">
                {['Twitter', 'LinkedIn', 'GitHub'].map((social) => (
                  <a key={social} href="#" className="text-gray-400 hover:text-[#6C63FF] transition-colors">
                    {social}
                  </a>
                ))}
              </div>
            </div>

            <div className="flex flex-col items-center lg:items-start">
              <h3 className="text-white font-bold mb-4">Services</h3>
              <ul className="space-y-2 text-gray-400 text-center lg:text-left">
                <li><a href="#" className="hover:text-[#6C63FF] transition-colors">AI Strategy</a></li>
                <li><a href="#" className="hover:text-[#6C63FF] transition-colors">Machine Learning</a></li>
                <li><a href="#" className="hover:text-[#6C63FF] transition-colors">Automation</a></li>
                <li><a href="#" className="hover:text-[#6C63FF] transition-colors">Data Analytics</a></li>
              </ul>
            </div>

            <div className="flex flex-col items-center lg:items-start">
              <h3 className="text-white font-bold mb-4">Company</h3>
              <ul className="space-y-2 text-gray-400 text-center lg:text-left">
                <li><a href="#" className="hover:text-[#6C63FF] transition-colors">About</a></li>
                <li><a href="#" className="hover:text-[#6C63FF] transition-colors">Careers</a></li>
                <li><a href="#" className="hover:text-[#6C63FF] transition-colors">News</a></li>
                <li><a href="#" className="hover:text-[#6C63FF] transition-colors">Contact</a></li>
              </ul>
            </div>

            <div className="flex flex-col items-center lg:items-start">
              <h3 className="text-white font-bold mb-4">Legal</h3>
              <ul className="space-y-2 text-gray-400 text-center lg:text-left">
                <li><a href="#privacy" className="hover:text-[#6C63FF] transition-colors">Privacy Policy</a></li>
                <li><a href="#" className="hover:text-[#6C63FF] transition-colors">Terms of Service</a></li>
                <li><a href="#" className="hover:text-[#6C63FF] transition-colors">Cookie Policy</a></li>
                <li><a href="#" className="hover:text-[#6C63FF] transition-colors">Security</a></li>
              </ul>
            </div>
          </div>
          
          <div className="border-t border-gray-800 pt-8 text-center">
            <p className="text-gray-500">
              &copy; 2025 Opslify. All rights reserved. Transforming businesses with AI excellence.
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
}