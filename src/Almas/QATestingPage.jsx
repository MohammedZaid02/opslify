import { motion } from 'motion/react';
import {
    Shield,
    ClipboardCheck,
    Bug,
    Cpu,
    Target,
    Award,
    ArrowRight,
    CheckCircle,
    Users,
    Star,
    Clock,
    Globe,
    Lightbulb,
    HeadphonesIcon
} from 'lucide-react';
import './QATestingPage.css';


export default function QATestingPage() {
    const particleCount = 30;
    return (
        <div className="qa-page">
            {/* Animated Background */}
            <div className="qa-bg">
                <div className="qa-bg-layer1"></div>
                <div className="qa-bg-layer2"></div>
                {[...Array(particleCount)].map((_, i) => (
                    <motion.div
                        key={i}
                        className="qa-particle"
                        initial={{
                            x: Math.random() * (window.innerWidth || 1200),
                            y: Math.random() * (window.innerHeight || 800),
                            scale: 0
                        }}
                        animate={{
                            y: [null, Math.random() * (window.innerHeight || 800)],
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
                className="hero"
                initial={{ opacity: 0, y: 50 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 1, delay: 0.2 }}
            >
                <div className="hero-container">
                    <motion.div
                        className="hero-brand"
                        initial={{ scale: 0.9 }}
                        animate={{ scale: 1 }}
                        transition={{ duration: 0.8, delay: 0.4 }}
                    >


                        {/* Title */}
                        <h1 className="hero-title">
                            QA & Testing for Unmatched Software Reliability
                        </h1>
                        {/* Description */}
                        <p className="hero-desc">
                            Ensure your software is robust, secure, and scalable with our comprehensive Quality Assurance and Testing services. We combine manual and automated testing approaches to deliver bug-free and high-performance digital solutions.
                        </p>
                        {/* CTA Buttons */}
                        <div className="hero-actions">
                            <button className="btn-primary">
                                Explore QA Solutions <ArrowRight className="btn-icon" />
                            </button>
                            <button className="btn-secondary">
                                Get Started
                            </button>
                        </div>
                    </motion.div>
                </div>
            </motion.section>

            {/* Stats Section */}
            <motion.section
                className="stats"
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                transition={{ duration: 0.8 }}
                viewport={{ once: true }}
            >
                <div className="stats-container">
                    <div className="stats-grid">
                        {[
                            { icon: Award, number: "99.9%", label: "Defect-free Deliveries", color: "stats-grad1" },
                            { icon: Bug, number: "5,000+", label: "Critical Issues Resolved", color: "stats-grad2" },
                            { icon: Cpu, number: "75+", label: "Automated Test Suites", color: "stats-grad1" }
                        ].map((stat, index) => (
                            <motion.div
                                key={index}
                                className="stats-card"
                                initial={{ opacity: 0, y: 50 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.6, delay: index * 0.2 }}
                                viewport={{ once: true }}
                            >
                                <div className={`stats-icon ${stat.color}`}>
                                    <stat.icon className="stats-icon-svg" />
                                </div>
                                <h3 className="stats-number">{stat.number}</h3>
                                <p className="stats-label">{stat.label}</p>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </motion.section>

            {/* Services Section */}
            <motion.section
                className="services"
                id="services"
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                transition={{ duration: 0.8 }}
                viewport={{ once: true }}
            >
                <div className="services-container">
                    <motion.div
                        className="services-header"
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8 }}
                        viewport={{ once: true }}
                    >
                        <h2 className="services-title">
                            End-to-End QA & Testing Services for
                            <span className="services-title-grad"> Reliable Software</span>
                        </h2>
                        <p className="services-desc">
                            Mitigate risks and improve quality with our expert QA engineers. We accelerate go-live with robust test automation, performance validation, and security checks.
                        </p>
                    </motion.div>
                    <div className="services-grid">
                        {[
                            {
                                icon: ClipboardCheck,
                                title: "Functional Testing",
                                description: "Validate every feature, workflow, and user story for optimal usability and reliability.",
                                features: ["Manual & Automated Testing", "Regression Testing", "End-to-End Validation"]
                            },
                            {
                                icon: Bug,
                                title: "Bug Tracking & Resolution",
                                description: "Continuous monitoring and rapid bug resolution to maintain system stability.",
                                features: ["Critical Issue Management", "Real-time Reporting", "Root Cause Analysis"]
                            },
                            {
                                icon: Cpu,
                                title: "Automated Testing",
                                description: "Accelerate delivery cycles with robust automation frameworks and reusable test suites.",
                                features: ["CI/CD Integration", "Performance Testing", "API & UI Automation"]
                            },
                            {
                                icon: Shield,
                                title: "Security Testing",
                                description: "Safeguard your systems with advanced vulnerability assessment and compliance checks.",
                                features: ["Penetration Testing", "Data Protection Audits", "Compliance Monitoring"]
                            },
                            {
                                icon: Target,
                                title: "Performance Testing",
                                description: "Ensure flawless user experience under peak loads through stress, load, and scalability tests.",
                                features: ["Load Testing", "Stress Testing", "Scalability Assessment"]
                            },
                            {
                                icon: Award,
                                title: "Quality Metrics & Reporting",
                                description: "Clear reports, actionable insights, and ongoing improvement for transparent quality control.",
                                features: ["Custom QA Dashboards", "Defect Trends Analysis", "Release Readiness Reports"]
                            }
                        ].map((service, index) => (
                            <motion.div
                                key={index}
                                className="service-card"
                                initial={{ opacity: 0, y: 50 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.6, delay: index * 0.1 }}
                                viewport={{ once: true }}
                                whileHover={{ y: -10 }}
                            >
                                <div className="service-card-inner">
                                    <div className="service-icon-row">
                                        <service.icon className="service-icon" />
                                    </div>
                                    <h3 className="service-title">{service.title}</h3>
                                    <p className="service-desc">{service.description}</p>
                                    <div className="service-features">
                                        {service.features.map((feature, idx2) => (
                                            <div key={idx2} className="service-feature">
                                                <CheckCircle className="service-feature-icon" />
                                                {feature}
                                            </div>
                                        ))}
                                    </div>
                                    <button className="btn-secondary service-btn">
                                        Get started <ArrowRight className="btn-icon" />
                                    </button>
                                </div>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </motion.section>

            {/* Why Choose Section */}
            <motion.section
                className="why"
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                transition={{ duration: 0.8 }}
                viewport={{ once: true }}
            >
                <div className="why-container">
                    <motion.div
                        className="why-header"
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8 }}
                        viewport={{ once: true }}
                    >
                        <h2 className="why-title">
                            Why Trust
                            <span className="why-title-grad"> Opslify QA?</span>
                        </h2>
                        <p className="why-desc">
                            We combine expertise, automation, and a rigorous process to guarantee outstanding results. Our specialists are dedicated to your product’s reliability and user satisfaction.
                        </p>
                    </motion.div>
                    <div className="why-content">
                        <motion.div
                            className="why-benefits"
                            initial={{ opacity: 0, x: -50 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            transition={{ duration: 0.8 }}
                            viewport={{ once: true }}
                        >
                            {[
                                {
                                    icon: Lightbulb,
                                    title: "Expert QA Engineers",
                                    description: "Certified, experienced testers and SDETs lead every project, ensuring unparalleled quality and attention to detail."
                                },
                                {
                                    icon: Clock,
                                    title: "Speedy Release Cycles",
                                    description: "Rapid regression and automation strategies minimize bottlenecks and accelerate time-to-market."
                                },
                                {
                                    icon: Star,
                                    title: "99.9% Delivery Uptime",
                                    description: "Proven track record of delivering critical projects with minimal downtime."
                                },
                                {
                                    icon: HeadphonesIcon,
                                    title: "24/7 Support",
                                    description: "Round-the-clock availability for urgent releases, hotfixes, and production monitoring."
                                }
                            ].map((benefit, idx) => (
                                <motion.div
                                    key={idx}
                                    className="why-benefit"
                                    initial={{ opacity: 0, y: 30 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    transition={{ duration: 0.6, delay: idx * 0.1 }}
                                    viewport={{ once: true }}
                                >
                                    <div className="why-benefit-icon">
                                        <benefit.icon className="why-benefit-icon-svg" />
                                    </div>
                                    <div className="why-benefit-text">
                                        <h3 className="why-benefit-title">{benefit.title}</h3>
                                        <p className="why-benefit-desc">{benefit.description}</p>
                                    </div>
                                </motion.div>
                            ))}
                        </motion.div>
                        {/* Right side stats cards */}
                        <motion.div
                            className="why-stats"
                            initial={{ opacity: 0, x: 50 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            transition={{ duration: 0.8, delay: 0.2 }}
                            viewport={{ once: true }}
                        >
                            <div className="why-stats-grid">
                                {/* New stats cards */}
                                <motion.div className="why-stats-card">
                                    <div className="why-stats-card-row">
                                        <div className="why-stats-card-icon"><Shield className="stats-icon-svg" /></div>
                                        <div>
                                            <p className="why-stats-label">99% Security Compliance</p>
                                            <p className="why-stats-desc">Protecting your data rigorously</p>
                                        </div>
                                    </div>
                                    <div className="text-center">
                                        <p className="why-stats-number">99.9%</p>
                                        <p className="why-stats-desc">Data Safety</p>
                                    </div>
                                </motion.div>

                                <motion.div className="why-stats-card">
                                    <div className="why-stats-card-row">
                                        <div className="why-stats-card-icon"><Target className="stats-icon-svg" /></div>
                                        <div>
                                            <p className="why-stats-label">99% Test Coverage</p>
                                            <p className="why-stats-desc">Comprehensive functional testing</p>
                                        </div>
                                    </div>
                                    <div className="text-center">
                                        <p className="why-stats-number">High Accuracy</p>
                                        <p className="why-stats-desc">Quality Assurance</p>
                                    </div>
                                </motion.div>

                                <motion.div className="why-stats-card">
                                    <div className="why-stats-card-row">
                                        <div className="why-stats-card-icon"><ClipboardCheck className="stats-icon-svg" /></div>
                                        <div>
                                            <p className="why-stats-label">Fast Regression Cycles</p>
                                            <p className="why-stats-desc">Rapid turnaround for bug fixes</p>
                                        </div>
                                    </div>
                                    <div className="text-center">
                                        <p className="why-stats-number">24/7</p>
                                        <p className="why-stats-desc">Support & Monitoring</p>
                                    </div>
                                </motion.div>

                                <motion.div className="why-stats-card">
                                    <div className="why-stats-card-row">
                                        <div className="why-stats-card-icon"><Lightbulb className="stats-icon-svg" /></div>
                                        <div>
                                            <p className="why-stats-label">Innovative QA Tools</p>
                                            <p className="why-stats-desc">Cutting-edge testing methodologies</p>
                                        </div>
                                    </div>
                                    <div className="text-center">
                                        <p className="why-stats-number">Constantly Evolving</p>
                                        <p className="why-stats-desc">Best Practices</p>
                                    </div>
                                </motion.div>
                            </div>
                        </motion.div>

                    </div>
                </div>
            </motion.section>
            {/* Features Section */}
            <motion.section
                className="features"
                id="features"
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                transition={{ duration: 0.8 }}
                viewport={{ once: true }}
            >
                <div className="features-container">
                    <motion.div
                        className="features-header"
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8 }}
                        viewport={{ once: true }}
                    >
                        <h2 className="features-title">
                            Powerful Features for
                            <span className="features-title-grad"> Superior QA Outcomes</span>
                        </h2>
                        <p className="features-desc">
                            Leverage cutting-edge tools and proven methodologies to deliver flawless results — every time.
                        </p>
                    </motion.div>

                    <div className="features-grid">
                        {[
                            { icon: Shield, title: "Security First", desc: "Integrated security checks ensure vulnerabilities are caught early." },
                            { icon: Cpu, title: "Automation Ready", desc: "Reduce testing time with powerful CI/CD-integrated automation." },
                            { icon: Globe, title: "Global Coverage", desc: "Test in multiple regions for consistent performance worldwide." },
                            { icon: Clock, title: "Faster Releases", desc: "Accelerate delivery cycles with parallel and continuous testing." },
                            { icon: Bug, title: "Comprehensive Bug Reporting", desc: "Detailed, actionable defect reports to speed up fixes." },
                            { icon: Award, title: "Proven QA Frameworks", desc: "Industry-best practices tailored for your domain." }
                        ].map((feature, index) => (
                            <motion.div
                                key={index}
                                className="feature-card"
                                initial={{ opacity: 0, y: 50 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.6, delay: index * 0.1 }}
                                viewport={{ once: true }}
                                whileHover={{ y: -8 }}
                            >
                                <div className="feature-icon">
                                    <feature.icon className="feature-icon-svg" />
                                </div>
                                <h3 className="feature-title">{feature.title}</h3>
                                <p className="feature-desc">{feature.desc}</p>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </motion.section>

            {/* CTA Section */}
            <motion.section
                className="cta"
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                transition={{ duration: 0.8 }}
                viewport={{ once: true }}
            >
                <div className="cta-container">
                    <motion.div
                        className="cta-box"
                        initial={{ scale: 0.9, opacity: 0 }}
                        whileInView={{ scale: 1, opacity: 1 }}
                        transition={{ duration: 0.8 }}
                        viewport={{ once: true }}
                    >
                        <h2 className="cta-title">
                            Ready for Flawless, Reliable Software?
                        </h2>
                        <p className="cta-desc">
                            Partner with Opslify QA & Testing to secure robust, high-performance products with zero compromise on quality.
                        </p>
                        <div className="cta-actions">
                            <button className="btn-primary">
                                Start Your QA Journey <ArrowRight className="btn-icon" />
                            </button>
                        </div>
                    </motion.div>
                </div>
            </motion.section>
        </div>
    );
}
