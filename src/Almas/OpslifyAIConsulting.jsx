"use client"

import { useState, useEffect } from "react"
import {
  ArrowRight,
  Brain,
  Shield,
  Users,
  TrendingUp,
  CheckCircle,
  ChevronRight,
  Globe,
  Smartphone,
  CreditCard,
  Cloud,
  Lightbulb,
  Zap,
  Code,
  Database,
  Cpu,
  Settings,
} from "lucide-react"

export default function OpslifyAIConsulting() {
  const [isVisible, setIsVisible] = useState(false)
  const [scrollY, setScrollY] = useState(0)

  useEffect(() => {
    setIsVisible(true)

    const handleScroll = () => setScrollY(window.scrollY)
    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  const services = [
    {
      icon: <Globe className="h-8 w-8" />,
      title: "AI Web Development",
      description:
        "Intelligent web applications powered by AI algorithms for enhanced user experiences and automated functionality.",
      features: [
        "Smart Content Management",
        "AI-Powered Analytics",
        "Automated User Interactions",
        "Intelligent Search & Recommendations",
      ],
    },
    {
      icon: <Smartphone className="h-8 w-8" />,
      title: "AI App Development",
      description: "Mobile applications integrated with machine learning capabilities for iOS and Android platforms.",
      features: [
        "Predictive User Interface",
        "Voice & Image Recognition",
        "Personalized Experiences",
        "Real-time AI Processing",
      ],
    },
    {
      icon: <CreditCard className="h-8 w-8" />,
      title: "AI Payment Software",
      description:
        "Secure and intelligent payment solutions with fraud detection and automated transaction processing.",
      features: [
        "Fraud Detection Systems",
        "Automated Risk Assessment",
        "Smart Transaction Routing",
        "Predictive Payment Analytics",
      ],
    },
    {
      icon: <Cloud className="h-8 w-8" />,
      title: "AI Cloud Services",
      description: "Scalable cloud infrastructure optimized for AI workloads with automated resource management.",
      features: [
        "Auto-scaling AI Models",
        "Cloud-based ML Pipelines",
        "Serverless AI Functions",
        "Distributed Computing",
      ],
    },
    {
      icon: <Lightbulb className="h-8 w-8" />,
      title: "Idea and Product Design",
      description: "AI-driven product conceptualization and design optimization for innovative business solutions.",
      features: [
        "Market Analysis & Insights",
        "User Experience Optimization",
        "Prototype Development",
        "Design Automation Tools",
      ],
    },
    {
      icon: <Zap className="h-8 w-8" />,
      title: "Digital Transformation",
      description: "Complete business transformation through AI integration and process automation strategies.",
      features: ["Process Automation", "Legacy System Integration", "Digital Strategy Planning", "Change Management"],
    },
  ]

  const benefits = [
    {
      icon: <TrendingUp className="h-6 w-6" />,
      title: "Increased ROI",
      description: "Boost business efficiency and reduce operational costs by up to 45%",
    },
    {
      icon: <Shield className="h-6 w-6" />,
      title: "Enterprise Security",
      description: "AI-powered security solutions with advanced threat detection",
    },
    {
      icon: <Users className="h-6 w-6" />,
      title: "Scalable Solutions",
      description: "Future-ready applications that grow with your business needs",
    },
    {
      icon: <Code className="h-6 w-6" />,
      title: "Custom Development",
      description: "Tailored AI solutions built specifically for your industry",
    },
  ]

  const process = [
    {
      step: "01",
      title: "Consultation & Analysis",
      description:
        "We analyze your business requirements, existing infrastructure, and identify AI integration opportunities.",
    },
    {
      step: "02",
      title: "Strategic Planning",
      description:
        "Develop a comprehensive AI implementation roadmap aligned with your business objectives and budget.",
    },
    {
      step: "03",
      title: "Development & Integration",
      description: "Build and integrate AI solutions using cutting-edge technologies and best practices.",
    },
    {
      step: "04",
      title: "Testing & Deployment",
      description: "Rigorous testing and seamless deployment with minimal disruption to your operations.",
    },
    {
      step: "05",
      title: "Support & Optimization",
      description: "Ongoing maintenance, updates, and performance optimization to ensure peak efficiency.",
    },
  ]

  const technologies = [
    { name: "Machine Learning", icon: <Brain className="h-6 w-6" /> },
    { name: "Cloud Computing", icon: <Cloud className="h-6 w-6" /> },
    { name: "Data Analytics", icon: <Database className="h-6 w-6" /> },
    { name: "API Integration", icon: <Settings className="h-6 w-6" /> },
    { name: "Neural Networks", icon: <Cpu className="h-6 w-6" /> },
    { name: "Automation", icon: <Zap className="h-6 w-6" /> },
  ]

  return (
    <div className="min-h-screen bg-black text-white overflow-hidden relative">
      {/* Enhanced Animated Background */}
      <div className="fixed inset-0 z-0">
        {/* Primary black background */}
        <div className="absolute inset-0 bg-black" />

        {/* Animated gradient overlay */}
        <div className="absolute inset-0 bg-gradient-to-br from-black via-gray-900 to-black">
          <div 
            className="absolute inset-0 opacity-30"
            style={{
              background: `radial-gradient(circle at 20% 50%, #6C63FF 0%, transparent 50%),
                          radial-gradient(circle at 80% 20%, #6C63FF 0%, transparent 50%),
                          radial-gradient(circle at 40% 80%, #6C63FF 0%, transparent 50%)`
            }}
          />
        </div>

        {/* Floating geometric shapes */}
        <div className="absolute inset-0 opacity-20">
          {[...Array(20)].map((_, i) => (
            <div
              key={i}
              className="absolute rounded-full border border-[#6C63FF]/30"
              style={{
                width: `${Math.random() * 200 + 50}px`,
                height: `${Math.random() * 200 + 50}px`,
                left: `${Math.random() * 100}%`,
                top: `${Math.random() * 100}%`,
                transform: `translateY(${scrollY * (Math.random() * 0.5)}px)`,
                animation: `float ${3 + Math.random() * 4}s ease-in-out infinite`,
                animationDelay: `${Math.random() * 5}s`,
              }}
            />
          ))}
        </div>

        {/* Animated particles */}
        <div className="absolute inset-0 opacity-60">
          {[...Array(50)].map((_, i) => (
            <div
              key={i}
              className="absolute w-1 h-1 bg-[#6C63FF] rounded-full"
              style={{
                left: `${Math.random() * 100}%`,
                top: `${Math.random() * 100}%`,
                animation: `particle ${5 + Math.random() * 10}s linear infinite`,
                animationDelay: `${Math.random() * 5}s`,
              }}
            />
          ))}
        </div>

        {/* Moving gradient orbs */}
        <div className="absolute inset-0">
          <div
            className="absolute w-96 h-96 bg-[#6C63FF]/10 rounded-full blur-3xl"
            style={{
              left: "10%",
              top: "20%",
              transform: `translateY(${scrollY * 0.1}px)`,
              animation: "float 8s ease-in-out infinite",
            }}
          />
          <div
            className="absolute w-80 h-80 bg-[#6C63FF]/10 rounded-full blur-3xl"
            style={{
              right: "15%",
              top: "60%",
              transform: `translateY(${scrollY * -0.1}px)`,
              animation: "float 10s ease-in-out infinite reverse",
            }}
          />
          <div
            className="absolute w-64 h-64 bg-[#6C63FF]/10 rounded-full blur-3xl"
            style={{
              left: "60%",
              top: "10%",
              transform: `translateY(${scrollY * 0.15}px)`,
              animation: "float 12s ease-in-out infinite",
            }}
          />
        </div>

        <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent" />
      </div>

      {/* Custom CSS for animations */}
      <style jsx>{`
        @keyframes float {
          0%, 100% { transform: translateY(0px) rotate(0deg); }
          50% { transform: translateY(-30px) rotate(180deg); }
        }
        @keyframes particle {
          0% {
            opacity: 0;
            transform: translateY(0px);
          }
          10% {
            opacity: 1;
          }
          90% {
            opacity: 1;
          }
          100% {
            opacity: 0;
            transform: translateY(-100vh);
          }
        }
        @keyframes slideInUp {
          from {
            opacity: 0;
            transform: translateY(50px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
        @keyframes fadeInScale {
          from {
            opacity: 0;
            transform: scale(0.8);
          }
          to {
            opacity: 1;
            transform: scale(1);
          }
        }
        @keyframes glow {
          0%, 100% { box-shadow: 0 0 20px rgba(108, 99, 255, 0.5); }
          50% { box-shadow: 0 0 40px rgba(108, 99, 255, 0.8); }
        }
        @keyframes pulse {
          0%, 100% { opacity: 1; }
          50% { opacity: 0.7; }
        }
        .animate-slideInUp {
          animation: slideInUp 0.8s ease-out forwards;
        }
        .animate-fadeInScale {
          animation: fadeInScale 0.6s ease-out forwards;
        }
        .animate-glow {
          animation: glow 3s ease-in-out infinite;
        }
        .animate-pulse-custom {
          animation: pulse 2s ease-in-out infinite;
        }
      `}</style>

      {/* Hero Section */}
      <section className="relative z-10 min-h-screen flex items-center justify-center px-6 sm:px-8 lg:px-12 xl:px-16">
        <div className="w-full max-w-none container mx-auto text-center">
          <div
            className={`transition-all duration-1500 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-20"}`}
          >
            {/* Animated Logo */}
            <div className="flex items-center justify-center space-x-4 mb-12 animate-fadeInScale">
              <div className="w-20 h-20 bg-gradient-to-r from-[#6C63FF] to-[#6C63FF]/80 rounded-3xl flex items-center justify-center animate-glow">
                <Brain className="h-12 w-12 text-white animate-pulse-custom" />
              </div>
              <span className="text-5xl md:text-6xl lg:text-7xl font-bold bg-gradient-to-r from-white to-[#6C63FF] bg-clip-text text-transparent">
                Opslify
              </span>
            </div>

            <span
              className="inline-flex items-center rounded-full border px-8 py-4 text-base font-semibold transition-all duration-300 hover:scale-105 mb-12 bg-[#6C63FF]/20 text-[#6C63FF] border-[#6C63FF]/50 animate-slideInUp backdrop-blur-sm"
              style={{ animationDelay: "0.2s" }}
            >
              Premier AI IT Consulting Services
            </span>

            <h1
              className="text-5xl sm:text-7xl lg:text-8xl xl:text-9xl font-bold mb-12 bg-gradient-to-r from-white via-gray-200 to-[#6C63FF] bg-clip-text text-transparent animate-slideInUp leading-tight max-w-7xl mx-auto"
              style={{ animationDelay: "0.4s" }}
            >
              Revolutionize Your Business
              <br />
              <span className="bg-gradient-to-r from-[#6C63FF] to-[#6C63FF]/80 bg-clip-text text-transparent animate-pulse-custom">
                with AI Technology
              </span>
            </h1>

            <p
              className="text-xl sm:text-2xl lg:text-3xl text-gray-300 mb-16 max-w-6xl mx-auto leading-relaxed animate-slideInUp px-4"
              style={{ animationDelay: "0.6s" }}
            >
              Opslify delivers cutting-edge AI solutions for modern businesses. From intelligent web development to
              complete digital transformation, we help enterprises leverage artificial intelligence to achieve
              unprecedented growth and operational excellence.
            </p>

            <div
              className="flex flex-col sm:flex-row gap-8 justify-center items-center animate-slideInUp px-4"
              style={{ animationDelay: "0.8s" }}
            >
              <button className="group inline-flex items-center justify-center rounded-2xl text-xl font-medium transition-all duration-300 hover:scale-105 hover:shadow-2xl h-16 px-12 bg-gradient-to-r from-[#6C63FF] to-[#6C63FF]/80 hover:from-[#6C63FF]/90 hover:to-[#6C63FF]/70 animate-glow w-full sm:w-auto">
                <span className="group-hover:translate-x-1 transition-transform duration-300">Start Your Project</span>
                <ArrowRight className="ml-3 h-6 w-6 group-hover:translate-x-1 transition-transform duration-300" />
              </button>
             
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="relative z-10 py-24 lg:py-40">
        <div className="w-full max-w-none container mx-auto px-6 sm:px-8 lg:px-12 xl:px-16">
          <div className="text-center mb-20 lg:mb-28 animate-slideInUp">
            <h2 className="text-4xl sm:text-6xl lg:text-5xl xl:text-7xl font-bold mb-10 bg-gradient-to-r from-white to-[#6C63FF] bg-clip-text text-transparent max-w-6xl mx-auto">
              Our AI IT Services
            </h2>
            <p className="text-2xl sm:text-3xl lg:text-4xl text-gray-400 max-w-5xl mx-auto leading-relaxed">
              Comprehensive AI-powered solutions designed to transform your business operations
            </p>
          </div>
          <div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-10 lg:gap-12 xl:gap-16">
            {services.map((service, index) => (
              <div
                key={index}
                className="group rounded-3xl border bg-black/50 border-[#6C63FF]/30 hover:border-[#6C63FF]/70 transition-all duration-500 hover:transform hover:scale-105 hover:-translate-y-2 backdrop-blur-sm animate-fadeInScale p-8 lg:p-10"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="w-20 h-20 bg-gradient-to-r from-[#6C63FF] to-[#6C63FF]/80 rounded-3xl flex items-center justify-center mb-8 text-white group-hover:scale-110 transition-transform duration-300 animate-glow">
                  {service.icon}
                </div>
                <h3 className="text-2xl lg:text-3xl font-bold text-white mb-6 group-hover:text-[#6C63FF] transition-colors duration-300">{service.title}</h3>
                <p className="text-gray-400 text-lg lg:text-xl mb-8 group-hover:text-gray-300 transition-colors duration-300 leading-relaxed">{service.description}</p>
                <ul className="space-y-4">
                  {service.features.map((feature, idx) => (
                    <li
                      key={idx}
                      className="flex items-center text-gray-300 group-hover:text-white transition-colors duration-300"
                    >
                      <CheckCircle className="h-6 w-6 text-[#6C63FF] mr-4 flex-shrink-0 group-hover:scale-110 transition-transform duration-300" />
                      <span className="text-base lg:text-lg">{feature}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="relative z-10 py-24 lg:py-40">
        <div className="w-full max-w-none container mx-auto px-6 sm:px-8 lg:px-12 xl:px-16">
          <div className="text-center mb-20 lg:mb-28 animate-slideInUp">
            <h2 className="text-4xl sm:text-6xl lg:text-7xl xl:text-6xl font-bold mb-10 bg-gradient-to-r from-white to-[#6C63FF] bg-clip-text text-transparent max-w-6xl mx-auto">
              Why Choose Opslify?
            </h2>
            <p className="text-2xl sm:text-3xl lg:text-4xl text-gray-400 max-w-5xl mx-auto leading-relaxed">
              Leading AI consulting firm with proven expertise in enterprise solutions
            </p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-4 gap-12 lg:gap-16">
            {benefits.map((benefit, index) => (
              <div
                key={index}
                className="text-center group animate-fadeInScale"
                style={{ animationDelay: `${index * 0.2}s` }}
              >
                <div className="w-24 h-24 bg-gradient-to-r from-[#6C63FF] to-[#6C63FF]/80 rounded-full flex items-center justify-center mx-auto mb-8 group-hover:scale-125 transition-all duration-500 animate-glow">
                  {benefit.icon}
                </div>
                <h3 className="text-2xl lg:text-3xl font-semibold mb-6 text-white group-hover:text-[#6C63FF] transition-colors duration-300">
                  {benefit.title}
                </h3>
                <p className="text-gray-400 text-lg lg:text-xl group-hover:text-gray-300 transition-colors duration-300 leading-relaxed">
                  {benefit.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section id="process" className="relative z-10 py-24 lg:py-40 bg-gradient-to-b from-[#6C63FF]/5 to-transparent">
        <div className="w-full max-w-none container mx-auto px-6 sm:px-8 lg:px-12 xl:px-16">
          <div className="text-center mb-20 lg:mb-28 animate-slideInUp">
            <h2 className="text-4xl sm:text-6xl lg:text-7xl xl:text-6xl font-bold mb-10 bg-gradient-to-r from-white to-[#6C63FF] bg-clip-text text-transparent max-w-6xl mx-auto">
              Our Development Process
            </h2>
            <p className="text-2xl sm:text-3xl lg:text-4xl text-gray-400 max-w-5xl mx-auto leading-relaxed">
              A proven methodology for successful AI implementation and deployment
            </p>
          </div>
          <div className="space-y-12 lg:space-y-20 max-w-6xl mx-auto">
            {process.map((step, index) => (
              <div
                key={index}
                className="flex flex-col lg:flex-row items-center justify-center space-y-8 lg:space-y-0 lg:space-x-12 group animate-slideInUp"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="flex-shrink-0">
                  <div className="w-24 h-24 bg-gradient-to-r from-[#6C63FF] to-[#6C63FF]/80 rounded-full flex items-center justify-center text-white font-bold text-2xl group-hover:scale-125 transition-all duration-500 animate-glow">
                    {step.step}
                  </div>
                </div>
                <div className="flex-1 text-center lg:text-left max-w-3xl">
                  <h3 className="text-3xl lg:text-4xl font-semibold mb-6 text-white group-hover:text-[#6C63FF] transition-colors duration-300">
                    {step.title}
                  </h3>
                  <p className="text-gray-400 text-xl lg:text-2xl group-hover:text-gray-300 transition-colors duration-300 leading-relaxed">
                    {step.description}
                  </p>
                </div>
                {index < process.length - 1 && (
                  <ChevronRight className="hidden lg:block h-10 w-10 text-[#6C63FF] group-hover:text-[#6C63FF]/70 transition-colors duration-300" />
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Technologies Section */}
      <section id="technologies" className="relative z-10 py-24 lg:py-40">
        <div className="w-full max-w-none container mx-auto px-6 sm:px-8 lg:px-12 xl:px-16">
          <div className="text-center mb-20 lg:mb-28 animate-slideInUp">
            <h2 className="text-4xl sm:text-6xl lg:text-7xl xl:text-6xl font-bold mb-10 bg-gradient-to-r from-white to-[#6C63FF] bg-clip-text text-transparent max-w-6xl mx-auto">
              Technologies We Use
            </h2>
            <p className="text-2xl sm:text-3xl lg:text-4xl text-gray-400 max-w-5xl mx-auto leading-relaxed">
              Cutting-edge tools and frameworks for robust AI solutions
            </p>
          </div>
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-10 lg:gap-12">
            {technologies.map((tech, index) => (
              <div
                key={index}
                className="text-center group animate-fadeInScale"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="w-24 h-24 bg-[#6C63FF]/20 border-2 border-[#6C63FF]/30 rounded-3xl flex items-center justify-center mx-auto mb-6 group-hover:scale-125 group-hover:border-[#6C63FF] transition-all duration-500 animate-glow">
                  <div className="text-[#6C63FF] group-hover:text-white transition-colors duration-300">
                    {tech.icon}
                  </div>
                </div>
                <p className="text-gray-300 font-medium group-hover:text-white transition-colors duration-300 text-lg lg:text-xl">
                  {tech.name}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="relative z-10 py-24 xl:text-6xl lg:py-40 bg-gradient-to-r from-[#6C63FF]/10 to-black/50">
        <div className="w-full max-w-none container mx-auto px-6 sm:px-8 lg:px-12 xl:px-12">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-12 lg:gap-16 text-center">
            {[
              { number: "40+", label: "AI Projects Completed" },
              { number: "95%", label: "Client Success Rate" },
              { number: "1+", label: "Years of Excellence" },
              { number: "24/7", label: "Technical Support" },
            ].map((stat, index) => (
              <div key={index} className="animate-fadeInScale" style={{ animationDelay: `${index * 0.2}s` }}>
                <div className="text-5xl sm:text-6xl lg:text-7xl xl:text-8xl font-bold text-white mb-6 animate-pulse-custom">{stat.number}</div>
                <div className="text-gray-400 text-xl lg:text-2xl">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="relative z-10 py-24 lg:py-40">
        <div className="w-full max-w-none container mx-auto px-6 sm:px-8 lg:px-12 xl:px-16">
          <div className="text-center mb-20 lg:mb-28 animate-slideInUp">
            <h2 className="text-4xl sm:text-6xl lg:text-7xl xl:text-6xl font-bold mb-10 bg-gradient-to-r from-white to-[#6C63FF] bg-clip-text text-transparent max-w-6xl mx-auto">
              About Opslify
            </h2>
          </div>
          <div className="text-center max-w-6xl mx-auto animate-fadeInScale">
            <h3 className="text-4xl lg:text-5xl font-bold mb-10 text-white">Leading AI Innovation</h3>
            <p className="text-gray-300 text-xl lg:text-2xl mb-10 leading-relaxed">
              Opslify is a premier AI consulting firm specializing in transforming businesses through intelligent
              technology solutions. Our team of expert developers and AI specialists work closely with enterprises to
              deliver custom solutions that drive growth and efficiency.
            </p>
            <p className="text-gray-300 text-xl lg:text-2xl mb-16 leading-relaxed">
              From AI-powered web applications to complete digital transformation strategies, we provide end-to-end
              services that help businesses stay ahead in the competitive market.
            </p>
            <div className="flex flex-wrap justify-center gap-6">
              {["AI Development", "Cloud Solutions", "Digital Transformation"].map((tag, index) => (
                <span
                  key={index}
                  className="inline-flex items-center rounded-full border px-8 py-4 text-xl font-semibold transition-all duration-300 hover:scale-105 bg-[#6C63FF]/20 text-[#6C63FF] border-[#6C63FF]/50 animate-glow backdrop-blur-sm"
                >
                  {tag}
                </span>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="relative z-10 py-24 lg:py-40 bg-gradient-to-r from-[#6C63FF]/20 to-black/60">
        <div className="w-full max-w-none container mx-auto px-6 sm:px-8 lg:px-12 xl:px-16 text-center animate-slideInUp">
          <h2 className="text-4xl sm:text-6xl lg:text-7xl xl:text-6xl font-bold mb-10 bg-gradient-to-r from-white to-[#6C63FF] bg-clip-text text-transparent max-w-6xl mx-auto">
            Ready to Transform Your Business?
          </h2>
          <p className="text-2xl sm:text-3xl lg:text-4xl text-gray-300 mb-16 max-w-4xl mx-auto leading-relaxed">
            Let's discuss how our AI solutions can revolutionize your operations and drive unprecedented growth.
          </p>
          <div className="flex flex-col sm:flex-row gap-8 justify-center items-center">
            <button className="group inline-flex items-center justify-center rounded-2xl text-xl font-medium transition-all duration-300 hover:scale-105 hover:shadow-2xl h-16 px-12 bg-gradient-to-r from-[#6C63FF] to-[#6C63FF]/80 hover:from-[#6C63FF]/90 hover:to-[#6C63FF]/70 animate-glow w-full sm:w-auto">
              <span className="group-hover:translate-x-1 transition-transform duration-300">Schedule Consultation</span>
              <ArrowRight className="ml-3 h-6 w-6 group-hover:translate-x-1 transition-transform duration-300" />
            </button>
            <button className="inline-flex items-center justify-center rounded-2xl text-xl font-medium transition-all duration-300 hover:scale-105 hover:bg-[#6C63FF]/20 h-16 px-12 border-2 border-[#6C63FF] text-white bg-transparent backdrop-blur-sm w-full sm:w-auto">
              View Portfolio
            </button>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="relative z-10 border-t border-[#6C63FF]/30 bg-black/90 backdrop-blur-sm py-20">
        <div className="w-full max-w-none container mx-auto px-6 sm:px-8 lg:px-12 xl:px-16">
          <div className="text-center mb-16">
            <div className="flex items-center justify-center space-x-4 mb-8">
              <div className="w-16 h-16 bg-gradient-to-r from-[#6C63FF] to-[#6C63FF]/80 rounded-3xl flex items-center justify-center animate-glow">
                <Brain className="h-10 w-10 text-white" />
              </div>
              <span className="text-3xl lg:text-4xl font-bold bg-gradient-to-r from-white to-[#6C63FF] bg-clip-text text-transparent">
                Opslify
              </span>
            </div>
            <p className="text-gray-400 text-xl max-w-3xl mx-auto leading-relaxed">
              Premier AI consulting firm delivering innovative technology solutions for modern enterprises.
            </p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-12 text-center lg:text-left">
            <div>
              <h5 className="font-semibold text-white mb-6 text-xl">Services</h5>
              <ul className="space-y-3 text-gray-400">
                <li className="hover:text-[#6C63FF] transition-colors duration-300 cursor-pointer text-lg">AI Web Development</li>
                <li className="hover:text-[#6C63FF] transition-colors duration-300 cursor-pointer text-lg">AI App Development</li>
                <li className="hover:text-[#6C63FF] transition-colors duration-300 cursor-pointer text-lg">Payment Software</li>
                <li className="hover:text-[#6C63FF] transition-colors duration-300 cursor-pointer text-lg">Cloud Services</li>
              </ul>
            </div>
            <div>
              <h5 className="font-semibold text-white mb-6 text-xl">Solutions</h5>
              <ul className="space-y-3 text-gray-400">
                <li className="hover:text-[#6C63FF] transition-colors duration-300 cursor-pointer text-lg">Product Design</li>
                <li className="hover:text-[#6C63FF] transition-colors duration-300 cursor-pointer text-lg">Digital Transformation</li>
                <li className="hover:text-[#6C63FF] transition-colors duration-300 cursor-pointer text-lg">IT Consulting</li>
                <li className="hover:text-[#6C63FF] transition-colors duration-300 cursor-pointer text-lg">Custom Development</li>
              </ul>
            </div>
            <div>
              <h5 className="font-semibold text-white mb-6 text-xl">Company</h5>
              <ul className="space-y-3 text-gray-400">
                <li className="hover:text-[#6C63FF] transition-colors duration-300 cursor-pointer text-lg">About Us</li>
                <li className="hover:text-[#6C63FF] transition-colors duration-300 cursor-pointer text-lg">Portfolio</li>
                <li className="hover:text-[#6C63FF] transition-colors duration-300 cursor-pointer text-lg">Careers</li>
                <li className="hover:text-[#6C63FF] transition-colors duration-300 cursor-pointer text-lg">Contact</li>
              </ul>
            </div>
            <div>
              <h5 className="font-semibold text-white mb-6 text-xl">Connect</h5>
              <ul className="space-y-3 text-gray-400">
                <li className="hover:text-[#6C63FF] transition-colors duration-300 cursor-pointer text-lg">LinkedIn</li>
                <li className="hover:text-[#6C63FF] transition-colors duration-300 cursor-pointer text-lg">Twitter</li>
                <li className="hover:text-[#6C63FF] transition-colors duration-300 cursor-pointer text-lg">GitHub</li>
                <li className="hover:text-[#6C63FF] transition-colors duration-300 cursor-pointer text-lg">Email</li>
              </ul>
            </div>
          </div>
          <div className="border-t border-[#6C63FF]/30 mt-16 pt-10 text-center text-gray-400">
            <p className="text-lg">&copy; 2024 Opslify. All rights reserved. | AI IT Consulting Excellence</p>
          </div>
        </div>
      </footer>
    </div>
  )
}