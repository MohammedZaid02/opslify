import { motion } from "framer-motion";
import { useEffect, useState } from "react";
const AnimatedSectionTitle = ({ title, subtitle }) => (
  <header className="text-center mb-10">
    <motion.h1
      initial={{ y: -24, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.6 }}
      className="text-5xl md:text-6xl font-extrabold tracking-tight"
    >
      {title}
    </motion.h1>

    {subtitle && (
      <motion.p
        initial={{ y: 8, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ delay: 0.08, duration: 0.6 }}
        className="mt-4 text-lg md:text-xl text-slate-300 max-w-3xl mx-auto"
      >
        {subtitle}
      </motion.p>
    )}
  </header>
);

const FeatureCard = ({ icon, title, text }) => (
  <motion.div
    whileHover={{ translateY: -6 }}
    className="bg-slate-900/30 border border-slate-800 p-6 rounded-2xl shadow-xl"
  >
    <div className="flex items-start gap-4">
      <div className="w-12 h-12 flex items-center justify-center rounded-md bg-purple-800/40">
        <span className="text-2xl">{icon}</span>
      </div>
      <div>
        <h4 className="font-semibold text-lg">{title}</h4>
        <p className="text-sm text-slate-300 mt-1">{text}</p>
      </div>
    </div>
  </motion.div>
);

const ImageGrid = ({ images = [] }) => (
  <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-10">
    {images.map((src, idx) => (
      <motion.img
        key={idx}
        src={src}
        alt={`Chatbot image ${idx + 1}`}
        className="w-full h-56 object-cover rounded-xl shadow-2xl border border-slate-800"
        initial={{ opacity: 0, scale: 0.98 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ delay: idx * 0.12, duration: 0.6 }}
      />
    ))}
  </div>
);

// Interaction example card (chat bubble style)
const InteractionExample = ({ speaker, text }) => (
  <div className={`p-4 rounded-lg ${speaker === "user" ? "bg-slate-800/50" : "bg-purple-900/40"} border border-slate-800`}>
    <strong className="block text-sm text-slate-200">{speaker === "user" ? "User" : "Bot"}</strong>
    <p className="mt-2 text-slate-100">{text}</p>
  </div>
);

// FAQ item
const FaqItem = ({ q, a }) => {
  const [open, setOpen] = useState(false);
  return (
    <div className="border border-slate-800 rounded-lg overflow-hidden">
      <button
        onClick={() => setOpen(!open)}
        className="w-full text-left p-4 flex items-center justify-between bg-slate-900/20"
      >
        <span className="font-semibold">{q}</span>
        <span className="text-slate-300">{open ? "−" : "+"}</span>
      </button>
      {open && (
        <div className="p-4 bg-black/30 text-slate-200">
          <p>{a}</p>
        </div>
      )}
    </div>
  );
};

// CTA button
const CtaButton = ({ children, onClick }) => (
  <motion.button
    whileHover={{ scale: 1.02 }}
    whileTap={{ scale: 0.98 }}
    onClick={onClick}
    className="bg-purple-600 hover:bg-purple-500 text-black px-6 py-3 rounded-lg font-semibold shadow-lg"
  >
    {children}
  </motion.button>
);

// Animated decorative background (subtle)
const AnimatedBackground = () => (
  <div aria-hidden className="absolute inset-0 pointer-events-none -z-10">
    <motion.div
      initial={{ opacity: 0.06 }}
      animate={{ opacity: 0.12 }}
      transition={{ duration: 6, repeat: Infinity, repeatType: "mirror" }}
      className="w-full h-full bg-gradient-to-br from-purple-950 to-black"
    />
  </div>
);

// ----------------------------- Main Chatbots Page ---------------------------

