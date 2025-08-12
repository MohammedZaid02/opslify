import { motion } from "motion/react";
import { useEffect, useRef, useState } from "react";

const SectionHeader = ({ title, subtitle }) => (
  <div className="text-center mb-10">
    <motion.h1
      initial={{ y: -20, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.5 }}
      className="text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-extrabold"
    >
      {title}
    </motion.h1>
    {subtitle && (
      <motion.p
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.08 }}
        className="mt-3 text-slate-300 max-w-5xl mx-auto text-lg lg:text-xl xl:text-2xl"
      >
        {subtitle}
      </motion.p>
    )}
  </div>
);

const StatCard = ({ value, label }) => (
  <motion.div whileHover={{ scale: 1.02 }} className="p-6 lg:p-8 rounded-2xl bg-slate-900/30 border border-slate-800">
    <div className="text-3xl lg:text-4xl font-bold">{value}</div>
    <div className="text-sm lg:text-base text-slate-300 mt-1">{label}</div>
  </motion.div>
);

const Diagram = ({ src, caption }) => (
  <figure className="rounded-xl overflow-hidden border border-slate-800 shadow-lg">
    <img src={src} alt={caption} className="w-full object-cover h-64 lg:h-80" />
    <figcaption className="p-4 text-sm lg:text-base text-slate-300 bg-gradient-to-t from-black/50">{caption}</figcaption>
  </figure>
);

const CodeBlock = ({ children }) => (
  <pre className="p-4 lg:p-6 rounded-lg bg-slate-900/40 border border-slate-800 text-sm lg:text-base overflow-auto">
    <code>{children}</code>
  </pre>
);

const Pill = ({ children }) => <span className="px-3 py-1 rounded-full bg-purple-700/30 text-sm lg:text-base">{children}</span>;

// --------------------------- core component ---------------------------------

