import { useMemo, useState } from "react";
import {
  BadgeCheck,
  Building2,
  CheckCircle2,
  ClipboardList,
  FileSearch,
  Handshake,
  MessageCircle,
  ShieldCheck,
  Users
} from "lucide-react";

type Service = {
  title: string;
  description: string;
  cta: string;
  icon: React.ComponentType<React.SVGProps<SVGSVGElement>>;
};

type Step = {
  step: string;
  title: string;
  description: string;
};

type TrustPoint = {
  title: string;
  description: string;
  icon: React.ComponentType<React.SVGProps<SVGSVGElement>>;
};

type ComparisonRow = {
  feature: string;
  coverdesk: string;
  traditional: string;
};

const services: Service[] = [
  {
    title: "Personal Insurance",
    description:
      "Health, life, motor, and property coverage aligned with your real risks and life stage.",
    cta: "Explore Personal Plans",
    icon: ShieldCheck
  },
  {
    title: "Business Insurance",
    description:
      "Protect revenue, assets, and liability with coverage designed around your operations.",
    cta: "Talk to a Business Advisor",
    icon: Building2
  },
  {
    title: "Employee Benefit Insurance",
    description:
      "Group health, life, and wellness plans that improve retention and employee confidence.",
    cta: "Design Employee Benefits",
    icon: Users
  }
];

const steps: Step[] = [
  {
    step: "01",
    title: "Identify the Risk",
    description: "We map exposure across people, operations, assets, and regulatory needs."
  },
  {
    step: "02",
    title: "Review & Design Coverage",
    description: "We build options with clear trade-offs, exclusions, and cost visibility."
  },
  {
    step: "03",
    title: "Underwriting & Placement",
    description: "We coordinate with carriers, negotiate terms, and finalize placement."
  },
  {
    step: "04",
    title: "Claim Assistance",
    description: "We guide documentation, escalation, and settlement end-to-end."
  }
];

const trustPoints: TrustPoint[] = [
  {
    title: "Knowledge first",
    description: "We advise based on data and risk, not sales targets.",
    icon: BadgeCheck
  },
  {
    title: "No surprises",
    description: "Transparent quotes, clear terms, and full disclosure at every step.",
    icon: FileSearch
  },
  {
    title: "Claim support till settlement",
    description: "We stay involved until your claim is resolved.",
    icon: Handshake
  }
];

const comparisonRows: ComparisonRow[] = [
  {
    feature: "Advisory model",
    coverdesk: "Advisor-led",
    traditional: "Agent-led"
  },
  {
    feature: "Quote transparency",
    coverdesk: "Clear & documented",
    traditional: "Often hidden terms"
  },
  {
    feature: "Claim support",
    coverdesk: "End-to-end assistance",
    traditional: "Limited post-sale"
  }
];

const navItems = ["Home", "Services", "Insurance Products", "About", "Contact"];

export default function App() {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const statItems = useMemo(
    () => [
      { label: "Advisory-first approach", value: "100%" },
      { label: "Transparent quotes", value: "Always" },
      { label: "Claim support", value: "End-to-end" }
    ],
    []
  );

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setIsSubmitting(true);
    setTimeout(() => setIsSubmitting(false), 1000);
  };

  return (
    <div className="min-h-screen bg-slate-50 text-slate-900">
      <Header navItems={navItems} />

      <main>
        <Hero statItems={statItems} />
        <ServicesOverview />
        <HowItWorks />
        <TrustSection />
        <ComparisonSection />
        <LeadCapture isSubmitting={isSubmitting} onSubmit={handleSubmit} />
      </main>

      <Footer />
    </div>
  );
}

function Header({ navItems }: { navItems: string[] }) {
  return (
    <header className="sticky top-0 z-50 border-b border-slate-200 bg-white/90 backdrop-blur">
      <div className="mx-auto flex max-w-6xl items-center justify-between px-4 py-4 md:px-6">
        <div className="flex items-center gap-3">
          <div className="flex h-10 w-10 items-center justify-center rounded-full bg-blue-600 text-white">
            <ClipboardList className="h-5 w-5" aria-hidden="true" />
          </div>
          <span className="text-sm font-semibold uppercase tracking-[0.2em] text-slate-900">
            Coverdesk
          </span>
        </div>
        <nav className="hidden items-center gap-6 text-sm text-slate-600 lg:flex" aria-label="Primary">
          {navItems.map((item) => (
            <a
              key={item}
              href={`#${item.toLowerCase().replace(/\s+/g, "-")}`}
              className="transition-colors hover:text-slate-900"
            >
              {item}
            </a>
          ))}
        </nav>
        <PrimaryButton>Get Expert Advice (Free)</PrimaryButton>
      </div>
    </header>
  );
}

