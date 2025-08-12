import { useState, useEffect, useRef } from "react";
import {
    FaDatabase,
    FaChartLine,
    FaUsers,
    FaCloud,
    FaArrowUp,
    FaArrowDown,
} from "react-icons/fa";
import {
    LineChart,
    Line,
    XAxis,
    YAxis,
    CartesianGrid,
    Tooltip,
    Legend,
    BarChart,
    Bar
} from "recharts";

const defaultStats = [
    {
        icon: <FaDatabase />,
        label: "Total Data Processed",
        value: 2.6,
        suffix: "PB",
        trend: "up",
        trendText: "4.2% this week",
    },
    {
        icon: <FaUsers />,
        label: "Active Users",
        value: 8422,
        suffix: "",
        trend: "down",
        trendText: "1.5% this week",
    },
    {
        icon: <FaCloud />,
        label: "Cloud Zones",
        value: 18,
        suffix: "",
        trend: "steady",
        trendText: "Stable",
    },
    {
        icon: <FaChartLine />,
        label: "Jobs Running",
        value: 123,
        suffix: "",
        trend: "up",
        trendText: "7.1% this week",
    },
];

function useCountUp(targetValue, isVisible) {
    const [count, setCount] = useState(0);
    useEffect(() => {
        if (!isVisible) return;
        let start = 0;
        const duration = 1000;
        const stepTime = 20;
        const steps = Math.ceil(duration / stepTime);
        const increment = targetValue / steps;
        let currentStep = 0;

        const interval = setInterval(() => {
            start += increment;
            currentStep++;
            if (currentStep >= steps) {
                clearInterval(interval);
                setCount(targetValue);
            } else {
                setCount(Math.round(start));
            }
        }, stepTime);

        return () => clearInterval(interval);
    }, [targetValue, isVisible]);

    return count;
}

function useAnimatedStats(stats, isVisible) {
    return stats.map((stat) => {
        const animatedValue = useCountUp(stat.value, isVisible);
        return { ...stat, animatedValue };
    });
}