export default function Chatbot() {
  // page-level state
  const [showLongContent, setShowLongContent] = useState(true);
  const [selectedExample, setSelectedExample] = useState(0);

  // sample images (placeholders or Unsplash)
  const images = [
    "https://images.unsplash.com/photo-1555066931-4365d14bab8c?auto=format&fit=crop&w=1200&q=60",
    "https://images.unsplash.com/photo-1556157382-97eda2d62296?auto=format&fit=crop&w=1200&q=60",
    "https://images.unsplash.com/photo-1524499982521-1ffd58dd89ea?auto=format&fit=crop&w=1200&q=60",
    "https://images.unsplash.com/photo-1581090700227-4c4f50b47f8a?auto=format&fit=crop&w=1200&q=60",
    "https://images.unsplash.com/photo-1526378720302-83a9d4b8f6b9?auto=format&fit=crop&w=1200&q=60"
  ];

  // 20+ paragraphs (varied content)
  const paragraphs = [
    "AI-powered chatbots bring the power of automation and natural language understanding to the front line of customer engagement, enabling rapid responses and consistent support across channels.",
    "They are built with advanced NLP models that parse intent, extract entities, and maintain contextual memory across multi-turn conversations.",
    "Chatbots reduce operational costs by automating routine tasks such as FAQ handling, order tracking, basic troubleshooting, and scheduling.",
    "Beyond cost savings, they increase conversion rates by guiding users through product discovery, promotions, and checkout flows with proactive suggestions.",
    "Modern chatbots support multiple languages and locales, enabling companies to serve global audiences with the same conversational experience.",
    "Personalization is achieved by connecting chatbots to user profiles, CRM records, and behavioral signals, which allows tailored recommendations and context-aware decisions.",
    "Security and privacy are central: chatbots must encrypt messages in transit, follow retention policies, and be configurable to redact or avoid storing sensitive information.",
    "Integration is straightforward through APIs, webhooks, and native connectors to platforms like Salesforce, Zendesk, Shopify, and internal CRMs.",
    "Analytics and observability tools capture conversation transcripts, top intents, fallback rates, sentiment trends, and resolution metrics for continuous improvement.",
    "Designing a successful chatbot starts with mapping the highest-impact user flows and building a minimal, iterated conversation that is tested with real users.",
    "Fallback strategies and graceful degradation are crucial: when the bot is uncertain, it should ask clarifying questions, offer menu options, or escalate to a human.",
    "Human-in-the-loop patterns let the system handle high-volume, easy tasks while routing ambiguous or high-risk conversations to skilled agents with full context.",
    "Voice-capable chatbots integrate with voice assistants and telephony platforms and must handle ASR (automatic speech recognition) errors with robust confirmation flows.",
    "Chatbots enhance employee productivity too: internal assistants can automate HR requests, IT troubleshooting, and knowledge base searches for staff.",
    "Observability requires automated alerts when performance degrades or when intent accuracy drops, and triggers for retraining pipelines.",
    "Testing chatbots involves unit tests for deterministic flows, simulation with conversation datasets, and A/B testing for behavioral impact.",
    "A phased rollout is recommended: pilot with a small user base, measure KPIs, and iterate before full-scale deployment.",
    "Accessibility matters: ensure chatbots are keyboard navigable, screen-reader friendly, and provide clear alternatives for users with disabilities.",
    "Governance policies include data lineage, access control, role-based permissions, and the ability to audit decisions and corrective actions.",
    "The future of chatbots includes tighter integration with knowledge graphs, multimodal inputs (images, documents), and dynamic retrieval augmented generation.",
    // additional supporting paragraphs to push length
    "Consider a chatbot pipeline where questions trigger database lookups, conditional logic, and external API calls, producing fast and accurate responses without a human in every step.",
    "Content governance: version your conversation flows, allow rollbacks, and store training artifacts that match production data to improve reproducibility.",
    "Scalability: use stateless inference services behind autoscaling layers, cache frequent lookups, and leverage lazy-loading of heavy components to optimize cost."
  ];

  // sample interaction examples
  const examples = [
    { user: "What's the status of my order #12345?", bot: "Your order #12345 is out for delivery and should arrive by 6 PM today. Track here: [tracking link]" },
    { user: "I forgot my password — can you help?", bot: "Absolutely. I can send a password reset link to your registered email. Would you like me to proceed?" },
    { user: "Do you have recommendations for birthday gifts under $50?", bot: "Yes — based on your past purchases, these three items are great: A, B, and C. Want me to add any to cart?" },
    { user: "How do I cancel my subscription?", bot: "I'm sorry to hear that. I can start the cancellation process: do you want to see options to pause or downgrade instead?" }
  ];

  // CTA click handler (example)
  const handleCta = () => {
    alert("Thanks — a sales specialist will reach out to you shortly (demo).");
  };

  // small effect demonstrating dynamic selection (visual)
  useEffect(() => {
    const timer = setInterval(() => {
      setSelectedExample((s) => (s + 1) % examples.length);
    }, 7000);
    return () => clearInterval(timer);
  }, []);

  return (
    <div className="relative min-h-screen bg-gradient-to-b from-purple-900 to-black text-slate-100 overflow-hidden">
      <AnimatedBackground />

      <main className="relative z-10 max-w-7xl mx-auto px-6 py-16">
        <AnimatedSectionTitle
          title="AI Chatbots — Conversational AI that scales"
          subtitle="Design, deploy, and iterate on chatbots that reduce cost, increase conversions, and delight users."
        />

        {/* Hero area with images and core points */}
        <section className="grid grid-cols-1 lg:grid-cols-3 gap-8 items-start mb-12">
          <div className="lg:col-span-2 space-y-6">
            <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 0.8 }} className="prose prose-invert max-w-none">
              <h2>Reimagine customer interactions with intelligent assistants</h2>
              <p>
                Chatbots combine machine learning, natural language understanding, and business logic
                to handle complex flows with minimal maintenance. They free your team to focus on high-value problems.
              </p>

              <p>
                From conversational commerce to proactive notifications and transactional flows, chatbots make experiences faster, friendlier, and measurable.
              </p>

              <h3>Core benefits</h3>
              <ul>
                <li>24/7 availability and instant responses</li>
                <li>Reduced average handle time and lower operational costs</li>
                <li>Better conversion and cross-sell through guided recommendations</li>
              </ul>
            </motion.div>

            <div>
              <ImageGrid images={images} />
            </div>
          </div>

          <aside className="space-y-6">
            <FeatureCard icon="💬" title="Natural Language Understanding" text="Detect intent and extract entities from user utterances with high accuracy." />
            <FeatureCard icon="🌐" title="Multi-language Support" text="Serve customers in their language with automatic detection and translation options." />
            <div className="rounded-2xl p-6 bg-slate-900/30 border border-slate-800">
              <h4 className="font-semibold text-lg">Try a live example</h4>
              <div className="mt-4 space-y-4">
                <InteractionExample speaker="user" text={examples[selectedExample].user} />
                <InteractionExample speaker="bot" text={examples[selectedExample].bot} />
              </div>
            </div>
          </aside>
        </section>

        {/* Long content paragraphs */}
        <section className="mb-12">
          <div className="space-y-6 text-lg leading-relaxed">
            {paragraphs.map((p, i) => (
              <motion.p
                key={i}
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: i * 0.03, duration: 0.45 }}
              >
                {p}
              </motion.p>
            ))}
          </div>
        </section>

        {/* Design & technical details */}
        <section className="mb-12">
          <h3 className="text-2xl font-bold mb-4">Technical capabilities — deeper dive</h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="p-6 rounded-2xl bg-slate-900/30 border border-slate-800">
              <h5 className="font-semibold">NLP & LLM Integration</h5>
              <p className="mt-2 text-sm text-slate-300">
                Seamlessly integrate transformer-based models for free-text understanding and retrieval-augmented generation to provide accurate, source-backed answers.
              </p>
            </div>

            <div className="p-6 rounded-2xl bg-slate-900/30 border border-slate-800">
              <h5 className="font-semibold">Context & Memory</h5>
              <p className="mt-2 text-sm text-slate-300">
                Keep conversational context across sessions with session storage and optional long-term memory for personalization scenarios.
              </p>
            </div>

            <div className="p-6 rounded-2xl bg-slate-900/30 border border-slate-800">
              <h5 className="font-semibold">Observability</h5>
              <p className="mt-2 text-sm text-slate-300">
                Log transcripts, measure intent coverage, monitor fallback cases, and set automated retrain triggers when model performance changes.
              </p>
            </div>
          </div>
        </section>

        {/* UI suggestions and patterns */}
        <section className="mb-12">
          <h3 className="text-2xl font-bold mb-4">Suggested UI / UX elements</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="p-6 rounded-2xl bg-slate-900/20 border border-slate-800">
              <h5 className="font-semibold">Chat widget (compact)</h5>
              <p className="text-sm text-slate-300 mt-2">
                A persistent bottom-right bubble that expands into a full chat panel. Include quick reply buttons, suggested intents, and escalation options.
              </p>
            </div>

            <div className="p-6 rounded-2xl bg-slate-900/20 border border-slate-800">
              <h5 className="font-semibold">In-app assistant panel</h5>
              <p className="text-sm text-slate-300 mt-2">
                A sidebar assistant for logged-in users showing context-aware actions, recent conversations, and account-specific suggestions.
              </p>
            </div>

            <div className="p-6 rounded-2xl bg-slate-900/20 border border-slate-800">
              <h5 className="font-semibold">Voice-enabled flows</h5>
              <p className="text-sm text-slate-300 mt-2">
                Visual feedback for speech recognition, clear prompts, and confirmation steps to handle misrecognitions gracefully.
              </p>
            </div>

            <div className="p-6 rounded-2xl bg-slate-900/20 border border-slate-800">
              <h5 className="font-semibold">Accessible fallback UI</h5>
              <p className="text-sm text-slate-300 mt-2">
                Provide keyboard navigation, ARIA roles, and plain-language help for users with accessibility needs.
              </p>
            </div>
          </div>
        </section>

        {/* FAQs */}
        <section className="mb-12">
          <h3 className="text-2xl font-bold mb-4">Frequently asked questions</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <FaqItem q="How long does it take to deploy?" a="A minimal pilot can be deployed in days; production readiness (integration, testing, and governance) typically takes weeks depending on scope." />
            <FaqItem q="Do I need ML expertise?" a="No. Low-code builders let non-technical teams assemble flows; data science teams can customize models for advanced scenarios." />
            <FaqItem q="How is data protected?" a="We support encryption in transit and at rest, role-based access, and compliance with major regulations. Specific contracts can include stricter measures." />
            <FaqItem q="Can chatbots escalate to humans?" a="Yes — handoff flows pass context to human agents and provide suggested replies to speed resolution." />
          </div>
        </section>

        {/* Customer outcomes & metrics */}
        <section className="mb-12">
          <h3 className="text-2xl font-bold mb-4">Business outcomes & sample metrics</h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="p-6 rounded-2xl bg-gradient-to-tr from-slate-900/30 to-transparent border border-slate-800">
              <div className="text-3xl font-bold">40%</div>
              <div className="text-sm text-slate-300">Reduction in support tickets for automated flows</div>
            </div>

            <div className="p-6 rounded-2xl bg-gradient-to-tr from-slate-900/30 to-transparent border border-slate-800">
              <div className="text-3xl font-bold">2×</div>
              <div className="text-sm text-slate-300">Faster resolution for common queries</div>
            </div>

            <div className="p-6 rounded-2xl bg-gradient-to-tr from-slate-900/30 to-transparent border border-slate-800">
              <div className="text-3xl font-bold">75%</div>
              <div className="text-sm text-slate-300">Customer satisfaction on automated flows</div>
            </div>
          </div>
        </section>

        {/* Security & compliance */}
        <section className="mb-12">
          <h3 className="text-2xl font-bold mb-4">Security, privacy & compliance</h3>
          <div className="space-y-4 text-sm text-slate-300">
            <p>We recommend role-based access control, end-to-end encryption, and PII redaction rules for production systems. Audit logs and traceability are supported for compliance requirements.</p>
            <p>Data retention policies must be configurable and aligned with your legal requirements.</p>
            <p>For sensitive verticals (healthcare, finance), use dedicated, compliant hosting and stricter access controls.</p>
          </div>
        </section>

        {/* Implementation roadmap */}
        <section className="mb-12">
          <h3 className="text-2xl font-bold mb-4">Implementation roadmap</h3>
          <ol className="list-decimal list-inside space-y-3 text-sm text-slate-300">
            <li>Identify high-value flows and success metrics (e.g., reduced response time).</li>
            <li>Collect seed data and create labeled examples for intents and actions.</li>
            <li>Prototype minimal conversation paths and test with users.</li>
            <li>Integrate with backend systems and create observability dashboards.</li>
            <li>Run a pilot, measure KPIs, iterate on failing flows, and gradually expand scope.</li>
          </ol>
        </section>

        {/* CTA and footer */}
        <section className="mb-24">
          <div className="rounded-2xl p-8 bg-gradient-to-tr from-slate-900/20 to-transparent border border-slate-800 flex flex-col md:flex-row items-center justify-between gap-6">
            <div>
              <h4 className="text-xl font-semibold">Ready to launch your chatbot?</h4>
              <p className="text-sm text-slate-300 mt-2">Start with a pilot and measure impact in weeks. We'll help you design, train and scale.</p>
            </div>
            <div className="flex gap-4">
              <CtaButton onClick={handleCta}>Request a Demo</CtaButton>
              <motion.a whileHover={{ scale: 1.02 }} className="text-sm text-slate-300 self-center" href="#contact">Contact Sales</motion.a>
            </div>
          </div>
        </section>

        <footer className="text-center text-sm text-slate-500 pb-12">
          © {new Date().getFullYear()} Your Company — AI Chatbots & Conversational Solutions
        </footer>
      </main>
    </div>
  );
}
