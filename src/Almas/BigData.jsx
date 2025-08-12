import React, { useEffect, useRef, useState } from "react";

import {
    FaServer,
    FaCloud,
    FaBolt,
    FaDatabase,
    FaNetworkWired,
    FaStream,
    FaSync,
    FaCube,
    FaLaptopCode,
    FaChartLine,
    FaShieldAlt,
    FaChartPie,
    FaCogs,
} from "react-icons/fa";


const heroSection = {
    title: "Big Data",
    description:
        "Big Data powers innovation at scale. Our robust architecture enables businesses to ingest, process, and analyze petabytes of structured and unstructured data with speed and security.",
    points: [
        { icon: <FaBolt />, label: "Real-Time Processing" },
        { icon: <FaCloud />, label: "Cloud-Native Storage" },
        { icon: <FaDatabase />, label: "Scalable Data Lakes" },
        { icon: <FaLaptopCode />, label: "Developer Friendly APIs" },
    ],
    image:
        "https://thumbs.dreamstime.com/b/big-data-internet-information-technology-business-information-concept-big-data-internet-information-technology-business-112823857.jpg",
};

const techStack = [
    { icon: <FaServer />, label: "Hadoop" },
    { icon: <FaCloud />, label: "AWS S3" },
    { icon: <FaBolt />, label: "Apache Spark" },
    { icon: <FaDatabase />, label: "MongoDB" },
    { icon: <FaNetworkWired />, label: "Kafka" },
    { icon: <FaStream />, label: "Flink" },
    { icon: <FaSync />, label: "Airflow" },
    { icon: <FaCube />, label: "Snowflake" },
];

const useCases = [
    {
        icon: <FaChartLine />,
        title: "Predictive Analytics",
        description: "Use past data to predict future trends and behaviors.",
        image: "https://images.unsplash.com/photo-1556740772-1a741367b93e?auto=format&fit=crop&w=600&q=80",
    },
    {
        icon: <FaShieldAlt />,
        title: "Fraud Detection",
        description: "Identify suspicious activities in real time.",
        image: "https://images.unsplash.com/photo-1504384308090-c894fdcc538d?auto=format&fit=crop&w=600&q=80",
    },
    {
        icon: <FaChartPie />,
        title: "Customer Segmentation",
        description: "Group customers based on behaviors and preferences.",
        image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSIMWjEMYSFQUAHlnNBaGdJDr2EZRrG4g-h5w&s",
    },
    {
        icon: <FaCogs />,
        title: "Operational Efficiency",
        description: "Monitor systems and processes for performance gains.",
        image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQUq4mSBIKMshW_pzwWipjzrjpLnYqlXZ4W5w&s",
    },
];

// --- Hero Section ---
const HeroSection = ({ data, isVisible }) => (
    <section
        className={`hero-section ${isVisible ? "fade-in-up" : "hidden"}`}
        style={{
            display: "flex",
            flexDirection: "row",
            alignItems: "center",
            justifyContent: "space-between",
            flexWrap: "wrap",
            gap: "40px",
            padding: "60px 20px",
            maxWidth: "1400px",
            margin: "auto",
        }}
    >
        {/* Left Side - Text */}
        <div
            className="hero-text"
            style={{
                flex: "1 1 500px",
                paddingLeft: "40px",
            }}
        >
            <h1 className="data-title">{heroSection.title}</h1>
            <p className="data-description">{heroSection.description}</p>
            <div
                className="data-points"
                style={{
                    display: "flex",
                    flexDirection: "column",
                    gap: "12px",
                    marginTop: "20px",
                }}
            >
                {heroSection.points.map((point, index) => (
                    <div
                        key={index}
                        style={{
                            display: "flex",
                            alignItems: "center",
                            gap: "12px",
                            backgroundColor: "#1f1f2e",
                            padding: "12px 20px",
                            borderRadius: "12px",
                            boxShadow: "0 4px 10px rgba(0, 0, 0, 0.3)",
                            transition: "box-shadow 0.3s ease, transform 0.3s ease",
                            cursor: "pointer",
                        }}
                        onMouseEnter={(e) => {
                            e.currentTarget.style.boxShadow = "0 12px 25px rgba(108, 99, 255, 0.4)";
                            e.currentTarget.style.transform = "translateY(-3px)";
                        }}
                        onMouseLeave={(e) => {
                            e.currentTarget.style.boxShadow = "0 4px 10px rgba(0, 0, 0, 0.3)";
                            e.currentTarget.style.transform = "translateY(0)";
                        }}
                    >
                        <span
                            style={{
                                fontSize: "1.3rem",
                                color: "#6c63ff",
                                transition: "color 0.3s ease",
                            }}
                        >
                            {point.icon}
                        </span>
                        <span
                            style={{
                                color: "#fff",
                                fontSize: "1rem",
                                fontWeight: 500,
                            }}
                        >
                            {point.label}
                        </span>
                    </div>
                ))}
            </div>
        </div>

        {/* Right Side - Image */}
        <div
            className="hero-image"
            style={{
                flex: "1 1 500px",
                display: "flex",
                justifyContent: "center",
            }}
        >
            <img
                src={heroSection.image}
                alt="Hero Visual"
                style={{
                    width: "100%",
                    maxWidth: "850px",
                    height: "auto",
                    borderRadius: "20px",
                    boxShadow: "0 12px 30px rgba(0,0,0,0.4)",
                    objectFit: "cover",
                    transition: "transform 0.4s ease, box-shadow 0.4s ease",
                }}
                onMouseEnter={(e) => {
                    e.currentTarget.style.transform = "scale(1.05)";
                    e.currentTarget.style.boxShadow = "0 16px 40px rgba(0,0,0,0.6)";
                }}
                onMouseLeave={(e) => {
                    e.currentTarget.style.transform = "scale(1)";
                    e.currentTarget.style.boxShadow = "0 12px 30px rgba(0,0,0,0.4)";
                }}
            />
        </div>

    </section>
);