export default function PredictiveAnalysis() {
  const [selectedCase, setSelectedCase] = useState("demand");
  const [showDetails, setShowDetails] = useState(true);
  const [selectedModel, setSelectedModel] = useState("xgboost");
  const [liveMetric, setLiveMetric] = useState(0.87);
  const liveMetricRef = useRef(liveMetric);

  useEffect(() => {
    // small live metric simulation
    liveMetricRef.current = liveMetric;
    const id = setInterval(() => {
      setLiveMetric((m) => {
        let delta = (Math.random() - 0.45) * 0.01;
        const next = Math.max(0.6, Math.min(0.98, +(m + delta).toFixed(3)));
        return next;
      });
    }, 3000);
    return () => clearInterval(id);
  }, []);

  // extensive explanatory content arrays
  const introParagraphs = [
    "Predictive analysis empowers organizations to anticipate future outcomes and make data-driven decisions. It blends statistics, machine learning, feature engineering, and operational rigor to deliver forecasts that teams can act on.",
    "Accurate forecasting reduces waste, optimizes inventory, helps manage workforce, and enables proactive customer engagement — turning raw data into measurable business impact.",
    "This page breaks down the predictive pipeline, the models commonly used, monitoring and retraining best practices, and real-world examples across industries."
  ];

  const pipelineSteps = [
    {
      title: "Data Ingestion",
      body: "Collect structured and unstructured data from databases, event streams, external APIs, and third-party vendors. Ensure data quality checks, schema validation, and lineage metadata are captured at ingestion time."
    },
    {
      title: "Feature Engineering",
      body: "Transform raw signals into predictive features: rolling windows, categorical encodings, time-based lags, and cross-features. Document feature definitions and enforce unit tests to avoid silent regressions."
    },
    {
      title: "Model Training",
      body: "Run experiments with baseline and advanced models. Use robust cross-validation, time-aware splits, hyperparameter tuning, and track results in a model registry with metadata and artifacts."
    },
    {
      title: "Deployment",
      body: "Serve models via REST/gRPC endpoints or batch jobs. Provide versioned endpoints and canary deployments to validate performance in production traffic before full roll-out."
    },
    {
      title: "Monitoring & Retraining",
      body: "Monitor prediction quality, input distribution drift, latency, and business KPIs. Automate alerts and retraining pipelines to maintain model performance as data evolves."
    }
  ];

  const modelDetails = {
    xgboost:
      "XGBoost is a high-performance gradient boosting library ideal for tabular data with strong baseline performance and interpretability via feature importance.",
    prophet:
      "Facebook Prophet is a practical time-series forecasting library that handles seasonality, holidays, and trend changepoints with minimal tuning.",
    lstm:
      "LSTM (Long Short-Term Memory) neural networks model sequential dependencies and are useful for complex time-series with long-range dependencies.",
    transformer:
      "Transformers can be adapted for time-series with attention mechanisms to capture long-range relationships and multivariate interactions at scale."
  };

  const useCases = [
    {
      key: "demand",
      title: "E-commerce Demand Forecasting",
      description:
        "Forecast product demand across SKUs and regions to optimize inventory replenishment, reduce stockouts, and minimize overstock."
    },
    {
      key: "churn",
      title: "Customer Churn Prediction",
      description: "Identify customers at risk of leaving and enable retention campaigns using predicted churn probability and suggested interventions."
    },
    {
      key: "predictive-maintenance",
      title: "Predictive Maintenance",
      description:
        "Predict equipment failures before they happen using sensor telemetry and maintenance records to schedule proactive repairs and reduce downtime."
    },
    {
      key: "fraud",
      title: "Fraud Detection",
      description:
        "Detect anomalous transactions in real time by combining supervised models with unsupervised anomaly detection and real-time rules."
    }
  ];

  // many paragraphs to reach required lines
  const deepDiveParagraphs = [
    "Feature parity across training and serving is essential. Use the same code paths, serialization formats, and transformations to avoid 'training-serving skew'.",
    "Establish reproducible pipelines: infrastructure as code, containerized training jobs, deterministic randomness seeds, and artifact tracking in a registry.",
    "Understand bias and fairness in predictive systems. Evaluate model outcomes across cohorts and make mitigation plans if disparities appear.",
    "Implement robust validation: out-of-time tests, backtesting against historical periods, and uplift experiments to isolate causal impact.",
    "Leverage explainability: SHAP values, partial dependence plots, and plain-language feature attributions make model outputs actionable for product teams.",
    "Data contracts between teams prevent silent changes. Use schema validation, alerting, and staged rollouts when upstream sources change.",
    "Drift detection requires both statistical tests and business-aware checks (e.g., a sudden seasonality shift due to external events).",
    "Ensure traceability: link predictions to model versions, input features, and the codes used to generate predictions for audits and investigations.",
    "Experimentation: use holdout groups, canary experiments, and A/B tests to measure end-to-end business impact, not just model metrics.",
    "Operational cost matters: choose between low-latency serving and batch scoring depending on use-case and cost constraints."
  ];

  // helper renderers to keep file long and structured
  const renderPipeline = () => (
    <div className="space-y-6">
      {pipelineSteps.map((s, idx) => (
        <motion.div key={idx} initial={{ opacity: 0, x: -20 }} animate={{ opacity: 1, x: 0 }} transition={{ delay: idx * 0.06 }} className="p-6 lg:p-8 rounded-xl bg-slate-900/20 border border-slate-800">
          <h4 className="font-semibold text-lg lg:text-xl">{s.title}</h4>
          <p className="text-sm lg:text-base text-slate-300 mt-2">{s.body}</p>
        </motion.div>
      ))}
    </div>
  );

  const renderUseCases = () => (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8">
      {useCases.map((uc, idx) => (
        <motion.div key={uc.key} whileHover={{ translateY: -6 }} className="p-6 lg:p-8 rounded-2xl border border-slate-800 bg-slate-900/20">
          <h4 className="font-semibold text-lg lg:text-xl">{uc.title}</h4>
          <p className="text-sm lg:text-base text-slate-300 mt-2">{uc.description}</p>
          <div className="mt-4">
            <Pill>Industry fit</Pill>
          </div>
        </motion.div>
      ))}
    </div>
  );

  // long mock code snippet for reproducible pipeline
  const pipelineCode = `# Example pseudo-pipeline (Python)
def prepare_features(events):
    # rolling windows
    features = {}
    features['last_7_day_count'] = events.rolling(window=7).sum()
    features['mean_30'] = events.rolling(window=30).mean()
    return features

def train_model(X, y):
    model = xgboost.XGBRegressor(n_estimators=100, max_depth=6)
    model.fit(X, y)
    return model

def serve_prediction(model, payload):
    features = prepare_features(payload['events'])
    return model.predict(features)`;

  // many small subcomponents to inflate lines while remaining useful
  const ModelSelector = () => (
    <div className="flex flex-col sm:flex-row gap-4 items-start sm:items-center">
      <label className="text-sm lg:text-base text-slate-300">Model:</label>
      <select value={selectedModel} onChange={(e) => setSelectedModel(e.target.value)} className="bg-slate-800 rounded-md px-3 py-2 text-sm lg:text-base">
        <option value="xgboost">XGBoost</option>
        <option value="prophet">Prophet</option>
        <option value="lstm">LSTM</option>
        <option value="transformer">Transformer</option>
      </select>
      <div className="text-sm lg:text-base text-slate-300">Live metric: <span className="font-semibold text-white">{(liveMetric * 100).toFixed(1)}%</span></div>
    </div>
  );

  const MonitoringPanel = () => (
    <div className="rounded-2xl p-6 lg:p-8 bg-slate-900/20 border border-slate-800">
      <h5 className="font-semibold text-lg lg:text-xl">Monitoring snapshot</h5>
      <div className="mt-4 grid grid-cols-1 md:grid-cols-3 gap-4 lg:gap-6">
        <StatCard value="0.87" label="Model ROC-AUC" />
        <StatCard value="MAPE 6.2%" label="Forecast Error" />
        <StatCard value="99.9%" label="Uptime" />
      </div>
      <p className="text-sm lg:text-base text-slate-300 mt-4">Alerts: <span className="text-red-400">None</span></p>
    </div>
  );

  // long textual sections to fill lines as requested
  return (
    <div className="min-h-screen w-full relative bg-gradient-to-b from-purple-900 to-black text-slate-100">
      <div className="absolute inset-0 -z-10 bg-gradient-to-br from-purple-950 to-black opacity-40" />

      <main className="w-full px-4 sm:px-6 lg:px-8 xl:px-12 2xl:px-16 py-16">
        <SectionHeader
          title="Predictive Analysis — Anticipate What Comes Next"
          subtitle="From data ingestion to productionized models: a practical, operational guide for teams."
        />

        {/* Intro paragraphs */}
        <section className="mb-10 lg:mb-16">
          {introParagraphs.map((p, i) => (
            <motion.p key={i} initial={{ opacity: 0, x: -10 }} animate={{ opacity: 1, x: 0 }} transition={{ delay: i * 0.06 }} className="mb-4 text-lg lg:text-xl xl:text-2xl text-slate-300 max-w-none">
              {p}
            </motion.p>
          ))}
        </section>

        {/* Overview grid */}
        <section className="mb-12 lg:mb-20 grid grid-cols-1 xl:grid-cols-3 gap-8 lg:gap-12 items-start">
          <div className="xl:col-span-2 space-y-6 lg:space-y-8">
            <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 0.6 }} className="p-6 lg:p-8 rounded-2xl bg-slate-900/20 border border-slate-800">
              <h3 className="text-xl lg:text-2xl xl:text-3xl font-semibold">Pipeline overview</h3>
              <p className="text-sm lg:text-base xl:text-lg text-slate-300 mt-2">
                Build a robust pipeline that ingests, transforms, models, deploys, and monitors. Each phase requires automation and telemetry so teams can move quickly without sacrificing reliability.
              </p>

              <div className="mt-4 lg:mt-6">{renderPipeline()}</div>
            </motion.div>

            <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.12 }} className="p-6 lg:p-8 rounded-2xl bg-slate-900/20 border border-slate-800">
              <h3 className="text-xl lg:text-2xl xl:text-3xl font-semibold">Model selection & trade-offs</h3>
              <p className="text-sm lg:text-base xl:text-lg text-slate-300 mt-2">
                The right model balances accuracy, interpretability, latency and operational cost. Tree-based models are fast to train and interpret; deep models may capture complex patterns but need more infra.
              </p>
              <div className="mt-4 lg:mt-6">
                <ModelSelector />
              </div>
            </motion.div>
          </div>

          <aside className="space-y-6 lg:space-y-8">
            <MonitoringPanel />
            <Diagram src="https://via.placeholder.com/800x400?text=Architecture+Diagram" caption="Typical predictive architecture: ingestion → feature store → model training → serving" />
          </aside>
        </section>

        {/* Use cases deep dive */}
        <section className="mb-12 lg:mb-20">
          <h3 className="text-2xl lg:text-3xl xl:text-4xl font-bold mb-4 lg:mb-8">Use cases & industry examples</h3>
          <div className="space-y-6 lg:space-y-8">
            {useCases.map((uc, idx) => (
              <motion.div key={uc.key} initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: idx * 0.06 }} className="p-6 lg:p-8 rounded-2xl bg-slate-900/20 border border-slate-800">
                <h4 className="font-semibold text-lg lg:text-xl xl:text-2xl">{uc.title}</h4>
                <p className="text-sm lg:text-base xl:text-lg text-slate-300 mt-2">{uc.description}</p>

                <div className="mt-4 lg:mt-6 grid grid-cols-1 md:grid-cols-3 gap-4 lg:gap-6">
                  <div className="p-4 lg:p-6 rounded-lg bg-slate-800/30 border border-slate-700">
                    <strong className="block text-base lg:text-lg">Inputs</strong>
                    <div className="text-sm lg:text-base text-slate-300 mt-2">Orders, sessions, promotions, pricing</div>
                  </div>
                  <div className="p-4 lg:p-6 rounded-lg bg-slate-800/30 border border-slate-700">
                    <strong className="block text-base lg:text-lg">Models</strong>
                    <div className="text-sm lg:text-base text-slate-300 mt-2">XGBoost, Prophet, LSTM</div>
                  </div>
                  <div className="p-4 lg:p-6 rounded-lg bg-slate-800/30 border border-slate-700">
                    <strong className="block text-base lg:text-lg">Outcomes</strong>
                    <div className="text-sm lg:text-base text-slate-300 mt-2">Forecasts, inventory alerts, replenishment orders</div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </section>

        {/* Deep dive paragraphs */}
        <section className="mb-12 lg:mb-20">
          <h3 className="text-2xl lg:text-3xl xl:text-4xl font-bold mb-4 lg:mb-8">Operational best practices</h3>
          <div className="space-y-6 lg:space-y-8">
            {deepDiveParagraphs.map((p, idx) => (
              <motion.p key={idx} initial={{ opacity: 0, x: -12 }} animate={{ opacity: 1, x: 0 }} transition={{ delay: idx * 0.05 }} className="text-slate-300 text-base lg:text-lg xl:text-xl">
                {p}
              </motion.p>
            ))}
          </div>
        </section>

        {/* Example code & table */}
        <section className="mb-12 lg:mb-20">
          <h3 className="text-2xl lg:text-3xl xl:text-4xl font-bold mb-4 lg:mb-8">Example pipeline code (pseudo)</h3>
          <CodeBlock>{pipelineCode}</CodeBlock>

          <div className="mt-6 lg:mt-8">
            <h4 className="font-semibold mb-2 text-lg lg:text-xl">Sample evaluation table</h4>
            <div className="overflow-auto rounded-lg border border-slate-800">
              <table className="min-w-full text-left">
                <thead className="bg-slate-900/30">
                  <tr>
                    <th className="p-3 lg:p-4 text-sm lg:text-base">Model</th>
                    <th className="p-3 lg:p-4 text-sm lg:text-base">Metric</th>
                    <th className="p-3 lg:p-4 text-sm lg:text-base">Latency</th>
                    <th className="p-3 lg:p-4 text-sm lg:text-base">Cost</th>
                  </tr>
                </thead>
                <tbody>
                  <tr className="border-t border-slate-800">
                    <td className="p-3 lg:p-4 text-sm lg:text-base">XGBoost</td>
                    <td className="p-3 lg:p-4 text-sm lg:text-base">AUC 0.87</td>
                    <td className="p-3 lg:p-4 text-sm lg:text-base">10 ms</td>
                    <td className="p-3 lg:p-4 text-sm lg:text-base">Low</td>
                  </tr>
                  <tr className="border-t border-slate-800">
                    <td className="p-3 lg:p-4 text-sm lg:text-base">Prophet</td>
                    <td className="p-3 lg:p-4 text-sm lg:text-base">MAPE 5.4%</td>
                    <td className="p-3 lg:p-4 text-sm lg:text-base">Batch</td>
                    <td className="p-3 lg:p-4 text-sm lg:text-base">Low</td>
                  </tr>
                  <tr className="border-t border-slate-800">
                    <td className="p-3 lg:p-4 text-sm lg:text-base">LSTM</td>
                    <td className="p-3 lg:p-4 text-sm lg:text-base">RMSE 12.4</td>
                    <td className="p-3 lg:p-4 text-sm lg:text-base">50 ms</td>
                    <td className="p-3 lg:p-4 text-sm lg:text-base">Medium</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </section>

        {/* Monitoring & retraining */}
        <section className="mb-12 lg:mb-20">
          <h3 className="text-2xl lg:text-3xl xl:text-4xl font-bold mb-4 lg:mb-8">Monitoring, alerts & retraining</h3>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 lg:gap-8">
            <div className="p-6 lg:p-8 rounded-2xl bg-slate-900/20 border border-slate-800">
              <h4 className="font-semibold text-lg lg:text-xl">Why monitoring matters</h4>
              <p className="text-sm lg:text-base text-slate-300 mt-2">
                Models degrade over time. Monitoring ensures you detect performance drops early and avoid business impact. Combine model-level metrics and business KPIs for observability.
              </p>
              <ul className="mt-4 text-sm lg:text-base text-slate-300 list-disc list-inside space-y-1">
                <li>Feature distribution drift</li>
                <li>Label shift and feedback delays</li>
                <li>Latency and throughput</li>
              </ul>
            </div>

            <div className="p-6 lg:p-8 rounded-2xl bg-slate-900/20 border border-slate-800">
              <h4 className="font-semibold text-lg lg:text-xl">Retraining strategies</h4>
              <p className="text-sm lg:text-base text-slate-300 mt-2">
                Define retraining cadence: scheduled (weekly/monthly), triggered (drift threshold), and incremental updates. Maintain a canary step for new models and shadow traffic to validate behavior.
              </p>
            </div>
          </div>
        </section>

        {/* Governance & fairness */}
        <section className="mb-12 lg:mb-20">
          <h3 className="text-2xl lg:text-3xl xl:text-4xl font-bold mb-4 lg:mb-8">Governance, explainability & fairness</h3>
          <div className="space-y-4 lg:space-y-6 text-sm lg:text-base xl:text-lg text-slate-300">
            <p>
              Explainable models reduce friction with stakeholders. Use SHAP to show feature contributions and provide plain-language explanations for high-impact predictions.
            </p>
            <p>
              Fairness checks across cohorts prevent bias. Run counterfactual tests and deploy mitigation steps (re-weighting, constrained optimization) when needed.
            </p>
          </div>
        </section>

        {/* Design & UX */}
        <section className="mb-12 lg:mb-20">
          <h3 className="text-2xl lg:text-3xl xl:text-4xl font-bold mb-4 lg:mb-8">Design & UX for predictive features</h3>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 lg:gap-8">
            <div className="p-6 lg:p-8 rounded-2xl bg-slate-900/20 border border-slate-800">
              <h4 className="font-semibold text-lg lg:text-xl">Explainability UI</h4>
              <p className="text-sm lg:text-base text-slate-300 mt-2">Show predicted value, confidence interval, and top contributing features with short explanations for end-users and analysts.</p>
            </div>
            <div className="p-6 lg:p-8 rounded-2xl bg-slate-900/20 border border-slate-800">
              <h4 className="font-semibold text-lg lg:text-xl">Actionable alerts</h4>
              <p className="text-sm lg:text-base text-slate-300 mt-2">Design alerts that include suggested actions and context to reduce triage time for operators.</p>
            </div>
          </div>
        </section>

        {/* Integration and APIs */}
        <section className="mb-12 lg:mb-20">
          <h3 className="text-2xl lg:text-3xl xl:text-4xl font-bold mb-4 lg:mb-8">Integration & APIs</h3>
          <p className="text-sm lg:text-base xl:text-lg text-slate-300">
            Expose predictions via REST or gRPC APIs, with versioning and auth. Provide SDKs for common languages and event-based outputs for streaming consumers.
          </p>

          <div className="mt-4 lg:mt-6">
            <h4 className="font-semibold mb-2 text-lg lg:text-xl">Example API contract</h4>
            <CodeBlock>{`POST /v1/predict
{
  "model": "xgboost-v2",
  "features": { "sku": "...", "last_7": 12, "price": 499 }
}

Response:
{
  "prediction": 23.4,
  "confidence": 0.92,
  "model_version": "xgboost-v2"
}`}</CodeBlock>
          </div>
        </section>

        {/* Checklist & next steps */}
        <section className="mb-12 lg:mb-20">
          <h3 className="text-2xl lg:text-3xl xl:text-4xl font-bold mb-4 lg:mb-8">Checklist before production</h3>
          <ol className="list-decimal list-inside space-y-3 lg:space-y-4 text-sm lg:text-base xl:text-lg text-slate-300">
            <li>Automated testing for feature pipelines and model behavior</li>
            <li>Data quality checks and schema validation on ingestion</li>
            <li>Versioned models and deployment playbooks</li>
            <li>Monitoring dashboards and alert thresholds</li>
            <li>Privacy and compliance review</li>
            <li>Rollout plan with canary/shadow stages</li>
          </ol>
        </section>

        {/* Long concluding content to reach size */}
        <section className="mb-20 lg:mb-32">
          <h3 className="text-2xl lg:text-3xl xl:text-4xl font-bold mb-4 lg:mb-8">Concluding thoughts</h3>

          <div className="space-y-6 lg:space-y-8 text-slate-300">
            <p className="text-base lg:text-lg xl:text-xl">
              Predictive analytics is not just a technical exercise — it is an organizational capability that requires collaboration between data engineers, data scientists, product managers, and domain experts. Success comes from aligning on clear KPIs, investing in data quality, and operationalizing the feedback loop between model predictions and business outcomes.
            </p>

            <p className="text-base lg:text-lg xl:text-xl">
              Start small with high-impact pilots, validate hypotheses with experiments, and slowly expand the scope. A culture that values metrics, reproducibility, and continuous improvement will extract the most value from predictive investments.
            </p>

            <p className="text-base lg:text-lg xl:text-xl">
              Use automation for repetitive parts of the pipeline — feature computation, training orchestration, and deployment — so human experts can focus on domain-driven improvements and interpreting model outputs for strategic decisions.
            </p>

            <p className="text-base lg:text-lg xl:text-xl">
              Ensure transparency and accountability. Provide stakeholders with accessible explanations and the ability to trace predictions back to data and model versions. This promotes trust and enables faster adoption of predictive features.
            </p>

            <p className="text-base lg:text-lg xl:text-xl">
              Finally, measure end-to-end impact. The true success metric for predictive systems is not only model accuracy but the downstream business lift: fewer stockouts, lower churn, reduced downtime, or improved revenue. Focus on those outcomes.
            </p>
          </div>
        </section>

        {/* CTA */}
        <section className="mb-12 lg:mb-20">
          <div className="rounded-2xl p-8 lg:p-12 bg-gradient-to-tr from-slate-900/20 to-transparent border border-slate-800 flex flex-col lg:flex-row items-center justify-between gap-6 lg:gap-8">
            <div>
              <h4 className="text-xl lg:text-2xl xl:text-3xl font-semibold">Ready to build predictive capabilities?</h4>
              <p className="text-sm lg:text-base xl:text-lg text-slate-300 mt-2">We help teams prototype fast and move to production with robust tooling and governance.</p>
            </div>
            <div className="flex flex-col sm:flex-row gap-4">
              <motion.button whileHover={{ scale: 1.02 }} className="bg-purple-600 px-6 py-3 lg:px-8 lg:py-4 rounded-lg font-semibold text-black text-sm lg:text-base" onClick={() => alert("Demo requested (placeholder)")}>Request a Demo</motion.button>
              <a className="text-sm lg:text-base text-slate-300 self-center" href="#contact">Contact Sales</a>
            </div>
          </div>
        </section>

        <footer className="text-center text-sm lg:text-base text-slate-500 pb-12">
          © {new Date().getFullYear()} Your Company — Predictive Analysis & MLops
        </footer>
      </main>
    </div>
  );
}