function Hero({ statItems }: { statItems: { label: string; value: string }[] }) {
  return (
    <section id="home" className="px-4 py-16 md:px-6 md:py-24">
      <div className="mx-auto grid max-w-6xl gap-12 lg:grid-cols-[1.1fr_0.9fr]">
        <div>
          <p className="text-sm font-semibold text-blue-700">Insurance guidance, not sales</p>
          <h1 className="mt-4 text-4xl font-semibold leading-tight md:text-5xl">
            Make confident insurance decisions with expert-led guidance
          </h1>
          <p className="mt-5 text-base text-slate-600 md:text-lg">
            Coverdesk puts knowledge first—clear explanations, transparent quotes, and claim support until settlement.
          </p>
          <div className="mt-8 flex flex-wrap gap-3">
            <PrimaryButton>Get Free Expert Advice</PrimaryButton>
            <SecondaryButton icon={MessageCircle}>WhatsApp Us</SecondaryButton>
          </div>
        </div>
        <div className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">
          <div className="grid gap-4">
            {statItems.map((item) => (
              <div key={item.label} className="rounded-2xl border border-slate-200 bg-slate-50 p-4">
                <p className="text-lg font-semibold text-slate-900">{item.value}</p>
                <p className="text-xs uppercase tracking-[0.2em] text-slate-500">{item.label}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

function ServicesOverview() {
  return (
    <section id="services" className="px-4 py-16 md:px-6 md:py-24">
      <SectionHeader
        title="Services tailored to real-world risks"
        subtitle="Choose the coverage that matches your personal or business needs."
      />
      <div className="mx-auto mt-10 grid max-w-6xl gap-6 md:grid-cols-3">
        {services.map((service) => (
          <ServiceCard key={service.title} service={service} />
        ))}
      </div>
    </section>
  );
}

function ServiceCard({ service }: { service: Service }) {
  const Icon = service.icon;
  return (
    <div className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm transition-shadow duration-200 hover:shadow-md">
      <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-blue-50 text-blue-700">
        <Icon className="h-5 w-5" aria-hidden="true" />
      </div>
      <h3 className="mt-5 text-lg font-semibold text-slate-900">{service.title}</h3>
      <p className="mt-3 text-sm text-slate-600">{service.description}</p>
      <button className="mt-6 inline-flex items-center gap-2 text-sm font-semibold text-blue-700 transition-colors duration-200 hover:text-blue-800 cursor-pointer">
        {service.cta}
      </button>
    </div>
  );
}

function HowItWorks() {
  return (
    <section id="insurance-products" className="bg-white px-4 py-16 md:px-6 md:py-24">
      <SectionHeader
        title="How Coverdesk Works"
        subtitle="A clear, step-by-step process built for transparency."
      />
      <div className="mx-auto mt-10 grid max-w-6xl gap-6 md:grid-cols-4">
        {steps.map((step) => (
          <div key={step.step} className="rounded-2xl border border-slate-200 bg-slate-50 p-6">
            <p className="text-sm font-semibold text-blue-700">{step.step}</p>
            <h3 className="mt-3 text-lg font-semibold text-slate-900">{step.title}</h3>
            <p className="mt-3 text-sm text-slate-600">{step.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
}

function TrustSection() {
  return (
    <section id="about" className="px-4 py-16 md:px-6 md:py-24">
      <SectionHeader
        title="Why People Trust Coverdesk"
        subtitle="Built on clarity, accountability, and advocacy."
      />
      <div className="mx-auto mt-10 grid max-w-6xl gap-6 md:grid-cols-3">
        {trustPoints.map((point) => {
          const Icon = point.icon;
          return (
            <div key={point.title} className="rounded-2xl border border-slate-200 bg-white p-6">
              <Icon className="h-6 w-6 text-emerald-600" aria-hidden="true" />
              <h3 className="mt-4 text-lg font-semibold text-slate-900">{point.title}</h3>
              <p className="mt-2 text-sm text-slate-600">{point.description}</p>
            </div>
          );
        })}
      </div>
    </section>
  );
}

function ComparisonSection() {
  return (
    <section className="bg-white px-4 py-16 md:px-6 md:py-24">
      <SectionHeader
        title="Coverdesk vs Traditional Insurance Buying"
        subtitle="Clarity and advocacy without hidden terms."
      />
      <div className="mx-auto mt-10 max-w-6xl overflow-hidden rounded-2xl border border-slate-200 bg-white">
        <table className="w-full text-left text-sm">
          <thead className="bg-slate-50 text-slate-700">
            <tr>
              <th className="px-6 py-4 font-semibold">Feature</th>
              <th className="px-6 py-4 font-semibold">Coverdesk</th>
              <th className="px-6 py-4 font-semibold">Traditional</th>
            </tr>
          </thead>
          <tbody>
            {comparisonRows.map((row) => (
              <tr key={row.feature} className="border-t border-slate-200">
                <td className="px-6 py-4 text-slate-700">{row.feature}</td>
                <td className="px-6 py-4 text-slate-700">{row.coverdesk}</td>
                <td className="px-6 py-4 text-slate-700">{row.traditional}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </section>
  );
}

function LeadCapture({
  isSubmitting,
  onSubmit
}: {
  isSubmitting: boolean;
  onSubmit: (event: React.FormEvent<HTMLFormElement>) => void;
}) {
  return (
    <section id="contact" className="px-4 py-16 md:px-6 md:py-24">
      <div className="mx-auto grid max-w-6xl gap-10 rounded-2xl border border-slate-200 bg-white p-8 md:grid-cols-[1.1fr_0.9fr]">
        <div>
          <h2 className="text-2xl font-semibold text-slate-900">Get advice with zero pressure</h2>
          <p className="mt-3 text-sm text-slate-600">
            No spam. No aggressive sales. Just expert guidance.
          </p>
          <div className="mt-6 flex items-center gap-3 text-sm text-slate-600">
            <PhoneCall className="h-4 w-4 text-blue-700" aria-hidden="true" />
            <span>Talk directly with a licensed advisor</span>
          </div>
        </div>
        <form className="grid gap-4" aria-label="Lead capture" onSubmit={onSubmit}>
          <label className="text-sm font-medium text-slate-700" htmlFor="name">
            Name
          </label>
          <input
            id="name"
            name="name"
            className="w-full rounded-lg border border-slate-200 px-4 py-3 text-sm"
            placeholder="Your name"
            required
          />
          <label className="text-sm font-medium text-slate-700" htmlFor="phone">
            Phone
          </label>
          <input
            id="phone"
            name="phone"
            className="w-full rounded-lg border border-slate-200 px-4 py-3 text-sm"
            placeholder="Phone number"
            required
          />
          <label className="text-sm font-medium text-slate-700" htmlFor="insuranceType">
            Insurance Type
          </label>
          <select
            id="insuranceType"
            name="insuranceType"
            className="w-full rounded-lg border border-slate-200 px-4 py-3 text-sm"
            required
          >
            <option value="">Select a category</option>
            <option>Personal Insurance</option>
            <option>Business Insurance</option>
            <option>Employee Benefit Insurance</option>
          </select>
          <PrimaryButton type="submit" disabled={isSubmitting} isLoading={isSubmitting}>
            {isSubmitting ? "Submitting..." : "Request Callback"}
          </PrimaryButton>
          <p className="text-xs text-slate-500">We will never share your information.</p>
        </form>
      </div>
    </section>
  );
}

function Footer() {
  return (
    <footer className="border-t border-slate-200 bg-white px-4 py-12 md:px-6">
      <div className="mx-auto grid max-w-6xl gap-6 text-sm text-slate-600 md:grid-cols-3">
        <div>
          <p className="font-semibold text-slate-900">Offices</p>
          <p>Bangalore</p>
          <p>Jaipur</p>
          <p>Nagpur</p>
        </div>
        <div>
          <p className="font-semibold text-slate-900">Contact</p>
          <p>support@coverdesk.in</p>
          <p>+91 88602 20066</p>
        </div>
        <div>
          <p className="font-semibold text-slate-900">Disclaimer</p>
          <p>
            Coverdesk provides advisory support. Final coverage depends on insurer underwriting and policy terms.
          </p>
        </div>
      </div>
    </footer>
  );
}

function SectionHeader({ title, subtitle }: { title: string; subtitle: string }) {
  return (
    <div className="mx-auto max-w-6xl">
      <h2 className="text-3xl font-semibold tracking-tight text-slate-900 md:text-4xl">{title}</h2>
      <p className="mt-3 text-base text-slate-600 md:text-lg">{subtitle}</p>
    </div>
  );
}

function PrimaryButton({
  children,
  type = "button",
  disabled = false,
  isLoading = false
}: {
  children: React.ReactNode;
  type?: "button" | "submit" | "reset";
  disabled?: boolean;
  isLoading?: boolean;
}) {
  return (
    <button
      type={type}
      disabled={disabled}
      className="inline-flex items-center justify-center gap-2 rounded-full bg-blue-600 px-5 py-2.5 text-sm font-semibold text-white transition-colors duration-200 hover:bg-blue-700 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-blue-300 disabled:cursor-not-allowed disabled:opacity-60 cursor-pointer"
    >
      {isLoading ? <span className="h-4 w-4 animate-spin rounded-full border-2 border-white/40 border-t-white" /> : null}
      {children}
    </button>
  );
}

function SecondaryButton({
  children,
  icon: Icon
}: {
  children: React.ReactNode;
  icon?: React.ComponentType<React.SVGProps<SVGSVGElement>>;
}) {
  return (
    <button className="inline-flex items-center justify-center gap-2 rounded-full border border-slate-300 px-5 py-2.5 text-sm font-semibold text-slate-700 transition-colors duration-200 hover:border-slate-400 hover:text-slate-900 cursor-pointer">
      {Icon ? <Icon className="h-4 w-4" aria-hidden="true" /> : null}
      {children}
    </button>
  );
}
