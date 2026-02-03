import { useEffect, useState } from "react";
import {
  ArrowRight,
  BarChart3,
  Headphones,
  Layers,
  ShieldCheck,
  Sparkles,
  Users
} from "lucide-react";

const fallbackContent = {
  brand: {
    name: "CoverDesk",
    tagline: "Premium customer support and back-office teams for growing businesses",
    description:
      "CoverDesk builds dedicated remote teams that operate like an extension of your business. We help founders and operations leaders scale customer support, back-office operations, and growth initiatives with reliable, trained professionals.",
    email: "hello@coverdesk.in",
    phone: "+91 88602 20066",
    address: "Global delivery with leadership in India and the United States."
  },
  nav: [
    "Solutions",
    "Why CoverDesk",
    "Process",
    "Industries",
    "Testimonials",
    "FAQs"
  ],
  hero: {
    eyebrow: "Remote teams, ready to scale",
    title: "Build your support desk in weeks, not months",
    subtitle:
      "Hire and manage dedicated support agents, operations assistants, and customer experience teams that run 24/7. We handle sourcing, training, and management so you can focus on growth.",
    ctaPrimary: "Book a discovery call",
    ctaSecondary: "See how it works"
  },
  stats: [
    { label: "Average time to launch", value: "21 days" },
    { label: "Client satisfaction", value: "98%" },
    { label: "Hours covered monthly", value: "100K+" },
    { label: "Retention rate", value: "92%" }
  ],
  solutions: [
    {
      title: "Customer Support",
      description:
        "Email, chat, and voice support teams trained on your tools, tone, and workflows. Deliver fast responses and consistent experiences across every touchpoint."
    },
    {
      title: "Back-Office Operations",
      description:
        "Order processing, data entry, finance ops, and inventory coordination handled by reliable specialists that keep your business running smoothly."
    },
    {
      title: "Sales & Retention",
      description:
        "Outbound prospecting, lead qualification, and retention campaigns backed by a dedicated manager and performance reporting."
    }
  ],
  valueProps: [
    {
      title: "Dedicated teams only",
      description:
        "Your CoverDesk professionals work exclusively for you, with shared KPIs and direct communication."
    },
    {
      title: "Built-in leadership",
      description:
        "Every team comes with a success manager, QA lead, and ongoing training tailored to your SOPs."
    },
    {
      title: "Data-driven performance",
      description:
        "Weekly reports, QA scorecards, and insights to optimize response times, CSAT, and operational KPIs."
    }
  ],
  process: [
    {
      step: "01",
      title: "Discovery & planning",
      description:
        "We map your workflows, target KPIs, and ideal agent profile so we hire for culture and capability."
    },
    {
      step: "02",
      title: "Talent sourcing",
      description:
        "Our recruitment team pre-screens and shortlists candidates aligned to your tools and industry."
    },
    {
      step: "03",
      title: "Training & onboarding",
      description:
        "We build SOPs, run simulations, and certify agents before they go live with your customers."
    },
    {
      step: "04",
      title: "Launch & optimize",
      description:
        "Real-time reporting and QA ensure continuous improvement, productivity, and long-term retention."
    }
  ],
  industries: [
    "D2C & E-commerce",
    "SaaS & Technology",
    "Healthcare",
    "Logistics",
    "Travel & Hospitality",
    "Financial Services"
  ],
  testimonials: [
    {
      quote:
        "CoverDesk helped us launch a 24/7 support desk with consistent CSAT and a team that feels fully embedded in our business.",
      name: "Operations Director",
      company: "Global E-commerce Brand"
    },
    {
      quote:
        "The team onboarding and ongoing QA gave us confidence to scale fast without losing quality.",
      name: "Head of Customer Experience",
      company: "B2B SaaS"
    }
  ],
  faqs: [
    {
      question: "How quickly can we start?",
      answer:
        "Most teams go live within 3-4 weeks depending on role complexity and training needs."
    },
    {
      question: "Do we get dedicated agents?",
      answer:
        "Yes. CoverDesk provides fully dedicated team members who work only on your business."
    },
    {
      question: "What tools do you support?",
      answer:
        "We work with Zendesk, Freshdesk, Gorgias, Intercom, Shopify, HubSpot, Salesforce, and custom stacks."
    }
  ]
};