// --- Tech Stack Section ---
const TechStackSection = ({ isVisible }) => (
    <section
        className={`section ${isVisible ? "fade-in-up" : "hidden"}`}
        style={{
            marginTop: "60px",
            textAlign: "center",
            overflow: "hidden",
            paddingBottom: "60px",
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
        }}
    >
        <h2
            className="data-title"
            style={{
                fontSize: "2.8rem",
                marginBottom: "20px",
            }}
        >
            Technology Stack
        </h2>
        <p
            className="data-description"
            style={{ marginBottom: "5px", fontSize: "1.1rem", maxWidth: "600px" }}
        >
            Our Big Data solutions are built on a modern, flexible, and battle-tested technology stack.
        </p>

        <div
            style={{
                position: "relative",
                width: "700px",
                height: "700px",
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                marginBottom: "80px",
                marginLeft: "40%",
                marginRight: "50%",
            }}
        >

            {techStack.map((tech, index) => {
                const angle = (index / techStack.length) * 2 * Math.PI;
                const radius = 280;
                const x = radius * Math.cos(angle);
                const y = radius * Math.sin(angle);

                return (
                    <div
                        key={index}
                        style={{
                            position: "absolute",
                            top: "50%",
                            left: "50%",
                            transform: `translate(${x}px, ${y}px)`,
                            transformOrigin: "center",
                        }}
                    >
                        <div
                            onMouseEnter={(e) => {
                                e.currentTarget.style.boxShadow = "0 12px 25px rgba(108, 99, 255, 0.4)";
                                e.currentTarget.style.transform = "translateY(-5px)";
                            }}
                            onMouseLeave={(e) => {
                                e.currentTarget.style.boxShadow = "0 6px 20px rgba(0,0,0,0.4)";
                                e.currentTarget.style.transform = "translateY(0)";
                            }}
                            style={{
                                background: "#1f1f2e",
                                width: "200px",
                                height: "200px",
                                borderRadius: "50%",
                                boxShadow: "0 6px 20px rgba(0,0,0,0.4)",
                                display: "flex",
                                flexDirection: "column",
                                justifyContent: "center",
                                alignItems: "center",
                                color: "#fff",
                                textAlign: "center",
                                padding: "14px",
                                transition: "box-shadow 0.3s ease, transform 0.3s ease",
                                cursor: "pointer",
                            }}
                        >
                            <div
                                style={{
                                    fontSize: "1.2rem",
                                    fontWeight: "600",
                                    marginBottom: "14px",
                                    whiteSpace: "nowrap",
                                }}
                            >
                                {tech.label}
                            </div>
                            <div style={{ fontSize: "2.4rem", color: "#6C63FF" }}>{tech.icon}</div>
                        </div>
                    </div>
                );
            })}
        </div>


    </section>

);

