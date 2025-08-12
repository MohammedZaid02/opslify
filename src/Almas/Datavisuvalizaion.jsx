import { useEffect, useRef, useState } from "react"
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  Tooltip,
  ResponsiveContainer,
  CartesianGrid,
  PieChart,
  Pie,
  Cell,
  Legend,
  BarChart,
  Bar,
  RadarChart,
  PolarGrid,
  PolarAngleAxis,
  PolarRadiusAxis,
  Radar,
  AreaChart,
  Area,
} from "recharts"
import {
  FaChartBar,
  FaCogs,
  FaRobot,
  FaUserFriends,
  FaEye,
  FaLayerGroup,
  FaRocket,
  FaDatabase,
  FaShieldAlt,
  FaMobile,
  FaCloud,
  FaBolt,
  FaUsers,
  FaChartLine,
  FaGlobe,
  FaArrowRight,
  FaArrowUp,
} from "react-icons/fa"

// Enhanced data sets with #6C63FF theme
const lineChartData = [
  { month: "Jan", users: 1200, revenue: 45000 },
  { month: "Feb", users: 1900, revenue: 52000 },
  { month: "Mar", users: 2500, revenue: 61000 },
  { month: "Apr", users: 3100, revenue: 73000 },
  { month: "May", users: 4000, revenue: 89000 },
  { month: "Jun", users: 4700, revenue: 105000 },
]

const pieChartData = [
  { source: "Organic Search", value: 40, color: "#6C63FF" },
  { source: "Direct Traffic", value: 20, color: "#9C93FF" },
  { source: "Social Media", value: 25, color: "#B8B0FF" },
  { source: "Paid Ads", value: 15, color: "#D4CCFF" },
]

const barChartData = [
  { department: "Sales", performance: 85, target: 80 },
  { department: "Marketing", performance: 72, target: 75 },
  { department: "Engineering", performance: 93, target: 85 },
  { department: "Support", performance: 78, target: 70 },
  { department: "Product", performance: 88, target: 82 },
]

const radarChartData = [
  { subject: "Performance", A: 120, fullMark: 150 },
  { subject: "Scalability", A: 98, fullMark: 150 },
  { subject: "Accuracy", A: 86, fullMark: 150 },
  { subject: "Security", A: 99, fullMark: 150 },
  { subject: "Usability", A: 85, fullMark: 150 },
  { subject: "Innovation", A: 92, fullMark: 150 },
]

const areaChartData = [
  { month: "Jan", desktop: 4000, mobile: 2400, tablet: 1200 },
  { month: "Feb", desktop: 3000, mobile: 1398, tablet: 1100 },
  { month: "Mar", desktop: 2000, mobile: 9800, tablet: 1300 },
  { month: "Apr", desktop: 2780, mobile: 3908, tablet: 1400 },
  { month: "May", desktop: 1890, mobile: 4800, tablet: 1500 },
  { month: "Jun", desktop: 2390, mobile: 3800, tablet: 1600 },
]

const COLORS = ["#6C63FF", "#9C93FF", "#B8B0FF", "#D4CCFF", "#E8E4FF", "#F4F2FF"]

const featureCards = [
  {
    icon: <FaChartBar />,
    title: "Real-time Analytics",
    description: "Live data visualization with instant updates and interactive charts for immediate insights.",
  },
  {
    icon: <FaEye />,
    title: "Interactive Dashboards",
    description: "Drill-down capabilities with dynamic filtering and customizable view options.",
  },
  {
    icon: <FaLayerGroup />,
    title: "Multi-source Integration",
    description: "Connect data from multiple sources including APIs, databases, and third-party tools.",
  },
  {
    icon: <FaCogs />,
    title: "Custom Visualizations",
    description: "Build tailored charts and graphs that match your specific business requirements.",
  },
  {
    icon: <FaUserFriends />,
    title: "Team Collaboration",
    description: "Share insights across teams with role-based access and collaborative features.",
  },
  {
    icon: <FaRobot />,
    title: "AI-Powered Insights",
    description: "Machine learning algorithms that automatically detect patterns and anomalies.",
  },
  {
    icon: <FaRocket />,
    title: "High Performance",
    description: "Optimized for large datasets with lightning-fast rendering and smooth interactions.",
  },
  {
    icon: <FaDatabase />,
    title: "Data Management",
    description: "Comprehensive data pipeline with cleaning, transformation, and validation tools.",
  },
]