const iconMap = [Headphones, Layers, BarChart3];

export default function App() {
  const [content, setContent] = useState(fallbackContent);

  useEffect(() => {
    const loadContent = async () => {
      try {
        const response = await fetch("/api/content");
        if (!response.ok) {
          return;
        }
        const data = await response.json();
        setContent(data);
      } catch (error) {
        console.error("Unable to load API content", error);
      }
    };

    loadContent();
  }, []);

  return (
    <div className="min-h-screen bg-slate-950 text-white">
      <div className="relative overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,_rgba(30,109,255,0.35),_transparent_55%)]" />
        <div className="absolute -right-32 top-24 h-72 w-72 rounded-full bg-brand-500/30 blur-3xl" />
        <div className="absolute -left-24 top-80 h-80 w-80 rounded-full bg-cyan-400/20 blur-3xl" />

        <header className="relative z-10 px-6 py-6 md:px-12">
          <nav className="flex items-center justify-between rounded-full border border-white/10 bg-white/5 px-6 py-4 backdrop-blur">
            <div className="flex items-center gap-3">
              <div className="flex h-10 w-10 items-center justify-center rounded-full bg-brand-500 text-lg font-semibold">
                C
              </div>
              <div>
                <p className="text-sm font-semibold uppercase tracking-[0.2em] text-brand-100">
                  {content.brand.name}
                </p>
                <p className="text-xs text-slate-300">Dedicated support teams</p>
              </div>
            </div>
            <div className="hidden items-center gap-6 lg:flex">
              {content.nav.map((item) => (
                <a key={item} href={`#${item.toLowerCase().replace(/\s+/g, "-")}`} className="nav-link">
                  {item}
                </a>
              ))}
            </div>
            <button className="primary-button">Get started</button>
          </nav>
        </header>

        <section className="relative z-10 px-6 pb-20 pt-10 md:px-12 lg:pb-28">
          <div className="mx-auto grid max-w-6xl items-center gap-12 lg:grid-cols-[1.1fr_0.9fr]">
            <div>
              <p className="text-sm font-semibold uppercase tracking-[0.3em] text-brand-200">
                {content.hero.eyebrow}
              </p>
              <h1 className="mt-4 text-4xl font-semibold leading-tight text-white sm:text-5xl lg:text-6xl">
                {content.hero.title}
              </h1>
              <p className="mt-6 text-base text-slate-300 md:text-lg">
                {content.hero.subtitle}
              </p>
              <div className="mt-8 flex flex-wrap items-center gap-4">
                <button className="primary-button">
                  {content.hero.ctaPrimary}
                  <ArrowRight className="h-4 w-4" />
                </button>
                <button className="secondary-button">{content.hero.ctaSecondary}</button>
              </div>
              <div className="mt-10 grid gap-4 sm:grid-cols-2">
                {content.stats.map((stat) => (
                  <div key={stat.label} className="rounded-2xl border border-white/10 bg-white/5 p-4">
                    <p className="text-2xl font-semibold text-white">{stat.value}</p>
                    <p className="text-xs uppercase tracking-[0.2em] text-slate-400">
                      {stat.label}
                    </p>
                  </div>
                ))}
              </div>
            </div>
            <div className="glass-card space-y-6">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm text-brand-100">Trusted delivery</p>
                  <h2 className="text-2xl font-semibold">Operations command center</h2>
                </div>
                <div className="rounded-full border border-white/10 bg-white/10 p-3">
                  <Sparkles className="h-5 w-5 text-brand-200" />
                </div>
              </div>
              <p className="text-sm text-slate-300">
                Monitor response times, agent performance, and service-level agreements across every channel. Our
                leadership team keeps your workflows on track with proactive coaching and QA.
              </p>
              <div className="space-y-3">
                {[
                  { label: "Average response time", value: "< 5 min" },
                  { label: "QA score", value: "95%" },
                  { label: "Coverage", value: "24/7" }
                ].map((item) => (
                  <div key={item.label} className="flex items-center justify-between rounded-2xl bg-slate-900/60 p-3">
                    <p className="text-sm text-slate-200">{item.label}</p>
                    <p className="text-sm font-semibold text-brand-200">{item.value}</p>
                  </div>
                ))}
              </div>
              <div className="rounded-2xl border border-brand-400/40 bg-brand-500/10 p-4">
                <p className="text-sm text-slate-200">
                  "CoverDesk feels like an internal team, not a vendor. Their onboarding process is incredibly thorough."
                </p>
                <p className="mt-3 text-xs uppercase tracking-[0.2em] text-brand-100">
                  Customer Experience Lead
                </p>
              </div>
            </div>
          </div>
        </section>
      </div>

      <section id="solutions" className="px-6 py-16 md:px-12">
        <div className="mx-auto max-w-6xl">
          <div className="flex flex-col gap-4 md:flex-row md:items-end md:justify-between">
            <div>
              <p className="text-sm uppercase tracking-[0.3em] text-brand-200">Solutions</p>
              <h2 className="section-title">Teams built for your customer journey</h2>
            </div>
            <p className="section-subtitle md:max-w-lg">Scale every interaction with dedicated specialists aligned to your tools and culture.</p>
          </div>
          <div className="mt-10 grid gap-6 lg:grid-cols-3">
            {content.solutions.map((item, index) => {
              const Icon = iconMap[index % iconMap.length];
              return (
                <div key={item.title} className="glass-card">
                  <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-brand-500/10">
                    <Icon className="h-5 w-5 text-brand-200" />
                  </div>
                  <h3 className="mt-6 text-xl font-semibold">{item.title}</h3>
                  <p className="mt-3 text-sm text-slate-300">{item.description}</p>
                  <button className="mt-6 inline-flex items-center gap-2 text-sm font-semibold text-brand-200">
                    Learn more <ArrowRight className="h-4 w-4" />
                  </button>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      <section id="why-coverdesk" className="px-6 py-16 md:px-12">
        <div className="mx-auto grid max-w-6xl gap-10 lg:grid-cols-[0.9fr_1.1fr]">
          <div className="space-y-6">
            <p className="text-sm uppercase tracking-[0.3em] text-brand-200">Why CoverDesk</p>
            <h2 className="section-title">Operate like a global enterprise without the overhead</h2>
            <p className="section-subtitle">
              We build teams that integrate with your leadership and SOPs. Every engagement includes proactive management,
              workforce planning, and full visibility into performance.
            </p>
            <div className="space-y-4">
              {content.valueProps.map((item) => (
                <div key={item.title} className="flex gap-4 rounded-2xl border border-white/10 bg-white/5 p-4">
                  <ShieldCheck className="mt-1 h-5 w-5 text-brand-200" />
                  <div>
                    <p className="text-sm font-semibold text-white">{item.title}</p>
                    <p className="text-sm text-slate-300">{item.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
          <div className="grid gap-4">
            <div className="glass-card">
              <p className="text-sm text-slate-300">Leadership coverage</p>
              <p className="mt-4 text-4xl font-semibold">3 layers</p>
              <p className="mt-2 text-sm text-slate-400">QA lead, success manager, and client partner.</p>
            </div>
            <div className="grid gap-4 md:grid-cols-2">
              <div className="glass-card">
                <p className="text-sm text-slate-300">Dedicated seats</p>
                <p className="mt-4 text-3xl font-semibold">100%</p>
                <p className="mt-2 text-sm text-slate-400">Exclusive, no shared agents.</p>
              </div>
              <div className="glass-card">
                <p className="text-sm text-slate-300">Reporting cadence</p>
                <p className="mt-4 text-3xl font-semibold">Weekly</p>
                <p className="mt-2 text-sm text-slate-400">Performance, QA, and insights.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="process" className="px-6 py-16 md:px-12">
        <div className="mx-auto max-w-6xl">
          <div className="flex flex-col gap-4 md:flex-row md:items-end md:justify-between">
            <div>
              <p className="text-sm uppercase tracking-[0.3em] text-brand-200">Process</p>
              <h2 className="section-title">Launch your team in four focused steps</h2>
            </div>
            <p className="section-subtitle md:max-w-lg">
              We blend recruitment, training, and ongoing management for a seamless scale-up experience.
            </p>
          </div>
          <div className="mt-10 grid gap-6 lg:grid-cols-4">
            {content.process.map((item) => (
              <div key={item.title} className="glass-card">
                <p className="text-sm text-brand-200">{item.step}</p>
                <h3 className="mt-4 text-xl font-semibold">{item.title}</h3>
                <p className="mt-3 text-sm text-slate-300">{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="industries" className="px-6 py-16 md:px-12">
        <div className="mx-auto max-w-6xl">
          <div className="flex flex-col gap-4 md:flex-row md:items-end md:justify-between">
            <div>
              <p className="text-sm uppercase tracking-[0.3em] text-brand-200">Industries</p>
              <h2 className="section-title">Trusted by customer-centric teams</h2>
            </div>
            <p className="section-subtitle md:max-w-lg">We adapt quickly to the tools and compliance requirements of your industry.</p>
          </div>
          <div className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {content.industries.map((industry) => (
              <div key={industry} className="flex items-center justify-between rounded-2xl border border-white/10 bg-white/5 p-4">
                <p className="text-sm font-semibold text-white">{industry}</p>
                <Users className="h-4 w-4 text-brand-200" />
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="testimonials" className="px-6 py-16 md:px-12">
        <div className="mx-auto max-w-6xl">
          <div className="flex flex-col gap-4 md:flex-row md:items-end md:justify-between">
            <div>
              <p className="text-sm uppercase tracking-[0.3em] text-brand-200">Testimonials</p>
              <h2 className="section-title">Partnerships that feel in-house</h2>
            </div>
            <p className="section-subtitle md:max-w-lg">Teams stay longer, know your playbook, and continuously improve customer outcomes.</p>
          </div>
          <div className="mt-10 grid gap-6 lg:grid-cols-2">
            {content.testimonials.map((item) => (
              <div key={item.name} className="glass-card">
                <p className="text-sm text-slate-300">"{item.quote}"</p>
                <p className="mt-6 text-sm font-semibold text-white">{item.name}</p>
                <p className="text-xs uppercase tracking-[0.2em] text-slate-400">{item.company}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="faqs" className="px-6 py-16 md:px-12">
        <div className="mx-auto grid max-w-6xl gap-10 lg:grid-cols-[1.1fr_0.9fr]">
          <div>
            <p className="text-sm uppercase tracking-[0.3em] text-brand-200">FAQs</p>
            <h2 className="section-title">Everything you need to know</h2>
            <p className="section-subtitle mt-4">
              Transparent onboarding, dedicated teams, and measurable results. Ask us anything about coverage, reporting,
              or implementation.
            </p>
            <div className="mt-8 space-y-4">
              {content.faqs.map((item) => (
                <div key={item.question} className="rounded-2xl border border-white/10 bg-white/5 p-4">
                  <p className="text-sm font-semibold text-white">{item.question}</p>
                  <p className="mt-2 text-sm text-slate-300">{item.answer}</p>
                </div>
              ))}
            </div>
          </div>
          <div className="glass-card flex flex-col justify-between">
            <div>
              <p className="text-sm uppercase tracking-[0.3em] text-brand-200">Contact</p>
              <h3 className="mt-4 text-2xl font-semibold">Let’s build your team</h3>
              <p className="mt-4 text-sm text-slate-300">Share your requirements and we’ll design a tailored support plan.</p>
              <div className="mt-6 space-y-3 text-sm text-slate-300">
                <p>{content.brand.email}</p>
                <p>{content.brand.phone}</p>
                <p>{content.brand.address}</p>
              </div>
            </div>
            <button className="primary-button mt-8">
              Schedule a call
              <ArrowRight className="h-4 w-4" />
            </button>
          </div>
        </div>
      </section>

      <footer className="border-t border-white/10 px-6 py-10 md:px-12">
        <div className="mx-auto flex max-w-6xl flex-col gap-6 md:flex-row md:items-center md:justify-between">
          <div>
            <p className="text-sm font-semibold uppercase tracking-[0.2em] text-brand-100">{content.brand.name}</p>
            <p className="text-xs text-slate-400">{content.brand.tagline}</p>
          </div>
          <div className="flex flex-wrap items-center gap-4 text-xs text-slate-400">
            <span>© 2024 CoverDesk</span>
            <span>Privacy</span>
            <span>Terms</span>
          </div>
        </div>
      </footer>
    </div>
  );
}
