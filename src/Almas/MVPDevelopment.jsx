import React, { useRef, useEffect, useState } from "react";
import { motion } from "motion/react";
import './MVPDevelopment.css'

import {
    FaRocket,
    FaClock,
    FaUsers,
    FaLayerGroup,
    FaShieldAlt,
    FaChartLine,
    FaBolt,
    FaMoneyBillWave,
    FaSyncAlt,
    FaUserCheck,
} from "react-icons/fa";



const useOnScreen = (ref, threshold = 0.3) => {
    const [isIntersecting, setIntersecting] = useState(false);

    useEffect(() => {
        const observer = new IntersectionObserver(
            ([entry]) => setIntersecting(entry.isIntersecting),
            { threshold }
        );

        if (ref.current) observer.observe(ref.current);
        return () => observer.disconnect();
    }, [ref, threshold]);

    return isIntersecting;
};

export default function MVPDevelopment() {
    const heroRef = useRef();
    const featuresRef = useRef();
    const benefitsRef = useRef();
    const useCasesRef = useRef();
    const ctaRef = useRef();

    const heroVisible = useOnScreen(heroRef);
    const featuresVisible = useOnScreen(featuresRef);
    const benefitsVisible = useOnScreen(benefitsRef);
    const useCasesVisible = useOnScreen(useCasesRef);
    const ctaVisible = useOnScreen(ctaRef);

    const features = [
        {
            icon: <FaRocket />,
            title: "Rapid Prototyping",
            description: "Build fast and test ideas quickly to validate market fit.",
        },
        {
            icon: <FaClock />,
            title: "Time Efficiency",
            description: "Deliver your core product to users in weeks, not months.",
        },
        {
            icon: <FaUsers />,
            title: "User-Centric Design",
            description: "Gather feedback early to guide future product decisions.",
        },
        {
            icon: <FaLayerGroup />,
            title: "Scalable Foundation",
            description: "A solid base ready for future growth and iterations.",
        },
        {
            icon: <FaShieldAlt />,
            title: "Quality Assurance",
            description: "Rigorous testing ensures a reliable and stable MVP.",
        },
        {
            icon: <FaChartLine />,
            title: "Data-Driven Insights",
            description: "Leverage analytics to shape your product roadmap.",
        },
    ];

    const benefits = [
        { icon: <FaBolt />, text: "Faster time-to-market with rapid MVP delivery." },
        { icon: <FaMoneyBillWave />, text: "Cost-effective development focusing on essentials." },
        { icon: <FaSyncAlt />, text: "Flexible iterations based on real user feedback." },
        { icon: <FaUserCheck />, text: "User-centered approach ensuring market fit." },
        { icon: <FaChartLine />, text: "Scalable foundation for future growth." },
        { icon: <FaShieldAlt />, text: "Secure and reliable architecture from day one." },
    ];

    const useCases = [
        {
            title: "Tech Startups",
            description: "Launch a pilot product to attract investors and early users.",
        },
        {
            title: "Enterprise Innovation",
            description: "Test new internal tools before company-wide rollout.",
        },
        {
            title: "E-commerce",
            description: "Trial niche product lines with minimal investment.",
        },
        {
            title: "Healthcare Solutions",
            description: "Develop and validate healthcare apps rapidly ensuring compliance and reliability.",
        },
    ];


    return (
        <div className="mvp-page">
            {/* Animated Background */}
            <div className="mvp-bg">
                <div className="mvp-bg-layer1"></div>
                <div className="mvp-bg-layer2"></div>
                {[...Array(30)].map((_, i) => (
                    <motion.div
                        key={i}
                        className="qa-particle"
                        initial={{
                            x: Math.random() * (window.innerWidth || 1200),
                            y: Math.random() * (window.innerHeight || 800),
                            scale: 0,
                        }}
                        animate={{
                            y: [null, Math.random() * (window.innerHeight || 800)],
                            scale: [0, 1, 0],
                            opacity: [0, 0.6, 0],
                        }}
                        transition={{
                            duration: Math.random() * 3 + 2,
                            repeat: Infinity,
                            delay: Math.random() * 2,
                        }}
                    />
                ))}
            </div>

            {/* Hero Section */}
            <motion.section
                ref={heroRef}
                className="mvp-hero"
                initial={{ opacity: 0, y: 50 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 1, delay: 0.2 }}
            >
                <h1 className="hero-title">Build Your MVP Launch Faster.</h1>
                <p className="hero-desc">
                    Imagine turning your boldest ideas into reality without the usual delays
                    and uncertainty. With our proven approach, you’ll validate your MVP fast,
                    gain invaluable user insights early, and avoid costly pitfalls — empowering
                    you to confidently launch products that truly resonate and lead the market.
                </p>
                <button className="btn-primary">Get Started</button>
            </motion.section>

            {/* Features Section */}
            <motion.section
                ref={featuresRef}
                className={`features-section ${featuresVisible ? "fade-in-left-to-right" : "hidden-left"}`}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8 }}
                viewport={{ once: true }}
            >
                <div className="features-header">
                    <h2 className="features-title">Key Features</h2>
                </div>
                <div className="features-grid">
                    {features.map((feature, i) => (
                        <motion.div
                            key={i}
                            className="feature-card"
                            initial={{ opacity: 0, y: 50 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.6, delay: i * 0.1 }}
                            viewport={{ once: true }}
                            whileHover={{ y: -8 }}
                        >
                            <div className="feature-icon">{feature.icon}</div>
                            <h3 className="feature-title">{feature.title}</h3>
                            <p className="feature-desc">{feature.description}</p>
                        </motion.div>
                    ))}
                </div>
            </motion.section>

            {/* Benefits Section */}
            <motion.section
                ref={benefitsRef}
                className="benefits-section"
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8 }}
                viewport={{ once: true, amount: 0.3 }}
            >
                <div className="benefits-container">
                    <div className="benefits-list">
                        <h2 className="features-title">Benefits</h2>
                        <ul>
                            {benefits.map((b, i) => (
                                <motion.li
                                    key={i}
                                    className="benefit-item"
                                    initial={{ opacity: 0, y: 20 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    transition={{ duration: 0.5, delay: i * 0.1 }}
                                    viewport={{ once: true }}
                                    whileHover={{ y: -5 }}
                                >
                                    <span className="benefit-icon">{b.icon}</span>
                                    <span>{b.text}</span>
                                </motion.li>
                            ))}
                        </ul>
                    </div>
                    
                </div>
            </motion.section>

            {/* Use Cases Section */}
            <motion.section
                ref={useCasesRef}
                className={`usecases-section ${useCasesVisible ? "fade-in-up" : "hidden"}`}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8 }}
                viewport={{ once: true }}
            >
                <h2 className="usecases-title">Example Use Cases</h2>
                <div className="usecases-grid">
                    {useCases.map((useCase, i) => (
                        <motion.div
                            key={i}
                            className="feature-card"
                            initial={{ opacity: 0, y: 50 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.6, delay: i * 0.1 }}
                            viewport={{ once: true }}
                            whileHover={{ y: -7 }}
                        >
                            <h3 className="feature-title">{useCase.title}</h3>
                            <p className="feature-desc">{useCase.description}</p>
                        </motion.div>
                    ))}
                </div>
            </motion.section>

            {/* Call To Action Section */}
            <motion.section
                ref={ctaRef}
                className={`cta ${ctaVisible ? "fade-in-up" : "hidden"}`}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8 }}
                viewport={{ once: true }}
            >
                <div className="cta-container">
                    <h2 className="cta-title">Ready to Build Your MVP?</h2>
                    <p className="cta-desc">
                        Let’s bring your idea to life. Contact us today to start building your MVP.
                    </p>
                    <button className="btn-primary">Get Started</button>
                </div>
            </motion.section>
        </div>
    );
}
