import { Calendar, Phone, ShieldCheck, CreditCard, MessageCircle, BarChart } from 'lucide-react';

const services = [
  {
    icon: Phone,
    title: 'AI Receptionist',
    desc: 'Answering, triage, and intelligent handoff with natural, compliant voice.'
  },
  {
    icon: Calendar,
    title: 'Appointment & Recall',
    desc: 'Smart booking, rescheduling, and 6-month hygiene recalls.'
  },
  {
    icon: ShieldCheck,
    title: 'Insurance Verification',
    desc: 'Eligibility checks and pre-auth support before visits.'
  },
  {
    icon: CreditCard,
    title: 'Payment & Claims',
    desc: 'Secure payment links and claim assistance with status updates.'
  },
  {
    icon: MessageCircle,
    title: 'Lead Follow-up',
    desc: 'Convert ad leads and revive inactive patients automatically.'
  },
  {
    icon: BarChart,
    title: 'Dashboard & Analytics',
    desc: 'Live KPIs, utilization, and campaign ROI in one view.'
  }
];

export default function Services() {
  return (
    <section id="services" className="mx-auto max-w-7xl px-4 py-16 md:py-24">
      <div className="mx-auto max-w-2xl text-center">
        <h2 className="text-2xl font-semibold md:text-4xl">Services</h2>
        <p className="mt-3 text-black/70 md:text-lg">
          Velodent’s AI automation suite, delivered with an enterprise-grade experience.
        </p>
      </div>
      <div className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {services.map(({ icon: Icon, title, desc }) => (
          <div
            key={title}
            className="group rounded-2xl border border-black/10 p-6 transition hover:shadow-[0_8px_30px_rgba(0,0,0,0.06)]"
          >
            <div className="flex items-center gap-3">
              <div className="flex h-11 w-11 items-center justify-center rounded-lg border border-black/10 bg-white transition group-hover:scale-105">
                <Icon className="h-5 w-5" />
              </div>
              <h3 className="text-lg font-medium">{title}</h3>
            </div>
            <p className="mt-3 text-sm text-black/70">{desc}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