export default function Dashboards() {
    const [stats, setStats] = useState(defaultStats);
    const [isStatsVisible, setIsStatsVisible] = useState(false);
    const animatedStats = useAnimatedStats(stats, isStatsVisible);

    const chartRef = useRef(null);
    const whyRef = useRef(null);
    const feedbackRef = useRef(null);

    const [isChartVisible, setIsChartVisible] = useState(false);
    const [isWhyVisible, setIsWhyVisible] = useState(false);
    const [isFeedbackVisible, setIsFeedbackVisible] = useState(false);

    const liveMessages = [
        "Ingesting new logs...",
        "Transforming events...",
        "Storing data in cloud...",
        "Streaming to analytics...",
        "Cleaning up pipelines...",
    ];
    const cardColors = ["#6C63FF", "#4f46e5", "#6366f1", "#8b5cf6", "#7c3aed", "#a855f7"];
    const [currentMessage, setCurrentMessage] = useState(0);
    const [cardColor, setCardColor] = useState(cardColors[0]);

    useEffect(() => {
        window.scrollTo(0, 0);
        const interval = setInterval(() => {
            setCurrentMessage((prev) => {
                const nextIndex = (prev + 1) % liveMessages.length;
                setCardColor(cardColors[Math.floor(Math.random() * cardColors.length)]);
                return nextIndex;
            });
        }, 3000);
        return () => clearInterval(interval);
    }, []);

    useEffect(() => {
        const interval = setInterval(() => {
            setStats((prevStats) =>
                prevStats.map((s) => ({
                    ...s,
                    value:
                        typeof s.value === "number"
                            ? Number((s.value + (Math.random() * 2 - 1)).toFixed(1))
                            : s.value,
                    trend: Math.random() > 0.5 ? "up" : Math.random() > 0.5 ? "down" : "steady",
                    trendText: Math.random() > 0.5
                        ? `${(Math.random() * 5).toFixed(1)}% this week`
                        : "Stable",
                }))
            );
        }, 10000);
        return () => clearInterval(interval);
    }, []);

    const observerSection = (ref, setVisible, threshold = 0.3, onVisible = null) => {
        useEffect(() => {
            let observer;
            const observe = () => {
                if (!ref.current) return;
                observer = new IntersectionObserver(
                    ([entry]) => {
                        if (entry.isIntersecting) {
                            setVisible(true);
                            if (onVisible) onVisible();
                            observer.disconnect();
                        }
                    },
                    { root: null, threshold }
                );
                observer.observe(ref.current);
            };
            requestAnimationFrame(observe);
            return () => observer && observer.disconnect();
        }, []);
    };

    observerSection(chartRef, setIsChartVisible);
    observerSection(whyRef, setIsWhyVisible, 0.2);
    observerSection(feedbackRef, setIsFeedbackVisible);

    return (
        <div className="min-h-screen bg-gradient-to-br from-black via-gray-900 to-black text-white relative overflow-hidden">
            {/* Background Effects */}
            <div className="fixed inset-0 z-0">
                <div className="absolute inset-0 bg-gradient-to-br from-black via-gray-900 to-black" />
                <div className="absolute inset-0 opacity-30 bg-[radial-gradient(circle_at_20%_50%,_#6C63FF_0%,_transparent_50%)]" />
                <div className="absolute inset-0 opacity-20 bg-[radial-gradient(circle_at_80%_20%,_#6C63FF_0%,_transparent_50%)]" />
                <div className="absolute inset-0 opacity-15 bg-[radial-gradient(circle_at_40%_80%,_#6C63FF_0%,_transparent_50%)]" />
            </div>

            {/* Dashboard Header */}
            <header className="relative z-10 py-16 sm:py-20 lg:py-24 px-4 sm:px-6 lg:px-8">
                <div className="max-w-7xl mx-auto">
                    <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
                        <div className="space-y-8">
                            <div className="space-y-6">
                                <div className="inline-flex items-center px-4 py-2 rounded-full bg-[#6C63FF]/20 border border-[#6C63FF]/30 backdrop-blur-sm">
                                    <span className="text-[#6C63FF] text-sm font-semibold">Analytics Platform</span>
                                </div>
                                <h1 className="text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-bold bg-gradient-to-r from-white via-gray-200 to-[#6C63FF] bg-clip-text text-transparent leading-tight">
                                    Dashboards
                                </h1>
                                <p className="text-xl sm:text-2xl text-gray-300 leading-relaxed max-w-2xl">
                                    Unlock real-time insights across your entire system. Monitor critical metrics, detect trends, and collaborate seamlessly with intelligent analytics.
                                </p>
                            </div>
                            <div className="flex flex-col sm:flex-row gap-4">
                                <button className="inline-flex items-center justify-center px-8 py-4 bg-gradient-to-r from-[#6C63FF] to-[#6C63FF]/80 hover:from-[#6C63FF]/90 hover:to-[#6C63FF]/70 rounded-xl font-semibold transition-all duration-300 transform hover:scale-105 hover:shadow-xl hover:shadow-[#6C63FF]/30">
                                    Get Started
                                </button>
                                <button className="inline-flex items-center justify-center px-8 py-4 border-2 border-[#6C63FF]/50 hover:border-[#6C63FF] rounded-xl font-semibold transition-all duration-300 hover:bg-[#6C63FF]/10 backdrop-blur-sm">
                                    Learn More
                                </button>
                            </div>
                        </div>
                        <div className="relative">
                            <div className="relative overflow-hidden rounded-2xl border border-[#6C63FF]/30 bg-black/50 backdrop-blur-sm shadow-2xl shadow-[#6C63FF]/20">
                                <video
                                    src="/dashboard.mp4"
                                    autoPlay
                                    loop
                                    muted
                                    playsInline
                                    className="w-full h-auto max-h-[400px] object-cover"
                                />
                                <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent" />
                            </div>
                            <div className="absolute -top-4 -right-4 w-24 h-24 bg-[#6C63FF]/30 rounded-full blur-xl animate-pulse" />
                            <div className="absolute -bottom-4 -left-4 w-32 h-32 bg-purple-500/20 rounded-full blur-xl animate-pulse delay-1000" />
                        </div>
                    </div>
                </div>
            </header>

            {/* Dashboard Hero */}
            <section className="relative z-10 py-16 sm:py-20 lg:py-24 px-4 sm:px-6 lg:px-8">
                <div className="max-w-7xl mx-auto">
                    <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
                        <div className="order-2 lg:order-1 relative">
                            <div className="relative overflow-hidden rounded-2xl border border-[#6C63FF]/30 bg-black/50 backdrop-blur-sm shadow-2xl shadow-[#6C63FF]/20">
                                <video
                                    src="/dashboard1.mp4"
                                    autoPlay
                                    loop
                                    muted
                                    playsInline
                                    className="w-full h-auto max-h-[500px] object-cover"
                                />
                                <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent" />
                            </div>
                        </div>
                        <div className="order-1 lg:order-2 space-y-8">
                            <div className="space-y-6">
                                <h2 className="text-4xl sm:text-5xl lg:text-6xl font-bold bg-gradient-to-r from-white to-[#6C63FF] bg-clip-text text-transparent leading-tight">
                                    Analytics Dashboard
                                </h2>
                                <p className="text-xl text-gray-300 leading-relaxed">
                                    Real-time insights across all your distributed data from a single, powerful interface with advanced visualization capabilities.
                                </p>
                            </div>
                            
                            {/* Stats Grid */}
                            <div
                                className={`grid grid-cols-1 sm:grid-cols-2 gap-6 transition-all duration-1000 ${isStatsVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}
                                ref={(el) => {
                                    if (el && !isStatsVisible) {
                                        const observer = new IntersectionObserver(
                                            ([entry]) => {
                                                if (entry.isIntersecting) {
                                                    setIsStatsVisible(true);
                                                    observer.disconnect();
                                                }
                                            },
                                            { threshold: 0.3 }
                                        );
                                        observer.observe(el);
                                    }
                                }}
                            >
                                {stats.map(({ icon, label, value, suffix, trend, trendText }, idx) => {
                                    const animatedValue = useCountUp(value, isStatsVisible);
                                    const displayValue = Number.isInteger(value)
                                        ? animatedValue
                                        : (animatedValue / 10).toFixed(1);
                                    return (
                                        <div 
                                            key={idx} 
                                            className="relative group p-6 rounded-xl bg-gradient-to-br from-[#6C63FF]/10 to-purple-600/5 border border-[#6C63FF]/20 backdrop-blur-sm hover:border-[#6C63FF]/40 transition-all duration-500 hover:transform hover:scale-105 hover:shadow-xl hover:shadow-[#6C63FF]/20"
                                        >
                                            <div className="flex items-start justify-between mb-4">
                                                <div className="p-3 rounded-lg bg-gradient-to-br from-[#6C63FF] to-purple-600 text-white text-xl group-hover:scale-110 transition-transform duration-300">
                                                    {icon}
                                                </div>
                                                <div className={`flex items-center space-x-1 text-sm font-semibold ${
                                                    trend === "up" ? "text-green-400" : 
                                                    trend === "down" ? "text-red-400" : 
                                                    "text-gray-400"
                                                }`}>
                                                    {trend === "up" ? <FaArrowUp className="text-xs" /> : 
                                                     trend === "down" ? <FaArrowDown className="text-xs" /> : null}
                                                    <span>{trendText}</span>
                                                </div>
                                            </div>
                                            <div className="space-y-2">
                                                <div className="text-3xl font-bold text-white">
                                                    {displayValue}
                                                    {suffix && <span className="text-[#6C63FF]"> {suffix}</span>}
                                                </div>
                                                <div className="text-gray-400 font-medium">{label}</div>
                                            </div>
                                            <div className="absolute inset-0 bg-gradient-to-r from-[#6C63FF]/5 to-purple-600/5 rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                                        </div>
                                    );
                                })}
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Why Dashboards */}
            <section 
                ref={whyRef} 
                className={`relative z-10 py-16 sm:py-20 lg:py-24 px-4 sm:px-6 lg:px-8 transition-all duration-1000 ${isWhyVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}
            >
                <div className="max-w-7xl mx-auto">
                    <div className="text-center mb-16">
                        <h2 className="text-4xl sm:text-5xl lg:text-6xl font-bold mb-6 bg-gradient-to-r from-white to-[#6C63FF] bg-clip-text text-transparent">
                            Why Choose Our Dashboards?
                        </h2>
                        <p className="text-xl text-gray-400 max-w-3xl mx-auto">
                            Powerful features designed to transform how you visualize and interact with your data
                        </p>
                    </div>
                    <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-8">
                        {[
                            { 
                                title: "Centralized Insights", 
                                desc: "Unified view of your business metrics and KPIs in one comprehensive dashboard.",
                                icon: "📊"
                            },
                            { 
                                title: "Real-Time Monitoring", 
                                desc: "Instant updates on critical system performance and business indicators.",
                                icon: "⚡"
                            },
                            { 
                                title: "Enhanced Collaboration", 
                                desc: "Share insights and align team efforts with collaborative data visualization.",
                                icon: "🤝"
                            },
                            { 
                                title: "Customizable Reports", 
                                desc: "Flexible visualization options tailored to your specific business needs.",
                                icon: "🎨"
                            },
                        ].map((item, idx) => (
                            <div 
                                key={idx} 
                                className="group p-8 rounded-2xl bg-gradient-to-br from-[#6C63FF]/10 to-purple-600/5 border border-[#6C63FF]/20 backdrop-blur-sm hover:border-[#6C63FF]/50 transition-all duration-500 hover:transform hover:scale-105 hover:shadow-xl hover:shadow-[#6C63FF]/20"
                            >
                                <div className="text-4xl mb-4 group-hover:scale-110 transition-transform duration-300">
                                    {item.icon}
                                </div>
                                <h3 className="text-2xl font-bold text-white mb-4 group-hover:text-[#6C63FF] transition-colors duration-300">
                                    {item.title}
                                </h3>
                                <p className="text-gray-400 leading-relaxed group-hover:text-gray-300 transition-colors duration-300">
                                    {item.desc}
                                </p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Chart Section */}
            <section 
                className="relative z-10 py-16 sm:py-20 lg:py-24 px-4 sm:px-6 lg:px-8" 
                ref={chartRef}
            >
                <div className="max-w-7xl mx-auto">
                    <div className="text-center mb-16">
                        <h2 className="text-4xl sm:text-5xl lg:text-6xl font-bold mb-6 bg-gradient-to-r from-white to-[#6C63FF] bg-clip-text text-transparent">
                            Data Visualization
                        </h2>
                        <p className="text-xl text-gray-400 max-w-3xl mx-auto">
                            Interactive charts and graphs that bring your data to life with stunning visual clarity
                        </p>
                    </div>
                    <div className="grid lg:grid-cols-2 gap-8 lg:gap-12">
                        {/* Line Chart */}
                        <div className="p-8 rounded-2xl bg-gradient-to-br from-[#6C63FF]/10 to-purple-600/5 border border-[#6C63FF]/20 backdrop-blur-sm hover:border-[#6C63FF]/40 transition-all duration-500">
                            <h3 className="text-2xl font-bold text-white mb-6">User Analytics</h3>
                            <div className="overflow-x-auto">
                                <LineChart 
                                    width={600} 
                                    height={300} 
                                    data={[
                                        { name: "Jan", users: 400, sessions: 240 },
                                        { name: "Feb", users: 300, sessions: 200 },
                                        { name: "Mar", users: 500, sessions: 300 },
                                        { name: "Apr", users: 200, sessions: 180 },
                                        { name: "May", users: 350, sessions: 220 },
                                    ]}
                                    className="mx-auto"
                                >
                                    <CartesianGrid strokeDasharray="3 3" stroke="#6C63FF20" />
                                    <XAxis dataKey="name" stroke="#9CA3AF" />
                                    <YAxis stroke="#9CA3AF" />
                                    <Tooltip 
                                        contentStyle={{ 
                                            backgroundColor: '#1F2937', 
                                            border: '1px solid #6C63FF', 
                                            borderRadius: '8px',
                                            color: '#FFFFFF'
                                        }} 
                                    />
                                    <Legend />
                                    <Line
                                        type="monotone"
                                        dataKey="users"
                                        stroke="#6C63FF"
                                        strokeWidth={isChartVisible ? 3 : 1}
                                        activeDot={{ r: 8, fill: '#6C63FF' }}
                                    />
                                </LineChart>
                            </div>
                        </div>

                        {/* Bar Chart */}
                        <div className="p-8 rounded-2xl bg-gradient-to-br from-[#6C63FF]/10 to-purple-600/5 border border-[#6C63FF]/20 backdrop-blur-sm hover:border-[#6C63FF]/40 transition-all duration-500">
                            <h3 className="text-2xl font-bold text-white mb-6">Session Data</h3>
                            <div className="overflow-x-auto">
                                <BarChart 
                                    width={600} 
                                    height={300} 
                                    data={[
                                        { name: "Jan", users: 400, sessions: 240 },
                                        { name: "Feb", users: 300, sessions: 200 },
                                        { name: "Mar", users: 500, sessions: 300 },
                                        { name: "Apr", users: 200, sessions: 180 },
                                        { name: "May", users: 350, sessions: 220 },
                                    ]}
                                    className="mx-auto"
                                >
                                    <CartesianGrid strokeDasharray="3 3" stroke="#6C63FF20" />
                                    <XAxis dataKey="name" stroke="#9CA3AF" />
                                    <YAxis stroke="#9CA3AF" />
                                    <Tooltip 
                                        contentStyle={{ 
                                            backgroundColor: '#1F2937', 
                                            border: '1px solid #6C63FF', 
                                            borderRadius: '8px',
                                            color: '#FFFFFF'
                                        }} 
                                    />
                                    <Legend />
                                    <Bar
                                        dataKey="sessions"
                                        fill="#6C63FF"
                                        radius={[4, 4, 0, 0]}
                                        opacity={isChartVisible ? 0.8 : 0.6}
                                    />
                                </BarChart>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Live Data Feed */}
            <section className="relative z-10 py-16 sm:py-20 lg:py-24 px-4 sm:px-6 lg:px-8">
                <div className="max-w-7xl mx-auto">
                    <div className="text-center mb-16">
                        <h2 className="text-4xl sm:text-5xl lg:text-6xl font-bold mb-6 bg-gradient-to-r from-white to-[#6C63FF] bg-clip-text text-transparent">
                            Live Data Feed
                        </h2>
                        <p className="text-xl text-gray-400 max-w-3xl mx-auto">
                            Real-time monitoring of your data processing pipeline with live status updates
                        </p>
                    </div>
                    <div className="flex justify-center">
                        <div 
                            className="relative p-8 rounded-2xl border backdrop-blur-sm transition-all duration-500 hover:scale-105 hover:shadow-xl min-w-[400px] text-center"
                            style={{ 
                                backgroundColor: `${cardColor}20`, 
                                borderColor: `${cardColor}40`,
                                boxShadow: `0 20px 40px ${cardColor}20`
                            }}
                        >
                            <div className="flex items-center justify-center space-x-4 mb-4">
                                <div 
                                    className="w-4 h-4 rounded-full animate-pulse"
                                    style={{ backgroundColor: cardColor }}
                                />
                                <span className="text-sm font-semibold text-gray-400 uppercase tracking-wide">
                                    Live Status
                                </span>
                            </div>
                            <p className="text-2xl font-bold text-white">
                                {liveMessages[currentMessage]}
                            </p>
                            <div className="mt-4 flex justify-center space-x-2">
                                {liveMessages.map((_, idx) => (
                                    <div
                                        key={idx}
                                        className={`w-2 h-2 rounded-full transition-all duration-300 ${
                                            idx === currentMessage ? 'opacity-100' : 'opacity-30'
                                        }`}
                                        style={{ backgroundColor: cardColor }}
                                    />
                                ))}
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Feedback Section */}
            <section 
                ref={feedbackRef} 
                className={`relative z-10 py-16 sm:py-20 lg:py-24 px-4 sm:px-6 lg:px-8 transition-all duration-1000 ${isFeedbackVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}
            >
                <div className="max-w-7xl mx-auto">
                    <div className="text-center mb-16">
                        <h2 className="text-4xl sm:text-5xl lg:text-6xl font-bold mb-6 bg-gradient-to-r from-white to-[#6C63FF] bg-clip-text text-transparent">
                            What Our Users Say
                        </h2>
                        <p className="text-xl text-gray-400 max-w-3xl mx-auto">
                            Real feedback from teams using our dashboard solutions to drive their business success
                        </p>
                    </div>
                    <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-8">
                        {[
                            "The dashboard gives us real-time clarity like never before. Absolutely a game changer for our analytics team!",
                            "Intuitive, insightful, and exactly what we needed for comprehensive analytics. The user experience is outstanding.",
                            "The visualizations are not just beautiful—they're incredibly actionable and help drive better decisions.",
                            "Reliable performance and top-notch data security. We fully trust it with our most critical business data."
                        ].map((feedback, idx) => (
                            <div 
                                key={idx} 
                                className="group p-8 rounded-2xl bg-gradient-to-br from-[#6C63FF]/10 to-purple-600/5 border border-[#6C63FF]/20 backdrop-blur-sm hover:border-[#6C63FF]/50 transition-all duration-500 hover:transform hover:scale-105 hover:shadow-xl hover:shadow-[#6C63FF]/20"
                            >
                                <div className="mb-6">
                                    <div className="flex space-x-1 mb-4">
                                        {[...Array(5)].map((_, i) => (
                                            <span key={i} className="text-yellow-400 text-lg">★</span>
                                        ))}
                                    </div>
                                    <p className="text-gray-300 leading-relaxed group-hover:text-white transition-colors duration-300">
                                        "{feedback}"
                                    </p>
                                </div>
                                <div className="flex items-center space-x-3">
                                    <div className="w-10 h-10 rounded-full bg-gradient-to-r from-[#6C63FF] to-purple-600" />
                                    <div>
                                        <div className="text-white font-semibold">User {idx + 1}</div>
                                        <div className="text-gray-400 text-sm">Verified Customer</div>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* CTA Section */}
            <section className="relative z-10 py-16 sm:py-20 lg:py-24 px-4 sm:px-6 lg:px-8">
                <div className="max-w-4xl mx-auto text-center">
                    <div className="p-12 rounded-3xl bg-gradient-to-br from-[#6C63FF]/20 to-purple-600/10 border border-[#6C63FF]/30 backdrop-blur-xl">
                        <h2 className="text-4xl sm:text-5xl lg:text-6xl font-bold mb-6 bg-gradient-to-r from-white to-[#6C63FF] bg-clip-text text-transparent">
                            Ready to Get Started?
                        </h2>
                        <p className="text-xl text-gray-300 mb-8 leading-relaxed">
                            Transform your data into actionable insights with our powerful dashboard platform
                        </p>
                        <div className="flex flex-col sm:flex-row gap-4 justify-center">
                            <button className="inline-flex items-center justify-center px-8 py-4 bg-gradient-to-r from-[#6C63FF] to-[#6C63FF]/80 hover:from-[#6C63FF]/90 hover:to-[#6C63FF]/70 rounded-xl font-semibold transition-all duration-300 transform hover:scale-105 hover:shadow-xl hover:shadow-[#6C63FF]/30">
                                Start Free Trial
                            </button>
                            <button className="inline-flex items-center justify-center px-8 py-4 border-2 border-[#6C63FF]/50 hover:border-[#6C63FF] rounded-xl font-semibold transition-all duration-300 hover:bg-[#6C63FF]/10 backdrop-blur-sm">
                                Schedule Demo
                            </button>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
}