const metrics = [
  { label: "Active Users", value: "2.4M", change: "+12%", icon: <FaUsers />, color: "text-[#6C63FF]" },
  { label: "Revenue Growth", value: "$1.2M", change: "+23%", icon: <FaChartLine />, color: "text-[#6C63FF]" },
  { label: "Data Points", value: "847K", change: "+8%", icon: <FaDatabase />, color: "text-[#6C63FF]" },
  { label: "Global Reach", value: "156", change: "+5", icon: <FaGlobe />, color: "text-[#6C63FF]" },
]

const insights = [
  {
    title: "User Engagement Peak",
    description: "Mobile users show 40% higher engagement during evening hours",
    trend: "up",
    value: "40%",
  },
  {
    title: "Revenue Optimization",
    description: "Organic traffic converts 3x better than paid advertising",
    trend: "up",
    value: "3x",
  },
  {
    title: "Performance Metrics",
    description: "Dashboard load times improved by 60% with new optimizations",
    trend: "up",
    value: "60%",
  },
]

// Chart Components
const MonthlyUsersChart = () => (
  <div className="bg-black/50 backdrop-blur-sm rounded-2xl p-6 lg:p-8 border border-[#6C63FF]/30 hover:border-[#6C63FF]/50 transition-all duration-300">
    <ResponsiveContainer width="100%" height={350}>
      <LineChart data={lineChartData}>
        <CartesianGrid strokeDasharray="3 3" stroke="#6C63FF30" />
        <XAxis dataKey="month" stroke="#9ca3af" />
        <YAxis stroke="#9ca3af" />
        <Tooltip
          contentStyle={{
            backgroundColor: "#000000",
            border: "1px solid #6C63FF",
            borderRadius: "12px",
            color: "#ffffff",
          }}
        />
        <Line
          type="monotone"
          dataKey="users"
          stroke="#6C63FF"
          strokeWidth={3}
          dot={{ fill: "#6C63FF", strokeWidth: 2, r: 6 }}
          activeDot={{ r: 8, stroke: "#6C63FF", strokeWidth: 2 }}
        />
      </LineChart>
    </ResponsiveContainer>
  </div>
)

const SourcePieChart = () => (
  <div className="bg-black/50 backdrop-blur-sm rounded-2xl p-6 lg:p-8 border border-[#6C63FF]/30 hover:border-[#6C63FF]/50 transition-all duration-300">
    <ResponsiveContainer width="100%" height={350}>
      <PieChart>
        <Pie
          data={pieChartData}
          dataKey="value"
          nameKey="source"
          cx="50%"
          cy="50%"
          outerRadius={100}
          label={({ name, percent }) => `${name} ${(percent * 100).toFixed(0)}%`}
        >
          {pieChartData.map((entry, index) => (
            <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
          ))}
        </Pie>
        <Tooltip
          contentStyle={{
            backgroundColor: "#000000",
            border: "1px solid #6C63FF",
            borderRadius: "12px",
            color: "#ffffff",
          }}
        />
        <Legend />
      </PieChart>
    </ResponsiveContainer>
  </div>
)

const DepartmentBarChart = () => (
  <div className="bg-black/50 backdrop-blur-sm rounded-2xl p-6 lg:p-8 border border-[#6C63FF]/30 hover:border-[#6C63FF]/50 transition-all duration-300">
    <ResponsiveContainer width="100%" height={350}>
      <BarChart data={barChartData}>
        <CartesianGrid strokeDasharray="3 3" stroke="#6C63FF30" />
        <XAxis dataKey="department" stroke="#9ca3af" />
        <YAxis stroke="#9ca3af" />
        <Tooltip
          contentStyle={{
            backgroundColor: "#000000",
            border: "1px solid #6C63FF",
            borderRadius: "12px",
            color: "#ffffff",
          }}
        />
        <Bar dataKey="performance" fill="#6C63FF" radius={[4, 4, 0, 0]} />
        <Bar dataKey="target" fill="#6b7280" radius={[4, 4, 0, 0]} />
      </BarChart>
    </ResponsiveContainer>
  </div>
)