// --- Use Cases Section ---
const UseCasesSection = ({ isVisible }) => (
    <section
        className={`section ${isVisible ? "fade-in-up" : "hidden"}`}
        style={{
            marginTop: "10px",
            textAlign: "center",
            padding: "40px 20px",
        }}
    >
        <h2 className="data-title" style={{ fontSize: "2.8rem", marginBottom: "20px" }}>
            Use Cases
        </h2>
        <p
            className="data-description"
            style={{ marginBottom: "40px", fontSize: "1.1rem" }}
        >
            Discover how industries leverage Big Data to gain competitive advantage.
        </p>

        <div
            className="data-images"
            style={{
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                gap: "40px",
            }}
        >
            {useCases.map((useCase, index) => {
                const direction = index % 2 === 0 ? "slideLeft" : "slideRight";
                return (
                    <div
                        key={index}
                        className={`use-case-container use-case-card ${isVisible ? "visible" : ""}`}
                        style={{
                            transitionDelay: `${index * 0.2}s`,
                        }}
                    >
                        {/* Left Side: Icon, Title, Description */}
                        <div
                            style={{
                                flex: 1,
                                padding: "30px",
                                display: "flex",
                                flexDirection: "column",
                                justifyContent: "center",
                            }}
                        >
                            <div style={{ fontSize: "2rem", marginBottom: "10px", color: "#6C63FF" }}>
                                {useCase.icon}
                            </div>
                            <h3 style={{ fontSize: "1.6rem", marginBottom: "14px" }}>{useCase.title}</h3>
                            <p style={{ fontSize: "1rem", color: "#ccc" }}>{useCase.description}</p>
                        </div>

                        {/* Right Side: Full Height Image */}
                        <div
                            style={{
                                flex: 1,
                                display: "flex",
                                alignItems: "center",
                                justifyContent: "center",
                                backgroundColor: "#1f1f2e",
                            }}
                        >
                            <img
                                src={useCase.image}
                                alt={useCase.title}
                                style={{
                                    maxHeight: "100%",
                                    maxWidth: "100%",
                                    objectFit: "cover",
                                    borderRadius: "0 16px 16px 0",
                                }}
                            />
                        </div>

                    </div>
                );
            })}
        </div>

        {/* Keyframes */}
        <style>{`
    .use-case-container {
        background: #2a2a3d;
        border-radius: 16px;
        width: 80%;
        max-width: 900px;
        color: #fff;
        box-shadow: 0 6px 20px rgba(0, 0, 0, 0.4);
        display: flex;
        flex-direction: row;
        overflow: hidden;
        transform: translateX(-100px);
        opacity: 0;
        transition: all 0.8s ease-out;
        
    }

    .use-case-container.visible {
        transform: translateX(0);
        opacity: 1;
    }

    .use-case-card {
        transition: transform 0.3s ease, box-shadow 0.3s ease;
    }

    .use-case-card:hover {
        transform: scale(1.03);
        box-shadow: 0 10px 25px rgba(108, 99, 255, 0.5);
    }

    @media (max-width: 768px) {
        .use-case-container {
        flex-direction: column !important;
        height: auto !important;
        }

        .use-case-container > div:last-child {
        height: 250px;
        width: 100% !important;
        }

        .use-case-container > div:last-child img {
        width: 100% !important;
        height: 100% !important;
        object-fit: cover !important;
        border-radius: 0 0 16px 16px !important;
        display: block;
        }
    }
    `}</style>


    </section>

);

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


const BigData = () => {
    const heroRef = useRef();
    const techRef = useRef();
    const useCasesRef = useRef();

    const showHero = useOnScreen(heroRef);
    const showTech = useOnScreen(techRef);
    const showUseCases = useOnScreen(useCasesRef);

    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    return (
        <div id="bigdata" className="data-analytics-container" style={{ flexDirection: "column" }}>

            <div ref={heroRef}>
                <HeroSection data={heroSection} isVisible={showHero} />
            </div>

            <div ref={techRef}>
                <TechStackSection stack={techStack} isVisible={showTech} />
            </div>

            <div ref={useCasesRef}>
                <UseCasesSection cases={useCases} isVisible={showUseCases} />
            </div>
        </div>
    );
};

export default BigData;