const RadarStrengthChart = () => (
  <div className="bg-black/50 backdrop-blur-sm rounded-2xl p-6 lg:p-8 border border-[#6C63FF]/30 hover:border-[#6C63FF]/50 transition-all duration-300">
    <ResponsiveContainer width="100%" height={350}>
      <RadarChart data={radarChartData}>
        <PolarGrid stroke="#6C63FF30" />
        <PolarAngleAxis dataKey="subject" stroke="#9ca3af" />
        <PolarRadiusAxis stroke="#6b7280" />
        <Radar dataKey="A" stroke="#6C63FF" fill="#6C63FF" fillOpacity={0.3} strokeWidth={2} />
        <Tooltip
          contentStyle={{
            backgroundColor: "#000000",
            border: "1px solid #6C63FF",
            borderRadius: "12px",
            color: "#ffffff",
          }}
        />
      </RadarChart>
    </ResponsiveContainer>
  </div>
)

const DeviceUsageChart = () => (
  <div className="bg-black/50 backdrop-blur-sm rounded-2xl p-6 lg:p-8 border border-[#6C63FF]/30 hover:border-[#6C63FF]/50 transition-all duration-300">
    <ResponsiveContainer width="100%" height={350}>
      <AreaChart data={areaChartData}>
        <CartesianGrid strokeDasharray="3 3" stroke="#6C63FF30" />
        <XAxis dataKey="month" stroke="#9ca3af" />
        <YAxis stroke="#9ca3af" />
        <Tooltip
          contentStyle={{
            backgroundColor: "#000000",
            border: "1px solid #6C63FF",
            borderRadius: "12px",
            color: "#ffffff",
          }}
        />
        <Area type="monotone" dataKey="desktop" stackId="1" stroke="#6C63FF" fill="#6C63FF" fillOpacity={0.8} />
        <Area type="monotone" dataKey="mobile" stackId="1" stroke="#9C93FF" fill="#9C93FF" fillOpacity={0.8} />
        <Area type="monotone" dataKey="tablet" stackId="1" stroke="#B8B0FF" fill="#B8B0FF" fillOpacity={0.8} />
        <Legend />
      </AreaChart>
    </ResponsiveContainer>
  </div>
)

const ChartSection = ({ title, description, children, reverse = false }) => {
  const [inView, setInView] = useState(false)
  const ref = useRef(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setInView(true)
          observer.disconnect()
        }
      },
      { threshold: 0.2 },
    )

    if (ref.current) observer.observe(ref.current)
    return () => observer.disconnect()
  }, [])

  return (
    <div
      ref={ref}
      className={`flex flex-col xl:flex-row items-center gap-8 lg:gap-12 xl:gap-16 mb-16 lg:mb-24 transition-all duration-700 ${
        inView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
      } ${reverse ? "xl:flex-row-reverse" : ""}`}
    >
      <div className="flex-1 space-y-4 lg:space-y-6 text-center xl:text-left">
        <h3 className="text-2xl sm:text-3xl lg:text-4xl xl:text-5xl font-bold text-white">{title}</h3>
        <p className="text-gray-300 text-lg sm:text-xl lg:text-2xl leading-relaxed max-w-2xl mx-auto xl:mx-0">{description}</p>
      </div>
      <div className="flex-1 w-full">{inView && children}</div>
    </div>
  )
}

const DataVisualization = () => {
  const carouselRef = useRef(null)
  const [scrollY, setScrollY] = useState(0)

  useEffect(() => {
    const handleScroll = () => setScrollY(window.scrollY)
    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  useEffect(() => {
    const container = carouselRef.current
    if (!container) return

    let scrollAmount = 0
    const scroll = () => {
      scrollAmount += 1
      container.scrollLeft = scrollAmount
      if (scrollAmount >= container.scrollWidth / 2) {
        scrollAmount = 0
      }
    }

    const interval = setInterval(scroll, 50)
    return () => clearInterval(interval)
  }, [])

  return (
    <div className="min-h-screen bg-black text-white relative overflow-hidden">
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
          {[...Array(25)].map((_, i) => (
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
          {[...Array(60)].map((_, i) => (
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
      `}</style>

      {/* Hero Section */}
      <section className="relative z-10 py-16 sm:py-20 lg:py-32 xl:py-40">
        <div className="w-full max-w-none container mx-auto px-4 sm:px-6 lg:px-8 xl:px-12 2xl:px-16">
          <div className="text-center space-y-8 lg:space-y-12">
            <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl 2xl:text-9xl font-bold">
              <span className="bg-gradient-to-r from-white via-gray-200 to-[#6C63FF] bg-clip-text text-transparent">
                Data Visualization
              </span>
            </h1>
            <p className="text-lg sm:text-xl md:text-2xl lg:text-3xl xl:text-4xl text-gray-300 max-w-none lg:max-w-6xl xl:max-w-none mx-auto leading-relaxed px-4">
              Transform complex data into compelling visual stories. Our advanced analytics platform empowers teams to
              make data-driven decisions with confidence and clarity through intelligent visualization solutions.
            </p>
            <div className="flex flex-col sm:flex-row gap-6 lg:gap-8 justify-center items-center pt-4 lg:pt-8">
              <button className="w-full sm:w-auto px-8 lg:px-12 py-4 lg:py-5 bg-gradient-to-r from-[#6C63FF] to-[#6C63FF]/80 text-white font-semibold rounded-2xl hover:from-[#6C63FF]/90 hover:to-[#6C63FF]/70 transition-all duration-300 transform hover:scale-105 shadow-xl hover:shadow-2xl hover:shadow-[#6C63FF]/30 text-base lg:text-lg">
                Get Started Free
              </button>
              <button className="w-full sm:w-auto px-8 lg:px-12 py-4 lg:py-5 border-2 border-[#6C63FF]/50 hover:border-[#6C63FF] text-white font-semibold rounded-2xl hover:bg-[#6C63FF]/10 transition-all duration-300 flex items-center justify-center gap-3 backdrop-blur-sm text-base lg:text-lg">
                Watch Demo <FaArrowRight />
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Metrics Overview */}
      <section className="relative z-10 py-16 lg:py-24 bg-black/30 backdrop-blur-sm">
        <div className="w-full max-w-none container mx-auto px-4 sm:px-6 lg:px-8 xl:px-12 2xl:px-16">
          <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-4 gap-6 lg:gap-8 xl:gap-10">
            {metrics.map((metric, index) => (
              <div
                key={index}
                className="bg-black/50 backdrop-blur-sm rounded-2xl p-6 lg:p-8 border border-[#6C63FF]/30 hover:border-[#6C63FF]/50 transition-all duration-300 hover:transform hover:scale-105 hover:shadow-xl hover:shadow-[#6C63FF]/20"
              >
                <div className="flex items-center justify-between mb-4 lg:mb-6">
                  <div className={`text-2xl lg:text-3xl ${metric.color}`}>{metric.icon}</div>
                  <span className="text-[#6C63FF] text-sm lg:text-base font-medium">{metric.change}</span>
                </div>
                <div className="space-y-1 lg:space-y-2">
                  <p className="text-2xl sm:text-3xl lg:text-4xl font-bold text-white">{metric.value}</p>
                  <p className="text-gray-400 text-sm lg:text-base">{metric.label}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Features Carousel */}
      <section className="relative z-10 py-20 lg:py-32">
        <div className="w-full max-w-none container mx-auto px-4 sm:px-6 lg:px-8 xl:px-12 2xl:px-16">
          <div className="text-center mb-16 lg:mb-24">
            <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold text-white mb-4 lg:mb-8">
              Powerful Features for Every Team
            </h2>
            <p className="text-lg sm:text-xl lg:text-2xl xl:text-3xl text-gray-300 max-w-none lg:max-w-5xl xl:max-w-none mx-auto">
              Comprehensive tools designed to handle any data visualization challenge with precision
            </p>
          </div>

          <div ref={carouselRef} className="flex gap-6 lg:gap-8 overflow-x-hidden pb-4" style={{ scrollBehavior: "smooth" }}>
            {featureCards.concat(featureCards).map((card, index) => (
              <div
                key={index}
                className="min-w-[320px] sm:min-w-[380px] lg:min-w-[450px] xl:min-w-[500px] flex-shrink-0 bg-gradient-to-br from-black/80 to-gray-900/80 backdrop-blur-sm rounded-3xl p-6 lg:p-8 xl:p-10 border border-[#6C63FF]/30 hover:border-[#6C63FF]/50 transition-all duration-500 hover:transform hover:scale-105 hover:shadow-xl hover:shadow-[#6C63FF]/20"
              >
                <div className="text-3xl lg:text-4xl xl:text-5xl text-[#6C63FF] mb-6 lg:mb-8">{card.icon}</div>
                <h3 className="text-xl lg:text-2xl xl:text-3xl font-bold text-white mb-4 lg:mb-6">{card.title}</h3>
                <p className="text-gray-300 text-base lg:text-lg xl:text-xl leading-relaxed">{card.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Charts Section */}
      <section className="relative z-10 py-20 lg:py-32">
        <div className="w-full max-w-none container mx-auto px-4 sm:px-6 lg:px-8 xl:px-12 2xl:px-16">
          <div className="text-center mb-16 lg:mb-24">
            <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold text-white mb-4 lg:mb-8">
              Interactive Data Insights
            </h2>
            <p className="text-lg sm:text-xl lg:text-2xl xl:text-3xl text-gray-300 max-w-none lg:max-w-5xl xl:max-w-none mx-auto">
              Explore your data through multiple visualization formats with real-time interactivity and advanced analytics
            </p>
          </div>

          <div className="space-y-20 lg:space-y-32">
            <ChartSection
              title="User Growth Analytics"
              description="Track monthly active users and identify growth patterns with our advanced line chart visualization. Monitor user acquisition trends and seasonal variations with precision analytics and forecasting capabilities."
            >
              <MonthlyUsersChart />
            </ChartSection>

            <ChartSection
              title="Traffic Source Distribution"
              description="Understand where your users come from with detailed source attribution analysis. Optimize your marketing spend based on comprehensive channel performance data and conversion metrics."
              reverse
            >
              <SourcePieChart />
            </ChartSection>

            <ChartSection
              title="Department Performance Metrics"
              description="Compare actual performance against targets across all departments and teams. Identify high-performing areas and opportunities for improvement with detailed performance analytics and benchmarking."
            >
              <DepartmentBarChart />
            </ChartSection>

            <ChartSection
              title="Platform Capability Assessment"
              description="Evaluate multiple dimensions of your platform's performance including speed, scalability, accuracy, and security. Get comprehensive insights into system capabilities and optimization opportunities."
              reverse
            >
              <RadarStrengthChart />
            </ChartSection>

            <ChartSection
              title="Device Usage Trends"
              description="Analyze user behavior across different devices and platforms with detailed usage patterns. Optimize your experience for the most popular user segments with comprehensive device analytics and insights."
            >
              <DeviceUsageChart />
            </ChartSection>
          </div>
        </div>
      </section>

      {/* AI Insights Section */}
      <section className="relative z-10 py-20 lg:py-32 bg-gradient-to-r from-[#6C63FF]/20 to-black/60">
        <div className="w-full max-w-none container mx-auto px-4 sm:px-6 lg:px-8 xl:px-12 2xl:px-16">
          <div className="text-center mb-16 lg:mb-24">
            <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold text-white mb-4 lg:mb-8">
              AI-Powered Insights
            </h2>
            <p className="text-lg sm:text-xl lg:text-2xl xl:text-3xl text-gray-300 max-w-none lg:max-w-5xl xl:max-w-none mx-auto">
              Let artificial intelligence uncover hidden patterns in your data with advanced machine learning algorithms and predictive analytics
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 lg:gap-12">
            {insights.map((insight, index) => (
              <div
                key={index}
                className="bg-black/50 backdrop-blur-sm rounded-2xl p-6 lg:p-8 xl:p-10 border border-[#6C63FF]/30 hover:border-[#6C63FF]/50 transition-all duration-300 hover:transform hover:scale-105 hover:shadow-xl hover:shadow-[#6C63FF]/20"
              >
                <div className="flex items-center justify-between mb-6 lg:mb-8">
                  <FaRobot className="text-2xl lg:text-3xl text-[#6C63FF]" />
                  <div className="flex items-center gap-2 lg:gap-3">
                    <FaArrowUp className="text-[#6C63FF]" />
                    <span className="text-[#6C63FF] font-bold text-lg lg:text-xl">{insight.value}</span>
                  </div>
                </div>
                <h3 className="text-xl lg:text-2xl xl:text-3xl font-bold text-white mb-3 lg:mb-4">{insight.title}</h3>
                <p className="text-gray-300 text-base lg:text-lg xl:text-xl leading-relaxed">{insight.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Integration Section */}
      <section className="relative z-10 py-20 lg:py-32">
        <div className="w-full max-w-none container mx-auto px-4 sm:px-6 lg:px-8 xl:px-12 2xl:px-16">
          <div className="text-center mb-16 lg:mb-24">
            <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold text-white mb-4 lg:mb-8">
              Seamless Integrations
            </h2>
            <p className="text-lg sm:text-xl lg:text-2xl xl:text-3xl text-gray-300 max-w-none lg:max-w-5xl xl:max-w-none mx-auto">
              Connect with your existing tools and data sources effortlessly with our comprehensive integration platform
            </p>
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-6 lg:gap-8">
            {[
              { icon: <FaDatabase />, name: "SQL Databases" },
              { icon: <FaCloud />, name: "Cloud Storage" },
              { icon: <FaBolt />, name: "Real-time APIs" },
              { icon: <FaShieldAlt />, name: "Security Tools" },
              { icon: <FaMobile />, name: "Mobile Apps" },
              { icon: <FaChartLine />, name: "Analytics" },
            ].map((integration, index) => (
              <div
                key={index}
                className="bg-black/30 backdrop-blur-sm rounded-2xl p-6 lg:p-8 border border-[#6C63FF]/30 hover:border-[#6C63FF]/50 transition-all duration-300 text-center group hover:transform hover:scale-105 hover:shadow-xl hover:shadow-[#6C63FF]/20"
              >
                <div className="text-3xl lg:text-4xl text-gray-400 group-hover:text-[#6C63FF] transition-colors duration-300 mb-3 lg:mb-4">
                  {integration.icon}
                </div>
                <p className="text-gray-300 text-sm lg:text-base font-medium">{integration.name}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="relative z-10 py-20 lg:py-32 bg-gradient-to-r from-[#6C63FF] to-[#6C63FF]/80">
        <div className="w-full max-w-none container mx-auto px-4 sm:px-6 lg:px-8 xl:px-12 2xl:px-16 text-center">
          <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold text-white mb-6 lg:mb-12">
            Ready to Transform Your Data?
          </h2>
          <p className="text-lg sm:text-xl lg:text-2xl xl:text-3xl text-white/90 mb-8 lg:mb-16 leading-relaxed max-w-none lg:max-w-5xl xl:max-w-none mx-auto">
            Join thousands of teams already using our platform to make better decisions with their data and drive unprecedented business growth and success.
          </p>
          <div className="flex flex-col sm:flex-row gap-6 lg:gap-8 justify-center">
            <button className="w-full sm:w-auto px-8 lg:px-12 py-4 lg:py-5 bg-white text-[#6C63FF] font-semibold rounded-2xl hover:bg-gray-100 transition-all duration-300 transform hover:scale-105 shadow-xl text-base lg:text-lg">
              Start Free Trial
            </button>
            <button className="w-full sm:w-auto px-8 lg:px-12 py-4 lg:py-5 border-2 border-white text-white font-semibold rounded-2xl hover:bg-white hover:text-[#6C63FF] transition-all duration-300 text-base lg:text-lg">
              Schedule Demo
            </button>
          </div>
        </div>
      </section>
    </div>
  )
}

export default DataVisualization